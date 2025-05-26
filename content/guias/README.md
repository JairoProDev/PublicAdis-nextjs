# Estructura de Guías de PublicAdis

Este directorio contiene las guías y recursos educativos en formato MDX. Cada guía debe seguir la siguiente estructura:

## Estructura de Directorios

```
content/guias/
  ├── [categoria]/
  │   ├── guia-ejemplo.mdx
  │   └── ...
  └── README.md

public/guias/
  └── [categoria]/
      └── [nombre-guia]/
          ├── cover.jpg
          ├── imagenes/
          │   ├── imagen1.jpg
          │   ├── imagen2.jpg
          │   └── ...
          └── recursos/
              ├── plantilla.pdf
              ├── checklist.pdf
              └── ...
```

## Frontmatter

Cada archivo MDX debe comenzar con un frontmatter que contenga:

```yaml
---
title: 'Título de la Guía'
description: 'Descripción breve de la guía (150-200 caracteres)'
coverImage: '/guias/[categoria]/[nombre-guia]/cover.jpg'
level: 'Principiante | Intermedio | Avanzado'
duration: 'XX min'
author: 'Nombre del Autor'
updatedAt: 'YYYY-MM-DD'
category: 'Categoría'
resources:
  - name: 'Nombre del Recurso'
    file: '/guias/[categoria]/[nombre-guia]/recursos/archivo.pdf'
---
```

## Categorías Disponibles

1. Redes Sociales
   - Facebook Ads
   - Instagram Marketing
   - TikTok para Negocios
   - LinkedIn B2B

2. SEO Local
   - Google My Business
   - SEO Local para Cusco
   - Directorios Locales

3. Email Marketing
   - Estrategias de Email
   - Automatizaciones
   - Segmentación

4. PPC y Anuncios
   - Google Ads
   - Meta Ads
   - Display Advertising

5. Análisis y Métricas
   - Google Analytics
   - Meta Business Suite
   - KPIs Importantes

6. Contenidos
   - Estrategia de Contenidos
   - Copywriting
   - Marketing de Contenidos

7. Branding
   - Identidad de Marca
   - Voz y Tono
   - Branding Visual

## Estructura del Contenido

Cada guía debe incluir:

1. Introducción clara del tema
2. Índice de contenidos
3. Desarrollo por secciones
4. Ejemplos prácticos
5. Casos de estudio
6. Recursos descargables
7. Conclusión y próximos pasos

## Imágenes

- La imagen de portada (cover.jpg) debe ser de 1200x630px
- Las imágenes internas deben ser optimizadas para web
- Usar imágenes relevantes y de alta calidad
- Incluir alt text descriptivo

## Recursos

- Los recursos descargables deben estar en formato PDF
- Nombrar los archivos de forma descriptiva
- Incluir una breve descripción de cada recurso
- Optimizar el tamaño de los archivos

## Mantenimiento

- Actualizar las guías al menos cada 6 meses
- Verificar que los enlaces y recursos funcionen
- Mantener la información actualizada
- Revisar y actualizar ejemplos y casos de estudio 