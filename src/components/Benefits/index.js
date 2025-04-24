import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

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

  const testimonials = [
    {
      text: 'Desde que empecé a publicar mis propiedades en PublicAdis, logré alquilar dos departamentos en menos de una semana. El alcance es impresionante.',
      rating: 5,
      author: 'Carlos Mendoza',
      title: 'Agente Inmobiliario',
      image: '/placeholder/avatar1.jpg',
    },
    {
      text: 'Encontré a mi equipo de trabajo gracias a los anuncios de empleo. La plataforma es muy fácil de usar y los resultados son rápidos.',
      rating: 4.5,
      author: 'María Flores',
      title: 'Dueña de Restaurante',
      image: '/placeholder/avatar2.jpg',
    },
    {
      text: 'Vendí mi auto en 3 días gracias a PublicAdis. Lo mejor es que pude publicarlo en todos los canales con un solo clic. Muy recomendado.',
      rating: 5,
      author: 'Juan Perez',
      title: 'Ingeniero',
      image: '/placeholder/avatar3.jpg',
    },
  ];

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

  const nextTestimonial = () => {
    setActiveTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Auto rotate testimonials
    testimonialInterval.current = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => {
      clearInterval(testimonialInterval.current);
    };
  }, []);

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

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Lo que dicen nuestros usuarios</h3>

          <div className="relative max-w-3xl mx-auto">
            {/* Testimonial Slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex justify-start mb-4">
                        <i className="fas fa-quote-left text-2xl text-gray-300"></i>
                      </div>
                      <p className="text-gray-600 mb-6">{testimonial.text}</p>
                      <div className="flex mb-6">{renderRatingStars(testimonial.rating)}</div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                            onError={e => {
                              e.target.onerror = null;
                              e.target.src = `https://ui-avatars.com/api/?name=${testimonial.author
                                .split(' ')
                                .map(n => n[0])
                                .join('+')}&background=0D8ABC&color=fff`;
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.author}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.title}</p>
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
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-50"
                aria-label="Testimonio anterior"
              >
                <i className="fas fa-chevron-left text-gray-500"></i>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${idx === activeTestimonial ? 'bg-amber-500' : 'bg-gray-300'}`}
                    aria-label={`Ir al testimonio ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-50"
                aria-label="Siguiente testimonio"
              >
                <i className="fas fa-chevron-right text-gray-500"></i>
              </button>
            </div>
          </div>
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
