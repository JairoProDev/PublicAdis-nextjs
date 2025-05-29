// Información del negocio
export const businessInfo = {
  name: 'Corporación QUIVAL',
  fullName: 'QUIVAL - Distribuidora Oficial de productos para Ferreterías en Cusco',
  description:
    'Distribuidora oficial de productos para Tu ferretería de confianza especializada en tuberías, pinturas, iluminación y herramientas de calidad',
  logo: 'https://via.placeholder.com/200x80/2563EB/FFFFFF?text=QUIVAL',

  contact: {
    phone: '+51 984 804 843',
    phone2: '+51 984 989 868',
    whatsapp: '+51 984 804 843',
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

// Productos del catálogo
export const catalogProducts = [
  // TUBERÍAS Y ACCESORIOS - TUBERÍAS DE DESAGÜE
  {
    id: 1,
    category: 'Tuberías y Accesorios',
    subcategory: 'Tuberías de Desagüe',
    brand: 'Gerfor',
    name: 'Tubo de Desagüe',
    details: '2"',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    category: 'Tuberías y Accesorios',
    subcategory: 'Tuberías de Desagüe',
    brand: 'Gerfor',
    name: 'Tubo de Desagüe',
    details: '3"',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 3,
    category: 'Tuberías y Accesorios',
    subcategory: 'Tuberías de Desagüe',
    brand: 'Gerfor',
    name: 'Tubo de Desagüe',
    details: '4"',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // TUBERÍAS DE AGUA
  {
    id: 4,
    category: 'Tuberías y Accesorios',
    subcategory: 'Tuberías de Agua',
    brand: 'Gerfor C-10',
    name: 'Tubo de Agua',
    details: '½, ¾',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&auto=format',
    inStock: true,
    featured: true,
  },
  {
    id: 5,
    category: 'Tuberías y Accesorios',
    subcategory: 'Tuberías de Agua',
    brand: 'Gerfor C-10',
    name: 'Tubo de Agua',
    details: '1, 1 ½',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 6,
    category: 'Tuberías y Accesorios',
    subcategory: 'Tuberías de Agua',
    brand: 'Gerfor C-10',
    name: 'Tubo de Agua',
    details: '2, 4',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // TUBERÍAS DE LUZ
  {
    id: 7,
    category: 'Tuberías y Accesorios',
    subcategory: 'Tuberías de Luz',
    brand: 'Gerfor',
    name: 'Tubo de Luz',
    details: '¾',
    image:
      'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 8,
    category: 'Tuberías y Accesorios',
    subcategory: 'Tuberías de Luz',
    brand: 'Gerfor',
    name: 'Tubo de Luz',
    details: '⅝',
    image:
      'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 9,
    category: 'Tuberías y Accesorios',
    subcategory: 'Tuberías de Luz',
    brand: 'Gerfor',
    name: 'Tubo de Luz',
    details: '1',
    image:
      'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // ACCESORIOS DE DESAGÜE
  {
    id: 10,
    category: 'Tuberías y Accesorios',
    subcategory: 'Accesorios de Desagüe',
    brand: 'Gerfor',
    name: 'Codo',
    details: '2 x 90',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 11,
    category: 'Tuberías y Accesorios',
    subcategory: 'Accesorios de Desagüe',
    brand: 'Gerfor',
    name: 'Codo',
    details: '2 x 45',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 12,
    category: 'Tuberías y Accesorios',
    subcategory: 'Accesorios de Desagüe',
    brand: 'Gerfor',
    name: 'Tee',
    details: '4 x 2',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 13,
    category: 'Tuberías y Accesorios',
    subcategory: 'Accesorios de Desagüe',
    brand: 'Gerfor',
    name: 'Yee',
    details: '4 x 2',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // ACCESORIOS PARA AGUA DE MEDIA
  {
    id: 14,
    category: 'Tuberías y Accesorios',
    subcategory: 'Accesorios para Agua de Media',
    brand: 'Gerfor',
    name: 'Codo',
    details: 'con Rosca',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 15,
    category: 'Tuberías y Accesorios',
    subcategory: 'Accesorios para Agua de Media',
    brand: 'Gerfor',
    name: 'Tee',
    details: 'con Rosca',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 16,
    category: 'Tuberías y Accesorios',
    subcategory: 'Accesorios para Agua de Media',
    brand: 'Gerfor',
    name: 'UPR',
    details: '½',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // MANGUERAS Y RIEGO
  {
    id: 17,
    category: 'Mangueras y Riego',
    subcategory: 'Mangueras',
    brand: '',
    name: 'Manguera Dúplex',
    details: '⅝',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 18,
    category: 'Mangueras y Riego',
    subcategory: 'Mangueras',
    brand: '',
    name: 'Manguera Dúplex',
    details: '¾',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format',
    inStock: true,
    featured: true,
  },
  {
    id: 19,
    category: 'Mangueras y Riego',
    subcategory: 'Mangueras',
    brand: '',
    name: 'Manguera para Riego Aspersor',
    details: '¾',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 20,
    category: 'Mangueras y Riego',
    subcategory: 'Accesorios de Riego Aspersor',
    brand: 'Poelsan',
    name: 'Enlace Recto R/H',
    details: '25x¾ c/fierro',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // PINTURAS Y ACCESORIOS - PINTURA LÁTEX
  {
    id: 21,
    category: 'Pinturas y Accesorios',
    subcategory: 'Pintura Látex',
    brand: 'Latexcolor',
    name: 'Pintura Látex Interiores & Exteriores',
    details: 'Blanco',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop&auto=format',
    inStock: true,
    featured: true,
  },
  {
    id: 22,
    category: 'Pinturas y Accesorios',
    subcategory: 'Pintura Látex',
    brand: 'Latexcolor',
    name: 'Pintura Látex Interiores & Exteriores',
    details: 'Celeste',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 23,
    category: 'Pinturas y Accesorios',
    subcategory: 'Pintura Látex',
    brand: 'Latexcolor',
    name: 'Pintura Látex Interiores & Exteriores',
    details: 'Azul Calipso',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 24,
    category: 'Pinturas y Accesorios',
    subcategory: 'Pintura Látex',
    brand: 'Latexcolor',
    name: 'Pintura Látex Interiores & Exteriores',
    details: 'Verde Esmeralda',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // PEGAMENTOS
  {
    id: 25,
    category: 'Pinturas y Accesorios',
    subcategory: 'Pegamentos',
    brand: 'Otey',
    name: 'Pegamento Otey Dorado',
    details: '1/64 con Brocha',
    image:
      'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 26,
    category: 'Pinturas y Accesorios',
    subcategory: 'Pegamentos',
    brand: 'Otey',
    name: 'Pegamento Otey Azul',
    details: '1/32 con Brocha',
    image:
      'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 27,
    category: 'Pinturas y Accesorios',
    subcategory: 'Pegamentos',
    brand: 'Africano',
    name: 'Pegamento Afrigueno',
    details: '1/32',
    image:
      'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // ESMALTES Y BARNICES
  {
    id: 28,
    category: 'Pinturas y Accesorios',
    subcategory: 'Esmaltes',
    brand: 'Franja Sintético',
    name: 'Esmalte Sintético',
    details: 'Blanco',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 29,
    category: 'Pinturas y Accesorios',
    subcategory: 'Barnices',
    brand: 'Franja',
    name: 'Barniz',
    details: 'Galón - Caoba',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // ILUMINACIÓN - FOCOS LED
  {
    id: 30,
    category: 'Iluminación',
    subcategory: 'Focos y Lámparas',
    brand: 'Ferlux',
    name: 'Foco LED',
    details: '7 Watts',
    image:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 31,
    category: 'Iluminación',
    subcategory: 'Focos y Lámparas',
    brand: 'Ferlux',
    name: 'Foco LED',
    details: '9 Watts',
    image:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&auto=format',
    inStock: true,
    featured: true,
  },
  {
    id: 32,
    category: 'Iluminación',
    subcategory: 'Focos y Lámparas',
    brand: 'Ashun',
    name: 'Foco LED',
    details: '15 Watts',
    image:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 33,
    category: 'Iluminación',
    subcategory: 'Focos y Lámparas',
    brand: 'Ulix',
    name: 'Foco LED Ulix',
    details: '50 Watts',
    image:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 34,
    category: 'Iluminación',
    subcategory: 'Focos y Lámparas',
    brand: 'Schubert',
    name: 'Lámpara de Emergencia',
    details: 'Tecnología LED, 8:30 horas',
    image:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // ACCESORIOS ELÉCTRICOS
  {
    id: 35,
    category: 'Accesorios Eléctricos',
    subcategory: 'Varios Eléctricos',
    brand: 'Bticino',
    name: 'Tomacorriente Simple',
    details: '',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 36,
    category: 'Accesorios Eléctricos',
    subcategory: 'Varios Eléctricos',
    brand: 'Bticino',
    name: 'Interruptor Simple',
    details: '',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 37,
    category: 'Accesorios Eléctricos',
    subcategory: 'Varios Eléctricos',
    brand: 'Indeco',
    name: 'Cable Mellizo',
    details: '2x12',
    image:
      'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 38,
    category: 'Accesorios Eléctricos',
    subcategory: 'Varios Eléctricos',
    brand: '3M',
    name: 'Cinta Aislante',
    details: 'Grande',
    image:
      'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // GRIFERÍA
  {
    id: 39,
    category: 'Grifería',
    subcategory: 'Llaves y Caños',
    brand: 'Schubert',
    name: 'Llave Ganso',
    details: '',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop&auto=format',
    inStock: true,
    featured: true,
  },
  {
    id: 40,
    category: 'Grifería',
    subcategory: 'Llaves y Caños',
    brand: 'Schubert',
    name: 'Llave para Ducha',
    details: '',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 41,
    category: 'Grifería',
    subcategory: 'Llaves y Caños',
    brand: 'Trebol',
    name: 'Mezcladora Lavatorio',
    details: '',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 42,
    category: 'Grifería',
    subcategory: 'Llaves y Caños',
    brand: 'Vainsa',
    name: 'Mezcladora Lavatorio',
    details: '',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // FERRETERÍA VARIOS
  {
    id: 43,
    category: 'Ferretería Varios',
    subcategory: 'Herramientas y Consumibles',
    brand: 'Schubert',
    name: 'Candado',
    details: 'Nº50',
    image:
      'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 44,
    category: 'Ferretería Varios',
    subcategory: 'Herramientas y Consumibles',
    brand: '3M',
    name: 'Disco de Corte',
    details: '4½',
    image:
      'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 45,
    category: 'Ferretería Varios',
    subcategory: 'Tapas, Cera, Anillos',
    brand: '',
    name: 'Tapa de Agua',
    details: '',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 46,
    category: 'Ferretería Varios',
    subcategory: 'Tapas, Cera, Anillos',
    brand: '',
    name: 'Cera',
    details: 'x Galón',
    image:
      'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },

  // PLÁSTICOS, MALLAS Y ARPILLERAS
  {
    id: 47,
    category: 'Plásticos, Mallas y Arpilleras',
    subcategory: 'Plásticos',
    brand: '',
    name: 'Plástico Simple',
    details: '2m',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 48,
    category: 'Plásticos, Mallas y Arpilleras',
    subcategory: 'Arpilleras',
    brand: '',
    name: 'Arpillera Estándar',
    details: '2 x 200 (Blanco, Azul, Negro)',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 49,
    category: 'Plásticos, Mallas y Arpilleras',
    subcategory: 'Mallas Raschel',
    brand: '',
    name: 'Malla Raschel Económica',
    details: '50% Verde',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
  {
    id: 50,
    category: 'Plásticos, Mallas y Arpilleras',
    subcategory: 'Otras Mallas',
    brand: '',
    name: 'Malla Mosquetero',
    details: '90 x 30',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format',
    inStock: true,
  },
];

// Obtener categorías únicas
export const getCategories = () => {
  const categories = [...new Set(catalogProducts.map(product => product.category))];
  return categories.map(category => ({
    name: category,
    count: catalogProducts.filter(p => p.category === category).length,
    subcategories: [
      ...new Set(catalogProducts.filter(p => p.category === category).map(p => p.subcategory)),
    ],
  }));
};

// Obtener subcategorías por categoría
export const getSubcategories = category => {
  return [...new Set(catalogProducts.filter(p => p.category === category).map(p => p.subcategory))];
};

// Obtener marcas únicas
export const getBrands = () => {
  return [...new Set(catalogProducts.map(product => product.brand).filter(brand => brand))];
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
        product.brand.toLowerCase().includes(searchQuery) ||
        product.details.toLowerCase().includes(searchQuery)
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

  // Filtro por disponibilidad
  if (filters.inStock) {
    results = results.filter(product => product.inStock);
  }

  // Filtro por productos destacados
  if (filters.featured) {
    results = results.filter(product => product.featured);
  }

  return results;
};

// Obtener productos destacados
export const getFeaturedProducts = () => {
  return catalogProducts.filter(product => product.featured);
};

// Obtener producto por ID
export const getProductById = id => {
  return catalogProducts.find(product => product.id === parseInt(id));
};
