
import re
import os

file_path = '/home/jairoprodev/proyectos/PublicAdis-nextjs/src/data/quival-catalog.js'

with open(file_path, 'r') as f:
    content = f.read()

# Replace placeholder.com
content = content.replace('https://via.placeholder.com/200x80/2563EB/FFFFFF?text=QUIVAL', '/product-placeholder.svg')

# Replace products images
content = re.sub(r'/images/products/[^\'"]+', '/product-placeholder.svg', content)

with open(file_path, 'w') as f:
    f.write(content)

print("Updated catalog successfully")
