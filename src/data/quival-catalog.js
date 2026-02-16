// Información del negocio
export const businessInfo = {
  name: 'Corporación QUIVAL',
  fullName: 'QUIVAL - Distribuidora Oficial de productos para Ferreterías en Cusco',
  description:
    'Distribuidora oficial de productos para Tu ferretería de confianza especializada en tuberías, pinturas, iluminación y herramientas de calidad',
  logo: '/product-placeholder.svg',
  contact: {
    phone: '+51 984 804 843',
    phone2: '+51 984 989 866',
    whatsapp: '+51 984 804 843',
    whatsapp2: '+51 984 989 866',
    email: 'corporacionquival@gmail.com',
    website: 'https://publicadis.com/quival',
  },
  location: {
    address: 'Av. Fernando Tupac Amaru K-9 Via de Evitamiento - San Sebastián Cusco',
    district: 'San Sebastián',
    city: 'Cusco',
    coordinates: {
      lat: -13.516666666666667,
      lng: -71.90999997534256,
    },
  },
  schedule: {
    weekdays: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    saturday: 'Sábados: 8:00 AM - 2:00 PM',
    sunday: 'Domingos: Cerrado',
  },
  services: [
    'Venta al por mayor y menor',
    'Asesoría técnica especializada',
    'Delivery en Cusco',
    'Cotizaciones para proyectos',
    'Garantía en todos nuestros productos',
  ],
  social: {
    facebook: 'https://facebook.com/quival',
    instagram: 'https://instagram.com/quival',
    tiktok: 'https://tiktok.com/@quival',
  },
};

