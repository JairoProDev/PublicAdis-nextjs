#!/usr/bin/env python3
"""
Product Image Processor for QUIVAL catalog

This script processes a CSV file containing product information and downloads
images from various sources, resizes, and optimizes them.

Requirements:
- Python 3.6+
- requests
- Pillow
- tqdm

Install with: pip install requests Pillow tqdm
"""

import os
import csv
import sys
import time
import json
import argparse
import requests
from pathlib import Path
from urllib.parse import urlencode, quote_plus
import concurrent.futures
from tqdm import tqdm

try:
    from PIL import Image
    HAS_PIL = True
except ImportError:
    HAS_PIL = False
    print("Warning: Pillow not installed. Image processing disabled.")

# Configuration
DEFAULT_CSV_PATH = "product-images.csv"
DEFAULT_OUTPUT_DIR = "public/images/products"
DEFAULT_SIZE = (800, 800)
DEFAULT_FORMAT = "JPEG"
DEFAULT_QUALITY = 90
DEFAULT_MAX_WORKERS = 4
DEFAULT_TIMEOUT = 10

# API keys (replace with your own)
UNSPLASH_API_KEY = ""  # Your Unsplash API key
PEXELS_API_KEY = ""    # Your Pexels API key
PIXABAY_API_KEY = ""   # Your Pixabay API key

# Search engines
SEARCH_ENGINES = ["unsplash", "pexels", "pixabay", "placeholder"]

class ImageDownloader:
    """Downloads images from various sources and processes them."""
    
    def __init__(self, output_dir=DEFAULT_OUTPUT_DIR, size=DEFAULT_SIZE, 
                 image_format=DEFAULT_FORMAT, quality=DEFAULT_QUALITY,
                 timeout=DEFAULT_TIMEOUT):
        """Initialize with given parameters."""
        self.output_dir = Path(output_dir)
        self.size = size
        self.image_format = image_format
        self.quality = quality
        self.timeout = timeout
        
        # Create output directory if it doesn't exist
        self.output_dir.mkdir(parents=True, exist_ok=True)
    
    def search_unsplash(self, query):
        """Search Unsplash for images."""
        if not UNSPLASH_API_KEY:
            return None
            
        url = "https://api.unsplash.com/search/photos"
        params = {
            "query": query,
            "per_page": 1,
            "orientation": "squarish",
            "client_id": UNSPLASH_API_KEY
        }
        
        try:
            response = requests.get(f"{url}?{urlencode(params)}", timeout=self.timeout)
            data = response.json()
            
            if response.status_code == 200 and data.get("results"):
                return data["results"][0]["urls"]["regular"]
        except Exception as e:
            print(f"Error searching Unsplash: {e}")
        
        return None
    
    def search_pexels(self, query):
        """Search Pexels for images."""
        if not PEXELS_API_KEY:
            return None
            
        url = "https://api.pexels.com/v1/search"
        params = {
            "query": query,
            "per_page": 1
        }
        headers = {
            "Authorization": PEXELS_API_KEY
        }
        
        try:
            response = requests.get(
                f"{url}?{urlencode(params)}", 
                headers=headers,
                timeout=self.timeout
            )
            data = response.json()
            
            if response.status_code == 200 and data.get("photos"):
                return data["photos"][0]["src"]["medium"]
        except Exception as e:
            print(f"Error searching Pexels: {e}")
        
        return None
    
    def search_pixabay(self, query):
        """Search Pixabay for images."""
        if not PIXABAY_API_KEY:
            return None
            
        url = "https://pixabay.com/api/"
        params = {
            "key": PIXABAY_API_KEY,
            "q": query,
            "per_page": 3,
            "image_type": "photo"
        }
        
        try:
            response = requests.get(f"{url}?{urlencode(params)}", timeout=self.timeout)
            data = response.json()
            
            if response.status_code == 200 and data.get("hits"):
                return data["hits"][0]["webformatURL"]
        except Exception as e:
            print(f"Error searching Pixabay: {e}")
        
        return None
    
    def get_placeholder(self, product_name, details, category):
        """Generate placeholder image URL."""
        # Color-code by category
        color_map = {
            "Tuberías y Accesorios": "2563EB/FFFFFF",      # Blue
            "Mangueras y Riego": "059669/FFFFFF",          # Green
            "Pinturas y Accesorios": "DC2626/FFFFFF",      # Red
            "Plásticos, Mallas y Arpilleras": "7C3AED/FFFFFF", # Purple
            "Iluminación": "F59E0B/000000",                # Yellow
            "Accesorios Eléctricos": "6B7280/FFFFFF",      # Gray
            "Grifería": "0284C7/FFFFFF",                   # Light Blue
            "Ferretería Varios": "D97706/000000"           # Orange
        }
        
        colors = color_map.get(category, "888888/FFFFFF")
        
        # Create text for placeholder
        text = f"{product_name} {details or ''}".strip()
        text = text[:20] + "..." if len(text) > 20 else text
        
        # Return placeholder URL
        return f"https://via.placeholder.com/{self.size[0]}x{self.size[1]}/{colors}?text={quote_plus(text)}"
    
    def search_for_image(self, search_term, product_name, details, category, engines):
        """Search for an image using multiple engines."""
        for engine in engines:
            if engine == "unsplash":
                url = self.search_unsplash(search_term)
            elif engine == "pexels":
                url = self.search_pexels(search_term)
            elif engine == "pixabay":
                url = self.search_pixabay(search_term)
            elif engine == "placeholder":
                url = self.get_placeholder(product_name, details, category)
            else:
                continue
                
            if url:
                return url, engine
        
        # Default to placeholder if no images found
        return self.get_placeholder(product_name, details, category), "placeholder"
    
    def download_image(self, url, output_path):
        """Download an image from a URL."""
        try:
            response = requests.get(url, stream=True, timeout=self.timeout)
            
            if response.status_code != 200:
                raise Exception(f"Failed to download image: {response.status_code}")
            
            # Ensure directory exists
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            
            # Save the image
            with open(output_path, "wb") as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            
            return output_path
        except Exception as e:
            print(f"Error downloading image: {e}")
            return None
    
    def process_image(self, file_path):
        """Process an image (resize, optimize)."""
        if not HAS_PIL:
            return False
            
        try:
            img = Image.open(file_path)
            
            # Resize image
            img = img.resize(self.size, Image.LANCZOS)
            
            # Save with optimization
            img.save(
                file_path, 
                format=self.image_format, 
                quality=self.quality, 
                optimize=True
            )
            
            return True
        except Exception as e:
            print(f"Error processing image {file_path}: {e}")
            return False
    
    def process_row(self, row, engines):
        """Process a single CSV row."""
        product_id = row["id"]
        category = row["category"]
        subcategory = row["subcategory"]
        brand = row["brand"]
        name = row["name"]
        details = row["details"]
        search_term = row["search_term"]
        target_file = row["target_file"]
        
        # Build output path
        output_path = self.output_dir / target_file.lstrip("/")
        
        # Skip if file already exists
        if output_path.exists():
            return {"id": product_id, "status": "skipped", "path": str(output_path)}
        
        # Search for image
        image_url, engine = self.search_for_image(
            search_term, name, details, category, engines
        )
        
        if not image_url:
            return {"id": product_id, "status": "failed", "error": "No image found"}
        
        # Download image
        download_path = self.download_image(image_url, str(output_path))
        
        if not download_path:
            return {"id": product_id, "status": "failed", "error": "Download failed"}
        
        # Process image
        if HAS_PIL and self.process_image(download_path):
            return {
                "id": product_id, 
                "status": "success", 
                "path": download_path, 
                "engine": engine
            }
        else:
            return {
                "id": product_id, 
                "status": "success-no-processing", 
                "path": download_path, 
                "engine": engine
            }
    
    def process_csv(self, csv_path, engines=None, max_workers=DEFAULT_MAX_WORKERS):
        """Process all products in a CSV file."""
        if engines is None:
            engines = SEARCH_ENGINES
            
        results = []
        
        try:
            with open(csv_path, newline="", encoding="utf-8") as csvfile:
                reader = csv.DictReader(csvfile)
                rows = list(reader)
                
                with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
                    # Create a dictionary of futures to rows
                    future_to_row = {
                        executor.submit(self.process_row, row, engines): row 
                        for row in rows
                    }
                    
                    # Process as they complete with a progress bar
                    with tqdm(total=len(rows), desc="Processing products") as pbar:
                        for future in concurrent.futures.as_completed(future_to_row):
                            row = future_to_row[future]
                            try:
                                result = future.result()
                                results.append(result)
                            except Exception as e:
                                results.append({
                                    "id": row["id"], 
                                    "status": "error", 
                                    "error": str(e)
                                })
                            pbar.update(1)
        except Exception as e:
            print(f"Error processing CSV: {e}")
        
        # Print summary
        success = sum(1 for r in results if r["status"] in ["success", "success-no-processing"])
        skipped = sum(1 for r in results if r["status"] == "skipped")
        failed = len(results) - success - skipped
        
        print(f"\nProcessing complete: {success} downloaded, {skipped} skipped, {failed} failed")
        
        # Save results to JSON
        results_file = Path(csv_path).with_suffix(".results.json")
        with open(results_file, "w", encoding="utf-8") as f:
            json.dump(results, f, indent=2)
            
        print(f"Results saved to {results_file}")
        
        return results

