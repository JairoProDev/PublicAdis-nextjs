export const distributionChannels = [
  {
    id: 'digital-presence',
    name: 'Presencia Digital Premium',
    description: 'Posicionamiento estratégico en nuestras plataformas digitales principales',
    icon: 'globe',
    color: '#2563eb', // Blue
    platforms: [
      {
        name: 'Buscadis Web',
        url: '/plataformas/buscadis-web',
        stats: {
          visitors: '50K+ mensuales',
          engagement: '78% tasa de interacción',
          conversion: '12% tasa de conversión',
        },
      },
      {
        name: 'Buscadis App',
        url: '/plataformas/buscadis-app',
        stats: {
          downloads: '25K+ instalaciones activas',
          rating: '4.8/5 en tiendas',
          retention: '65% retención a 30 días',
        },
      },
    ],
  },
  {
    id: 'social-networks',
    name: 'Redes Sociales Estratégicas',
    description: 'Presencia optimizada en las principales redes sociales',
    icon: 'share-nodes',
    color: '#0891b2', // Cyan
    platforms: [
      {
        name: 'Facebook Premium',
        url: '/plataformas/facebook',
        stats: {
          followers: '100K+ seguidores',
          reach: '500K+ alcance mensual',
          engagement: '15% tasa de engagement',
        },
      },
      {
        name: 'Instagram Business',
        url: '/plataformas/instagram',
        stats: {
          followers: '80K+ seguidores',
          stories: '25K+ views por historia',
          engagement: '8% tasa de engagement',
        },
      },
      {
        name: 'TikTok Empresarial',
        url: '/plataformas/tiktok',
        stats: {
          followers: '50K+ seguidores',
          views: '1M+ views mensuales',
          engagement: '20% tasa de engagement',
        },
      },
    ],
  },
  {
    id: 'messaging-networks',
    name: 'Redes de Mensajería',
    description: 'Comunidades exclusivas en plataformas de mensajería',
    icon: 'comments',
    color: '#059669', // Emerald
    platforms: [
      {
        name: 'Comunidad WhatsApp',
        url: '/plataformas/whatsapp',
        stats: {
          members: '15K+ miembros activos',
          messages: '100K+ mensajes mensuales',
          response: '95% tasa de lectura',
        },
      },
      {
        name: 'Grupos Telegram',
        url: '/plataformas/telegram',
        stats: {
          members: '20K+ miembros',
          channels: '10 canales temáticos',
          engagement: '85% tasa de interacción',
        },
      },
    ],
  },
  {
    id: 'physical-network',
    name: 'Red Física Estratégica',
    description: 'Presencia en ubicaciones físicas premium',
    icon: 'store',
    color: '#dc2626', // Red
    platforms: [
      {
        name: 'Red de Locales',
        url: '/plataformas/locales',
        stats: {
          locations: '50+ ubicaciones',
          traffic: '10K+ visitas mensuales',
          conversion: '15% tasa de conversión',
        },
      },
    ],
  },
  {
    id: 'influencer-network',
    name: 'Red de Influencers',
    description: 'Marketing con micro-influencers y UGC',
    icon: 'users',
    color: '#7c3aed', // Purple
    platforms: [
      {
        name: 'Micro-Influencers',
        url: '/plataformas/influencers',
        stats: {
          creators: '100+ creadores verificados',
          reach: '1M+ alcance combinado',
          engagement: '12% tasa promedio de engagement',
        },
      },
    ],
  },
  {
    id: 'content-network',
    name: 'Red de Contenido',
    description: 'Distribución en plataformas de contenido premium',
    icon: 'newspaper',
    color: '#0f766e', // Teal
    platforms: [
      {
        name: 'NoticiAdis',
        url: '/plataformas/noticiadis',
        stats: {
          readers: '30K+ lectores mensuales',
          articles: '500+ artículos publicados',
          authority: '85/100 domain authority',
        },
      },
    ],
  },
  {
    id: 'ad-network',
    name: 'Red Publicitaria Externa',
    description: 'Red de sitios y apps asociadas',
    icon: 'rectangle-ad',
    color: '#be185d', // Pink
    platforms: [
      {
        name: 'Red de Display',
        url: '/plataformas/display',
        stats: {
          sites: '200+ sitios asociados',
          impressions: '1M+ impresiones mensuales',
          ctr: '2.5% CTR promedio',
        },
      },
    ],
  },
];
