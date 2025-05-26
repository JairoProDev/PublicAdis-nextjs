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
    .replace(/[^a-z0-9-]/g, '') // Remove all non-word chars except hyphens
    .replace(/-{2,}/g, '-'); // Replace multiple - with single -
};

const createDirectories = slug => {
  try {
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

    return { contentDir, imagesDir };
  } catch (error) {
    throw new Error(`Failed to create directories: ${error.message}`);
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
  picture: '/team/${data.author.toLowerCase().replace(/\s+/g, '')}.jpg'
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

const logCreationSuccess = (filePath, slug) => {
  const messages = [
    `\n✅ Artículo creado en: ${filePath}`,
    `\n📁 Directorio de imágenes creado en: public/blog/${slug}/`,
    '\n⚠️ Próximos pasos:',
    '1. Agregar la imagen de portada como "cover.jpg"',
    '2. Agregar las imágenes del artículo',
    '3. Escribir el contenido del artículo',
    '4. Optimizar las imágenes antes de subirlas\n',
  ];

  messages.forEach(msg => process.stdout.write(msg + '\n'));
};

const displayOptions = (options, title) => {
  process.stdout.write(`\n${title}:\n`);
  options.forEach((opt, i) => process.stdout.write(`${i + 1}. ${opt}\n`));
  return process.stdout.write('\n');
};

async function main() {
  try {
    process.stdout.write('📝 Creador de Artículos para el Blog\n\n');

    // Get post information
    const title = await question('Título del artículo: ');
    const slug = slugify(title);

    displayOptions(categories, 'Categorías disponibles');
    const categoryIndex = parseInt(await question('Selecciona el número de la categoría: ')) - 1;
    if (categoryIndex < 0 || categoryIndex >= categories.length) {
      throw new Error('Categoría inválida');
    }
    const category = categories[categoryIndex];

    displayOptions(authors, 'Autores disponibles');
    const authorIndex = parseInt(await question('Selecciona el número del autor: ')) - 1;
    if (authorIndex < 0 || authorIndex >= authors.length) {
      throw new Error('Autor inválido');
    }
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

    logCreationSuccess(filePath, slug);
  } catch (error) {
    process.stderr.write(`\n❌ Error: ${error.message}\n`);
    process.exit(1);
  } finally {
    rl.close();
  }
}

main().catch(console.error);
