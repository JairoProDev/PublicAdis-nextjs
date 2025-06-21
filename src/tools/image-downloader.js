// Image Downloader Script for QUIVAL catalog
// This script downloads images from Unsplash API based on product data

const fs = require('fs');
const path = require('path');
const https = require('https');
const { catalog } = require('../data/quival-catalog');

// Configuration
const ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your Unsplash API key
const IMAGE_DIR = path.join(process.cwd(), 'public/images/products');
const DEFAULT_IMAGE = 'https://via.placeholder.com/800x800/eeeeee/999999?text=Producto';

// Helper to get category folder name
const getCategoryFolder = categoryName => {
  const folderMap = {
    'Tuberías y Accesorios': 'tuberias-accesorios',
    'Mangueras y Riego': 'mangueras-riego',
    'Pinturas y Accesorios': 'pinturas-accesorios',
    'Plásticos, Mallas y Arpilleras': 'plasticos-mallas',
    Iluminación: 'iluminacion',
    'Accesorios Eléctricos': 'accesorios-electricos',
    Grifería: 'griferia',
    'Ferretería Varios': 'ferreteria-varios',
  };

  return folderMap[categoryName] || 'misc';
};

// Generate search terms for product
const generateSearchTerm = (product, brandName, subcategoryName, categoryName) => {
  let searchTerms = [];

  // Add the product name
  searchTerms.push(product.name);

  // Add details if available
  if (product.details && product.details.length > 0) {
    searchTerms.push(product.details);
  }

  // Add brand if not 'Varios'
  if (brandName && brandName !== 'Varios') {
    searchTerms.push(brandName);
  }

  // Add category type
  searchTerms.push(subcategoryName);

  // Join terms and remove special characters
  return searchTerms
    .join(' ')
    .replace(/[^\w\s]/g, ' ')
    .trim();
};

// Download image from URL
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    // Create directory if it doesn't exist
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // If file already exists, skip download
    if (fs.existsSync(filepath)) {
      console.log(`Skipping: ${filepath} (already exists)`);
      return resolve(filepath);
    }

    // Download image
    https
      .get(url, response => {
        if (response.statusCode !== 200) {
          reject(
            new Error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`)
          );
          return;
        }

        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${filepath}`);
          resolve(filepath);
        });

        fileStream.on('error', err => {
          fs.unlink(filepath, () => {}); // Delete the file if there was an error
          reject(err);
        });
      })
      .on('error', err => {
        reject(err);
      });
  });
};

