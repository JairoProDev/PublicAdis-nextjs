import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const slideInterval = useRef(null);

  const dynamicTexts = [
    'Transforma Tu Empresa con',
    'Multiplica Tus Ventas con',
    'Potencia Tus Negocios con',
    'Conquista a Tus Clientes con',
    'Maximiza Tu Inversión con',
    'Lidera en Tu Industria con',
  ];

  const slides = [
    {
      title: 'Inteligencia Publicitaria',
      description: 'Algoritmos avanzados que optimizan tus campañas en tiempo real.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: 'brain',
      color: 'from-blue-600 to-violet-600',
    },
    {
      title: 'Analytics en Tiempo Real',
      description: 'Visualiza resultados y toma decisiones estratégicas con datos precisos.',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: 'chart-line',
      color: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'Integración con Buscadis™',
      description: 'Amplifica tu alcance en el marketplace líder y de mayor crecimiento.',
      image:
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: 'rocket',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Estrategia Multicanal',
      description: 'Conecta con tu audiencia en todos nuestros puntos de contacto integrados.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: 'network-wired',
      color: 'from-purple-600 to-pink-600',
    },
  ];

  const channelLogos = [
    { name: 'Sitio Web', icon: 'globe', type: 'fas', color: 'bg-blue-100 text-blue-600' },
    {
      name: 'Aplicación movíl',
      icon: 'mobile-alt',
      type: 'fas',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      name: 'Revista Digital',
      icon: 'tablet',
      type: 'fas',
      color: 'bg-purple-100 text-purple-600',
    },
    { name: 'Redes Sociales', icon: 'hashtag', type: 'fas', color: 'bg-pink-100 text-pink-600' },
    {
      name: 'Locales Estratégicos',
      icon: 'store',
      type: 'fas',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      name: 'Comunidades en WhatsApp',
      icon: 'whatsapp',
      type: 'fab',
      color: 'bg-green-100 text-green-600',
    },
    {
      name: 'Grupos de Telegram',
      icon: 'telegram',
      type: 'fab',
      color: 'bg-blue-100 text-blue-600',
    },
  ];

  const metrics = [
    {
      value: '+38%',
      label: 'ROI promedio',
      icon: 'chart-line',
      color: 'bg-gradient-to-br from-blue-600 to-blue-400',
    },
    {
      value: '+7k',
      label: 'Personas al mes',
      icon: 'users',
      color: 'bg-gradient-to-br from-indigo-600 to-indigo-400',
    },
    {
      value: '+60%',
      label: 'Incremento en ventas',
      icon: 'sack-dollar',
      color: 'bg-gradient-to-br from-emerald-600 to-emerald-400',
    },
    {
      value: '+30%',
      label: 'Nuevos clientes al mes',
      icon: 'user-plus',
      color: 'bg-gradient-to-br from-pink-500 to-red-500',
    },
  ];

  // Ancho estimado de logo para cálculo de animación: 100px. Margen entre logos: mx-1.5 (6px por lado = 12px total)
  const logoWidthForAnim = 100;
  const logoMarginForAnim = 12; // 6px de cada lado (mx-1.5 = 0.375rem * 2 = 0.75rem = 12px si 1rem=16px)
  const totalWidthPerLogoAnim = logoWidthForAnim + logoMarginForAnim;

  const baseCuscoClients = [
    'https://placehold.co/100x35/FFFFFF/B71C1C?text=Cusque%C3%B1a&font=montserrat', // Cerveza Cusqueña
    'https://placehold.co/100x35/FFFFFF/6D4C41?text=Chicha&font=montserrat', // Restaurante Chicha
    'https://placehold.co/100x35/FFFFFF/FF8F00?text=IncaRail&font=montserrat', // Inca Rail
    'https://placehold.co/100x35/FFFFFF/5D4037?text=ChocoMuseo&font=montserrat', // ChocoMuseo
    'https://placehold.co/100x35/FFFFFF/004D40?text=EcoTerra&font=montserrat', // Agencia de Turismo Ecológico (Ejemplo)
    'https://placehold.co/100x35/FFFFFF/880E4F?text=AlpacaArt&font=montserrat', // Tienda de Artesanía (Ejemplo)
    'https://placehold.co/100x35/FFFFFF/BF360C?text=ValleSagradoCafe&font=montserrat', // Café local (Ejemplo)
  ];
  const cuscoClients = [...baseCuscoClients, ...baseCuscoClients];

  const basePeruvianClients = [
    'https://placehold.co/100x35/FFFFFF/0033A0?text=BCP&font=montserrat', // BCP
    'https://placehold.co/100x35/FFFFFF/00A9E0?text=Interbank&font=montserrat', // Interbank
    'https://placehold.co/100x35/FFFFFF/D21034?text=LATAM&font=montserrat', // LATAM Airlines
    'https://placehold.co/100x35/FFFFFF/005EB8?text=Gloria&font=montserrat', // Gloria
    'https://placehold.co/100x35/FFFFFF/FFCB05?text=InkaKola&font=montserrat&fontColor=000000', // Inka Kola
    'https://placehold.co/100x35/FFFFFF/ED1C24?text=PlazaVea&font=montserrat', // Plaza Vea
    'https://placehold.co/100x35/FFFFFF/007A33?text=Backus&font=montserrat', // Backus
  ];
  const peruvianClients = [...basePeruvianClients, ...basePeruvianClients];

  const baseInternationalClients = [
    'https://placehold.co/100x35/FFFFFF/DB4437?text=Google&font=montserrat&fontColor=DB4437', // Google
    'https://placehold.co/100x35/FFFFFF/000000?text=Nike&font=montserrat', // Nike
    'https://placehold.co/100x35/FFFFFF/F40009?text=Coca-Cola&font=montserrat', // Coca-Cola
    'https://placehold.co/100x35/FFFFFF/FFC72C?text=McDonalds&font=montserrat&fontColor=DA291C', // McDonald's
    'https://placehold.co/100x35/FFFFFF/0072C6?text=Microsoft&font=montserrat', // Microsoft
    'https://placehold.co/100x35/FFFFFF/F2A900?text=Amazon&font=montserrat&fontColor=232F3E', // Amazon
    'https://placehold.co/100x35/FFFFFF/1DB954?text=Spotify&font=montserrat', // Spotify
  ];
  const internationalClients = [...baseInternationalClients, ...baseInternationalClients];

  // ... (resto de hooks y funciones sin cambios: nextSlide, prevSlide, goToSlide, useEffect)
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
    const timer = setTimeout(() => setIsLoaded(true), 100);
    const titleInterval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % dynamicTexts.length);
    }, 3500);
    slideInterval.current = setInterval(nextSlide, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(titleInterval);
      clearInterval(slideInterval.current);
    };
  }, [dynamicTexts.length, nextSlide]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100/30 py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* ... (código de fondos animados y contenedor principal) ... */}
        <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl opacity-50"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(25, 91, 140, 0.07) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 transform transition-all duration-1000 ease-out">
            {/* ... (Premium Badge, Título Dinámico, Descripción, Channel Logos, Métricas, CTAs - sin cambios) ... */}
            {/* Premium Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2.5 rounded-full shadow-lg ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              } transition-all duration-700 delay-200`}
            >
              <i className="fas fa-crown"></i>
              <span className="font-medium tracking-wide">
                Multi-Plataforma Publicitaria Premium #1 en Cusco
              </span>
            </div>

            {/* Dynamic Heading */}
            <div>
              <h1
                className={`text-4xl md:text-5xl xl:text-6xl font-bold leading-tight ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } transition-all duration-700 delay-300 mb-3`}
              >
                <span className="block transition-all duration-700 min-h-[48px] md:min-h-[60px] xl:min-h-[72px]">
                  {dynamicTexts[currentTextIndex].split(' ').slice(0, -1).join(' ')}
                  <span className="inline-flex items-center">
                    <span className="ml-1">
                      {dynamicTexts[currentTextIndex].split(' ').slice(-1)}
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-600 ml-2">
                      PublicAdis
                    </span>
                  </span>
                </span>
              </h1>
              <p
                className={`text-gray-700 text-lg md:text-xl max-w-xl leading-relaxed ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } transition-all duration-700 delay-400`}
              >
                La plataforma publicitaria más completa de Cusco que multiplica tus ventas a través
                de una estrategia multicanal integrada.
              </p>
            </div>

            {/* Channel Logos */}
            <div
              className={`flex flex-wrap gap-3 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-700 delay-500`}
            >
              {channelLogos.map((channel, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${channel.color} p-2.5 rounded-full shadow-sm`}
                  style={{
                    transitionDelay: `${500 + index * 100}ms`,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease-out',
                  }}
                >
                  <i className={`${channel.type} fa-${channel.icon} text-lg`}></i>
                  <span className="font-medium text-sm">{channel.name}</span>
                </div>
              ))}
            </div>

            {/* Metrics Cards */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-700 delay-600`}
            >
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-5 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left"
                  style={{
                    transitionDelay: `${600 + index * 100}ms`,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${metric.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}
                    >
                      <i className={`fas fa-${metric.icon} text-lg sm:text-xl`}></i>
                    </div>
                    <span className="font-extrabold text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                      {metric.value}
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm">{metric.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-700 delay-700`}
            >
              <Link
                href="https://buscadis.com/publicar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl hover:shadow-amber-200/50 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <i className="fas fa-bullhorn"></i>
                Publica tu Anuncio
              </Link>
              <Link
                href="#businessTools"
                className="w-full sm:w-auto px-7 py-4 bg-white text-gray-800 border border-gray-300 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <i className="fas fa-tools"></i>
                Herramientas Gratuitas
              </Link>
            </div>
          </div>

          {/* Hero Right Content - Slider y logos de clientes */}
          <div className="lg:col-span-5 mt-8 lg:mt-0 flex flex-col">
            {/* Slider de Imágenes (con navegación debajo) */}
            <div
              className={`relative ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-1000 delay-500`}
            >
              {/* ... (código del slider de imágenes y su navegación, sin cambios respecto a la versión anterior donde ya estaba debajo) ... */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-full blur-2xl opacity-70 z-0"></div>
              <div className="relative rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm bg-white/5">
                {' '}
                {/* Contenedor general del slider visual */}
                {/* Área de la imagen del slider (altura reducida) */}
                <div className="relative overflow-hidden h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] w-full rounded-t-2xl">
                  {' '}
                  {/* Redondeado solo arriba si la nav va pegada */}
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
                        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60 z-10"></div>
                        <div className="relative w-full h-[400px]">
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover rounded-lg"
                            priority
                          />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 z-20">
                          <div
                            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${
                              slide.color
                            } flex items-center justify-center text-white shadow-lg mb-2 sm:mb-3 transform transition-all duration-700 ${
                              index === currentSlide
                                ? 'opacity-100 translate-y-0 rotate-0'
                                : 'opacity-0 -translate-y-8 rotate-45'
                            }`}
                          >
                            <i className={`fas fa-${slide.icon} text-lg sm:text-xl`}></i>
                          </div>
                          <h2
                            className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 transform transition-all duration-700 delay-100 ${
                              index === currentSlide
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }`}
                          >
                            {slide.title}
                          </h2>
                          <p
                            className={`text-sm sm:text-base text-white/80 max-w-md mb-3 sm:mb-4 transform transition-all duration-700 delay-200 ${
                              index === currentSlide
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }`}
                          >
                            {slide.description}
                          </p>
                          <div
                            className={`transform transition-all duration-700 delay-300 ${
                              index === currentSlide
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }`}
                          >
                            <button
                              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-gradient-to-r ${slide.color} text-white font-medium flex items-center gap-1.5 sm:gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm`}
                            >
                              <span>Descubrir más</span>
                              <i className="fas fa-arrow-right text-xs"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>{' '}
              {/* Fin del contenedor visual del slider */}
              {/* Navegación del Slider (Debajo del área de imagen) */}
              <div className="mt-4 flex justify-center items-center gap-3 sm:gap-4 z-30 relative">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-700/60 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-slate-600/80 transition-colors"
                  aria-label="Slide anterior"
                >
                  <i className="fas fa-chevron-left text-sm"></i>
                </button>
                <div className="flex gap-1.5 sm:gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative h-2.5 sm:h-3 transition-all duration-500 ${
                        index === currentSlide
                          ? 'w-6 sm:w-8 bg-slate-200'
                          : 'w-2.5 sm:w-3 bg-slate-500/70 hover:bg-slate-400/70'
                      } rounded-full overflow-hidden`}
                      aria-label={`Ir a slide ${index + 1}`}
                    >
                      {index === currentSlide && (
                        <span
                          className="absolute inset-0 bg-slate-200/80 animate-progress-bar"
                          style={{ animation: 'progress 6s linear 1', transformOrigin: 'left' }}
                        ></span>
                      )}
                    </button>
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-700/60 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-slate-600/80 transition-colors"
                  aria-label="Siguiente slide"
                >
                  <i className="fas fa-chevron-right text-sm"></i>
                </button>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-yellow-600/10 rounded-full blur-xl opacity-70 z-0"></div>
            </div>

            {/* Sección de Logos de Clientes con TÍTULOS LATERALES */}
            <div className="mt-8 lg:mt-10 space-y-3">
              {' '}
              {/* Espacio entre cada fila con título */}
              {/* Fila Cusco */}
              <div
                className={`flex items-center gap-3 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                } transition-all duration-700 delay-800`}
              >
                <div className="w-20 sm:w-24 text-right pr-2 shrink-0">
                  {' '}
                  {/* Ancho fijo para el título lateral */}
                  <span className="text-xs sm:text-sm font-semibold text-gray-500 transform group-hover:text-amber-600 transition-colors">
                    Cusco
                  </span>
                </div>
                <div className="relative flex-grow w-full overflow-hidden group h-10 sm:h-12 flex items-center">
                  <div
                    className="flex animate-infinite-scroll group-hover:pause-animation"
                    style={{ animationDuration: '25s' }}
                  >
                    {cuscoClients.map((client, index) => (
                      <div
                        key={`cusco-client-${index}`}
                        className="flex-shrink-0 w-auto mx-1.5 grayscale hover:grayscale-0 transition-all duration-300 h-full flex items-center"
                      >
                        <div className="relative w-full h-[300px]">
                          <Image
                            src={client}
                            alt={`Logo Negocio Cusqueño ${(index % baseCuscoClients.length) + 1}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Fila Perú */}
              <div
                className={`flex items-center gap-3 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                } transition-all duration-700 delay-[950ms]`}
              >
                <div className="w-20 sm:w-24 text-right pr-2 shrink-0">
                  <span className="text-xs sm:text-sm font-semibold text-gray-500 group-hover:text-red-600 transition-colors">
                    Perú
                  </span>
                </div>
                <div className="relative flex-grow w-full overflow-hidden group h-10 sm:h-12 flex items-center">
                  <div
                    className="flex animate-infinite-scroll-reverse group-hover:pause-animation"
                    style={{ animationDuration: '30s' }}
                  >
                    {peruvianClients.map((client, index) => (
                      <div
                        key={`peruvian-client-${index}`}
                        className="flex-shrink-0 w-auto mx-1.5 grayscale hover:grayscale-0 transition-all duration-300 h-full flex items-center"
                      >
                        <div className="relative w-full h-[300px]">
                          <Image
                            src={client}
                            alt={`Logo Negocio Peruano ${(index % basePeruvianClients.length) + 1}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Fila Internacional */}
              <div
                className={`flex items-center gap-3 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                } transition-all duration-700 delay-[1100ms]`}
              >
                <div className="w-20 sm:w-24 text-right pr-2 shrink-0">
                  <span className="text-xs sm:text-sm font-semibold text-gray-500 group-hover:text-blue-600 transition-colors">
                    Internacional
                  </span>
                </div>
                <div className="relative flex-grow w-full overflow-hidden group h-10 sm:h-12 flex items-center">
                  <div
                    className="flex animate-infinite-scroll group-hover:pause-animation"
                    style={{ animationDuration: '35s' }}
                  >
                    {internationalClients.map((client, index) => (
                      <div
                        key={`international-client-${index}`}
                        className="flex-shrink-0 w-auto mx-1.5 grayscale hover:grayscale-0 transition-all duration-300 h-full flex items-center"
                      >
                        <div className="relative w-full h-[300px]">
                          <Image
                            src={client}
                            alt={`Logo Negocio Internacional ${
                              (index % baseInternationalClients.length) + 1
                            }`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="w-full block">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,176C384,181.3,480,171,576,154.7C672,139,768,117,864,112C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,220L1392,220C1344,220,1248,220,1152,220C1056,220,960,220,864,220C768,220,672,220,576,220C480,220,384,220,288,220C192,220,96,220,48,220L0,220Z"
          ></path>
        </svg>
      </div>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
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

        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${baseCuscoClients.length * totalWidthPerLogoAnim}px);
          }
        }

        @keyframes infiniteScrollReverse {
          0% {
            transform: translateX(-${basePeruvianClients.length * totalWidthPerLogoAnim}px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-infinite-scroll {
          animation-name: infiniteScroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-infinite-scroll-reverse {
          animation-name: infiniteScrollReverse;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .group-hover\\:pause-animation:hover .animate-infinite-scroll,
        .group-hover\\:pause-animation:focus-within .animate-infinite-scroll,
        .group-hover\\:pause-animation:hover .animate-infinite-scroll-reverse,
        .group-hover\\:pause-animation:focus-within .animate-infinite-scroll-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
