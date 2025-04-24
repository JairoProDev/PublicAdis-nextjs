# PublicAdis - Plataforma Publicitaria Premium

![PublicAdis Logo](./assets/images/logo.png)

## Descripción 📝

PublicAdis es una plataforma publicitaria premium diseñada específicamente para el mercado de Cusco. 
Ofrece soluciones publicitarias multicanal para diversos sectores empresariales, garantizando 
máxima visibilidad y resultados excepcionales para sus clientes.

## Características ✨

- **Diseño Premium**: Interfaz elegante y sofisticada con efectos visuales avanzados
- **Enfoque Multicanal**: Publicidad en web, aplicación móvil, revista digital, redes sociales y puntos físicos
- **Secciones Especializadas**: Servicios, sectores industriales, herramientas de negocio y testimonios
- **Funcionalidades Interactivas**: Sliders dinámicos, animaciones en scroll, formularios interactivos
- **Totalmente Responsive**: Diseño adaptable a cualquier dispositivo y tamaño de pantalla

## Tecnologías Utilizadas 🛠️

- HTML5, CSS3 y JavaScript (ES6+)
- Arquitectura de componentes modular
- Font Awesome para iconografía
- Google Fonts (Poppins)
- Animaciones CSS avanzadas y transiciones suaves
- Vite como bundler y servidor de desarrollo

## Requisitos Previos 📋

- Node.js (v14.0.0 o superior)
- npm (v6.0.0 o superior)

## Instalación 🚀

1. Clone el repositorio:
```bash
git clone https://github.com/tu-usuario/publicadis.git
cd publicadis
```

2. Instale las dependencias:
```bash
npm install
```

3. Inicie el servidor de desarrollo:
```bash
npm run dev
```

4. Abra su navegador y vaya a `http://localhost:5173`

## Compilación para Producción 📦

Para generar los archivos optimizados para producción:
```bash
npm run build
```

Los archivos compilados se encontrarán en el directorio `dist/`.

## Despliegue 🌐

Para realizar una vista previa del build:
```bash
npm run preview
```

## Estructura del Proyecto 📂

```
publicadis/
├── assets/                 # Recursos estáticos (imágenes, fuentes, etc.)
├── dist/                   # Archivos compilados para producción
├── src/                    # Código fuente
│   ├── components/         # Componentes JavaScript
│   │   ├── Benefits/       # Componente de Beneficios
│   │   ├── BusinessTools/  # Componente de Herramientas de Negocio
│   │   ├── Contact/        # Componente de Contacto
│   │   ├── Footer/         # Componente de Footer
│   │   ├── Header/         # Componente de Header
│   │   ├── Hero/           # Componente de Hero
│   │   ├── Sectors/        # Componente de Sectores
│   │   ├── Services/       # Componente de Servicios
│   │   └── Testimonials/   # Componente de Testimonios
│   ├── css/                # Estilos CSS específicos
│   │   └── premium.css     # Estilos Premium
│   ├── styles/             # Estilos CSS globales
│   │   └── main.css        # Estilos principales
│   └── main.js             # Punto de entrada JavaScript
├── index.html              # Página HTML principal
├── package.json            # Configuración de npm
└── vite.config.js          # Configuración de Vite
```

## Personalización 🎨

### Colores

Los colores principales pueden modificarse en los archivos CSS:

- `src/styles/main.css`: Variables CSS globales
- `src/css/premium.css`: Estilos premium y variables específicas

### Contenido

El contenido de cada sección se define en los respectivos componentes dentro de `src/components/`.

## Mantenimiento 🔧

### Extensión de Sectores

Para añadir nuevos sectores, modifique el array `sectors` en el archivo `src/components/Sectors/Sectors.js`.

### Añadir Testimonios

Para añadir nuevos testimonios, modifique el array `testimonials` en el archivo `src/components/Testimonials/Testimonials.js`.

### Nuevas Herramientas

Para añadir nuevas herramientas de negocio, modifique el objeto `tools` en el archivo `src/components/BusinessTools/BusinessTools.js`.

## Contribuciones 🤝

Las contribuciones son bienvenidas. Por favor, abra un issue o envíe un pull request para sugerir cambios o mejoras.

## Licencia 📄

Este proyecto está bajo la Licencia MIT - vea el archivo LICENSE para más detalles.

## Contacto 📧

- Email: publicadiss@gmail.com
- WhatsApp: +51 937 054 328
- Sitio: [www.publicadis.com](https://www.publicadis.com)
