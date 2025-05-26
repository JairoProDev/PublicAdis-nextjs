const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { promisify } = require('util');
const https = require('https');
const stream = require('stream');
const { finished } = require('stream/promises');

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
    .replace(/\\s+/g, '-')
    .replace(/[^\\w\\-]+/g, '')
    .replace(/\\-\\-+/g, '-');
};

const downloadFile = async (url, outputPath) => {
  const pipeline = promisify(stream.pipeline);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download: ${response.statusText}`);
  await pipeline(response.body, fs.createWriteStream(outputPath));
};

const createDirectories = async (category, slug) => {
  // Create content directory
  const contentDir = path.join(process.cwd(), 'content/guias', category);
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  // Create public directory for images and resources
  const publicDir = path.join(process.cwd(), 'public/guias', category, slug);
  const imageDir = path.join(publicDir, 'imagenes');
  const resourceDir = path.join(publicDir, 'recursos');

  fs.mkdirSync(imageDir, { recursive: true });
  fs.mkdirSync(resourceDir, { recursive: true });

  return {
    contentDir,
    publicDir,
    imageDir,
    resourceDir,
  };
};

const createGuideFile = async (category, slug, data) => {
  const template = `---
title: '${data.title}'
description: '${data.description}'
coverImage: '/guias/${category}/${slug}/cover.jpg'
level: '${data.level}'
duration: '${data.duration}'
author: '${data.author}'
updatedAt: '${data.date}'
category: '${data.category}'
resources:
  - name: 'Plantilla de Estrategia'
    file: '/guias/${category}/${slug}/recursos/plantilla-estrategia.pdf'
  - name: 'Checklist de Optimización'
    file: '/guias/${category}/${slug}/recursos/checklist-optimizacion.pdf'
---

# ${data.title}

## Introducción

[Aquí irá una breve introducción sobre el tema y qué aprenderá el lector]

## Índice

1. [Sección 1]
2. [Sección 2]
3. [Sección 3]
4. [Sección 4]
5. [Sección 5]

## 1. [Sección 1]

[Aquí irá el contenido de la sección]

## 2. [Sección 2]

[Aquí irá el contenido de la sección]

## 3. [Sección 3]

[Aquí irá el contenido de la sección]

## 4. [Sección 4]

[Aquí irá el contenido de la sección]

## 5. [Sección 5]

[Aquí irá el contenido de la sección]

## Conclusión

[Aquí irá un resumen de los puntos clave y próximos pasos]
`;

  const filePath = path.join(process.cwd(), 'content/guias', category, `${slug}.mdx`);
  fs.writeFileSync(filePath, template, 'utf8');
};

const main = async () => {
  console.log('🚀 Creador de Guías PublicAdis\n');

  // Get guide information
  const title = await question('Título de la guía: ');
  const description = await question('Descripción breve (150-200 caracteres): ');
  const category = await question('Categoría (redes-sociales/seo-local/email-marketing/etc): ');
  const level = await question('Nivel (Principiante/Intermedio/Avanzado): ');
  const duration = await question('Duración estimada (en minutos): ');
  const author = await question('Autor: ');
  const date = new Date().toISOString().split('T')[0];

  const slug = slugify(title);

  // Create directory structure
  const dirs = await createDirectories(category, slug);

  // Create guide file
  await createGuideFile(category, slug, {
    title,
    description,
    category,
    level,
    duration,
    author,
    date,
  });

  console.log('\n✅ Guía creada exitosamente!');
  console.log('\nDirectorios creados:');
  console.log(`📁 Contenido: content/guias/${category}/${slug}.mdx`);
  console.log(`📁 Imágenes: public/guias/${category}/${slug}/imagenes`);
  console.log(`📁 Recursos: public/guias/${category}/${slug}/recursos`);

  console.log('\n⚠️ No olvides:');
  console.log(
    '1. Agregar una imagen de portada (1200x630px) en /public/guias/${category}/${slug}/cover.jpg'
  );
  console.log('2. Agregar las imágenes necesarias en el directorio de imágenes');
  console.log('3. Agregar los recursos descargables en el directorio de recursos');
  console.log('4. Completar el contenido de la guía en el archivo MDX');

  rl.close();
};

main().catch(console.error);
