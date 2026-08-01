# Biblioteca visual Cristalimag

Dirección de arte única para web, redes, catálogo y ventas.

**Posicionamiento:** soluciones arquitectónicas a medida (vivienda moderna y pequeños proyectos comerciales) — no “venta de vidrio”.

## Estándar fotográfico (todas las imágenes)

- Hiperrealista / editorial arquitectura (no render CGI obvio)
- Verticales corregidas, lente 24–35 mm (generales) o 50–85 mm (detalle)
- Luz natural suave o golden hour
- Aluminio negro mate, vidrio impecable, espacios terminados y limpios
- Sin cajas, cintas, desorden de obra (salvo categoría `proceso`)
- Misma paleta y clima visual en toda la biblioteca

## Carpetas y naming

Coloca cada archivo generado con este patrón (sobrescribe los placeholders):

```
images/library/
  hero/hero-01.jpg … hero-08.jpg
  fachadas/fachada-01.jpg … fachada-10.jpg
  ventanas/ventana-01.jpg … ventana-10.jpg
  mamparas/mampara-01.jpg … mampara-08.jpg
  escaleras/escalera-01.jpg … escalera-08.jpg
  barandas/baranda-01.jpg … baranda-06.jpg
  muros-cortina/muro-01.jpg … muro-06.jpg
  banos/bano-01.jpg … bano-08.jpg
  espejos/espejo-01.jpg … espejo-05.jpg
  pergolas/pergola-01.jpg … pergola-08.jpg
  policarbonato/poli-01.jpg … poli-06.jpg
  drywall/drywall-01.jpg … drywall-10.jpg
  proceso/proceso-01.jpg … proceso-12.jpg
  detalles/detalle-01.jpg … detalle-10.jpg
  personas/persona-01.jpg … persona-10.jpg
  comercial/comercial-01.jpg … comercial-08.jpg
  materiales/material-01.jpg … material-08.jpg
```

Prioridad inmediata para el home (en este orden):

1. `hero/hero-01.jpg` — casa moderna completa, golden hour  
2. `hero/hero-02.jpg` — fachada minimalista vidrio + aluminio negro  
3. `hero/hero-03.jpg` — escalera con vidrio  
4. `fachadas/fachada-01.jpg`  
5. `mamparas/mampara-01.jpg`  
6. `banos/bano-01.jpg`  
7. `pergolas/pergola-01.jpg`  
8. `detalles/detalle-01.jpg`  
9. `proceso/proceso-01.jpg` … `proceso-04.jpg`  
10. `drywall/drywall-01.jpg`

## Uso en el sitio

El HTML referencia rutas bajo `images/library/...`.  
Al reemplazar el archivo con el mismo nombre, basta con:

```bash
pnpm sync:cristalimag -- --force
cd ../publicadis.com && vercel --prod --yes
```

## Totales objetivo

~85–120 imágenes activas (hasta 151 en biblioteca completa). El home solo usa ~12–18; el resto alimenta servicios, redes y catálogo.
