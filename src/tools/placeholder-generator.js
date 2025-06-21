// Placeholder Generator Script
// This script generates color-coded placeholder images for products

const fs = require('fs');
const path = require('path');
const https = require('https');
const { catalog } = require('../data/quival-catalog');

// Configuration
const IMAGE_DIR = path.join(process.cwd(), 'public/images/products');

// Color map for categories (background/text colors)
const CATEGORY_COLORS = {
  'Tuberías y Accesorios': '2563EB/FFFFFF', // Blue
  'Mangueras y Riego': '059669/FFFFFF', // Green
  'Pinturas y Accesorios': 'DC2626/FFFFFF', // Red
  'Plásticos, Mallas y Arpilleras': '7C3AED/FFFFFF', // Purple
  Iluminación: 'F59E0B/000000', // Yellow
  'Accesorios Eléctricos': '6B7280/FFFFFF', // Gray
  Grifería: '0284C7/FFFFFF', // Light Blue
  'Ferretería Varios': 'D97706/000000', // Orange
};

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

// Generate placeholder image URL for a product
const generatePlaceholderUrl = (product, brandName, subcategoryName, categoryName) => {
  const colors = CATEGORY_COLORS[categoryName] || '888888/FFFFFF';

  // Create text for placeholder
  const text = `${product.name} ${product.details || ''}`.trim();
  const encodedText = encodeURIComponent(text.length > 20 ? text.substring(0, 20) + '...' : text);

  // Return placeholder URL
  return `https://via.placeholder.com/600x600/${colors}?text=${encodedText}`;
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
          console.log(`Generated: ${filepath}`);
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

// Process all products to generate placeholders
const generateAllPlaceholders = async () => {
  let processed = 0;
  let errors = 0;

  for (const category of catalog) {
    const categoryFolder = getCategoryFolder(category.categoryName);

    for (const subcategory of category.subcategories) {
      for (const brand of subcategory.brands) {
        for (const product of brand.products) {
          try {
            // Generate placeholder URL
            const placeholderUrl = generatePlaceholderUrl(
              product,
              brand.brandName,
              subcategory.subcategoryName,
              category.categoryName
            );

            // Determine image path
            const imagePath = path.join(IMAGE_DIR, categoryFolder, `${product.id}.jpg`);

            // Download image
            await downloadImage(placeholderUrl, imagePath);

            processed++;
          } catch (error) {
            console.error(`Error processing product ${product.id}:`, error);
            errors++;
          }
        }
      }
    }
  }

  console.log(`\nProcess complete: ${processed} placeholders generated, ${errors} errors`);
};

// Run the script
generateAllPlaceholders().catch(console.error);

module.exports = { generateAllPlaceholders };