def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description="Process product images for QUIVAL catalog")
    parser.add_argument("--csv", default=DEFAULT_CSV_PATH, help="Path to CSV file")
    parser.add_argument("--output-dir", default=DEFAULT_OUTPUT_DIR, help="Output directory")
    parser.add_argument("--width", type=int, default=DEFAULT_SIZE[0], help="Image width")
    parser.add_argument("--height", type=int, default=DEFAULT_SIZE[1], help="Image height")
    parser.add_argument("--quality", type=int, default=DEFAULT_QUALITY, help="JPEG quality")
    parser.add_argument("--engines", nargs="+", default=SEARCH_ENGINES, help="Image search engines to use")
    parser.add_argument("--workers", type=int, default=DEFAULT_MAX_WORKERS, help="Maximum worker threads")
    parser.add_argument("--timeout", type=int, default=DEFAULT_TIMEOUT, help="Request timeout in seconds")
    
    args = parser.parse_args()
    
    # Validate engines
    for engine in args.engines:
        if engine not in SEARCH_ENGINES:
            print(f"Unknown search engine: {engine}")
            print(f"Available engines: {', '.join(SEARCH_ENGINES)}")
            return 1
    
    downloader = ImageDownloader(
        output_dir=args.output_dir,
        size=(args.width, args.height),
        quality=args.quality,
        timeout=args.timeout
    )
    
    downloader.process_csv(
        csv_path=args.csv,
        engines=args.engines,
        max_workers=args.workers
    )
    
    return 0

if __name__ == "__main__":
    sys.exit(main()) 