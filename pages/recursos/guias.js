import React, { useState, useEffect } from 'react';
import Layout from '../../src/components/Layout';
import Link from 'next/link';
// Asegúrate de tener Font Awesome configurado en tu proyecto si aún no lo tienes.
// Puedes instalarlo con: npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
// O usar la versión CDN en tu _app.js o Layout.
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShareAlt, faMapMarkerAlt, faEnvelope, faMousePointer, faChartBar, faFileAlt, faCopyright, faAd, faBullhorn, faStore, faLightbulb, faTools, faVideo, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Guides() {
  const allGuides = [
    // Tus 6 guías originales
    {
      id: 1,
      title: 'Guía para crear anuncios efectivos en redes sociales',
      description: 'Aprende a diseñar anuncios que capturen la atención y generen conversiones en las principales plataformas sociales.',
      category: 'Redes Sociales',
      level: 'Principiante',
      image: '/placeholder/guide-1.jpg', // Reemplaza con imagen real
      slug: 'crear-anuncios-efectivos-redes-sociales',
    },
    {
      id: 2,
      title: 'Cómo optimizar tu presencia en Google My Business',
      description: 'Maximiza la visibilidad de tu negocio local con esta guía paso a paso para configurar y optimizar tu perfil en Google My Business.',
      category: 'SEO Local',
      level: 'Intermedio',
      image: '/placeholder/guide-2.jpg', // Reemplaza con imagen real
      slug: 'optimizar-presencia-google-my-business',
    },
    {
      id: 3,
      title: 'Guía de email marketing para pequeños negocios',
      description: 'Estrategias prácticas para crear campañas de email marketing efectivas que aumenten tus ventas sin grandes inversiones.',
      category: 'Email Marketing',
      level: 'Principiante',
      image: '/placeholder/guide-3.jpg', // Reemplaza con imagen real
      slug: 'email-marketing-pequenos-negocios',
    },
    {
      id: 4,
      title: 'Fundamentos de publicidad PPC para principiantes',
      description: 'Todo lo que necesitas saber para comenzar con campañas de pago por clic en Google Ads y Facebook Ads.',
      category: 'PPC',
      level: 'Principiante',
      image: '/placeholder/guide-4.jpg', // Reemplaza con imagen real
      slug: 'fundamentos-publicidad-ppc-principiantes',
    },
    {
      id: 5,
      title: 'Análisis de datos publicitarios: métricas clave',
      description: 'Aprende a interpretar los datos de tus campañas publicitarias para tomar decisiones basadas en resultados reales.',
      category: 'Análisis',
      level: 'Avanzado',
      image: '/placeholder/guide-5.jpg', // Reemplaza con imagen real
      slug: 'analisis-datos-publicitarios-metricas-clave',
    },
    {
      id: 6,
      title: 'Calendario editorial para contenido de valor',
      description: 'Cómo planificar, crear y distribuir contenido relevante para tu audiencia de manera consistente y estratégica.',
      category: 'Contenidos',
      level: 'Intermedio',
      image: '/placeholder/guide-6.jpg', // Reemplaza con imagen real
      slug: 'calendario-editorial-contenido-valor',
    },
    // 42 Nuevas Guías
    {
      id: 7,
      title: 'Introducción al Branding para Startups',
      description: 'Construye una marca sólida desde cero. Principios básicos y estrategias efectivas para startups y nuevos emprendimientos.',
      category: 'Branding',
      level: 'Principiante',
      image: '/placeholder/guide-7.jpg',
      slug: 'introduccion-branding-startups',
    },
    {
      id: 8,
      title: 'Estrategias de Publicidad Nativa Efectiva',
      description: 'Descubre cómo integrar anuncios de forma natural en el contenido para mejorar la experiencia del usuario y los resultados.',
      category: 'Publicidad',
      level: 'Intermedio',
      image: '/placeholder/guide-8.jpg',
      slug: 'estrategias-publicidad-nativa-efectiva',
    },
    {
      id: 9,
      title: 'Marketing de Influencers: Colaboraciones Exitosas',
      description: 'Aprende a identificar, contactar y colaborar con influencers para potenciar el alcance de tu marca.',
      category: 'Redes Sociales',
      level: 'Intermedio',
      image: '/placeholder/guide-9.jpg',
      slug: 'marketing-influencers-colaboraciones-exitosas',
    },
    {
      id: 10,
      title: 'SEO Técnico Avanzado: Optimización Web Profunda',
      description: 'Conceptos clave de SEO técnico como crawl budget, sitemaps avanzados, y datos estructurados para expertos.',
      category: 'SEO Avanzado',
      level: 'Avanzado',
      image: '/placeholder/guide-10.jpg',
      slug: 'seo-tecnico-avanzado-optimizacion-web',
    },
    {
      id: 11,
      title: 'Automatización del Email Marketing con Workflows',
      description: 'Crea secuencias de correos automatizadas para nutrir leads, recuperar carritos abandonados y fidelizar clientes.',
      category: 'Email Marketing',
      level: 'Avanzado',
      image: '/placeholder/guide-11.jpg',
      slug: 'automatizacion-email-marketing-workflows',
    },
    {
      id: 12,
      title: 'Publicidad Programática: Guía Completa',
      description: 'Entiende el ecosistema de la compra programática de medios y cómo optimizar tus campañas RTB.',
      category: 'PPC',
      level: 'Avanzado',
      image: '/placeholder/guide-12.jpg',
      slug: 'publicidad-programatica-guia-completa',
    },
    {
      id: 13,
      title: 'Creación de Landing Pages que Convierten',
      description: 'Diseño, copywriting y elementos esenciales para construir páginas de aterrizaje optimizadas para la conversión.',
      category: 'Diseño Web',
      level: 'Intermedio',
      image: '/placeholder/guide-13.jpg',
      slug: 'creacion-landing-pages-convierten',
    },
    {
      id: 14,
      title: 'Marketing de Contenidos para E-commerce',
      description: 'Estrategias de contenido específicas para tiendas online: descripciones de producto, blogs, y guías de compra.',
      category: 'E-commerce',
      level: 'Intermedio',
      image: '/placeholder/guide-14.jpg',
      slug: 'marketing-contenidos-ecommerce',
    },
    {
      id: 15,
      title: 'Google Analytics 4: Primeros Pasos y Configuración',
      description: 'Migra y configura GA4 para entender mejor el comportamiento de tus usuarios en la nueva era del análisis web.',
      category: 'Análisis',
      level: 'Principiante',
      image: '/placeholder/guide-15.jpg',
      slug: 'google-analytics-4-primeros-pasos',
    },
    {
      id: 16,
      title: 'Publicidad en TikTok: Guía para Empresas',
      description: 'Aprovecha el potencial de TikTok para llegar a nuevas audiencias con campañas creativas y efectivas.',
      category: 'Redes Sociales',
      level: 'Principiante',
      image: '/placeholder/guide-16.jpg',
      slug: 'publicidad-tiktok-guia-empresas',
    },
    {
      id: 17,
      title: 'Storytelling para Marcas: Conecta Emocionalmente',
      description: 'Aprende a contar historias que resuenen con tu audiencia y fortalezcan la identidad de tu marca.',
      category: 'Branding',
      level: 'Intermedio',
      image: '/placeholder/guide-17.jpg',
      slug: 'storytelling-marcas-conecta-emocionalmente',
    },
    {
      id: 18,
      title: 'Optimización de Tasa de Conversión (CRO) Esencial',
      description: 'Principios y técnicas básicas para mejorar el porcentaje de visitantes que realizan una acción deseada en tu web.',
      category: 'Análisis',
      level: 'Intermedio',
      image: '/placeholder/guide-18.jpg',
      slug: 'optimizacion-tasa-conversion-cro-esencial',
    },
    {
      id: 19,
      title: 'Marketing Digital para Negocios Locales',
      description: 'Estrategias integrales para que pequeños negocios con presencia física aumenten su visibilidad y clientes online.',
      category: 'Marketing Digital',
      level: 'Principiante',
      image: '/placeholder/guide-19.jpg',
      slug: 'marketing-digital-negocios-locales',
    },
    {
      id: 20,
      title: 'Video Marketing: Creación y Distribución de Contenido',
      description: 'Desde la planificación y grabación hasta la optimización y promoción de tus videos en diferentes plataformas.',
      category: 'Video Marketing',
      level: 'Intermedio',
      image: '/placeholder/guide-20.jpg',
      slug: 'video-marketing-creacion-distribucion',
    },
    {
      id: 21,
      title: 'Growth Hacking: Tácticas para Crecimiento Rápido',
      description: 'Introduce los conceptos de growth hacking y explora tácticas innovadoras para acelerar el crecimiento de tu startup.',
      category: 'Growth Hacking',
      level: 'Intermedio',
      image: '/placeholder/guide-21.jpg',
      slug: 'growth-hacking-tacticas-crecimiento-rapido',
    },
    {
      id: 22,
      title: 'Publicidad en LinkedIn para Negocios B2B',
      description: 'Segmentación, formatos de anuncios y estrategias para generar leads de calidad en la red profesional LinkedIn.',
      category: 'Redes Sociales',
      level: 'Avanzado',
      image: '/placeholder/guide-22.jpg',
      slug: 'publicidad-linkedin-negocios-b2b',
    },
    {
      id: 23,
      title: 'Internacionalización de E-commerce: Guía Práctica',
      description: 'Pasos clave para expandir tu tienda online a mercados internacionales: logística, pagos, y marketing adaptado.',
      category: 'E-commerce',
      level: 'Avanzado',
      image: '/placeholder/guide-23.jpg',
      slug: 'internacionalizacion-ecommerce-guia-practica',
    },
    {
      id: 24,
      title: 'Copywriting Persuasivo para Ventas Online',
      description: 'Técnicas de escritura que incitan a la acción, desde titulares hasta llamadas a la acción efectivas.',
      category: 'Contenidos',
      level: 'Intermedio',
      image: '/placeholder/guide-24.jpg',
      slug: 'copywriting-persuasivo-ventas-online',
    },
    {
      id: 25,
      title: 'Manejo de Reputación Online para Empresas',
      description: 'Estrategias para monitorizar, gestionar y mejorar la percepción de tu marca en el entorno digital.',
      category: 'Branding',
      level: 'Intermedio',
      image: '/placeholder/guide-25.jpg',
      slug: 'manejo-reputacion-online-empresas',
    },
    {
      id: 26,
      title: 'Publicidad en Instagram: Formatos y Estrategias',
      description: 'Domina los anuncios en Instagram, desde Stories hasta Reels, para alcanzar tus objetivos de marketing.',
      category: 'Redes Sociales',
      level: 'Principiante',
      image: '/placeholder/guide-26.jpg',
      slug: 'publicidad-instagram-formatos-estrategias',
    },
    {
      id: 27,
      title: 'SEO para Blogs: Aumenta tu Tráfico Orgánico',
      description: 'Optimiza tus artículos de blog para los motores de búsqueda y atrae más lectores de forma natural.',
      category: 'SEO General',
      level: 'Intermedio',
      image: '/placeholder/guide-27.jpg',
      slug: 'seo-para-blogs-aumenta-trafico-organico',
    },
    {
      id: 28,
      title: 'Marketing de Afiliados para Principiantes',
      description: 'Descubre cómo funciona el marketing de afiliados y cómo puedes empezar a generar ingresos promocionando productos de otros.',
      category: 'Marketing de Afiliados',
      level: 'Principiante',
      image: '/placeholder/guide-28.jpg',
      slug: 'marketing-afiliados-principiantes',
    },
    {
      id: 29,
      title: 'Herramientas Esenciales de Marketing Digital para PyMEs',
      description: 'Un compendio de herramientas gratuitas y de pago que te ayudarán a gestionar y optimizar tus esfuerzos de marketing.',
      category: 'Herramientas Digitales',
      level: 'Principiante',
      image: '/placeholder/guide-29.jpg',
      slug: 'herramientas-esenciales-marketing-digital-pymes',
    },
    {
      id: 30,
      title: 'Cómo Crear un Plan de Marketing Digital Efectivo',
      description: 'Guía paso a paso para definir objetivos, estrategias, tácticas y KPIs para tu plan de marketing.',
      category: 'Marketing Digital',
      level: 'Intermedio',
      image: '/placeholder/guide-30.jpg',
      slug: 'crear-plan-marketing-digital-efectivo',
    },
    {
      id: 31,
      title: 'Podcast para Negocios: Producción y Promoción',
      description: 'Aprende a crear y lanzar un podcast como herramienta de marketing de contenidos y branding para tu empresa.',
      category: 'Contenidos',
      level: 'Intermedio',
      image: '/placeholder/guide-31.jpg',
      slug: 'podcast-para-negocios-produccion-promocion',
    },
    {
      id: 32,
      title: 'Remarketing Inteligente: Recupera Visitantes',
      description: 'Estrategias avanzadas de remarketing para reconectar con usuarios que visitaron tu web pero no convirtieron.',
      category: 'PPC',
      level: 'Avanzado',
      image: '/placeholder/guide-32.jpg',
      slug: 'remarketing-inteligente-recupera-visitantes',
    },
    {
      id: 33,
      title: 'Diseño UX/UI para Sitios de E-commerce',
      description: 'Principios de experiencia de usuario e interfaz para tiendas online que facilitan la navegación y aumentan ventas.',
      category: 'Diseño Web',
      level: 'Avanzado',
      image: '/placeholder/guide-33.jpg',
      slug: 'diseno-ux-ui-sitios-ecommerce',
    },
    {
      id: 34,
      title: 'Ciberseguridad Básica para Emprendedores Online',
      description: 'Protege tu negocio digital de amenazas comunes con esta guía introductoria a la ciberseguridad.',
      category: 'Emprendimiento',
      level: 'Principiante',
      image: '/placeholder/guide-34.jpg',
      slug: 'ciberseguridad-basica-emprendedores-online',
    },
    {
      id: 35,
      title: 'Análisis Competitivo en Marketing Digital',
      description: 'Cómo investigar a tu competencia para identificar oportunidades y mejorar tus propias estrategias.',
      category: 'Análisis',
      level: 'Intermedio',
      image: '/placeholder/guide-35.jpg',
      slug: 'analisis-competitivo-marketing-digital',
    },
    {
      id: 36,
      title: 'Publicidad en YouTube: Guía Completa',
      description: 'Formatos de anuncios, segmentación y optimización de campañas en la plataforma de video más grande del mundo.',
      category: 'Video Marketing',
      level: 'Intermedio',
      image: '/placeholder/guide-36.jpg',
      slug: 'publicidad-youtube-guia-completa',
    },
    {
      id: 37,
      title: 'Content Pruning: Mejora tu SEO Eliminando Contenido',
      description: 'Aprende la técnica de podar contenido obsoleto o de baja calidad para potenciar el SEO general de tu sitio.',
      category: 'SEO Avanzado',
      level: 'Avanzado',
      image: '/placeholder/guide-37.jpg',
      slug: 'content-pruning-mejora-seo',
    },
    {
      id: 38,
      title: 'Chatbots para Atención al Cliente y Ventas',
      description: 'Implementa chatbots en tu web y redes sociales para automatizar respuestas y mejorar la experiencia del cliente.',
      category: 'Herramientas Digitales',
      level: 'Intermedio',
      image: '/placeholder/guide-38.jpg',
      slug: 'chatbots-atencion-cliente-ventas',
    },
    {
      id: 39,
      title: 'Personalización en Marketing: Estrategias Clave',
      description: 'Ofrece experiencias personalizadas a tus usuarios para aumentar el engagement y las conversiones.',
      category: 'Marketing Digital',
      level: 'Avanzado',
      image: '/placeholder/guide-39.jpg',
      slug: 'personalizacion-marketing-estrategias-clave',
    },
    {
      id: 40,
      title: 'Gamificación en Estrategias de Marketing',
      description: 'Incorpora elementos de juego en tus campañas para aumentar la participación y lealtad de los usuarios.',
      category: 'Marketing Digital',
      level: 'Intermedio',
      image: '/placeholder/guide-40.jpg',
      slug: 'gamificacion-estrategias-marketing',
    },
    {
      id: 41,
      title: 'Networking Efectivo para Emprendedores',
      description: 'Desarrolla habilidades y estrategias para construir una red de contactos valiosa para tu negocio.',
      category: 'Emprendimiento',
      level: 'Principiante',
      image: '/placeholder/guide-41.jpg',
      slug: 'networking-efectivo-emprendedores',
    },
    {
      id: 42,
      title: 'Finanzas Básicas para Dueños de Pequeños Negocios',
      description: 'Conceptos financieros esenciales que todo emprendedor debe conocer para la salud de su empresa.',
      category: 'Emprendimiento',
      level: 'Principiante',
      image: '/placeholder/guide-42.jpg',
      slug: 'finanzas-basicas-pequenos-negocios',
    },
    {
      id: 43,
      title: 'Medición de ROI en Campañas de Publicidad',
      description: 'Calcula el retorno de la inversión de tus acciones publicitarias para optimizar tu presupuesto.',
      category: 'Análisis',
      level: 'Avanzado',
      image: '/placeholder/guide-43.jpg',
      slug: 'medicion-roi-campanas-publicidad',
    },
    {
      id: 44,
      title: 'Link Building Ético y Efectivo para SEO',
      description: 'Estrategias de construcción de enlaces que cumplen con las directrices de Google y mejoran tu autoridad.',
      category: 'SEO General',
      level: 'Avanzado',
      image: '/placeholder/guide-44.jpg',
      slug: 'link-building-etico-efectivo-seo',
    },
    {
      id: 45,
      title: 'Marketing de Guerrilla: Impacto con Bajo Presupuesto',
      description: 'Ideas creativas y no convencionales para promocionar tu marca y generar expectación sin grandes inversiones.',
      category: 'Publicidad',
      level: 'Intermedio',
      image: '/placeholder/guide-45.jpg',
      slug: 'marketing-guerrilla-impacto-bajo-presupuesto',
    },
    {
      id: 46,
      title: 'Cómo Usar Google Trends para Estrategia de Contenido',
      description: 'Descubre tendencias de búsqueda y úsalas para crear contenido relevante y oportuno para tu audiencia.',
      category: 'Contenidos',
      level: 'Principiante',
      image: '/placeholder/guide-46.jpg',
      slug: 'usar-google-trends-estrategia-contenido',
    },
    {
      id: 47,
      title: 'Publicidad en Pinterest: Guía Visual para Marcas',
      description: 'Aprovecha el potencial visual de Pinterest para dirigir tráfico y ventas, especialmente para productos y servicios estéticos.',
      category: 'Redes Sociales',
      level: 'Intermedio',
      image: '/placeholder/guide-47.jpg',
      slug: 'publicidad-pinterest-guia-visual',
    },
    {
      id: 48,
      title: 'Webinars como Herramienta de Marketing y Ventas',
      description: 'Organiza y promociona webinars efectivos para educar a tu audiencia, generar leads y cerrar ventas.',
      category: 'Marketing Digital',
      level: 'Intermedio',
      image: '/placeholder/guide-48.jpg',
      slug: 'webinars-herramienta-marketing-ventas',
    },
  ];

  const categories = [
    { name: 'Redes Sociales', icon: 'fa-share-alt' }, // o usa FontAwesomeIcon: faShareAlt
    { name: 'SEO Local', icon: 'fa-map-marker-alt' },
    { name: 'Email Marketing', icon: 'fa-envelope' },
    { name: 'PPC', icon: 'fa-mouse-pointer' },
    { name: 'Análisis', icon: 'fa-chart-bar' },
    { name: 'Contenidos', icon: 'fa-file-alt' },
    { name: 'Branding', icon: 'fa-copyright' },
    { name: 'Publicidad', icon: 'fa-ad' },
    { name: 'Marketing Digital', icon: 'fa-bullhorn' },
    { name: 'E-commerce', icon: 'fa-store' },
    { name: 'Emprendimiento', icon: 'fa-lightbulb' },
    { name: 'Herramientas Digitales', icon: 'fa-tools' },
    { name: 'Video Marketing', icon: 'fa-video' },
    { name: 'Growth Hacking', icon: 'fa-rocket' }, // Nuevo ícono sugerido
    { name: 'SEO Avanzado', icon: 'fa-search-plus' }, // Nuevo ícono sugerido
    { name: 'SEO General', icon: 'fa-search' }, // Nuevo ícono sugerido
    { name: 'Diseño Web', icon: 'fa-desktop' }, // Nuevo ícono sugerido
    { name: 'Marketing de Afiliados', icon: 'fa-users' }
  ];

  const levels = [
    { name: 'Principiante', color: 'green' },
    { name: 'Intermedio', color: 'blue' },
    { name: 'Avanzado', color: 'red' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [filteredGuides, setFilteredGuides] = useState(allGuides);

  useEffect(() => {
    let result = allGuides;

    if (searchTerm) {
      result = result.filter(
        guide =>
          guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          guide.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      result = result.filter(guide => guide.category === selectedCategory);
    }

    if (selectedLevel) {
      result = result.filter(guide => guide.level === selectedLevel);
    }

    setFilteredGuides(result);
  }, [searchTerm, selectedCategory, selectedLevel, allGuides]);

  const getLevelColor = level => {
    switch (level) {
      case 'Principiante': return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Intermedio': return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Avanzado': return 'bg-red-100 text-red-800 hover:bg-red-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };
  
  const getCategoryButtonClass = (categoryName) => {
    return `px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${
      selectedCategory === categoryName
        ? 'bg-blue-600 text-white'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`;
  };

  const getLevelButtonClass = (levelName) => {
    const baseColors = getLevelColor(levelName).split(' ').filter(c => c.startsWith('bg-') || c.startsWith('text-')).join(' ');
    const hoverColor = getLevelColor(levelName).split(' ').find(c => c.startsWith('hover:bg-'));

    return `px-4 py-1 rounded-full border font-medium transition-colors ${baseColors} ${
      selectedLevel === levelName
        ? `${levelName === 'Principiante' ? 'border-green-500 ring-2 ring-green-500' : levelName === 'Intermedio' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-red-500 ring-2 ring-red-500'}`
        : `${levelName === 'Principiante' ? 'border-green-300' : levelName === 'Intermedio' ? 'border-blue-300' : 'border-red-300'}`
    } ${hoverColor}`;
  };


  return (
    <Layout
      title="Guías y Tutoriales | PublicAdis"
      description="Recursos educativos gratuitos sobre publicidad y marketing digital para hacer crecer tu negocio"
    >
      <section className="py-16 bg-gray-50"> {/* Cambiado a bg-gray-50 para un poco de contraste */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Guías y Tutoriales de PublicAdis</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explora nuestros recursos educativos gratuitos. Aprende estrategias de publicidad, marketing digital y gestión de negocios para potenciar tu crecimiento.
            </p>
          </div>

          {/* Search Input */}
          <div className="mb-10 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Buscar guías por título o descripción..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categories Filter */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 text-center">Filtrar por Categoría</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('')}
                className={getCategoryButtonClass('')}
              >
                Todas las Categorías
              </button>
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={getCategoryButtonClass(category.name)}
                >
                  <i className={`fas ${category.icon}`}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>


          {/* Levels Filter */}
          <div className="mb-12">
           <h3 className="text-xl font-semibold text-gray-700 mb-3 text-center">Filtrar por Nivel</h3>
            <div className="flex flex-wrap justify-center gap-3">
               <button
                onClick={() => setSelectedLevel('')}
                className={`px-4 py-1 rounded-full border font-medium transition-colors ${selectedLevel === '' ? 'bg-gray-600 text-white border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'}`}
              >
                Todos los Niveles
              </button>
              {levels.map(level => (
                <button
                  key={level.name}
                  onClick={() => setSelectedLevel(level.name)}
                  className={getLevelButtonClass(level.name)}
                >
                  {level.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Guias Count */}
          {filteredGuides.length > 0 && (
            <div className="text-center mb-8 text-gray-600">
              Mostrando {filteredGuides.length} de {allGuides.length} guías.
            </div>
          )}


          {/* Guides Grid */}
          {filteredGuides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map(guide => (
                <div
                  key={guide.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col"
                >
                  <div className="h-48 w-full relative overflow-hidden"> {/* Contenedor de imagen */}
                    <img 
                        src={guide.image} 
                        alt={`Imagen de ${guide.title}`} 
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" // Efecto zoom en hover
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full shadow-md ${getLevelColor(guide.level).split(' hover:')[0]}`} // Quita el hover para el badge
                      >
                        {guide.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow"> {/* Contenido de la tarjeta */}
                    <div className="mb-3">
                      <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        <i className={`fas ${categories.find(c => c.name === guide.category)?.icon || 'fa-tag'} mr-1`}></i>
                        {guide.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/recursos/guias/${guide.slug}`}>{guide.title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{guide.description}</p> {/* line-clamp-3 para más descripción */}
                    <div className="mt-auto"> {/* Empuja el enlace al final */}
                        <Link
                        href={`/recursos/guias/${guide.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center group"
                        >
                        Ver Guía
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                            <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                            ></path>
                        </svg>
                        </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <img src="/placeholder/no-results.svg" alt="No hay resultados" className="mx-auto mb-4 w-40 h-40" /> {/* Reemplaza con una imagen SVG o PNG adecuada */}
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No se encontraron guías</h3>
              <p className="text-gray-500">Intenta ajustar tus filtros o términos de búsqueda.</p>
            </div>
          )}

          {/* Pagination (Mantenida como estaba, considera hacerla dinámica si es necesario) */}
          {filteredGuides.length > 0 && ( // Solo mostrar paginación si hay resultados
            <div className="flex justify-center mt-16">
              <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Anterior</span>
                  {/* Heroicon name: solid/chevron-left */}
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center px-4 py-2 border border-blue-500 bg-blue-50 text-sm font-medium text-blue-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  2
                </a>
                {/* Puedes añadir más números de página aquí o lógica para generarlos */}
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Siguiente</span>
                  {/* Heroicon name: solid/chevron-right */}
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          )}

          {/* Newsletter y Help Box (Mantenidos como estaban) */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-xl mt-20 max-w-4xl mx-auto text-white">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-2">¿Quieres más recursos exclusivos?</h3>
              <p className="opacity-90">
                Suscríbete a nuestro newsletter y recibe guías especializadas, plantillas y consejos
                directamente en tu bandeja de entrada.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-3 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Suscribirme Ahora
              </button>
            </form>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¿No encuentras lo que buscas o tienes sugerencias?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Si necesitas ayuda con un tema específico, tienes ideas para futuras guías, o quieres colaborar, no dudes en contactarnos. ¡Estamos aquí para ayudarte a crecer!
            </p>
            <Link
              href="/contacto"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg shadow-md hover:shadow-lg"
            >
              Contactar con Soporte
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}