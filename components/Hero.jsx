import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const dynamicTitleRef = useRef(null);
  const sliderInterval = useRef(null);
  const sliderRef = useRef(null);

  const dynamicTexts = [
    'Haz Crecer Tu Negocio con',
    'Multiplica Tus Ventas con',
    'Aumenta Tu Visibilidad con',
    'Conquista Nuevos Clientes con',
    'Potencia Tu Empresa con',
    'Incrementa Tu Alcance con',
    'Transforma Tu Presencia con',
    'Maximiza Tu Inversión con',
  ];

  const slides = [
    {
      image: '/assets/images/hero/platform-mockup.png',
      title: 'Tecnología Publicitaria Avanzada',
      description: 'Algoritmos de IA que maximizan tu ROI',
    },
    {
      image: '/assets/images/hero/analytics-mockup.png',
      title: 'Analytics en Tiempo Real',
      description: 'Toma decisiones basadas en datos precisos',
    },
    {
      image: '/assets/images/hero/integration-mockup.png',
      title: 'Integración con Buscadis',
      description: 'Alcance máximo en el marketplace líder',
    },
  ];

  // Cambiar el texto dinámico del título
  useEffect(() => {
    const interval = setInterval(() => {
      if (dynamicTitleRef.current) {
        dynamicTitleRef.current.style.opacity = '0';
        
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
          dynamicTitleRef.current.style.opacity = '1';
        }, 500);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Configurar el slider automático
  useEffect(() => {
    sliderInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);

    // Limpiar intervalo al desmontar
    return () => {
      if (sliderInterval.current) {
        clearInterval(sliderInterval.current);
      }
    };
  }, [currentSlide]);

  // Funciones del slider
  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Configuración de eventos táctiles para móviles
  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    sliderRef.current = { touchStartX };
  };

  const handleTouchEnd = (e) => {
    if (!sliderRef.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const { touchStartX } = sliderRef.current;
    
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  };

  // Pausar autoplay cuando el mouse está sobre el slider
  const handleMouseEnter = () => {
    if (sliderInterval.current) {
      clearInterval(sliderInterval.current);
    }
  };

  const handleMouseLeave = () => {
    sliderInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  return (
    <section className="relative bg-[#0a1626] text-white overflow-hidden pt-16 pb-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Badge Premium */}
            <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-4 py-2 rounded-full shadow-lg animate-shimmer">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.668 2.858a.75.75 0 011.664 0l.302 1.833c.113.683.69 1.19 1.385 1.19h1.94a.75.75 0 01.415 1.372l-1.568 1.068c-.604.412-.848 1.19-.545 1.868l.602 1.81a.75.75 0 01-1.15.835l-1.612-1.095c-.604-.41-1.415-.41-2.018 0l-1.612 1.095a.75.75 0 01-1.15-.835l.602-1.81c.303-.678.059-1.457-.545-1.868L3.726 7.253a.75.75 0 01.415-1.372h1.94c.695 0 1.272-.507 1.385-1.19l.302-1.833z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Plataforma Premium</span>
            </div>

            {/* Título Dinámico */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span 
                ref={dynamicTitleRef}
                className="block transition-opacity duration-500"
              >
                {dynamicTexts[currentTextIndex]}
              </span>
              <span className="bg-gradient-to-r from-amber-500 to-yellow-300 text-transparent bg-clip-text">
                PublicAdis
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg text-gray-300">
              La plataforma publicitaria más completa de Cusco que impulsa tus ventas en todos los canales de forma efectiva
            </p>

            {/* Lista de Plataformas */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sitio Web</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Aplicación Móvil</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Revista Digital</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Redes Sociales</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Locales Presenciales</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Grupos de WhatsApp</span>
              </div>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg text-center shadow-lg">
                <div className="inline-block p-3 bg-blue-900/50 rounded-full mb-3">
                  <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-amber-500">+380</div>
                <div className="text-sm text-gray-300 mt-1">Multiplica tus clientes potenciales</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg text-center shadow-lg">
                <div className="inline-block p-3 bg-blue-900/50 rounded-full mb-3">
                  <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm8 0a3 3 0 11-6 0 3 3 0 016 0zm-4.07 11c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-amber-500">+25k</div>
                <div className="text-sm text-gray-300 mt-1">Personas interesadas al mes</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg text-center shadow-lg">
                <div className="inline-block p-3 bg-blue-900/50 rounded-full mb-3">
                  <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 002-2V4a2 2 0 00-2 2H4z" clipRule="evenodd" />
                    <path d="M6 8a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-amber-500">+200%</div>
                <div className="text-sm text-gray-300 mt-1">Incremento en ventas promedio</div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#services" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-900 transition-colors shadow-lg flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Explorar Servicios
              </Link>
              <Link 
                href="#businessTools" 
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 rounded-lg font-medium hover:from-amber-600 hover:to-yellow-500 transition-colors shadow-lg flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                Herramientas Gratuitas
              </Link>
            </div>
          </div>

          {/* Slider */}
          <div 
            className="relative rounded-lg overflow-hidden shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-[400px] overflow-hidden">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={slide.image} 
                      alt={slide.title}
                      layout="fill"
                      objectFit="cover"
                      priority={index === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                      <h3 className="text-xl font-semibold text-white">{slide.title}</h3>
                      <p className="text-gray-300">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles del Slider */}
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-20">
              <button 
                onClick={prevSlide}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                aria-label="Anterior slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => showSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? 'bg-amber-500' : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                aria-label="Siguiente slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos flotantes decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-6 h-6 bg-amber-500 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-[20%] w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-[30%] left-[15%] w-10 h-10 bg-amber-400 rounded-full opacity-25"></div>
        <div className="absolute bottom-[20%] right-[30%] w-12 h-12 bg-blue-600 rounded-full opacity-15"></div>
      </div>

      {/* Efecto de onda inferior */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#f8f9fa" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 