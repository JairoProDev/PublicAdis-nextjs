import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Benefits = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialInterval = useRef(null);

  const benefits = [
    {
      icon: 'bullhorn',
      title: 'Exposición en 7 Canales Diferentes',
      description:
        'Tu anuncio aparecerá en nuestra web, app, local físico, Facebook, TikTok, WhatsApp y revista digital.',
      stats: [{ value: '7x', label: 'Más alcance' }],
      color: 'blue',
    },
    {
      icon: 'user-plus',
      title: 'Audiencia Local Altamente Interesada',
      description:
        'Conecta con personas que realmente buscan tus productos o servicios en Cusco y alrededores.',
      stats: [{ value: '+5K', label: 'Usuarios diarios' }],
      color: 'green',
    },
    {
      icon: 'chart-line',
      title: 'Incremento de Ventas Demostrado',
      description:
        'Nuestros anunciantes reportan un aumento significativo en consultas y ventas tras publicar.',
      stats: [{ value: '+40%', label: 'Ventas promedio' }],
      color: 'orange',
    },
    {
      icon: 'clock',
      title: 'Publicación Simple y Rápida',
      description:
        'Crea y publica tu anuncio en menos de 5 minutos, desde cualquier dispositivo y a cualquier hora.',
      stats: [{ value: '5 min', label: 'Tiempo promedio' }],
      color: 'purple',
    },
    {
      icon: 'hand-pointer',
      title: 'Control Total de tus Anuncios',
      description:
        'Gestiona, edita o actualiza tus anuncios cuando quieras. Tú tienes el control total.',
      stats: [{ value: '100%', label: 'Control' }],
      color: 'teal',
    },
    {
      icon: 'comments-dollar',
      title: 'Retorno de Inversión Superior',
      description:
        'El mejor ROI del mercado publicitario local. Inversión mínima, resultados máximos.',
      stats: [{ value: '3.5x', label: 'ROI promedio' }],
      color: 'red',
    },
    {
      icon: 'globe',
      title: 'Alcance Multicanal',
      description:
        'Su mensaje llegará a través de web, aplicación móvil, revista digital, redes sociales, grupos de WhatsApp y puntos físicos.',
      stats: [{ value: '7', label: 'Canales integrados' }],
      color: 'amber',
    },
    {
      icon: 'shield-alt',
      title: 'Protección Antifrauide',
      description:
        'Nuestro sistema de detección de fraude garantiza que su presupuesto publicitario se invierta exclusivamente en interacciones legítimas.',
      stats: [{ value: '100%', label: 'Seguridad' }],
      color: 'indigo',
    },
  ];

  // Extensive testimonials categorized by industry/sector
  const testimonialData = {
    // Organized by sectors
    sectors: {
      inmobiliario: {
        title: 'Sector Inmobiliario',
        icon: 'building',
        testimonials: [
          {
            text: 'Desde que empecé a publicar mis propiedades en PublicAdis, logré alquilar dos departamentos en menos de una semana. El alcance es impresionante y la calidad de los interesados es mucho mejor.',
            rating: 5,
            author: 'Carlos Mendoza',
            title: 'Agente Inmobiliario',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            results: '12 propiedades alquiladas en 3 semanas',
            roi: '+380%',
          },
          {
            text: 'Vendimos un condominio entero en tiempo récord gracias a la visibilidad que nos dio PublicAdis. La inversión se recuperó en la primera semana.',
            rating: 5,
            author: 'Lucía Delgado',
            title: 'Gerente de Ventas - Inmobiliaria Cusco',
            image: 'https://randomuser.me/api/portraits/women/45.jpg',
            results: '32 apartamentos vendidos',
            roi: '+420%',
          },
        ],
      },
      comercial: {
        title: 'Comercio Minorista',
        icon: 'store',
        testimonials: [
          {
            text: 'Nuestra tienda física aumentó sus ventas en un 42% gracias a las campañas en PublicAdis. El tráfico en tienda se duplicó desde el primer mes.',
            rating: 4.5,
            author: 'Pedro Mamani',
            title: 'Dueño de Tienda',
            image: 'https://randomuser.me/api/portraits/men/41.jpg',
            results: '+42% en ventas',
            roi: '+200%',
          },
          {
            text: 'Nunca habíamos tenido tantos clientes nuevos. La publicidad multicanal nos dio una visibilidad que no conseguimos con otros medios.',
            rating: 5,
            author: 'Rosa Huamán',
            title: 'Gerente de Marca - Centro Comercial',
            image: 'https://randomuser.me/api/portraits/women/29.jpg',
            results: '+65% clientes nuevos',
            roi: '+310%',
          },
        ],
      },
      gastronomia: {
        title: 'Restaurantes y Gastronomía',
        icon: 'utensils',
        testimonials: [
          {
            text: 'Encontré a mi equipo de trabajo gracias a los anuncios de empleo. Además, las reservas aumentaron significativamente con las promociones publicadas.',
            rating: 4.5,
            author: 'María Flores',
            title: 'Dueña de Restaurante',
            image: 'https://randomuser.me/api/portraits/women/22.jpg',
            results: '+53% en reservas',
            roi: '+280%',
          },
          {
            text: 'Pasamos de tener días vacíos a lista de espera los fines de semana. La publicidad segmentada atrajo exactamente el tipo de cliente que buscábamos.',
            rating: 5,
            author: 'Javier Quispe',
            title: 'Chef - Restaurante Andino',
            image: 'https://randomuser.me/api/portraits/men/53.jpg',
            results: 'Lista de espera los fines de semana',
            roi: '+310%',
          },
        ],
      },
      automotriz: {
        title: 'Sector Automotriz',
        icon: 'car',
        testimonials: [
          {
            text: 'Vendí mi auto en 3 días gracias a PublicAdis. Lo mejor es que pude publicarlo en todos los canales con un solo clic. La calidad de los contactos fue excelente.',
            rating: 5,
            author: 'Juan Perez',
            title: 'Ingeniero',
            image: 'https://randomuser.me/api/portraits/men/24.jpg',
            results: 'Venta en 3 días',
            roi: '+250%',
          },
          {
            text: 'Como concesionario, incrementamos nuestras ventas mensuales en un 35%. El costo por lead es mucho menor que en otras plataformas.',
            rating: 5,
            author: 'Fernando Sanchez',
            title: 'Gerente - AutoMundo Cusco',
            image: 'https://randomuser.me/api/portraits/men/36.jpg',
            results: '+35% en ventas mensuales',
            roi: '+270%',
          },
        ],
      },
      educacion: {
        title: 'Educación y Formación',
        icon: 'graduation-cap',
        testimonials: [
          {
            text: 'Las inscripciones a nuestros cursos virtuales se triplicaron gracias a la exposición en PublicAdis. La segmentación por intereses funciona increíblemente bien.',
            rating: 5,
            author: 'Claudia Benavides',
            title: 'Directora Académica',
            image: 'https://randomuser.me/api/portraits/women/42.jpg',
            results: '3x más inscripciones',
            roi: '+410%',
          },
        ],
      },
      servicios: {
        title: 'Servicios Profesionales',
        icon: 'briefcase',
        testimonials: [
          {
            text: 'Como consultora independiente, conseguí 8 nuevos clientes corporativos en dos meses. La inversión se pagó con el primer cliente.',
            rating: 5,
            author: 'Ana Medina',
            title: 'Consultora Financiera',
            image: 'https://randomuser.me/api/portraits/women/68.jpg',
            results: '8 clientes nuevos en 2 meses',
            roi: '+320%',
          },
        ],
      },
      turismo: {
        title: 'Turismo y Hotelería',
        icon: 'hotel',
        testimonials: [
          {
            text: 'Nuestras habitaciones mantienen una ocupación del 90% desde que publicitamos en PublicAdis. La plataforma nos conecta con el turista local y nacional que buscábamos.',
            rating: 5,
            author: 'Rodrigo Mamani',
            title: 'Gerente de Hotel',
            image: 'https://randomuser.me/api/portraits/men/80.jpg',
            results: '90% de ocupación',
            roi: '+280%',
          },
        ],
      },
      salud: {
        title: 'Salud y Bienestar',
        icon: 'heartbeat',
        testimonials: [
          {
            text: 'Las citas para consulta aumentaron un 73% en el primer mes. Los pacientes llegan ya informados gracias al contenido detallado que pudimos publicar.',
            rating: 4.5,
            author: 'Dra. Carmen Vega',
            title: 'Clínica Dental',
            image: 'https://randomuser.me/api/portraits/women/14.jpg',
            results: '+73% en citas',
            roi: '+300%',
          },
        ],
      },
    },

    // Organized by service type
    services: {
      publicidadWeb: {
        title: 'Publicidad Web',
        icon: 'globe',
        testimonials: [
          {
            text: 'El tráfico a nuestro sitio web se incrementó un 215% gracias a los banners y enlaces desde PublicAdis. La tasa de conversión es excepcional.',
            rating: 5,
            author: 'Martín Gutiérrez',
            title: 'Marketing Manager',
            image: 'https://randomuser.me/api/portraits/men/62.jpg',
            results: '+215% tráfico web',
            roi: '+350%',
          },
        ],
      },
      marketingDigital: {
        title: 'Marketing Digital Integral',
        icon: 'bullhorn',
        testimonials: [
          {
            text: 'La estrategia de marketing digital implementada por PublicAdis transformó nuestra presencia online. Los resultados superaron todas nuestras expectativas.',
            rating: 5,
            author: 'Lucia Torres',
            title: 'CEO - Startup tecnológica',
            image: 'https://randomuser.me/api/portraits/women/33.jpg',
            results: 'Liderazgo en el sector',
            roi: '+400%',
          },
        ],
      },
    },
  };

  // Flatten all testimonials for the carousel
  const allTestimonials = [
    ...Object.values(testimonialData.sectors).flatMap(sector => sector.testimonials),
    ...Object.values(testimonialData.services).flatMap(service => service.testimonials),
  ];

  // Separate definition of testimonials at the top level
  const testimonials = allTestimonials;

  // Color maps for Tailwind classes
  const colorMap = {
    blue: 'bg-gradient-to-r from-blue-600 to-blue-400',
    green: 'bg-gradient-to-r from-green-600 to-green-400',
    orange: 'bg-gradient-to-r from-orange-600 to-orange-400',
    purple: 'bg-gradient-to-r from-purple-600 to-purple-400',
    teal: 'bg-gradient-to-r from-teal-600 to-teal-400',
    red: 'bg-gradient-to-r from-red-600 to-red-400',
    amber: 'bg-gradient-to-r from-amber-600 to-amber-400',
    indigo: 'bg-gradient-to-r from-indigo-600 to-indigo-400',
  };

  const textColorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    orange: 'text-orange-600',
    purple: 'text-purple-600',
    teal: 'text-teal-600',
    red: 'text-red-600',
    amber: 'text-amber-600',
    indigo: 'text-indigo-600',
  };

  // Render stars for testimonial ratings
  const renderRatingStars = rating => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<i key={i} className="fas fa-star-half-alt text-yellow-500"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-yellow-500"></i>);
      }
    }

    return stars;
  };

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    // Auto rotate testimonials
    testimonialInterval.current = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => {
      clearInterval(testimonialInterval.current);
    };
  }, [nextTestimonial]);

  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beneficios de Anunciarte con
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500 ml-2">
              PublicAdis
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué los negocios en Cusco prefieren nuestra plataforma
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-lg ${colorMap[benefit.color]} flex items-center justify-center mb-4 relative z-10`}
              >
                <i className={`fas fa-${benefit.icon} text-xl text-white`}></i>
              </div>

              <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>

              <div className="flex flex-wrap gap-4 mt-auto">
                {benefit.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className={`text-2xl font-bold ${textColorMap[benefit.color]}`}>
                      {stat.value}
                    </span>
                    <span className="text-sm text-gray-500">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-50 rounded-full opacity-30 z-0"></div>
            </div>
          ))}
        </div>

        {/* Stats Display */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 bg-white rounded-xl p-6 shadow-md">
          <div className="text-center p-4 border-r border-gray-100 last:border-0">
            <span className="block text-3xl font-bold text-blue-600">+380%</span>
            <span className="text-gray-500 text-sm">ROI promedio</span>
          </div>
          <div className="text-center p-4 border-r border-gray-100 last:border-0">
            <span className="block text-3xl font-bold text-blue-600">50K+</span>
            <span className="text-gray-500 text-sm">Usuarios activos</span>
          </div>
          <div className="text-center p-4 border-r border-gray-100 last:border-0">
            <span className="block text-3xl font-bold text-blue-600">+200%</span>
            <span className="text-gray-500 text-sm">Incremento en ventas</span>
          </div>
          <div className="text-center p-4">
            <span className="block text-3xl font-bold text-blue-600">7</span>
            <span className="text-gray-500 text-sm">Canales integrados</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link
            href="https://wa.me/937054328"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Comienza a Anunciar Ahora
            <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
          </Link>
        </div>

        {/* Improved Testimonials Section */}
        <div className="mt-24 bg-gray-50 py-16 rounded-3xl relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-500">
              Historias de Éxito Real
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Empresas y profesionales que han multiplicado sus resultados con nuestra plataforma
              publicitaria
            </p>

            {/* Featured Testimonial Slider */}
            <div className="relative max-w-4xl mx-auto mb-16">
              <div className="absolute -top-6 -left-6 w-24 h-24 text-6xl text-blue-100 z-0">
                <i className="fas fa-quote-left"></i>
              </div>

              <div className="overflow-hidden bg-white rounded-2xl shadow-xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="min-w-full p-8 md:p-10">
                      <div className="relative z-10">
                        <p className="text-gray-700 text-lg md:text-xl mb-8 italic leading-relaxed">
                          "{testimonial.text}"
                        </p>

                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-md border-2 border-amber-300">
                              <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-full h-full object-cover"
                                onError={e => {
                                  // Handle image error by loading a fallback avatar
                                  const target = e.currentTarget;
                                  target.onerror = null;
                                  target.src = `https://ui-avatars.com/api/?name=${testimonial.author
                                    .split(' ')
                                    .map(n => n[0])
                                    .join('+')}&background=0D8ABC&color=fff&size=200`;
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-xl">{testimonial.author}</h4>
                              <p className="text-gray-600">{testimonial.title}</p>
                              <div className="flex mt-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <i
                                    key={i}
                                    className={`${
                                      i < Math.floor(testimonial.rating)
                                        ? 'fas fa-star text-amber-400'
                                        : i < testimonial.rating
                                          ? 'fas fa-star-half-alt text-amber-400'
                                          : 'far fa-star text-amber-400'
                                    } mr-1`}
                                  ></i>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col md:flex-row gap-4">
                            {testimonial.results && (
                              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <i className="fas fa-chart-line text-blue-600"></i>
                                  <span className="font-semibold text-blue-800">
                                    {testimonial.results}
                                  </span>
                                </div>
                              </div>
                            )}

                            {testimonial.roi && (
                              <div className="bg-amber-50 px-4 py-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <i className="fas fa-sack-dollar text-amber-600"></i>
                                  <span className="font-semibold text-amber-800">
                                    ROI: {testimonial.roi}
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center mt-6 gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-50 transition transform hover:scale-110"
                  aria-label="Testimonio anterior"
                >
                  <i className="fas fa-chevron-left text-gray-600"></i>
                </button>

                <div className="flex gap-2 items-center">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === activeTestimonial
                          ? 'bg-amber-500 w-6'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ir al testimonio ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-50 transition transform hover:scale-110"
                  aria-label="Siguiente testimonio"
                >
                  <i className="fas fa-chevron-right text-gray-600"></i>
                </button>
              </div>
            </div>

            {/* Categorized Testimonials */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Testimonios por Sector</h3>

              {/* Sector Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {Object.entries(testimonialData.sectors).map(([key, sector], idx) => (
                  <button
                    key={key}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                      idx % 2 === 0
                        ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    }`}
                  >
                    <i className={`fas fa-${sector.icon}`}></i>
                    <span>{sector.title}</span>
                  </button>
                ))}
              </div>

              {/* Highlighted Testimonial Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(testimonialData.sectors)
                  .slice(0, 6)
                  .map((sector, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                      <div
                        className={`p-4 flex items-center gap-3 ${
                          idx % 3 === 0
                            ? 'bg-blue-50'
                            : idx % 3 === 1
                              ? 'bg-amber-50'
                              : 'bg-teal-50'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            idx % 3 === 0
                              ? 'bg-blue-100 text-blue-700'
                              : idx % 3 === 1
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-teal-100 text-teal-700'
                          }`}
                        >
                          <i className={`fas fa-${sector.icon}`}></i>
                        </div>
                        <h4 className="font-bold">{sector.title}</h4>
                      </div>

                      <div className="p-5">
                        <blockquote className="text-gray-700 mb-4">
                          "{sector.testimonials[0].text.substring(0, 120)}..."
                        </blockquote>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                              <img
                                src={sector.testimonials[0].image}
                                alt={sector.testimonials[0].author}
                                className="w-full h-full object-cover"
                                onError={e => {
                                  // Handle image error by loading a fallback avatar
                                  const target = e.currentTarget;
                                  target.onerror = null;
                                  target.src = `https://ui-avatars.com/api/?name=${sector.testimonials[0].author
                                    .split(' ')
                                    .map(n => n[0])
                                    .join('+')}&background=0D8ABC&color=fff`;
                                }}
                              />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{sector.testimonials[0].author}</p>
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <i
                                    key={i}
                                    className={`${
                                      i < Math.floor(sector.testimonials[0].rating)
                                        ? 'fas fa-star text-amber-400 text-xs'
                                        : i < sector.testimonials[0].rating
                                          ? 'fas fa-star-half-alt text-amber-400 text-xs'
                                          : 'far fa-star text-amber-400 text-xs'
                                    } mr-0.5`}
                                  ></i>
                                ))}
                              </div>
                            </div>
                          </div>

                          {sector.testimonials[0].roi && (
                            <div className="bg-green-50 px-2 py-1 rounded text-sm font-semibold text-green-800">
                              {sector.testimonials[0].roi}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Call To Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-amber-500 p-8 rounded-2xl max-w-3xl mx-auto shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ¿Listo para ser nuestro próximo caso de éxito?
                </h3>
                <p className="text-white text-lg mb-8">
                  Únete a las empresas que están transformando su presencia y multiplicando sus
                  ventas
                </p>
                <Link
                  href="https://wa.me/937054328"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:shadow-lg transform transition hover:-translate-y-1"
                >
                  Empieza Ahora
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Background Accents */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500 opacity-5 rounded-full translate-x-1/4 translate-y-1/4"></div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f6"
            fillOpacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,176C672,160,768,160,864,181.3C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Benefits;
