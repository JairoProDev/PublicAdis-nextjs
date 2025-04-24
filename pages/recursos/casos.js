import React from 'react';
import Layout from '../../src/components/Layout';
import Link from 'next/link';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'Cómo Hotel Samanapaq aumentó sus reservas en un 70% durante temporada baja',
      excerpt:
        'Estrategia omnicanal que combinó publicidad en redes sociales, SEM y email marketing para impulsar las reservas fuera de temporada alta.',
      client: 'Hotel Samanapaq',
      category: 'Hotelería',
      results: [
        { label: 'Incremento en reservas', value: '+70%' },
        { label: 'ROI', value: '320%' },
        { label: 'Reducción CPA', value: '-35%' },
      ],
      image: '/placeholder/case-study-1.jpg',
      slug: 'hotel-samanapaq-aumento-reservas-temporada-baja',
    },
    {
      id: 2,
      title: 'Inmobiliaria Qosqo: de 5 a 32 leads cualificados por mes',
      excerpt:
        'Transformación del embudo de captación de clientes para una inmobiliaria local, multiplicando por 6 el número de leads cualificados.',
      client: 'Inmobiliaria Qosqo',
      category: 'Inmobiliario',
      results: [
        { label: 'Leads cualificados', value: '+540%' },
        { label: 'Tasa de conversión', value: '8.5%' },
        { label: 'Coste por lead', value: '-42%' },
      ],
      image: '/placeholder/case-study-2.jpg',
      slug: 'inmobiliaria-qosqo-aumento-leads-cualificados',
    },
    {
      id: 3,
      title:
        'Restaurante Pachakuteq: estrategia de fidelización para duplicar las visitas recurrentes',
      excerpt:
        'Implementación de un programa de fidelización digital que logró duplicar la frecuencia de visitas de los clientes habituales.',
      client: 'Restaurante Pachakuteq',
      category: 'Gastronomía',
      results: [
        { label: 'Visitas recurrentes', value: '+105%' },
        { label: 'Ticket promedio', value: '+25%' },
        { label: 'Participación programa', value: '68%' },
      ],
      image: '/placeholder/case-study-3.jpg',
      slug: 'restaurante-pachakuteq-fidelizacion-visitas-recurrentes',
    },
    {
      id: 4,
      title: 'Clínica Dental Sonrisa Inka: captación de 120 nuevos pacientes en 3 meses',
      excerpt:
        'Estrategia integral de marketing digital que permitió a esta clínica dental atraer a 120 nuevos pacientes en solo tres meses.',
      client: 'Clínica Dental Sonrisa Inka',
      category: 'Salud',
      results: [
        { label: 'Nuevos pacientes', value: '120' },
        { label: 'Coste por paciente', value: '-28%' },
        { label: 'Retorno inversión', value: '410%' },
      ],
      image: '/placeholder/case-study-4.jpg',
      slug: 'clinica-dental-sonrisa-inka-captacion-pacientes',
    },
    {
      id: 5,
      title: 'Tienda de Ropa Qampaq: estrategia omnicanal para lanzamiento de e-commerce',
      excerpt:
        'Cómo una tienda tradicional de ropa multiplicó sus ventas al implementar una estrategia omnicanal con foco en e-commerce.',
      client: 'Tienda Qampaq',
      category: 'Retail',
      results: [
        { label: 'Ventas online', value: '+215%' },
        { label: 'Tráfico web', value: '+180%' },
        { label: 'Conversión', value: '3.8%' },
      ],
      image: '/placeholder/case-study-5.jpg',
      slug: 'tienda-ropa-qampaq-estrategia-omnicanal-ecommerce',
    },
    {
      id: 6,
      title:
        'Agencia de Viajes Ñan: reposicionamiento de marca para competir en el mercado premium',
      excerpt:
        'Transformación completa de la identidad de marca que permitió a esta agencia de viajes posicionarse en el segmento premium.',
      client: 'Agencia de Viajes Ñan',
      category: 'Turismo',
      results: [
        { label: 'Ticket promedio', value: '+85%' },
        { label: 'Percepción premium', value: '+92%' },
        { label: 'Margen de beneficio', value: '+45%' },
      ],
      image: '/placeholder/case-study-6.jpg',
      slug: 'agencia-viajes-nan-reposicionamiento-premium',
    },
  ];

  const categories = [
    'Hotelería',
    'Inmobiliario',
    'Gastronomía',
    'Salud',
    'Retail',
    'Turismo',
    'Educación',
    'Servicios',
  ];

  const services = [
    'Publicidad Digital',
    'SEO',
    'Social Media',
    'Email Marketing',
    'Branding',
    'Diseño Web',
    'SEM',
    'Análisis de Datos',
  ];

  return (
    <Layout
      title="Casos de Éxito | PublicAdis"
      description="Descubre cómo hemos ayudado a empresas de Cusco a crecer con estrategias de publicidad efectivas"
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Casos de Éxito</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Historias reales de empresas que lograron resultados excepcionales al implementar
              nuestras estrategias publicitarias
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <button className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                Todos los sectores
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
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                Todos los servicios
              </button>
              {services.slice(0, 4).map((service, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                >
                  {service}
                </button>
              ))}
              <div className="relative group">
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
                  Más servicios <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
                  <div className="py-1">
                    {services.slice(4).map((service, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map(caseStudy => (
              <div
                key={caseStudy.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  {/* Featured image would go here */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/recursos/casos/${caseStudy.slug}`}>{caseStudy.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{caseStudy.excerpt}</p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-blue-600">{result.value}</span>
                        <span className="text-xs text-gray-500">{result.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm font-medium text-gray-600">
                      Cliente: {caseStudy.client}
                    </span>
                    <Link
                      href={`/recursos/casos/${caseStudy.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      Ver Caso
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

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 mt-16 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0 lg:mr-10">
                <h3 className="text-2xl font-bold mb-2">
                  ¿Quieres ser nuestro próximo caso de éxito?
                </h3>
                <p className="text-blue-100 max-w-xl">
                  Trabajamos con empresas de todos los tamaños en Cusco para desarrollar estrategias
                  publicitarias efectivas que impulsan resultados reales y medibles.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  Solicitar Consulta
                </Link>
                <Link
                  href="/servicios"
                  className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors whitespace-nowrap"
                >
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Lo que dicen nuestros clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-2 text-amber-400 mb-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-700 mb-4">
                  "PublicAdis transformó completamente nuestra estrategia digital. Pasamos de tener
                  una presencia online básica a liderar nuestro sector en Cusco."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-medium">Roberto Velásquez</p>
                    <p className="text-sm text-gray-500">Gerente, Hotel Samanapaq</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-2 text-amber-400 mb-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-700 mb-4">
                  "Lo que más valoro es su enfoque en resultados medibles. Cada sol invertido con
                  ellos ha generado un retorno real para nuestro negocio inmobiliario."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-medium">María Gutiérrez</p>
                    <p className="text-sm text-gray-500">Directora, Inmobiliaria Qosqo</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-2 text-amber-400 mb-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p className="text-gray-700 mb-4">
                  "Su estrategia de fidelización no solo aumentó nuestras visitas recurrentes, sino
                  que transformó a nuestros clientes en verdaderos embajadores de marca."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-medium">Luis Condori</p>
                    <p className="text-sm text-gray-500">Propietario, Restaurante Pachakuteq</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="border border-gray-200 rounded-lg">
                <button className="flex justify-between items-center w-full px-6 py-4 text-left font-medium">
                  <span>¿Cómo miden el éxito de las campañas publicitarias?</span>
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </button>
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">
                    Establecemos KPIs específicos al inicio de cada proyecto basados en tus
                    objetivos de negocio. Utilizamos herramientas avanzadas de análisis para medir
                    el rendimiento en tiempo real y proporcionamos informes detallados que muestran
                    el retorno de inversión y otros indicadores clave.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg">
                <button className="flex justify-between items-center w-full px-6 py-4 text-left font-medium">
                  <span>¿Trabajan con negocios pequeños o solo con grandes empresas?</span>
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </button>
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">
                    Trabajamos con empresas de todos los tamaños. Nuestras estrategias se adaptan a
                    las necesidades y presupuestos específicos de cada cliente, ya sea un pequeño
                    negocio local o una gran empresa con presencia regional.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg">
                <button className="flex justify-between items-center w-full px-6 py-4 text-left font-medium">
                  <span>¿Cuánto tiempo se necesita para ver resultados?</span>
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </button>
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">
                    El tiempo para ver resultados varía según el tipo de campaña y los objetivos.
                    Algunas estrategias, como la publicidad PPC, pueden mostrar resultados
                    inmediatos, mientras que otras como el SEO pueden tomar de 3 a 6 meses para ver
                    su máximo potencial. En cada caso, establecemos expectativas claras desde el
                    principio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