// Search Unsplash API for image
const searchUnsplashImage = async searchTerm => {
  if (!ACCESS_KEY || ACCESS_KEY === 'YOUR_UNSPLASH_ACCESS_KEY') {
    console.log('No Unsplash API key provided. Using placeholder image.');
    return DEFAULT_IMAGE;
  }

  try {
    const apiUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      searchTerm
    )}&per_page=1&orientation=squarish&client_id=${ACCESS_KEY}`;

    return new Promise((resolve, reject) => {
      https
        .get(apiUrl, response => {
          let data = '';

          response.on('data', chunk => {
            data += chunk;
          });

          response.on('end', () => {
            try {
              const result = JSON.parse(data);
              if (result.results && result.results.length > 0) {
                resolve(result.results[0].urls.regular);
              } else {
                console.log(`No image found for: ${searchTerm}. Using default.`);
                resolve(DEFAULT_IMAGE);
              }
            } catch (err) {
              console.error('Error parsing JSON:', err);
              resolve(DEFAULT_IMAGE);
            }
          });
        })
        .on('error', err => {
          console.error('Error searching Unsplash:', err);
          resolve(DEFAULT_IMAGE);
        });
    });
  } catch (error) {
    console.error('Error in Unsplash search:', error);
    return DEFAULT_IMAGE;
  }
};

// Alternative method: fetch Google image search results
const searchGoogleImage = async searchTerm => {
  // This is just a placeholder for a potential Google Search API integration
  // For a real implementation, you would need a Google Custom Search API key
  console.log(`Google search not implemented. Search term: ${searchTerm}`);
  return DEFAULT_IMAGE;
};

// Process all products
const processAllProducts = async () => {
  let processed = 0;
  let errors = 0;

  for (const category of catalog) {
    const categoryFolder = getCategoryFolder(category.categoryName);

    for (const subcategory of category.subcategories) {
      for (const brand of subcategory.brands) {
        for (const product of brand.products) {
          try {
            // Generate search term
            const searchTerm = generateSearchTerm(
              product,
              brand.brandName,
              subcategory.subcategoryName,
              category.categoryName
            );

            console.log(`Processing: ${product.id} - ${searchTerm}`);

            // Determine image path
            const imagePath = path.join(IMAGE_DIR, categoryFolder, `${product.id}.jpg`);

            // Search for image
            const imageUrl = await searchUnsplashImage(searchTerm);

            // Download image
            await downloadImage(imageUrl, imagePath);

            processed++;
          } catch (error) {
            console.error(`Error processing product ${product.id}:`, error);
            errors++;
          }
        }
      }
    }
  }

  console.log(`\nProcess complete: ${processed} images processed, ${errors} errors`);
};

// CSV generator for bulk image processing
const generateCsvForImageProcessing = () => {
  let csv = 'id,category,subcategory,brand,name,details,search_term,target_file\n';

  for (const category of catalog) {
    const categoryFolder = getCategoryFolder(category.categoryName);

    for (const subcategory of category.subcategories) {
      for (const brand of subcategory.brands) {
        for (const product of brand.products) {
          // Generate search term
          const searchTerm = generateSearchTerm(
            product,
            brand.brandName,
            subcategory.subcategoryName,
            category.categoryName
          );

          // Target file path
          const targetFile = `/images/products/${categoryFolder}/${product.id}.jpg`;

          // Add CSV row
          csv += `${product.id},${category.categoryName},${subcategory.subcategoryName},${brand.brandName},"${product.name}","${product.details}","${searchTerm}","${targetFile}"\n`;
        }
      }
    }
  }

  // Write CSV file
  const csvPath = path.join(process.cwd(), 'product-images.csv');
  fs.writeFileSync(csvPath, csv);
  console.log(`CSV file generated: ${csvPath}`);
};

// Quick script to update catalog.js with correct image paths
const updateCatalogImagePaths = () => {
  let catalogJs = fs.readFileSync(path.join(process.cwd(), 'src/data/quival-catalog.js'), 'utf8');

  for (const category of catalog) {
    const categoryFolder = getCategoryFolder(category.categoryName);

    for (const subcategory of category.subcategories) {
      for (const brand of subcategory.brands) {
        for (const product of brand.products) {
          const oldImagePath = product.image;
          const newImagePath = `/images/products/${categoryFolder}/${product.id}.jpg`;

          if (oldImagePath !== newImagePath) {
            const searchPattern = new RegExp(`id: ${product.id},[^{]*image: "[^"]*"`);
            const replacement = `id: ${product.id}, name: "${product.name}", details: "${product.details}", image: "${newImagePath}"`;

            catalogJs = catalogJs.replace(searchPattern, replacement);
          }
        }
      }
    }
  }

  fs.writeFileSync(path.join(process.cwd(), 'src/data/quival-catalog.js'), catalogJs);
  console.log('Catalog file updated with correct image paths');
};

// Choose which function to run
const run = async () => {
  const args = process.argv.slice(2);

  if (args.includes('--csv')) {
    generateCsvForImageProcessing();
  } else if (args.includes('--update-paths')) {
    updateCatalogImagePaths();
  } else {
    await processAllProducts();
  }
};

// Run the script
run().catch(console.error);

module.exports = {
  processAllProducts,
  generateCsvForImageProcessing,
  updateCatalogImagePaths,
};
