import React, { useState, useMemo } from 'react';
import Layout from '../../src/components/Layout'; // Ajusta la ruta si es necesario
import Link from 'next/link';

// Iconos (ejemplo usando SVGs directamente para simplicidad, puedes usar una librería)
const StarIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);

export default function CaseStudies() {
  const allCaseStudiesData = [
    // --- Hotelería / Turismo ---
    {
      id: 1,
      title: 'Hotel "Amanecer Andino": +60% en Reservas Directas y Experiencia del Huésped Optimizada',
      excerpt: 'Estrategia digital 360º que combinó publicidad hipersegmentada en Buscadis y redes, SEO local para búsquedas turísticas, y optimización de su perfil en portales de viaje, resultando en un notable aumento de reservas directas y una mejor calificación online.',
      client: 'Hotel Amanecer Andino',
      category: 'Hotelería', // Categoría Principal Buscadis: Negocios (Hoteles) o Eventos (Estadías)
      sector: 'Turismo', // Sector General
      services: ['Publicidad en Buscadis', 'Gestión de Redes Sociales', 'SEO Local', 'Optimización de Perfiles Online'],
      results: [
        { label: 'Aumento Reservas Directas', value: '+60%' },
        { label: 'Reducción Coste por Adquisición (CPA)', value: '-25%' },
        { label: 'Mejora Calificación Online', value: '+0.8 Puntos' },
      ],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', // Reemplazar con imagen real o stock relevante
      slug: 'hotel-amanecer-andino-reservas-experiencia',
      testimonial: {
        author: 'Lucía Mendoza',
        role: 'Gerente, Hotel Amanecer Andino',
        quote: '"PublicAdis revolucionó nuestra presencia online. Las reservas directas se dispararon y nuestra reputación mejoró muchísimo. ¡Son verdaderos aliados estratégicos!"',
        rating: 5,
      }
    },
    {
      id: 2,
      title: 'Agencia de Viajes "Explora Cusco": +45% Leads Cualificados para Paquetes Turísticos de Aventura',
      excerpt: 'Campañas de generación de leads en Google Ads y Facebook, dirigidas a viajeros interesados en trekking, ciclismo de montaña y experiencias culturales auténticas, complementadas con contenido atractivo en Noticiadis.',
      client: 'Agencia Explora Cusco',
      category: 'Servicios', // Categoría Principal Buscadis: Servicios (Turismo)
      sector: 'Turismo',
      services: ['Google Ads (SEM)', 'Publicidad en Facebook', 'Marketing de Contenidos en Noticiadis'],
      results: [
        { label: 'Aumento Leads Cualificados', value: '+45%' },
        { label: 'Tasa de Conversión Lead-Cliente', value: '+15%' },
        { label: 'Alcance en Noticiadis', value: '+200K Vistas' },
      ],
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      slug: 'agencia-explora-cusco-leads-aventura',
      testimonial: {
        author: 'Carlos Fernández',
        role: 'Director, Explora Cusco',
        quote: '"El enfoque de PublicAdis en leads de calidad y la visibilidad en Noticiadis nos ha permitido crecer de forma sostenible. Muy profesionales."',
        rating: 4.5,
      }
    },
    // --- Inmobiliario ---
    {
      id: 3,
      title: 'Inmobiliaria "Tu Hogar Ideal": +12 Propiedades Vendidas en 3 Meses con Buscadis y Marketing Digital',
      excerpt: 'Promoción destacada de propiedades en Buscadis, combinada con campañas de retargeting en redes sociales y tours virtuales, acelerando el ciclo de venta.',
      client: 'Inmobiliaria Tu Hogar Ideal',
      category: 'Inmuebles', // Categoría Principal Buscadis
      sector: 'Inmobiliario',
      services: ['Publicidad Destacada en Buscadis', 'Retargeting', 'Producción de Tours Virtuales'],
      results: [
        { label: 'Propiedades Vendidas', value: '12 en 3 meses' },
        { label: 'Reducción Tiempo de Venta Promedio', value: '-30 Días' },
        { label: 'Consultas desde Buscadis', value: '+300%' },
      ],
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      slug: 'inmobiliaria-tu-hogar-ideal-ventas-rapidas',
      testimonial: {
        author: 'Ana Gutiérrez',
        role: 'Agente Principal, Tu Hogar Ideal',
        quote: '"Desde que trabajamos con PublicAdis y destacamos en Buscadis, la velocidad de venta de nuestras propiedades ha aumentado increíblemente. ¡Los tours virtuales son un plus!"',
        rating: 5,
      }
    },
    // --- Gastronomía / Comunidad ---
    {
      id: 4,
      title: 'Restaurante "El Sabor Cusqueño": Mesas Llenas y +70% en Pedidos Online con Estrategia Local',
      excerpt: 'Campañas geolocalizadas en Buscadis y redes, promoción de platos estrella en Noticiadis y un sistema de pedidos online integrado, aumentando tanto comensales como delivery.',
      client: 'Restaurante El Sabor Cusqueño',
      category: 'Negocios', // Categoría Principal Buscadis: Negocios (Restaurantes)
      sector: 'Gastronomía',
      services: ['Publicidad Geolocalizada', 'Promoción en Noticiadis', 'Integración de Pedidos Online'],
      results: [
        { label: 'Aumento Pedidos Online', value: '+70%' },
        { label: 'Incremento Comensales (Días Laborables)', value: '+35%' },
        { label: 'Nuevos Seguidores en Redes', value: '+1.2K' },
      ],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      slug: 'restaurante-sabor-cusqueno-mesas-llenas-pedidos',
      testimonial: {
        author: 'Miguel Condori',
        role: 'Dueño, El Sabor Cusqueño',
        quote: '"PublicAdis nos hizo visibles para toda la comunidad. La combinación de Buscadis y Noticiadis fue clave. ¡Ahora los pedidos online no paran!"',
        rating: 5,
      }
    },
    // --- Vehículos ---
    {
      id: 5,
      title: 'Concesionario "AutoAndino": +25% Ventas de Seminuevos con Anuncios Optimizados en Buscadis',
      excerpt: 'Optimización profesional de anuncios de vehículos seminuevos en Buscadis, con fotografías de alta calidad y descripciones detalladas, atrayendo a compradores serios.',
      client: 'Concesionario AutoAndino',
      category: 'Vehículos', // Categoría Principal Buscadis
      sector: 'Automotriz',
      services: ['Optimización de Anuncios en Buscadis', 'Fotografía Profesional', 'Copywriting Persuasivo'],
      results: [
        { label: 'Aumento Ventas Seminuevos', value: '+25%' },
        { label: 'Consultas Cualificadas', value: '+60%' },
        { label: 'Tiempo Promedio de Venta', value: '-15 Días' },
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      slug: 'concesionario-autoandino-ventas-seminuevos',
      testimonial: {
        author: 'Roberto Paredes',
        role: 'Jefe de Ventas, AutoAndino',
        quote: '"La calidad de nuestros anuncios en Buscadis mejoró drásticamente gracias a PublicAdis. Esto se tradujo directamente en más ventas y clientes satisfechos."',
        rating: 4.8,
      }
    },
    // --- Servicios Profesionales ---
    {
      id: 6,
      title: 'Estudio Contable "Finanzas Claras": +80 Nuevos Clientes PYME con Publicidad Dirigida en LinkedIn y Buscadis',
      excerpt: 'Campañas B2B en LinkedIn segmentando a dueños de PYMEs y emprendedores, complementadas con anuncios de servicios profesionales en Buscadis.',
      client: 'Estudio Contable Finanzas Claras',
      category: 'Servicios', // Categoría Principal Buscadis
      sector: 'Servicios Profesionales',
      services: ['Publicidad en LinkedIn', 'Anuncios en Buscadis (Servicios)', 'Generación de Leads B2B'],
      results: [
        { label: 'Nuevos Clientes PYME', value: '+80 en 6 meses' },
        { label: 'Costo por Lead B2B', value: '-20%' },
        { label: 'Contratos Anuales Generados', value: '+15' },
      ],
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      slug: 'estudio-contable-finanzas-claras-clientes-pyme',
      testimonial: {
        author: 'Patricia Solano',
        role: 'Socia Principal, Finanzas Claras',
        quote: '"PublicAdis nos ayudó a llegar directamente a las empresas que necesitan nuestros servicios. LinkedIn y Buscadis fueron una combinación ganadora."',
        rating: 5,
      }
    },
    // --- Productos / Retail ---
    {
      id: 7,
      title: 'Tienda de Ropa "Moda Urbana": +150% en Ventas Online con Tienda Virtual y Campañas en Instagram',
      excerpt: 'Creación de una tienda online atractiva y funcional, integrada con campañas de Instagram Shopping y publicidad con influencers locales, impulsando las ventas de su nueva colección.',
      client: 'Tienda de Ropa Moda Urbana',
      category: 'Productos', // Categoría Principal Buscadis
      sector: 'Retail',
      services: ['Desarrollo de Tienda Online (E-commerce)', 'Instagram Shopping', 'Marketing de Influencers'],
      results: [
        { label: 'Aumento Ventas Online', value: '+150%' },
        { label: 'Tráfico a Tienda Online', value: '+200%' },
        { label: 'Engagement en Instagram', value: '+90%' },
      ],
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHN0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      slug: 'tienda-moda-urbana-ventas-online-instagram',
      testimonial: {
        author: 'Daniela Quispe',
        role: 'Propietaria, Moda Urbana',
        quote: '"¡Nuestra tienda online es un éxito gracias a PublicAdis! Las campañas en Instagram y con influencers locales nos dieron una visibilidad increíble."',
        rating: 4.7,
      }
    },
    // --- Eventos ---
    {
      id: 8,
      title: 'Festival Gastronómico "Sabores del Valle": Sold Out y +30K Asistentes con Promoción Multicanal',
      excerpt: 'Estrategia integral de promoción para un evento masivo, utilizando anuncios en Buscadis (Eventos), publicidad en redes, cobertura en Noticiadis, y marketing de expectativa.',
      client: 'Festival Sabores del Valle (Comité Organizador)',
      category: 'Eventos', // Categoría Principal Buscadis
      sector: 'Entretenimiento', // o Gastronomía, Comunidad
      services: ['Publicidad en Buscadis (Eventos)', 'Gestión de Redes Sociales para Eventos', 'Cobertura en Noticiadis', 'Relaciones Públicas Digitales'],
      results: [
        { label: 'Entradas Vendidas (Sold Out)', value: '100%' },
        { label: 'Asistentes Totales', value: '+30,000' },
        { label: 'Alcance en Medios y Redes', value: '+1M Impresiones' },
      ],
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      slug: 'festival-sabores-del-valle-sold-out',
      testimonial: {
        author: 'Comité Organizador',
        role: 'Festival Sabores del Valle',
        quote: '"La promoción multicanal de PublicAdis, especialmente la cobertura en Noticiadis, fue esencial para el éxito rotundo de nuestro festival. ¡Superaron todas las expectativas!"',
        rating: 5,
      }
    },
    // --- Educación ---
    {
      id: 9,
      title: 'Instituto de Idiomas "Global Talk": +40% en Inscripciones a Cursos Online con SEO y Contenido Educativo',
      excerpt: 'Optimización SEO para términos de búsqueda de cursos de idiomas y creación de blog con artículos útiles sobre aprendizaje, atrayendo estudiantes de forma orgánica.',
      client: 'Instituto Global Talk',
      category: 'Servicios', // O Educación si la tienes como categoría principal
      sector: 'Educación',
      services: ['SEO para Educación', 'Marketing de Contenidos Educativos', 'Optimización Web'],
      results: [
        { label: 'Aumento Inscripciones Online', value: '+40%' },
        { label: 'Tráfico Orgánico Cualificado', value: '+75%' },
        { label: 'Posicionamiento Top 5 (Palabras Clave)', value: '+10' },
      ],
      image: 'https://images.unsplash.com/photo-1523240795610-571c6b9e1c14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      slug: 'instituto-global-talk-inscripciones-seo',
      testimonial: {
        author: 'Laura Benítez',
        role: 'Directora Académica, Global Talk',
        quote: '"El enfoque en SEO y contenido de valor de PublicAdis nos ha posicionado como referentes. Ahora nuestros cursos online tienen mucha más demanda."',
        rating: 4.9,
      }
    },
    // --- Mascotas / Comunidad ---
    {
      id: 10,
      title: 'Veterinaria "Amigo Fiel": +50% en Pacientes Nuevos y Comunidad Online Activa con Redes Sociales y Buscadis',
      excerpt: 'Gestión de redes sociales con contenido útil para dueños de mascotas, promociones en Buscadis (Servicios) y un programa de referidos digital.',
      client: 'Veterinaria Amigo Fiel',
      category: 'Servicios', // Categoría Principal Buscadis
      sector: 'Mascotas',
      services: ['Gestión de Redes Sociales (Mascotas)', 'Publicidad en Buscadis', 'Programas de Fidelización Digital'],
      results: [
        { label: 'Aumento Pacientes Nuevos', value: '+50%' },
        { label: 'Comunidad en Facebook', value: '+2.5K Miembros Activos' },
        { label: 'Interacciones Mensuales', value: '+500%' },
      ],
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      slug: 'veterinaria-amigo-fiel-pacientes-comunidad',
      testimonial: {
        author: 'Dr. Javier Luna',
        role: 'Veterinario Principal, Amigo Fiel',
        quote: '"PublicAdis nos ha ayudado a construir una comunidad increíble alrededor de nuestra veterinaria. Los dueños de mascotas nos encuentran fácilmente en Buscadis y aman nuestro contenido en redes."',
        rating: 5,
      }
    },
    // --- Empleos ---
    {
      id: 11,
      title: 'Portal de Empleo "Cusco Laboral": +120% en Publicaciones de Empresas y +80% en Candidatos Registrados',
      excerpt: 'Estrategia de crecimiento para una plataforma de empleo local, utilizando publicidad B2B para atraer empresas y campañas de captación de talento en Buscadis (Empleos) y Noticiadis.',
      client: 'Portal Cusco Laboral',
      category: 'Empleos', // Categoría Principal Buscadis
      sector: 'Recursos Humanos',
      services: ['Marketing B2B', 'Publicidad en Buscadis (Empleos)', 'Promoción en Noticiadis', 'Captación de Talento'],
      results: [
        { label: 'Aumento Publicaciones de Empresas', value: '+120%' },
        { label: 'Crecimiento Candidatos Registrados', value: '+80%' },
        { label: 'Tasa de Colocación (Éxito)', value: '+25%' },
      ],
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpvYiUyMHNlYXJjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      slug: 'portal-cusco-laboral-crecimiento',
      testimonial: {
        author: 'Equipo Directivo',
        role: 'Cusco Laboral',
        quote: '"La estrategia integral de PublicAdis fue vital para consolidar nuestro portal de empleo. La sinergia con Buscadis y Noticiadis nos dio un alcance masivo y efectivo."',
        rating: 4.8,
      }
    },
    // --- Negocios (Genérico) ---
    {
        id: 12,
        title: 'Consultora "Proyecta Futuro": +70% en Contratos de Consultoría con Estrategia de Autoridad Digital',
        excerpt: 'Desarrollo de una marca personal sólida para los consultores, webinars, contenido de valor en Noticiadis y publicidad B2B en Buscadis (Servicios) para atraer a empresas en crecimiento.',
        client: 'Consultora Proyecta Futuro',
        category: 'Negocios', // Categoría Principal Buscadis
        sector: 'Servicios Profesionales',
        services: ['Marketing de Autoridad', 'Webinars', 'Contenido B2B en Noticiadis', 'Publicidad en Buscadis'],
        results: [
          { label: 'Aumento Contratos de Consultoría', value: '+70%' },
          { label: 'Leads de Alto Valor', value: '+50%' },
          { label: 'Reconocimiento como Expertos Regionales', value: 'Notable' },
        ],
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzJTIwY29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        slug: 'consultora-proyecta-futuro-autoridad-digital',
        testimonial: {
          author: 'Fernando Rojas',
          role: 'Socio Director, Proyecta Futuro',
          quote: '"PublicAdis nos ayudó a posicionarnos como líderes de opinión en nuestro sector. Los webinars y el contenido en Noticiadis fueron un gran acierto. Ahora los clientes nos buscan."',
          rating: 5,
        }
      },
  ];

  const allCategories = useMemo(() => ['Todos', ...new Set(allCaseStudiesData.map(cs => cs.category))], [allCaseStudiesData]);
  const allSectors = useMemo(() => ['Todos', ...new Set(allCaseStudiesData.map(cs => cs.sector))], [allCaseStudiesData]);
  // const allServices = useMemo(() => ['Todos', ...new Set(allCaseStudiesData.flatMap(cs => cs.services))], [allCaseStudiesData]);


  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedSector, setSelectedSector] = useState('Todos');
  // const [selectedService, setSelectedService] = useState('Todos');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Casos de éxito por página

  const filteredCaseStudies = useMemo(() => {
    return allCaseStudiesData.filter(cs => {
      const categoryMatch = selectedCategory === 'Todos' || cs.category === selectedCategory;
      const sectorMatch = selectedSector === 'Todos' || cs.sector === selectedSector;
      // const serviceMatch = selectedService === 'Todos' || cs.services.includes(selectedService);

      const searchLower = searchTerm.toLowerCase();
      const searchMatch =
        searchTerm === '' ||
        cs.title.toLowerCase().includes(searchLower) ||
        cs.excerpt.toLowerCase().includes(searchLower) ||
        cs.client.toLowerCase().includes(searchLower) ||
        cs.category.toLowerCase().includes(searchLower) ||
        cs.sector.toLowerCase().includes(searchLower) ||
        cs.services.some(service => service.toLowerCase().includes(searchLower));

      return categoryMatch && sectorMatch && searchMatch; // && serviceMatch;
    });
  }, [allCaseStudiesData, searchTerm, selectedCategory, selectedSector /*, selectedService*/]);

  // Paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCaseStudies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const faqsData = [
    {
      question: '¿Cómo elige PublicAdis las estrategias para cada caso de éxito?',
      answer: 'Analizamos a fondo el negocio del cliente, su público objetivo, la competencia y sus metas específicas. Con base en esto, diseñamos una estrategia a medida, combinando los canales y servicios de nuestro ecosistema (Buscadis, Noticiadis, Redes, etc.) que ofrezcan el mayor impacto y retorno de inversión. La personalización es clave.'
    },
    {
      question: 'Los resultados que muestran parecen muy buenos, ¿son realistas para mi negocio?',
      answer: 'Cada negocio es único y los resultados varían. Los casos presentados son ejemplos reales de lo que hemos logrado con clientes comprometidos y estrategias bien ejecutadas. Nos esforzamos por establecer expectativas claras y trabajar para obtener los mejores resultados posibles, siempre enfocados en métricas medibles y crecimiento sostenible.'
    },
    {
      question: '¿Qué tipo de negocios se benefician más de los servicios de PublicAdis?',
      answer: 'Nuestro ecosistema está diseñado para potenciar a una amplia gama de negocios, desde PYMEs y emprendedores locales hasta empresas más consolidadas que buscan innovar y expandir su alcance. Si tu negocio está en Cusco o cualquier parte de Latinoamérica y buscas crecer, generar más ventas, o mejorar tu visibilidad, PublicAdis tiene soluciones para ti.'
    },
    {
      question: '¿Cómo se integra Buscadis en las estrategias de los casos de éxito?',
      answer: 'Buscadis es nuestro potente marketplace de clasificados y una pieza central en muchas estrategias. Permite a los negocios listar sus productos, servicios, empleos, inmuebles, etc., y nosotros potenciamos esos anuncios con publicidad destacada, segmentación avanzada y promoción cruzada en otros canales como Noticiadis, llegando a una audiencia masiva y relevante.'
    },
    {
      question: '¿Y Noticiadis? ¿Cómo contribuye al éxito de los clientes?',
      answer: 'Noticiadis es nuestro canal de noticias y contenido viral con una gran audiencia en Cusco y creciendo en Perú. Lo utilizamos para dar visibilidad a nuestros clientes a través de contenido patrocinado relevante (storytelling, artículos de interés), entrevistas, o promoción de eventos, conectando sus marcas con nuestra comunidad de forma orgánica y efectiva.'
    },
    {
      question: '¿Qué inversión mínima se requiere para trabajar con PublicAdis y ver resultados?',
      answer: 'Ofrecemos planes y soluciones adaptadas a diferentes presupuestos. Entendemos que cada negocio tiene capacidades distintas. Lo importante es comenzar con una estrategia clara y enfocada. Te invitamos a una consulta gratuita para evaluar tus necesidades y proponerte un plan de acción que se ajuste a tu inversión y objetivos.'
    },
    {
        question: '¿En cuánto tiempo puedo esperar ver resultados tangibles?',
        answer: 'El tiempo para ver resultados varía según la estrategia. Algunas tácticas como la publicidad en Buscadis o campañas en redes sociales pueden generar impacto visible en semanas. Estrategias de SEO o marketing de contenidos suelen requerir de 3 a 6 meses para consolidar resultados orgánicos significativos. Siempre establecemos un cronograma y KPIs claros desde el inicio.'
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <Layout
      title="Casos de Éxito | PublicAdis - Resultados Reales para Negocios en LATAM"
      description="Descubre cómo PublicAdis ha impulsado el crecimiento de empresas en Cusco y Latinoamérica con estrategias de publicidad innovadoras y efectivas en Buscadis, Noticiadis y más."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-down">Transformando Negocios, Un Éxito a la Vez</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up">
            Explora cómo hemos ayudado a empresas como la tuya a alcanzar sus metas, combinando la potencia de Buscadis, la viralidad de Noticiadis y estrategias de marketing digital de vanguardia.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="mb-12 p-6 bg-white rounded-xl shadow-lg">
            <input
              type="text"
              placeholder="Buscar por cliente, título, sector, servicio..."
              className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow mb-6 text-lg"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="sectorFilter" className="block text-sm font-medium text-gray-700 mb-1">Filtrar por Sector:</label>
                <select
                  id="sectorFilter"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  value={selectedSector}
                  onChange={(e) => { setSelectedSector(e.target.value); setCurrentPage(1); }}
                >
                  {allSectors.map(sector => <option key={sector} value={sector}>{sector}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="categoryFilter" className="block text-sm font-medium text-gray-700 mb-1">Filtrar por Categoría Principal (Buscadis):</label>
                <select
                  id="categoryFilter"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  value={selectedCategory}
                  onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                >
                  {allCategories.map(category => <option key={category} value={category}>{category}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map(caseStudy => (
                <div
                  key={caseStudy.id}
                  className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-56 w-full relative">
                    <img
                      src={caseStudy.image}
                      alt={`Imagen del caso de éxito de ${caseStudy.client}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {caseStudy.sector}
                    </span>
                     <span className="absolute top-4 left-4 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {caseStudy.category}
                    </span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                      <Link href={`/recursos/casos-de-exito/${caseStudy.slug}`} className="hover:text-purple-600 transition-colors">
                        {caseStudy.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{caseStudy.excerpt}</p>
                    
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-1">Resultados Clave:</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {caseStudy.results.map((result, index) => (
                            <div key={index} className="text-left">
                                <span className="block text-lg font-bold text-pink-600">{result.value}</span>
                                <span className="block text-xs text-gray-500">{result.label}</span>
                            </div>
                            ))}
                        </div>
                    </div>
                     <p className="text-xs text-gray-500 mb-3">Servicios: {caseStudy.services.join(', ')}</p>


                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Cliente: <span className="font-normal">{caseStudy.client}</span></p>
                      <Link
                        href={`/recursos/casos-de-exito/${caseStudy.slug}`}
                        className="inline-block text-sm text-purple-600 hover:text-red-600 font-semibold transition-colors"
                      >
                        Leer caso completo &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-xl py-10">No se encontraron casos de éxito que coincidan con tu búsqueda o filtros.</p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-1">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Anterior
              </button>
              {[...Array(totalPages).keys()].map(number => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`px-4 py-2 rounded-md border border-gray-300 ${currentPage === number + 1 ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  {number + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente
              </button>
            </div>
          )}

          {/* Testimonials Section */}
            <div className="mt-20 py-16 bg-white rounded-xl shadow-xl">
                <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Lo Que Nuestros Clientes Opinan</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allCaseStudiesData.slice(0, 6).map(cs => cs.testimonial && ( // Muestra testimonios de los primeros 6 casos
                    <div key={cs.id} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                        <div className="flex mb-3">
                        {[...Array(Math.floor(cs.testimonial.rating))].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                        {cs.testimonial.rating % 1 !== 0 && <StarIcon className="w-5 h-5 text-yellow-400 opacity-70" />} {/* Considerar media estrella */}
                        </div>
                        <p className="text-gray-700 italic mb-4 text-md flex-grow">"{cs.testimonial.quote}"</p>
                        <div className="mt-auto">
                        <p className="font-semibold text-gray-800">{cs.testimonial.author}</p>
                        <p className="text-sm text-gray-500">{cs.testimonial.role}, {cs.client}</p>
                        </div>
                    </div>
                    ))}
                </div>
                {/* Podrías añadir un botón para ver más testimonios si tienes una página dedicada */}
                </div>
            </div>


          {/* FAQ Section */}
            <div className="mt-20 py-16">
                <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Preguntas Frecuentes Sobre Nuestros Éxitos</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqsData.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <button
                        className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-700 font-semibold hover:bg-gray-50 focus:outline-none"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        >
                        <span>{faq.question}</span>
                        <ChevronDownIcon className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === index && (
                        <div className="px-6 pb-4 pt-2 border-t border-gray-200 bg-white">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                        )}
                    </div>
                    ))}
                </div>
                </div>
            </div>


          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 rounded-xl shadow-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
              <div className="mb-8 lg:mb-0 lg:mr-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">¿Listo para Ser Nuestro Próximo Caso de Éxito?</h3>
                <p className="text-purple-100 text-lg max-w-2xl">
                  En PublicAdis, no solo creamos campañas, construimos historias de crecimiento. Hablemos de cómo podemos impulsar tu negocio al siguiente nivel.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link
                  href="/contacto"
                  className="px-8 py-3 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md text-lg transform hover:scale-105"
                >
                  Solicitar Consulta Gratuita
                </Link>
                <Link
                  href="/servicios"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-300 shadow-md text-lg transform hover:scale-105"
                >
                  Descubre Nuestros Servicios
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}