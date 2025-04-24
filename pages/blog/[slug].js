import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../src/components/Layout';
import Link from 'next/link';

// Sample blog posts data - in a real app, this would come from a database or API
const blogPosts = [
  {
    id: 1,
    title: 'Cómo mejorar la visibilidad online de tu negocio en Cusco',
    content: `
      <p>En el competitivo mercado cusqueño, tener una fuerte presencia online se ha convertido en una necesidad para cualquier negocio que busque crecer y captar nuevos clientes. Cusco, como importante destino turístico y centro económico del sur del Perú, ofrece grandes oportunidades, pero también desafíos únicos para los emprendedores locales.</p>
      
      <h2>Por qué es importante la visibilidad online</h2>
      <p>Antes de entrar en las estrategias específicas, es fundamental entender por qué la visibilidad online es crucial para tu negocio en Cusco:</p>
      <ul>
        <li>El 85% de los turistas que visitan Cusco investigan servicios y productos locales antes de su viaje.</li>
        <li>Los consumidores locales están cada vez más conectados, con más del 70% usando internet diariamente para buscar productos y servicios.</li>
        <li>La competencia digital está aumentando, y posicionarse adecuadamente marca la diferencia entre ser encontrado o quedar en el olvido.</li>
      </ul>
      
      <h2>Estrategias efectivas para mejorar tu visibilidad online</h2>
      
      <h3>1. Optimiza tu presencia en Google My Business</h3>
      <p>Para negocios locales en Cusco, Google My Business es una herramienta fundamental. Asegúrate de:</p>
      <ul>
        <li>Verificar y reclamar tu perfil de empresa</li>
        <li>Completar toda la información: horarios, ubicación exacta, servicios, etc.</li>
        <li>Subir fotos de alta calidad de tu negocio, productos o servicios</li>
        <li>Responder activamente a las reseñas de los clientes</li>
        <li>Publicar actualizaciones y ofertas regularmente</li>
      </ul>
      
      <h3>2. Implementa SEO local</h3>
      <p>El SEO (Search Engine Optimization) local te ayudará a aparecer en los resultados de búsqueda cuando los usuarios busquen negocios como el tuyo en Cusco:</p>
      <ul>
        <li>Incluye palabras clave geográficas en tu contenido (ej. "restaurante en centro histórico de Cusco")</li>
        <li>Crea páginas específicas para cada servicio o producto que ofreces</li>
        <li>Obtén enlaces desde directorios locales y sitios relacionados con Cusco</li>
        <li>Asegúrate de que tu NAP (Nombre, Dirección, Teléfono) sea consistente en toda la web</li>
      </ul>
      
      <h3>3. Aprovecha las redes sociales</h3>
      <p>Las redes sociales son particularmente efectivas en Cusco, donde existe una fuerte cultura de recomendación:</p>
      <ul>
        <li>Identifica las plataformas más relevantes para tu audiencia (Facebook e Instagram suelen ser las más utilizadas en Cusco)</li>
        <li>Publica contenido auténtico que resalte la cultura y el entorno único de Cusco</li>
        <li>Utiliza hashtags locales (#Cusco, #VisitaCusco, #CuscoPerú, etc.)</li>
        <li>Colabora con influencers y creadores de contenido locales</li>
        <li>Participa en grupos y comunidades relacionadas con tu sector</li>
      </ul>
      
      <h3>4. Implementa una estrategia de marketing de contenidos</h3>
      <p>Crear contenido valioso y relevante te ayudará a posicionarte como autoridad en tu sector:</p>
      <ul>
        <li>Mantén un blog activo con información útil para tu audiencia</li>
        <li>Crea guías y recursos sobre temas relacionados con tu negocio y Cusco</li>
        <li>Desarrolla contenido en diversos formatos: videos, infografías, podcasts, etc.</li>
        <li>Aborda problemas y necesidades específicas del mercado cusqueño</li>
      </ul>
      
      <h3>5. Invierte en publicidad digital</h3>
      <p>La publicidad de pago puede complementar tus esfuerzos orgánicos:</p>
      <ul>
        <li>Utiliza Google Ads con geolocalización específica para Cusco</li>
        <li>Implementa campañas en Facebook e Instagram Ads dirigidas a tu público objetivo</li>
        <li>Considera anuncios en plataformas de viajes como TripAdvisor si tu negocio está relacionado con el turismo</li>
        <li>Mide y optimiza constantemente tus campañas para maximizar el retorno de inversión</li>
      </ul>
      
      <h2>Mide y mejora continuamente</h2>
      <p>Finalmente, es esencial implementar un sistema de medición para evaluar la efectividad de tus estrategias:</p>
      <ul>
        <li>Utiliza Google Analytics para monitorear el tráfico de tu sitio web</li>
        <li>Configura conversiones para medir acciones importantes (llamadas, reservas, ventas)</li>
        <li>Analiza las métricas de tus redes sociales</li>
        <li>Realiza ajustes basados en los datos obtenidos</li>
      </ul>
      
      <p>Implementar estas estrategias de manera consistente y adaptada a las particularidades del mercado cusqueño te ayudará a mejorar significativamente la visibilidad online de tu negocio, atrayendo más clientes y consolidando tu presencia digital.</p>
    `,
    category: 'Marketing Digital',
    author: 'Ana Morales',
    date: '15 de Mayo, 2023',
    image: '/placeholder/blog-1.jpg',
    slug: 'como-mejorar-visibilidad-online-negocio-cusco',
    readTime: '8 min',
  },
  {
    id: 2,
    title: 'Las 5 métricas publicitarias que todo negocio debe monitorear',
    content: `
      <p>En el competitivo mundo de la publicidad digital, no basta con lanzar campañas y esperar resultados. Para maximizar el retorno de inversión y tomar decisiones informadas, es crucial monitorear las métricas adecuadas. Este artículo detalla los cinco indicadores clave que todo negocio debería seguir para evaluar el desempeño de sus esfuerzos publicitarios.</p>
      
      <h2>1. Tasa de Conversión (CR)</h2>
      <p>La tasa de conversión mide el porcentaje de usuarios que completan una acción deseada después de ver o interactuar con tu anuncio.</p>
      <p>Este indicador es posiblemente el más importante, ya que muestra directamente cuántas personas están respondiendo a tu llamado a la acción, ya sea realizando una compra, completando un formulario, suscribiéndose a un newsletter, etc.</p>
      <p><strong>Cómo calcularla:</strong> (Número de conversiones / Número total de visitantes) × 100</p>
      <p><strong>Consejos para mejorarla:</strong></p>
      <ul>
        <li>Optimiza las páginas de destino para que coincidan con el mensaje del anuncio</li>
        <li>Simplifica el proceso de conversión eliminando obstáculos innecesarios</li>
        <li>Prueba diferentes llamados a la acción para ver cuáles generan mejores resultados</li>
        <li>Implementa elementos de prueba social como testimonios o calificaciones</li>
      </ul>
      
      <h2>2. Coste por Adquisición (CPA)</h2>
      <p>El CPA mide cuánto te cuesta adquirir un cliente o una conversión a través de tus esfuerzos publicitarios.</p>
      <p>Esta métrica te ayuda a determinar si estás gastando demasiado para adquirir nuevos clientes en relación con lo que estos aportan a tu negocio.</p>
      <p><strong>Cómo calcularlo:</strong> Gasto total en publicidad / Número de adquisiciones</p>
      <p><strong>Consejos para mejorarlo:</strong></p>
      <ul>
        <li>Segmenta tu audiencia con mayor precisión para llegar a usuarios más propensos a convertir</li>
        <li>Optimiza tu estrategia de pujas en plataformas publicitarias</li>
        <li>Mejora la calidad y relevancia de tus anuncios para aumentar la tasa de conversión sin aumentar el gasto</li>
        <li>Prueba diferentes canales publicitarios para identificar los más rentables</li>
      </ul>
      
      <h2>3. Retorno de la Inversión Publicitaria (ROAS)</h2>
      <p>El ROAS mide los ingresos generados por cada sol invertido en publicidad.</p>
      <p>A diferencia del ROI general, el ROAS se centra específicamente en el rendimiento de tus inversiones publicitarias, lo que te permite evaluar la eficacia de campañas específicas.</p>
      <p><strong>Cómo calcularlo:</strong> (Ingresos generados por publicidad / Gasto en publicidad) × 100</p>
      <p><strong>Consejos para mejorarlo:</strong></p>
      <ul>
        <li>Enfócate en audiencias que han demostrado un alto valor de cliente a lo largo del tiempo</li>
        <li>Optimiza tus anuncios para productos o servicios con mayores márgenes</li>
        <li>Implementa estrategias de remarketing para aumentar las conversiones</li>
        <li>Ajusta tus presupuestos para favorecer a las campañas con mejor rendimiento</li>
      </ul>
      
      <h2>4. Tasa de Clics (CTR)</h2>
      <p>La CTR mide el porcentaje de personas que hacen clic en tu anuncio después de verlo.</p>
      <p>Esta métrica es crucial para evaluar la relevancia y el atractivo de tus anuncios para tu público objetivo.</p>
      <p><strong>Cómo calcularla:</strong> (Número de clics / Número de impresiones) × 100</p>
      <p><strong>Consejos para mejorarla:</strong></p>
      <ul>
        <li>Crea títulos y descripciones atractivos que capturen la atención</li>
        <li>Incluye llamados a la acción claros y convincentes</li>
        <li>Utiliza imágenes o videos de alta calidad que resalten tu oferta</li>
        <li>Prueba diferentes variaciones de anuncios (A/B testing)</li>
        <li>Mejora la relevancia del anuncio para tu audiencia objetivo</li>
      </ul>
      
      <h2>5. Valor del Cliente de por Vida (LTV)</h2>
      <p>El LTV estima los ingresos totales que un cliente generará durante toda su relación con tu negocio.</p>
      <p>Esta métrica te ayuda a determinar cuánto puedes gastar de manera rentable para adquirir y retener clientes, mirando más allá de la primera conversión.</p>
      <p><strong>Cómo calcularlo:</strong> Valor promedio de compra × Frecuencia de compra × Tiempo promedio de retención del cliente</p>
      <p><strong>Consejos para mejorarlo:</strong></p>
      <ul>
        <li>Implementa estrategias de venta cruzada y venta adicional</li>
        <li>Desarrolla programas de fidelización de clientes</li>
        <li>Mejora la experiencia del cliente para aumentar la retención</li>
        <li>Comunícate regularmente con tus clientes para mantener el compromiso</li>
      </ul>
      
      <h2>Conclusión</h2>
      <p>Monitorear estas cinco métricas te proporcionará una visión completa del rendimiento de tus campañas publicitarias. Lo más importante es no ver estos indicadores de forma aislada, sino entender cómo se relacionan entre sí para obtener una imagen completa de tu estrategia publicitaria.</p>
      <p>Recuerda que las métricas son herramientas para la toma de decisiones. Úsalas para identificar áreas de mejora, optimizar tu presupuesto publicitario y, en última instancia, aumentar el retorno de tus inversiones en marketing.</p>
      <p>¿Estás monitoreando estas métricas en tu negocio? ¿Hay alguna otra que consideres fundamental? Nos encantaría conocer tu experiencia.</p>
    `,
    category: 'Análisis de Datos',
    author: 'Carlos Ramírez',
    date: '28 de Abril, 2023',
    image: '/placeholder/blog-2.jpg',
    slug: 'metricas-publicitarias-todo-negocio-debe-monitorear',
    readTime: '10 min',
  },
];

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);

  // If the post is not found or the page is still loading (slug is undefined)
  if (!post && slug) {
    return (
      <Layout title="Artículo no encontrado | PublicAdis">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-6">
            Lo sentimos, el artículo que estás buscando no existe o ha sido movido.
          </p>
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Volver al Blog
          </Link>
        </div>
      </Layout>
    );
  }

  // If the page is still loading (router.query.slug is undefined on first render)
  if (!slug) {
    return (
      <Layout title="Cargando... | PublicAdis">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${post.title} | PublicAdis Blog`}
      description={post.content.substring(0, 160).replace(/<[^>]*>/g, '')}
    >
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
              <span className="text-gray-500">{post.date}</span>
              <span className="text-gray-500 flex items-center">
                <i className="far fa-clock mr-1"></i> {post.readTime} de lectura
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="font-medium">Por {post.author}</h3>
                <div className="flex gap-2 text-gray-500 text-sm">
                  <a href="#" className="hover:text-blue-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="hover:text-blue-600">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="max-w-5xl mx-auto mb-10 h-96 bg-gray-200 rounded-lg"></div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div
              className="prose lg:prose-lg mx-auto"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 my-8">
              <span className="text-gray-600 font-medium">Tags:</span>
              <a
                href="#"
                className="bg-gray-100 text-gray-800 text-sm px-2.5 py-0.5 rounded hover:bg-gray-200"
              >
                Publicidad
              </a>
              <a
                href="#"
                className="bg-gray-100 text-gray-800 text-sm px-2.5 py-0.5 rounded hover:bg-gray-200"
              >
                Marketing Digital
              </a>
              <a
                href="#"
                className="bg-gray-100 text-gray-800 text-sm px-2.5 py-0.5 rounded hover:bg-gray-200"
              >
                Cusco
              </a>
              <a
                href="#"
                className="bg-gray-100 text-gray-800 text-sm px-2.5 py-0.5 rounded hover:bg-gray-200"
              >
                Estrategia
              </a>
            </div>

            {/* Share */}
            <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 my-8">
              <div>
                <span className="font-medium text-gray-700 mr-4">Compartir:</span>
                <a href="#" className="text-gray-600 hover:text-blue-600 mx-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400 mx-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-800 mx-2">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 mx-2">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>

              <div>
                <a href="#comments" className="flex items-center text-blue-600 font-medium">
                  <i className="far fa-comment-alt mr-1.5"></i> Comentarios (0)
                </a>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-blue-50 p-6 rounded-lg my-12">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sobre {post.author}</h3>
                  <p className="text-gray-700 mb-4">
                    Especialista en marketing digital con más de 10 años de experiencia en el
                    desarrollo de estrategias de crecimiento para empresas de diversos sectores.
                    Apasionado por las últimas tendencias en publicidad y análisis de datos.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div id="comments" className="my-12">
              <h3 className="text-2xl font-bold mb-6">Comentarios (0)</h3>

              {/* Comment Form */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-lg font-semibold mb-4">Deja tu comentario</h4>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
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
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="comment" className="block text-gray-700 mb-1">
                      Comentario
                    </label>
                    <textarea
                      id="comment"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" id="saveInfo" className="rounded text-blue-600" />
                    <label htmlFor="saveInfo" className="text-gray-700">
                      Guardar mi nombre y email para próximos comentarios
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors"
                  >
                    Publicar Comentario
                  </button>
                </form>
              </div>

              {/* No Comments Message */}
              <div className="text-center py-8 border-t border-gray-200">
                <p className="text-gray-600">No hay comentarios aún. ¡Sé el primero en comentar!</p>
              </div>
            </div>

            {/* Related Posts */}
            <div className="my-12">
              <h3 className="text-2xl font-bold mb-6">Artículos Relacionados</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter(relatedPost => relatedPost.id !== post.id)
                  .slice(0, 3)
                  .map(relatedPost => (
                    <article
                      key={relatedPost.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="h-40 bg-gray-200 relative"></div>
                      <div className="p-4">
                        <h4 className="font-bold mb-2 hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                        </h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{relatedPost.date}</span>
                          <span className="mx-2">•</span>
                          <span>{relatedPost.readTime} de lectura</span>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </div>

            {/* Back to Blog */}
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800"
              >
                <i className="fas fa-arrow-left"></i>
                Volver al Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
