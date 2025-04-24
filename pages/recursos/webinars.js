import React from 'react';
import Layout from '../../src/components/Layout';
import Link from 'next/link';

export default function Webinars() {
  // Sample upcoming webinars data
  const upcomingWebinars = [
    {
      id: 1,
      title: 'Estrategias avanzadas de targeting para Facebook Ads en 2023',
      description:
        'Descubre las últimas técnicas para segmentar tu audiencia en Facebook e Instagram y maximizar el ROI de tus campañas.',
      speaker: 'Ana Morales',
      speakerRole: 'Directora de Marketing, PublicAdis',
      date: '25 de Julio, 2023',
      time: '18:00 - 19:30',
      category: 'Redes Sociales',
      image: '/placeholder/webinar-1.jpg',
      slug: 'estrategias-targeting-facebook-ads-2023',
    },
    {
      id: 2,
      title: 'SEO local para empresas cusqueñas: estrategias para dominar las búsquedas locales',
      description:
        'Aprende cómo optimizar tu negocio para aparecer en los primeros resultados cuando los clientes busquen tus servicios en Cusco.',
      speaker: 'Miguel Sánchez',
      speakerRole: 'Director de Tecnología, PublicAdis',
      date: '10 de Agosto, 2023',
      time: '17:00 - 18:30',
      category: 'SEO',
      image: '/placeholder/webinar-2.jpg',
      slug: 'seo-local-empresas-cusquenas',
    },
  ];

  // Sample past webinars data
  const pastWebinars = [
    {
      id: 3,
      title: 'Campañas de temporada alta: preparando tu negocio turístico para recibir visitantes',
      description:
        'Estrategias de publicidad para hoteles, restaurantes y servicios turísticos durante la temporada de mayor afluencia en Cusco.',
      speaker: 'Lucía Herrera',
      speakerRole: 'Directora de Ventas, PublicAdis',
      date: '15 de Junio, 2023',
      time: '18:00 - 19:30',
      category: 'Turismo',
      image: '/placeholder/webinar-3.jpg',
      slug: 'campanas-temporada-alta-turismo',
      recording: true,
    },
    {
      id: 4,
      title: 'Google Analytics 4: Todo lo que necesitas saber sobre la nueva versión',
      description:
        'Guía práctica para migrar de Universal Analytics a GA4 y aprovechar al máximo las nuevas funcionalidades de análisis.',
      speaker: 'Carlos Ramírez',
      speakerRole: 'CEO & Fundador, PublicAdis',
      date: '28 de Mayo, 2023',
      time: '17:00 - 18:30',
      category: 'Análisis',
      image: '/placeholder/webinar-4.jpg',
      slug: 'google-analytics-4-guia-completa',
      recording: true,
    },
    {
      id: 5,
      title: 'Publicidad para inmobiliarias: captación de leads de calidad',
      description:
        'Estrategias específicas para el sector inmobiliario que te permitirán generar contactos interesados en propiedades.',
      speaker: 'Jorge Torres',
      speakerRole: 'Director Creativo, PublicAdis',
      date: '10 de Mayo, 2023',
      time: '18:00 - 19:30',
      category: 'Inmobiliario',
      image: '/placeholder/webinar-5.jpg',
      slug: 'publicidad-inmobiliarias-leads-calidad',
      recording: true,
    },
    {
      id: 6,
      title: 'Email marketing efectivo para pequeños negocios',
      description:
        'Aprende a diseñar campañas de email marketing que generen ventas sin necesidad de grandes presupuestos o equipos especializados.',
      speaker: 'Ana Morales',
      speakerRole: 'Directora de Marketing, PublicAdis',
      date: '25 de Abril, 2023',
      time: '17:00 - 18:30',
      category: 'Email Marketing',
      image: '/placeholder/webinar-6.jpg',
      slug: 'email-marketing-efectivo-pequenos-negocios',
      recording: true,
    },
  ];

  // Categories for filtering
  const categories = [
    'Redes Sociales',
    'SEO',
    'Turismo',
    'Análisis',
    'Inmobiliario',
    'Email Marketing',
    'PPC',
    'Branding',
  ];

  return (
    <Layout
      title="Webinars | PublicAdis"
      description="Seminarios web gratuitos sobre publicidad, marketing digital y estrategias para hacer crecer tu negocio"
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Webinars</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Seminarios web gratuitos para aprender de expertos en publicidad y marketing digital
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
              Todos
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Upcoming Webinars */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-amber-500">
              Próximos Webinars
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingWebinars.map(webinar => (
                <div
                  key={webinar.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5 bg-gray-200 relative min-h-[200px]">
                    {/* Featured image would go here */}
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white py-2 px-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <i className="far fa-calendar-alt mr-2"></i>
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="far fa-clock mr-2"></i>
                        <span>{webinar.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {webinar.category}
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                        <i className="fas fa-video mr-1"></i> Próximamente
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/recursos/webinars/${webinar.slug}`}>{webinar.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{webinar.description}</p>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-medium">{webinar.speaker}</p>
                        <p className="text-sm text-gray-500">{webinar.speakerRole}</p>
                      </div>
                    </div>
                    <Link
                      href={`/recursos/webinars/${webinar.slug}`}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
                    >
                      Reservar Plaza
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Webinars */}
          <div>
            <h2 className="text-2xl font-bold mb-8 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gray-400">
              Webinars Anteriores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map(webinar => (
                <div
                  key={webinar.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gray-200 relative">
                    {/* Featured image would go here */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="h-16 w-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                        <i className="fas fa-play text-blue-600 text-xl"></i>
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {webinar.category}
                      </span>
                      {webinar.recording && (
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                          <i className="fas fa-video mr-1"></i> Grabación
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/recursos/webinars/${webinar.slug}`}>{webinar.title}</Link>
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-medium text-sm">{webinar.speaker}</p>
                      </div>
                    </div>
                    <Link
                      href={`/recursos/webinars/${webinar.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      Ver Grabación
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex">
                <a
                  href="#"
                  className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                >
                  Anterior
                </a>
                <a
                  href="#"
                  className="px-3 py-2 border-t border-b border-gray-300 bg-blue-50 text-blue-600 font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                >
                  Siguiente
                </a>
              </nav>
            </div>
          </div>

          {/* Propose a Topic */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-md mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                ¿Tienes un tema que te gustaría que cubramos?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Estamos constantemente creando nuevos webinars para abordar las necesidades de
                nuestros usuarios. Si hay un tema específico sobre publicidad o marketing digital
                que te interese, háznoslo saber.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="topic" className="block text-gray-700 mb-1">
                  Tema propuesto
                </label>
                <input
                  type="text"
                  id="topic"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ej: Estrategias de publicidad para restaurantes"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 mb-1">
                  Descripción
                </label>
                <textarea
                  id="description"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Comparte cualquier detalle específico o preguntas que te gustaría que se abordaran"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="px-6 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors">
                  Enviar Propuesta
                </button>
              </div>
            </div>
          </div>

          {/* Notification Sign-Up */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Mantente informado</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Recibe notificaciones sobre nuevos webinars y no te pierdas la oportunidad de aprender
              con nuestros expertos.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-r-md hover:bg-blue-700 transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
