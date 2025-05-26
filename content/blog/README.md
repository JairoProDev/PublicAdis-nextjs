# Blog Content Structure

Este directorio contiene los artículos del blog en formato MDX. Cada artículo debe seguir la siguiente estructura:

## Estructura de Archivos

```
content/blog/
  ├── nombre-del-articulo.mdx
  └── README.md

public/blog/
  └── nombre-del-articulo/
      ├── cover.jpg
      ├── imagen1.jpg
      ├── imagen2.jpg
      └── ...
```

## Frontmatter

Cada archivo MDX debe comenzar con un frontmatter que contenga la siguiente información:

```yaml
---
title: 'Título del Artículo'
excerpt: 'Breve descripción del artículo (150-200 caracteres)'
coverImage: '/blog/nombre-del-articulo/cover.jpg'
date: '2025-05-20'
author:
  name: 'Nombre del Autor'
  picture: '/team/autor.jpg'
  social:
    twitter: 'https://twitter.com/usuario'
    linkedin: 'https://linkedin.com/in/usuario'
category: 'Categoría del Artículo'
readTime: '8 min'
---
```

## Contenido del Artículo

El contenido del artículo debe estar en formato MDX, que permite usar Markdown con componentes de React. Aquí hay un ejemplo de la estructura:

```mdx
# Título Principal

Introducción del artículo...

## Sección 1

Contenido de la sección...

<Image
  src="/blog/nombre-del-articulo/imagen1.jpg"
  alt="Descripción de la imagen"
  width={800}
  height={400}
/>

### Subsección

- Punto 1
- Punto 2
- Punto 3

## Sección 2

Más contenido...

> Cita o testimonio importante

## Conclusión

Resumen y conclusiones...
```

## Imágenes

- Las imágenes deben estar en formato JPG o PNG
- Tamaño recomendado para la imagen de portada: 1200x630px
- Tamaño recomendado para imágenes dentro del artículo: 800x400px
- Optimizar las imágenes para web antes de subirlas
- Nombrar las imágenes de manera descriptiva y en minúsculas
- Usar guiones para separar palabras en los nombres de archivo

## Categorías Disponibles

- Marketing Digital
- Publicidad Digital
- SEO
- Redes Sociales
- Email Marketing
- Google Ads
- Meta Ads
- Analítica Web
- Estrategia Digital
- Contenidos
- Branding Digital
- Herramientas Digitales

## Autores

Los autores disponibles son:
- Shantall Zarai
- Jairo Saul

## Buenas Prácticas

1. Usar encabezados de manera jerárquica (H1 > H2 > H3)
2. Incluir ejemplos prácticos y casos de estudio
3. Usar listas y viñetas para mejorar la legibilidad
4. Incluir imágenes relevantes y de alta calidad
5. Optimizar el contenido para SEO
6. Mantener un tono profesional pero conversacional
7. Incluir llamadas a la acción cuando sea apropiado
8. Citar fuentes y referencias cuando sea necesario

## Proceso de Publicación

1. Crear el archivo MDX con el nombre-del-articulo en kebab-case
2. Crear el directorio de imágenes correspondiente
3. Escribir el contenido siguiendo la estructura
4. Revisar y optimizar las imágenes
5. Verificar que el frontmatter esté completo
6. Hacer commit y push de los cambios

## Ejemplos de Nombres de Archivo

- estrategias-marketing-digital-cusco-2025.mdx
- guia-completa-google-ads-empresas-locales.mdx
- como-crear-estrategia-contenido-efectiva.mdx 