// Estructura de categorías y productos
export const catalog = [
  {
    categoryName: 'Tuberías y Accesorios',
    subcategories: [
      {
        subcategoryName: 'Tuberías de Desagüe',
        brands: [
          {
            brandName: 'Gerfor',
            products: [
              {
                id: 1,
                name: 'Tubo de Desagüe',
                details: '2"',
                image: '/product-placeholder.svg',
              },
              {
                id: 2,
                name: 'Tubo de Desagüe',
                details: '3"',
                image: '/product-placeholder.svg',
              },
              {
                id: 3,
                name: 'Tubo de Desagüe',
                details: '4"',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
      {
        subcategoryName: 'Tuberías de Agua',
        brands: [
          {
            brandName: 'Gerfor C-10',
            products: [
              {
                id: 4,
                name: 'Tubo de Agua',
                details: '½, ¾',
                image: '/product-placeholder.svg',
              },
              {
                id: 5,
                name: 'Tubo de Agua',
                details: '1, 1 ½',
                image: '/product-placeholder.svg',
              },
              {
                id: 6,
                name: 'Tubo de Agua',
                details: '2, 4',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
      {
        subcategoryName: 'Tuberías de Luz',
        brands: [
          {
            brandName: 'Gerfor',
            products: [
              {
                id: 7,
                name: 'Tubo de Luz',
                details: '¾',
                image: '/product-placeholder.svg',
              },
              {
                id: 8,
                name: 'Tubo de Luz',
                details: '⅝',
                image: '/product-placeholder.svg',
              },
              {
                id: 9,
                name: 'Tubo de Luz',
                details: '1',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
      {
        subcategoryName: 'Tuberías de Alcantarillado',
        brands: [
          {
            brandName: 'Gerfor',
            products: [
              {
                id: 10,
                name: 'Tubo Alcantarillado',
                details: '110mm 2.1mm S-25',
                image: '/product-placeholder.svg',
              },
              {
                id: 11,
                name: 'Tubo Alcantarillado',
                details: '110mm 2.1mm SN2 S-25',
                image: '/product-placeholder.svg',
              },
              {
                id: 12,
                name: 'Tubo Alcantarillado',
                details: '160mm 1.7mm S-33',
                image: '/product-placeholder.svg',
              },
              {
                id: 13,
                name: 'Tubo Alcantarillado',
                details: '160mm 2.5mm S-2.5',
                image: '/product-placeholder.svg',
              },
              {
                id: 14,
                name: 'Tubo Alcantarillado',
                details: '160mm S-25 SN2',
                image: '/product-placeholder.svg',
              },
              {
                id: 15,
                name: 'Tubo Alcantarillado',
                details: '160mm S-20 SN4',
                image: '/product-placeholder.svg',
              },
              {
                id: 16,
                name: 'Tubo Alcantarillado',
                details: '200mm 3.2mm S-25',
                image: '/product-placeholder.svg',
              },
              {
                id: 17,
                name: 'Tubo Alcantarillado',
                details: '200mm SN2 S-25',
                image: '/product-placeholder.svg',
              },
              {
                id: 18,
                name: 'Tubo Alcantarillado',
                details: '200mm SN4 S-20',
                image: '/product-placeholder.svg',
              },
              {
                id: 19,
                name: 'Tubo Alcantarillado',
                details: '250mm S-25 SN2',
                image: '/product-placeholder.svg',
              },
              {
                id: 20,
                name: 'Tubo Alcantarillado',
                details: '250mm S-20 SN4',
                image: '/product-placeholder.svg',
              },
              {
                id: 21,
                name: 'Tubo Alcantarillado',
                details: '315mm S-25 SN2',
                image: '/product-placeholder.svg',
              },
              {
                id: 22,
                name: 'Tubo Alcantarillado',
                details: '315mm S-20 SN4',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
      {
        subcategoryName: 'Accesorios de Desagüe',
        brands: [
          {
            brandName: 'Gerfor',
            products: [
              {
                id: 23,
                name: 'Codo',
                details: '2 x 90',
                image: '/product-placeholder.svg',
              },
              {
                id: 24,
                name: 'Codo',
                details: '2 x 45',
                image: '/product-placeholder.svg',
              },
              {
                id: 25,
                name: 'Codo',
                details: '3 x 90',
                image: '/product-placeholder.svg',
              },
              {
                id: 26,
                name: 'Codo',
                details: '3 x 45',
                image: '/product-placeholder.svg',
              },
              {
                id: 27,
                name: 'Codo',
                details: '4 x 90',
                image: '/product-placeholder.svg',
              },
              {
                id: 28,
                name: 'Codo',
                details: '4 x 45',
                image: '/product-placeholder.svg',
              },
              {
                id: 29,
                name: 'Tee',
                details: '4 x 2',
                image: '/product-placeholder.svg',
              },
              {
                id: 30,
                name: 'Yee',
                details: '4 x 2',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    categoryName: 'Mangueras y Riego',
    subcategories: [
      {
        subcategoryName: 'Mangueras',
        brands: [
          {
            brandName: 'Varios',
            products: [
              {
                id: 90,
                name: 'Manguera Dúplex',
                details: '⅝',
                image: '/product-placeholder.svg',
              },
              {
                id: 91,
                name: 'Manguera Dúplex',
                details: '¾',
                image: '/product-placeholder.svg',
              },
              {
                id: 92,
                name: 'Manguera Dúplex',
                details: '1',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
      {
        subcategoryName: 'Accesorios de Riego Aspersor',
        brands: [
          {
            brandName: 'Poelsan',
            products: [
              {
                id: 103,
                name: 'Enlace Recto R/H',
                details: '25x¾ c/fierro',
                image: '/product-placeholder.svg',
              },
              {
                id: 104,
                name: 'Enlace Recto R/H',
                details: '32x1',
                image: '/product-placeholder.svg',
              },
              {
                id: 105,
                name: 'Enlace Recto',
                details: '25 x 25',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    categoryName: 'Pinturas y Accesorios',
    subcategories: [
      {
        subcategoryName: 'Pintura Látex',
        brands: [
          {
            brandName: 'Latexcolor',
            products: [
              {
                id: 113,
                name: 'Pintura Látex Interiores & Exteriores',
                details: 'Celeste',
                image: '/product-placeholder.svg',
              },
              {
                id: 114,
                name: 'Pintura Látex Interiores & Exteriores',
                details: 'Ártico',
                image: '/product-placeholder.svg',
              },
              {
                id: 115,
                name: 'Pintura Látex Interiores & Exteriores',
                details: 'Azul Calipso',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
      {
        subcategoryName: 'Pegamentos',
        brands: [
          {
            brandName: 'Otey',
            products: [
              {
                id: 143,
                name: 'Pegamento Otey Dorado',
                details: '1/64 sin Brocha',
                image: '/product-placeholder.svg',
              },
              {
                id: 144,
                name: 'Pegamento Otey Dorado',
                details: '1/64 con Brocha',
                image: '/product-placeholder.svg',
              },
              {
                id: 145,
                name: 'Pegamento Otey Azul',
                details: '1/64 con Brocha',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    categoryName: 'Plásticos, Mallas y Arpilleras',
    subcategories: [
      {
        subcategoryName: 'Plásticos',
        brands: [
          {
            brandName: 'Varios',
            products: [
              {
                id: 298,
                name: 'Plástico Simple Bolillito',
                details: 'Azul',
                image: '/product-placeholder.svg',
              },
              {
                id: 299,
                name: 'Plástico Simple',
                details: '2m',
                image: '/product-placeholder.svg',
              },
              {
                id: 300,
                name: 'Plástico Simple',
                details: 'Colores',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
      {
        subcategoryName: 'Arpilleras',
        brands: [
          {
            brandName: 'Varios',
            products: [
              {
                id: 308,
                name: 'Arpillera Estándar',
                details: '2 x 200 (Blanco, Azul, Negro)',
                image: '/product-placeholder.svg',
              },
              {
                id: 309,
                name: 'Arpillera Estándar',
                details: '3 x 200 (Blanco, Azul, Negro)',
                image: '/product-placeholder.svg',
              },
              {
                id: 310,
                name: 'Arpillera Estándar',
                details: '4 x 200 (Blanco, Azul, Negro)',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    categoryName: 'Iluminación',
    subcategories: [
      {
        subcategoryName: 'Focos y Lámparas',
        brands: [
          {
            brandName: 'Ferlux',
            products: [
              {
                id: 325,
                name: 'Foco LED',
                details: '7 Watts',
                image: '/product-placeholder.svg',
              },
              {
                id: 326,
                name: 'Foco LED',
                details: '9 Watts',
                image: '/product-placeholder.svg',
              },
              {
                id: 327,
                name: 'Foco LED',
                details: '15 Watts',
                image: '/product-placeholder.svg',
              },
              {
                id: 328,
                name: 'Foco LED',
                details: '24 Watts',
                image: '/product-placeholder.svg',
              },
            ],
          },
          {
            brandName: 'Ashun',
            products: [
              {
                id: 329,
                name: 'Foco LED',
                details: '3 Watts',
                image: '/product-placeholder.svg',
              },
              {
                id: 330,
                name: 'Foco LED',
                details: '5 Watts',
                image: '/product-placeholder.svg',
              },
              {
                id: 331,
                name: 'Foco LED',
                details: '7 Watts',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    categoryName: 'Accesorios Eléctricos',
    subcategories: [
      {
        subcategoryName: 'Varios Eléctricos',
        brands: [
          {
            brandName: 'Bticino (Alternativo)',
            products: [
              {
                id: 356,
                name: 'Tomacorriente Simple Sapito',
                details: '',
                image: '/product-placeholder.svg',
              },
              {
                id: 357,
                name: 'Interruptor Simple Sapito',
                details: '',
                image: '/product-placeholder.svg',
              },
              {
                id: 358,
                name: 'Tomacorriente Doble',
                details: '',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    categoryName: 'Grifería',
    subcategories: [
      {
        subcategoryName: 'Llaves y Caños',
        brands: [
          {
            brandName: 'Schubert',
            products: [
              {
                id: 394,
                name: 'Llave Ganso',
                details: '',
                image: '/product-placeholder.svg',
              },
              {
                id: 395,
                name: 'Tubo de Abasto o Chicote',
                details: '½ x ½',
                image: '/product-placeholder.svg',
              },
              {
                id: 396,
                name: 'Llave para Ducha',
                details: '',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    categoryName: 'Ferretería Varios',
    subcategories: [
      {
        subcategoryName: 'Tapas, Cera, Anillos',
        brands: [
          {
            brandName: 'Varios',
            products: [
              {
                id: 414,
                name: 'Tapa de Agua',
                details: '',
                image: '/product-placeholder.svg',
              },
              {
                id: 415,
                name: 'Tapa de Desagüe',
                details: '',
                image: '/product-placeholder.svg',
              },
              {
                id: 416,
                name: 'Cera',
                details: 'x Galón',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
      {
        subcategoryName: 'Herramientas y Consumibles',
        brands: [
          {
            brandName: 'Varios',
            products: [
              {
                id: 422,
                name: 'Clavo para Calamina',
                details: 'con Empaque',
                image: '/product-placeholder.svg',
              },
              {
                id: 423,
                name: 'Driza',
                details: '½',
                image: '/product-placeholder.svg',
              },
              {
                id: 424,
                name: 'Driza',
                details: '⅞',
                image: '/product-placeholder.svg',
              },
            ],
          },
        ],
      },
    ],
  },
];

// Lista plana de todos los productos para facilitar búsquedas
export const catalogProducts = [];

// Función para extraer todos los productos a la lista plana
const extractProducts = () => {
  catalog.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.brands.forEach(brand => {
        brand.products.forEach(product => {
          catalogProducts.push({
            ...product,
            category: category.categoryName,
            subcategory: subcategory.subcategoryName,
            brand: brand.brandName,
            inStock: true,
          });
        });
      });
    });
  });
};

// Extraer productos al inicializarse el módulo
extractProducts();

// Obtener categorías únicas con conteo de productos
export const getCategories = () => {
  const categories = [...new Set(catalogProducts.map(product => product.category))];
  return categories.map(category => ({
    name: category,
    count: catalogProducts.filter(p => p.category === category).length,
  }));
};

// Obtener todas las marcas únicas
export const getBrands = () => {
  const brands = catalogProducts
    .map(product => product.brand)
    .filter(brand => brand)
    .filter((brand, index, self) => self.indexOf(brand) === index);
  return brands;
};

// Obtener todas las medidas únicas desde los detalles de los productos
export const getProductMeasures = () => {
  const measures = catalogProducts
    .map(product => product.details)
    .filter(details => details)
    .filter((details, index, self) => self.indexOf(details) === index);
  return measures;
};

// Buscar productos
export const searchProducts = (query, filters = {}) => {
  let results = catalogProducts;

  // Filtro por texto
  if (query) {
    const searchQuery = query.toLowerCase();
    results = results.filter(
      product =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery) ||
        product.subcategory.toLowerCase().includes(searchQuery) ||
        (product.brand && product.brand.toLowerCase().includes(searchQuery)) ||
        (product.details && product.details.toLowerCase().includes(searchQuery))
    );
  }

  // Filtro por categoría
  if (filters.category) {
    results = results.filter(product => product.category === filters.category);
  }

  // Filtro por subcategoría
  if (filters.subcategory) {
    results = results.filter(product => product.subcategory === filters.subcategory);
  }

  // Filtro por marca
  if (filters.brand) {
    results = results.filter(product => product.brand === filters.brand);
  }

  // Filtro por medida
  if (filters.measure) {
    results = results.filter(product => product.details === filters.measure);
  }

  // Filtro por disponibilidad
  if (filters.inStock) {
    results = results.filter(product => product.inStock);
  }

  return results;
};

// Obtener productos destacados
export const getFeaturedProducts = () => {
  return catalogProducts.filter(product => product.featured);
};
