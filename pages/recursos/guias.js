import React from 'react';
import Layout from '../../src/components/Layout';
import Link from 'next/link';

export default function Guides() {
  const guides = [
    {
      id: 1,
      title: 'Guía para crear anuncios efectivos en redes sociales',
      description:
        'Aprende a diseñar anuncios que capturen la atención y generen conversiones en las principales plataformas sociales.',
      category: 'Redes Sociales',
      level: 'Principiante',
      image: '/placeholder/guide-1.jpg',
      slug: 'crear-anuncios-efectivos-redes-sociales',
    },
    {
      id: 2,
      title: 'Cómo optimizar tu presencia en Google My Business',
      description:
        'Maximiza la visibilidad de tu negocio local con esta guía paso a paso para configurar y optimizar tu perfil en Google My Business.',
      category: 'SEO Local',
      level: 'Intermedio',
      image: '/placeholder/guide-2.jpg',
      slug: 'optimizar-presencia-google-my-business',
    },
    {
      id: 3,
      title: 'Guía de email marketing para pequeños negocios',
      description:
        'Estrategias prácticas para crear campañas de email marketing efectivas que aumenten tus ventas sin grandes inversiones.',
      category: 'Email Marketing',
      level: 'Principiante',
      image: '/placeholder/guide-3.jpg',
      slug: 'email-marketing-pequenos-negocios',
    },
    {
      id: 4,
      title: 'Fundamentos de publicidad PPC para principiantes',
      description:
        'Todo lo que necesitas saber para comenzar con campañas de pago por clic en Google Ads y Facebook Ads.',
      category: 'PPC',
      level: 'Principiante',
      image: '/placeholder/guide-4.jpg',
      slug: 'fundamentos-publicidad-ppc-principiantes',
    },
    {
      id: 5,
      title: 'Análisis de datos publicitarios: métricas clave',
      description:
        'Aprende a interpretar los datos de tus campañas publicitarias para tomar decisiones basadas en resultados reales.',
      category: 'Análisis',
      level: 'Avanzado',
      image: '/placeholder/guide-5.jpg',
      slug: 'analisis-datos-publicitarios-metricas-clave',
    },
    {
      id: 6,
      title: 'Calendario editorial para contenido de valor',
      description:
        'Cómo planificar, crear y distribuir contenido relevante para tu audiencia de manera consistente y estratégica.',
      category: 'Contenidos',
      level: 'Intermedio',
      image: '/placeholder/guide-6.jpg',
      slug: 'calendario-editorial-contenido-valor',
    },
  ];

  const categories = [
    { name: 'Redes Sociales', icon: 'fa-share-alt' },
    { name: 'SEO Local', icon: 'fa-map-marker-alt' },
    { name: 'Email Marketing', icon: 'fa-envelope' },
    { name: 'PPC', icon: 'fa-mouse-pointer' },
    { name: 'Análisis', icon: 'fa-chart-bar' },
    { name: 'Contenidos', icon: 'fa-file-alt' },
    { name: 'Branding', icon: 'fa-copyright' },
    { name: 'Publicidad', icon: 'fa-ad' },
  ];

  const levels = [
    { name: 'Principiante', color: 'green' },
    { name: 'Intermedio', color: 'blue' },
    { name: 'Avanzado', color: 'red' },
  ];

  const getLevelColor = level => {
    switch (level) {
      case 'Principiante':
        return 'bg-green-100 text-green-800';
      case 'Intermedio':
        return 'bg-blue-100 text-blue-800';
      case 'Avanzado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout
      title="Guías y Tutoriales | PublicAdis"
      description="Recursos educativos gratuitos sobre publicidad y marketing digital para hacer crecer tu negocio"
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Guías y Tutoriales</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Recursos educativos gratuitos para ayudarte a dominar las estrategias publicitarias y
              potenciar el crecimiento de tu negocio
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
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <i className={`fas ${category.icon}`}></i>
                {category.name}
              </button>
            ))}
          </div>

          {/* Levels Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {levels.map((level, index) => (
              <button
                key={index}
                className={`px-4 py-1 rounded-full border font-medium transition-colors ${getLevelColor(
                  level.name
                )}`}
              >
                {level.name}
              </button>
            ))}
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map(guide => (
              <div
                key={guide.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  {/* Featured image would go here */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getLevelColor(guide.level)}`}
                    >
                      {guide.level}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {guide.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/recursos/guias/${guide.slug}`}>{guide.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{guide.description}</p>
                  <Link
                    href={`/recursos/guias/${guide.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Ver Guía
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

          {/* Newsletter */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-md mt-16 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">¿Quieres más recursos exclusivos?</h3>
              <p className="text-gray-600">
                Suscríbete a nuestro newsletter y recibe guías especializadas, plantillas y consejos
                directamente en tu bandeja de entrada.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors">
                Suscribirme
              </button>
            </div>
          </div>

          {/* Help Box */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Si necesitas ayuda con un tema específico o tienes alguna sugerencia para futuras
              guías, no dudes en contactarnos. Estamos aquí para ayudarte.
            </p>
            <Link
              href="/contacto"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Contactar con Soporte
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
