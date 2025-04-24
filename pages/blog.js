import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Cómo mejorar la visibilidad online de tu negocio en Cusco',
      excerpt:
        'Descubre las mejores estrategias para aumentar la presencia digital de tu empresa en el mercado cusqueño.',
      category: 'Marketing Digital',
      author: 'Ana Morales',
      date: '15 de Mayo, 2023',
      image: '/placeholder/blog-1.jpg',
      slug: 'como-mejorar-visibilidad-online-negocio-cusco',
    },
    {
      id: 2,
      title: 'Las 5 métricas publicitarias que todo negocio debe monitorear',
      excerpt:
        'Conoce los indicadores clave que te ayudarán a evaluar el éxito de tus campañas publicitarias y optimizar tu inversión.',
      category: 'Análisis de Datos',
      author: 'Carlos Ramírez',
      date: '28 de Abril, 2023',
      image: '/placeholder/blog-2.jpg',
      slug: 'metricas-publicitarias-todo-negocio-debe-monitorear',
    },
    {
      id: 3,
      title: 'Estrategias de publicidad local para pequeños negocios',
      excerpt:
        'Aprende cómo implementar estrategias efectivas de publicidad local que potencien el crecimiento de tu pequeño negocio.',
      category: 'Publicidad Local',
      author: 'Lucía Herrera',
      date: '10 de Abril, 2023',
      image: '/placeholder/blog-3.jpg',
      slug: 'estrategias-publicidad-local-pequenos-negocios',
    },
    {
      id: 4,
      title: 'Tendencias publicitarias para 2023 que debes conocer',
      excerpt:
        'Mantente al día con las últimas tendencias en publicidad digital y tradicional que marcarán el 2023.',
      category: 'Tendencias',
      author: 'Jorge Torres',
      date: '5 de Abril, 2023',
      image: '/placeholder/blog-4.jpg',
      slug: 'tendencias-publicitarias-2023-debes-conocer',
    },
    {
      id: 5,
      title: 'Cómo crear campañas publicitarias efectivas con presupuestos limitados',
      excerpt:
        'Descubre estrategias y tácticas para maximizar el impacto de tus campañas publicitarias cuando cuentas con recursos limitados.',
      category: 'Presupuesto y ROI',
      author: 'Miguel Sánchez',
      date: '22 de Marzo, 2023',
      image: '/placeholder/blog-5.jpg',
      slug: 'campanas-publicitarias-efectivas-presupuestos-limitados',
    },
    {
      id: 6,
      title: 'El impacto de la IA en la publicidad moderna',
      excerpt:
        'Explora cómo la inteligencia artificial está transformando la industria publicitaria y cómo puedes aprovecharla para tu negocio.',
      category: 'Tecnología',
      author: 'Carlos Ramírez',
      date: '10 de Marzo, 2023',
      image: '/placeholder/blog-6.jpg',
      slug: 'impacto-ia-publicidad-moderna',
    },
  ];

  const categories = [
    'Marketing Digital',
    'Análisis de Datos',
    'Publicidad Local',
    'Tendencias',
    'Presupuesto y ROI',
    'Tecnología',
    'Casos de Éxito',
    'Consejos Prácticos',
  ];

  return (
    <Layout
      title="Blog | PublicAdis"
      description="Artículos y consejos sobre publicidad, marketing digital y estrategias para hacer crecer tu negocio"
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nuestro Blog</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Artículos, consejos y estrategias sobre publicidad, marketing digital y crecimiento de
              negocios
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map(post => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 bg-gray-200 relative"></div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Por {post.author}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                        >
                          Leer más
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
                  </article>
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
                    className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                  >
                    3
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

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-white p-5 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-semibold mb-4">Buscar</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Buscar artículos..."
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-5 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-semibold mb-4">Categorías</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-5 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-semibold mb-4">Artículos Recientes</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <li key={post.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-sm hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-50 p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Suscríbete a nuestro newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Recibe las últimas noticias y consejos sobre publicidad y marketing digital.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-md transition-colors">
                    Suscribirse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
