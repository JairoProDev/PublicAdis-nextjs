// Update Catalog Image Paths
// This script updates the product image paths in the catalog file to use SVG placeholders

const fs = require('fs');
const path = require('path');
const { catalog } = require('../data/quival-catalog');

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

// Update image paths in catalog.js
const updateCatalogImagePaths = () => {
  // Read the catalog.js file
  const catalogPath = path.join(process.cwd(), 'src/data/quival-catalog.js');
  let catalogContent = fs.readFileSync(catalogPath, 'utf8');

  let updatedCount = 0;

  // Process each product in the catalog
  for (const category of catalog) {
    const categoryFolder = getCategoryFolder(category.categoryName);

    for (const subcategory of category.subcategories) {
      for (const brand of subcategory.brands) {
        for (const product of brand.products) {
          // New image path using SVG
          const newImagePath = `/images/products/${categoryFolder}/${product.id}.svg`;

          // Create a regex that matches the product's entry
          const productRegex = new RegExp(
            `{\\s*id:\\s*${product.id}[^}]*image:\\s*"[^"]*"[^}]*}`,
            'g'
          );

          // Replace old image path with new path
          const match = productRegex.exec(catalogContent);
          if (match) {
            const oldEntry = match[0];
            const newEntry = oldEntry.replace(/image:\s*"[^"]*"/, `image: "${newImagePath}"`);

            catalogContent = catalogContent.replace(oldEntry, newEntry);
            updatedCount++;
          }
        }
      }
    }
  }

  // Write updated content back to file
  fs.writeFileSync(catalogPath, catalogContent);
  console.log(`Updated ${updatedCount} product image paths in catalog.js`);
};

// Run the script
updateCatalogImagePaths();

module.exports = { updateCatalogImagePaths };
