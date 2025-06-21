# QUIVAL Product Image Pipeline

This folder contains a set of tools for automating the process of adding product images to the QUIVAL catalog.

## Overview

Managing product images for a large catalog can be time-consuming. These tools help you:

1. Generate a structured CSV file from your product catalog
2. Create SVG placeholder images for all products based on their categories
3. Automatically search for and download real product images from various sources
4. Process and optimize the images
5. Update the catalog with the correct image paths

## Tools Included

- **product-processor.js**: Main script that combines all the steps in one workflow
- **image-downloader.js**: Generates CSV and can download images from Unsplash
- **local-placeholder.js**: Creates SVG placeholder images with product details
- **update-catalog-paths.js**: Updates the catalog file with correct image paths
- **process_images.py**: Python script for advanced image processing and multiple API sources

## Quick Start

To process all products in the catalog:

```bash
node src/tools/product-processor.js
```

This will:
1. Generate a CSV file from your catalog
2. Create SVG placeholders for all products
3. Prompt you to search for real images if API keys are available
4. Update the catalog with the correct image paths

## Setting Up API Keys

For downloading real images, you need API keys from one or more of these services:

1. **Unsplash API**: [https://unsplash.com/developers](https://unsplash.com/developers)
2. **Pexels API**: [https://www.pexels.com/api/](https://www.pexels.com/api/)
3. **Pixabay API**: [https://pixabay.com/api/docs/](https://pixabay.com/api/docs/)

Set these as environment variables:

```bash
export UNSPLASH_API_KEY="your_unsplash_api_key"
export PEXELS_API_KEY="your_pexels_api_key"
export PIXABAY_API_KEY="your_pixabay_api_key"
```

Or edit the API keys directly in the scripts.

## Using the CSV File

The pipeline generates a CSV file (`product-images.csv`) with the following structure:

```
id,category,subcategory,brand,name,details,search_term,target_file
```

You can:
1. Edit this file to customize search terms
2. Use it with third-party tools for batch processing
3. Share it with a team member to help with image collection

## Running Individual Tools

### Generate CSV only

```bash
node src/tools/image-downloader.js --csv
```

### Generate Placeholders only

```bash
node src/tools/local-placeholder.js
```

### Update Catalog Paths only

```bash
node src/tools/update-catalog-paths.js
```

### Python Image Processor

The Python script provides more advanced features:

```bash
python src/tools/process_images.py --csv product-images.csv --engines unsplash pexels pixabay
```

Requirements:
- Python 3.6+
- Required packages: `pip install requests Pillow tqdm`

## Tips for Best Results

1. **Better search terms**: Edit the CSV to improve search terms for more accurate images
2. **Multiple sources**: Try different APIs as they have different image libraries
3. **Placeholders first**: Always generate placeholders first, then replace with real images as they become available
4. **Manual refinement**: Review and replace any unsuitable images manually
5. **Batch processing**: Process small batches of products at a time to manage API rate limits

## Troubleshooting

- **API rate limits**: If you hit rate limits, wait or try a different API
- **Image quality**: If images are poor quality, try editing the search terms in the CSV
- **Missing dependencies**: For Python script, install required packages with pip
- **Permission issues**: Make sure directories are writable

## Contributing

Feel free to enhance these tools. Possible improvements:
- Add more image sources
- Improve search term generation
- Add batch processing options
- Implement image recognition for better matching 