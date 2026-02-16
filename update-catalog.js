const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/quival-catalog.js');

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace product images
    content = content.replace(/\/images\/products\/[^']+/g, '/product-placeholder.svg');

    // Replace placeholder.com
    content = content.replace(/https:\/\/via\.placeholder\.com\/[^']+/g, '/product-placeholder.svg');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated quival-catalog.js');
} catch (err) {
    console.error('Error updating file:', err);
    process.exit(1);
}
