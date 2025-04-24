import React from 'react';
import Layout from '../src/components/Layout';

export default function Contact() {
  return (
    <Layout
      title="Contacto | PublicAdis"
      description="Ponte en contacto con PublicAdis para impulsar tu estrategia publicitaria en Cusco"
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a potenciar tu negocio con estrategias publicitarias
              efectivas. Completa el formulario y nos pondremos en contacto contigo lo antes
              posible.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>

                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 mb-2">
                      ¿Qué servicio te interesa?
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="publicidad-digital">Publicidad Digital</option>
                      <option value="seo-sem">SEO / SEM</option>
                      <option value="redes-sociales">Gestión de Redes Sociales</option>
                      <option value="diseño-grafico">Diseño Gráfico</option>
                      <option value="desarrollo-web">Desarrollo Web</option>
                      <option value="email-marketing">Email Marketing</option>
                      <option value="consultoria">Consultoría Estratégica</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      He leído y acepto la{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        política de privacidad
                      </a>{' '}
                      *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors w-full md:w-auto"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Dirección</h3>
                      <p className="text-gray-600">Local físico en San Sebastián, Cusco, Perú</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Teléfono</h3>
                      <p className="text-gray-600">
                        <a href="tel:+51937054328" className="hover:text-blue-600">
                          +51 937 054 328
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:publicadis@gmail.com" className="hover:text-blue-600">
                          publicadis@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Horario de Atención</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sábado: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-xl font-bold mb-4">Síguenos</h2>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/937054328"
                    className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/publicadis"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/publicadis"
                    className="w-10 h-10 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@publicadis"
                    className="w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a
                    href="https://linkedin.com/company/publicadis"
                    className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Directions */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Nuestra Ubicación</h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
              {/* Insert Google Maps iframe here */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-600">Mapa de ubicación</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="flex justify-between items-center w-full px-6 py-4 text-left font-medium">
                  <span>¿Cuánto tiempo tardan en responder a mi consulta?</span>
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </button>
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">
                    Nos esforzamos por responder a todas las consultas dentro de las 24 horas
                    hábiles siguientes. En casos de alta demanda, podría tomar hasta 48 horas.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="flex justify-between items-center w-full px-6 py-4 text-left font-medium">
                  <span>¿Ofrecen servicios fuera de Cusco?</span>
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </button>
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">
                    Sí, aunque nuestra especialidad es el mercado cusqueño, trabajamos con clientes
                    de todo Perú y adaptamos nuestras estrategias según las particularidades de cada
                    mercado regional.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="flex justify-between items-center w-full px-6 py-4 text-left font-medium">
                  <span>¿Tienen planes de precios fijos o son personalizados?</span>
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </button>
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">
                    Ofrecemos tanto planes estándar como soluciones completamente personalizadas.
                    Después de entender tus necesidades específicas, te presentaremos las opciones
                    que mejor se adapten a tus objetivos y presupuesto.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="flex justify-between items-center w-full px-6 py-4 text-left font-medium">
                  <span>¿Puedo solicitar una demostración antes de contratar?</span>
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </button>
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">
                    ¡Absolutamente! Ofrecemos consultas iniciales gratuitas donde podemos mostrarte
                    ejemplos de nuestro trabajo y explicarte cómo podríamos ayudar específicamente a
                    tu negocio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Suscríbete a Nuestro Newsletter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Recibe noticias, consejos de marketing, tendencias publicitarias y ofertas exclusivas
              directamente en tu bandeja de entrada.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors whitespace-nowrap">
                Suscribirme
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
