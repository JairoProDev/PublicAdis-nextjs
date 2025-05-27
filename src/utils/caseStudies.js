export function getAllCaseStudies() {
  return [
    {
      id: 1,
      title: 'Hotel "Amanecer Andino": +60% en Reservas Directas',
      excerpt:
        'Estrategia digital 360º que combinó publicidad hipersegmentada en Buscadis y redes, SEO local para búsquedas turísticas.',
      client: 'Hotel Amanecer Andino',
      category: 'Hotelería',
      sector: 'Turismo',
      services: ['Publicidad en Buscadis', 'Gestión de Redes Sociales', 'SEO Local'],
      results: [
        { label: 'Aumento Reservas Directas', value: '+60%' },
        { label: 'Reducción CPA', value: '-25%' },
        { label: 'Mejora Calificación Online', value: '+0.8 Puntos' },
      ],
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      slug: 'hotel-amanecer-andino-reservas-experiencia',
      testimonial: {
        author: 'Lucía Mendoza',
        role: 'Gerente',
        quote:
          'PublicAdis revolucionó nuestra presencia online. Las reservas directas se dispararon y nuestra reputación mejoró muchísimo.',
        rating: 5,
      },
    },
    {
      id: 2,
      title: 'Agencia "Explora Cusco": +45% Leads Cualificados',
      excerpt:
        'Campañas de generación de leads en Google Ads y Facebook, dirigidas a viajeros interesados en trekking y experiencias culturales.',
      client: 'Agencia Explora Cusco',
      category: 'Servicios',
      sector: 'Turismo',
      services: ['Google Ads (SEM)', 'Publicidad en Facebook', 'Marketing de Contenidos'],
      results: [
        { label: 'Aumento Leads Cualificados', value: '+45%' },
        { label: 'Tasa de Conversión', value: '+15%' },
        { label: 'Alcance en Medios', value: '+200K Vistas' },
      ],
      image:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      slug: 'agencia-explora-cusco-leads-aventura',
      testimonial: {
        author: 'Carlos Fernández',
        role: 'Director',
        quote:
          'El enfoque de PublicAdis en leads de calidad nos ha permitido crecer de forma sostenible.',
        rating: 4.5,
      },
    },
    {
      id: 3,
      title: 'Inmobiliaria "Tu Hogar Ideal": +12 Propiedades Vendidas',
      excerpt:
        'Promoción destacada de propiedades en Buscadis, combinada con campañas de retargeting en redes sociales.',
      client: 'Inmobiliaria Tu Hogar Ideal',
      category: 'Inmuebles',
      sector: 'Inmobiliario',
      services: ['Publicidad Destacada en Buscadis', 'Retargeting', 'Tours Virtuales'],
      results: [
        { label: 'Propiedades Vendidas', value: '12 en 3 meses' },
        { label: 'Reducción Tiempo Venta', value: '-30 Días' },
        { label: 'Consultas desde Buscadis', value: '+300%' },
      ],
      image:
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      slug: 'inmobiliaria-tu-hogar-ideal-ventas-rapidas',
      testimonial: {
        author: 'Ana Gutiérrez',
        role: 'Agente Principal',
        quote:
          'Desde que trabajamos con PublicAdis, la velocidad de venta de nuestras propiedades ha aumentado increíblemente.',
        rating: 5,
      },
    },
  ];
}
