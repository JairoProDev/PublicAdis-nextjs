const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = query => new Promise(resolve => rl.question(query, resolve));

const slugify = text => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};

const createDirectories = slug => {
  // Create content directory if it doesn't exist
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  // Create images directory
  const imagesDir = path.join(process.cwd(), 'public', 'blog', slug);
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
};

const generateFrontmatter = data => {
  return `---
title: '${data.title}'
excerpt: '${data.excerpt}'
coverImage: '/blog/${data.slug}/cover.jpg'
date: '${data.date}'
author:
  name: '${data.author}'
  picture: '/team/${data.author.toLowerCase().replace(' ', '')}.jpg'
  social:
    twitter: 'https://twitter.com/${data.twitter}'
    linkedin: 'https://linkedin.com/in/${data.linkedin}'
category: '${data.category}'
readTime: '${data.readTime}'
---

# ${data.title}

[Escribe aquí la introducción del artículo...]

## Sección 1

[Contenido de la sección...]

## Sección 2

[Contenido de la sección...]

## Conclusión

[Resumen y conclusiones...]
`;
};

const categories = [
  'Marketing Digital',
  'Publicidad Digital',
  'SEO',
  'Redes Sociales',
  'Email Marketing',
  'Google Ads',
  'Meta Ads',
  'Analítica Web',
  'Estrategia Digital',
  'Contenidos',
  'Branding Digital',
  'Herramientas Digitales',
];

const authors = ['Shantall Zarai', 'Jairo Saul'];

async function main() {
  console.log('📝 Creador de Artículos para el Blog\n');

  // Get post information
  const title = await question('Título del artículo: ');
  const slug = slugify(title);

  console.log('\nCategorías disponibles:');
  categories.forEach((cat, i) => console.log(`${i + 1}. ${cat}`));
  const categoryIndex = parseInt(await question('\nSelecciona el número de la categoría: ')) - 1;
  const category = categories[categoryIndex];

  console.log('\nAutores disponibles:');
  authors.forEach((author, i) => console.log(`${i + 1}. ${author}`));
  const authorIndex = parseInt(await question('\nSelecciona el número del autor: ')) - 1;
  const author = authors[authorIndex];

  const excerpt = await question('\nResumen del artículo (150-200 caracteres): ');
  const readTime = await question('Tiempo de lectura estimado (ej: "8 min"): ');
  const twitter = await question('Usuario de Twitter del autor (sin @): ');
  const linkedin = await question('Usuario de LinkedIn del autor: ');

  // Generate today's date in YYYY-MM-DD format
  const date = new Date().toISOString().split('T')[0];

  // Create directories
  createDirectories(slug);

  // Generate frontmatter and create file
  const postData = {
    title,
    slug,
    excerpt,
    date,
    author,
    twitter,
    linkedin,
    category,
    readTime,
  };

  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);
  fs.writeFileSync(filePath, generateFrontmatter(postData));

  console.log(`\n✅ Artículo creado en: ${filePath}`);
  console.log(`\n📁 Directorio de imágenes creado en: public/blog/${slug}/`);
  console.log('\n⚠️ No olvides:');
  console.log('1. Agregar la imagen de portada como "cover.jpg"');
  console.log('2. Agregar las imágenes del artículo');
  console.log('3. Escribir el contenido del artículo');
  console.log('4. Optimizar las imágenes antes de subirlas');

  rl.close();
}

main().catch(console.error);
