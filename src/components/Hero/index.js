import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const dynamicTexts = [
    'Haz Crecer Tu Negocio con',
    'Multiplica Tus Ventas con',
    'Aumenta Tu Visibilidad con',
    'Conquista Nuevos Clientes con',
    'Potencia Tu Marca con',
    'Expande Tu Alcance con',
    'Transforma Tu Presencia con',
    'Maximiza Tu Inversión con',
  ];

  const slides = [
    {
      title: 'Tecnología Publicitaria Avanzada',
      description: 'Algoritmos de IA que maximizan tu ROI',
    },
    {
      title: 'Analytics en Tiempo Real',
      description: 'Toma decisiones basadas en datos precisos',
    },
    {
      title: 'Integración con Buscadis',
      description: 'Alcance máximo en el marketplace líder',
    },
  ];

  useEffect(() => {
    // Rotate title text
    const titleInterval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % dynamicTexts.length);
    }, 3000);

    // Start slider autoplay
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(titleInterval);
      clearInterval(slideInterval.current);
    };
  }, [dynamicTexts.length, slides.length, nextSlide]);

  const goToSlide = index => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-full shadow-md">
              <i className="fas fa-crown"></i>
              <span className="font-medium">Plataforma Premium</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="block mb-2 transition-opacity duration-500">
                {dynamicTexts[currentTextIndex]}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
                PublicAdis
              </span>
            </h1>

            <p className="text-gray-700 text-lg md:text-xl max-w-lg">
              La plataforma publicitaria más completa de Cusco que impulsa tus ventas en todos los
              canales de forma efectiva
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Sitio Web',
                'Aplicación Móvil',
                'Revista Digital',
                'Redes Sociales',
                'Locales Presenciales',
                'Grupos de WhatsApp',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-amber-500"></i>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="fas fa-chart-line text-blue-600"></i>
                  </div>
                  <span className="font-bold text-2xl">+380%</span>
                </div>
                <p className="text-gray-600 text-sm">Multiplica tus clientes potenciales</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="fas fa-users text-blue-600"></i>
                  </div>
                  <span className="font-bold text-2xl">+25k</span>
                </div>
                <p className="text-gray-600 text-sm">Personas interesadas al mes</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="fas fa-sack-dollar text-blue-600"></i>
                  </div>
                  <span className="font-bold text-2xl">+200%</span>
                </div>
                <p className="text-gray-600 text-sm">Incremento en ventas promedio</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="px-6 py-3 bg-amber-500 text-white rounded-lg font-medium flex items-center gap-2 shadow-md hover:bg-amber-600 transition-colors"
              >
                <i className="fas fa-rocket"></i>
                Explorar Servicios
              </Link>
              <Link
                href="#businessTools"
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
              >
                <i className="fas fa-tools"></i>
                Herramientas Gratuitas
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Hero Slider */}
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden h-[400px] lg:h-[500px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="relative w-full h-full bg-gray-200">
                    <div className="h-full bg-gradient-to-br from-blue-100 to-gray-200"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{slide.title}</h3>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Slider Navigation */}
              <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
                  aria-label="Slide anterior"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Ir a slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
                  aria-label="Siguiente slide"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -z-10 top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
              {['building', 'car', 'briefcase', 'store'].map((icon, index) => (
                <div
                  key={index}
                  className="absolute text-blue-600/20 text-4xl"
                  style={{
                    top: `${20 + index * 15}%`,
                    left: `${10 + index * 20}%`,
                    animation: `float 6s ease-in-out infinite ${index * 0.5}s`,
                  }}
                >
                  <i className={`fas fa-${icon}`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Premium accents */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-yellow-500/10 blur-2xl"></div>
      <div className="absolute top-1/3 right-1/5 w-32 h-32 rounded-full bg-blue-600/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
