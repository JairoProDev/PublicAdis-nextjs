import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const slideInterval = useRef(null);

  const dynamicTexts = [
    'Transforma Tu Presencia con',
    'Multiplica Tus Ventas con',
    'Potencia Tu Marca con',
    'Conquista Nuevos Clientes con',
    'Maximiza Tu Inversión con',
    'Lidera Tu Industria con',
  ];

  // Enhanced slides with high-quality remote images
  const slides = [
    {
      title: 'Inteligencia Publicitaria',
      description: 'Algoritmos avanzados que optimizan automáticamente tus campañas',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop',
      icon: 'brain',
      color: 'from-blue-600 to-violet-600',
    },
    {
      title: 'Analytics en Tiempo Real',
      description: 'Visualiza resultados y toma decisiones basadas en datos precisos',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop',
      icon: 'chart-line',
      color: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'Integración con Buscadis',
      description: 'Amplifica tu alcance en el marketplace líder de Cusco',
      image:
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1800&auto=format&fit=crop',
      icon: 'rocket',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Estrategia Multicanal',
      description: 'Conecta con tu audiencia en todos los puntos de contacto',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop',
      icon: 'network-wired',
      color: 'from-purple-600 to-pink-600',
    },
  ];

  // Channel logos array - using dummy public URLs for now
  const channelLogos = [
    {
      name: 'Web',
      icon: 'globe',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      name: 'App',
      icon: 'mobile-alt',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      name: 'Digital',
      icon: 'tablet',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      name: 'Social',
      icon: 'hashtag',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      name: 'Local',
      icon: 'store',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      name: 'WhatsApp',
      icon: 'whatsapp',
      color: 'bg-green-100 text-green-600',
    },
  ];

  // Metrics data with animations
  const metrics = [
    {
      value: '+380%',
      label: 'ROI promedio',
      icon: 'chart-line',
      color: 'bg-gradient-to-br from-blue-600 to-blue-400',
    },
    {
      value: '+25k',
      label: 'Personas al mes',
      icon: 'users',
      color: 'bg-gradient-to-br from-indigo-600 to-indigo-400',
    },
    {
      value: '+200%',
      label: 'Incremento en ventas',
      icon: 'sack-dollar',
      color: 'bg-gradient-to-br from-emerald-600 to-emerald-400',
    },
  ];

  // Clients logos - using placeholder API for now
  const clients = [
    'https://placehold.co/100x40/FFFFFF/0284c7?text=Cliente1&font=montserrat',
    'https://placehold.co/100x40/FFFFFF/0284c7?text=Cliente2&font=montserrat',
    'https://placehold.co/100x40/FFFFFF/0284c7?text=Cliente3&font=montserrat',
    'https://placehold.co/100x40/FFFFFF/0284c7?text=Cliente4&font=montserrat',
    'https://placehold.co/100x40/FFFFFF/0284c7?text=Cliente5&font=montserrat',
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback(index => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    // Loaded animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Rotate title text
    const titleInterval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % dynamicTexts.length);
    }, 3500);

    // Start slider autoplay
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(titleInterval);
      clearInterval(slideInterval.current);
    };
  }, [dynamicTexts.length, nextSlide]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100/30 py-16 lg:py-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(rgba(25, 91, 140, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Hero Left Content */}
          <div className="space-y-8 transform transition-all duration-1000 ease-out">
            {/* Premium Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2.5 rounded-full shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} transition-all duration-700 delay-200`}
            >
              <i className="fas fa-crown"></i>
              <span className="font-medium tracking-wide">Plataforma Premium</span>
            </div>

            {/* Dynamic Heading */}
            <div>
              <h1
                className={`text-4xl md:text-5xl xl:text-6xl font-bold leading-tight ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-300 mb-3`}
              >
                <span className="block mb-2 transition-all duration-700">
                  {dynamicTexts[currentTextIndex]}
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-600">
                  PublicAdis
                </span>
              </h1>
              <p
                className={`text-gray-700 text-lg md:text-xl max-w-xl leading-relaxed ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-400`}
              >
                La plataforma publicitaria más completa de Cusco que multiplica tus ventas a través
                de una estrategia multicanal integrada
              </p>
            </div>

            {/* Channel Logos */}
            <div
              className={`flex flex-wrap gap-3 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-500`}
            >
              {channelLogos.map((channel, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${channel.color} p-2 rounded-full`}
                  style={{
                    transitionDelay: `${500 + index * 100}ms`,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease-out',
                  }}
                >
                  <i
                    className={`fab fa-${channel.icon === 'whatsapp' ? 'whatsapp' : `fas fa-${channel.icon}`} text-lg`}
                  ></i>
                  <span className="font-medium text-sm">{channel.name}</span>
                </div>
              ))}
            </div>

            {/* Metrics Cards */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-600`}
            >
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  style={{
                    transitionDelay: `${600 + index * 100}ms`,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-12 h-12 rounded-lg ${metric.color} flex items-center justify-center text-white`}
                    >
                      <i className={`fas fa-${metric.icon} text-xl`}></i>
                    </div>
                    <div>
                      <span className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        {metric.value}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700">{metric.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-700`}
            >
              <Link
                href="#services"
                className="px-7 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold flex items-center gap-2 shadow-xl hover:shadow-amber-200/50 hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-rocket"></i>
                Explorar Servicios
              </Link>
              <Link
                href="#businessTools"
                className="px-7 py-4 bg-white text-gray-800 border border-gray-200 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-tools"></i>
                Herramientas Gratuitas
              </Link>
            </div>

            {/* Trusted by section */}
            <div
              className={`pt-6 border-t border-gray-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-800`}
            >
              <p className="text-gray-500 text-sm mb-3">Empresas que confían en nosotros:</p>
              <div className="flex flex-wrap items-center gap-6 opacity-70">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                    style={{
                      transitionDelay: `${800 + index * 50}ms`,
                      opacity: isLoaded ? 0.7 : 0,
                      transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'all 0.3s ease-out',
                    }}
                  >
                    <img
                      src={client}
                      alt={`Cliente ${index + 1}`}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Right Content - Enhanced Slider */}
          <div
            className={`relative ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-500`}
          >
            {/* 3D-looking card with premium style */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-2xl"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm bg-white/5">
              {/* Slider */}
              <div className="relative overflow-hidden h-[450px] lg:h-[550px] w-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 z-10 translate-x-0 scale-100'
                        : index < currentSlide
                          ? 'opacity-0 z-0 -translate-x-full scale-95'
                          : 'opacity-0 z-0 translate-x-full scale-95'
                    }`}
                  >
                    <div className="relative w-full h-full">
                      {/* Background Image with Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/70 z-10"></div>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-10000 ease-in-out"
                        style={{
                          transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
                        }}
                      />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-center p-10 z-20">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${slide.color} flex items-center justify-center text-white shadow-lg mb-6 transform transition-all duration-700 ${index === currentSlide ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-10 rotate-45'}`}
                        >
                          <i className={`fas fa-${slide.icon} text-2xl`}></i>
                        </div>

                        <h2
                          className={`text-3xl md:text-4xl font-bold text-white mb-4 transform transition-all duration-700 delay-100 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                          {slide.title}
                        </h2>

                        <p
                          className={`text-lg text-white/90 max-w-md transform transition-all duration-700 delay-200 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                          {slide.description}
                        </p>

                        <div
                          className={`mt-8 transform transition-all duration-700 delay-300 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                          <button
                            className={`px-6 py-3 rounded-xl bg-gradient-to-r ${slide.color} text-white font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                          >
                            <span>Descubrir más</span>
                            <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Improved Slider Navigation */}
                <div className="absolute left-0 right-0 bottom-8 z-30 flex justify-center items-center gap-6">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-colors"
                    aria-label="Slide anterior"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>

                  <div className="flex gap-3">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative h-3 transition-all duration-500 ${
                          index === currentSlide ? 'w-10 bg-white' : 'w-3 bg-white/40'
                        } rounded-full overflow-hidden`}
                        aria-label={`Ir a slide ${index + 1}`}
                      >
                        {index === currentSlide && (
                          <span
                            className="absolute inset-0 bg-white/80 animate-progress-bar"
                            style={{
                              animation: 'progress 6s linear 1',
                              transformOrigin: 'left',
                            }}
                          ></span>
                        )}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-colors"
                    aria-label="Siguiente slide"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Custom Wave Divider with better integration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,176C672,160,768,160,864,181.3C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Add global CSS for animations needed by hero */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes progress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .animate-progress-bar {
          animation: progress 6s linear forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
