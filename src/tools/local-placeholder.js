const fs = require('fs');
const path = require('path');
const { catalog } = require('../data/quival-catalog');

// Configuration
const IMAGE_DIR = path.join(process.cwd(), 'public/images/products');

// Color map for categories (as hex)
const CATEGORY_COLORS = {
  'Tuberías y Accesorios': '#2563EB', // Blue
  'Mangueras y Riego': '#059669', // Green
  'Pinturas y Accesorios': '#DC2626', // Red
  'Plásticos, Mallas y Arpilleras': '#7C3AED', // Purple
  Iluminación: '#F59E0B', // Yellow
  'Accesorios Eléctricos': '#6B7280', // Gray
  Grifería: '#0284C7', // Light Blue
  'Ferretería Varios': '#D97706', // Orange
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

// Create a simple SVG placeholder
const createSvgPlaceholder = (id, name, details, categoryColor) => {
  const svgWidth = 400;
  const svgHeight = 400;
  const textColor = '#FFFFFF';
  const productText = `${name} ${details || ''}`.trim();
  const displayText = productText.length > 25 ? productText.substring(0, 25) + '...' : productText;

  return `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${svgWidth}" height="${svgHeight}" fill="${categoryColor}" />
    <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="${textColor}">
      ${displayText}
    </text>
    <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="${textColor}">
      ID: ${id}
    </text>
  </svg>`;
};

// Process all products
const generatePlaceholders = async () => {
  let processed = 0;
  let errors = 0;

  for (const category of catalog) {
    const categoryFolder = getCategoryFolder(category.categoryName);
    const categoryColor = CATEGORY_COLORS[category.categoryName] || '#888888';

    // Create category directory if it doesn't exist
    const categoryPath = path.join(IMAGE_DIR, categoryFolder);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
    }

    for (const subcategory of category.subcategories) {
      for (const brand of subcategory.brands) {
        for (const product of brand.products) {
          try {
            const imagePath = path.join(IMAGE_DIR, categoryFolder, `${product.id}.svg`);

            // Skip if file already exists
            if (fs.existsSync(imagePath)) {
              console.log(`Skipping: ${imagePath} (already exists)`);
              processed++;
              continue;
            }

            // Create SVG placeholder
            const svg = createSvgPlaceholder(
              product.id,
              product.name,
              product.details,
              categoryColor
            );

            // Write SVG file
            fs.writeFileSync(imagePath, svg);
            console.log(`Generated: ${imagePath}`);

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
generatePlaceholders().catch(console.error);

module.exports = { generatePlaceholders };
