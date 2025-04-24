import React, { useRef } from 'react';
import Link from 'next/link';

const Sectors = () => {
  const contactFormRef = useRef(null);

  const sectors = [
    {
      id: 'inmobiliario',
      icon: 'building',
      title: 'Sector Inmobiliario',
      description:
        'Multiplique sus ventas y alquileres con nuestro alcance especializado en el sector inmobiliario de Cusco.',
      stats: [
        { value: '300+', label: 'Inmobiliarias asociadas' },
        { value: '1200+', label: 'Propiedades vendidas al mes' },
      ],
    },
    {
      id: 'automotriz',
      icon: 'car',
      title: 'Sector Automotriz',
      description:
        'Venda vehículos nuevos y usados más rápido con nuestra plataforma especializada en el mercado automotriz.',
      stats: [
        { value: '85%', label: 'Reducción en tiempo de venta' },
        { value: '250+', label: 'Concesionarios asociados' },
      ],
    },
    {
      id: 'profesional',
      icon: 'briefcase',
      title: 'Servicios Profesionales',
      description:
        'Conecte con clientes potenciales para sus servicios profesionales y construya una cartera sólida.',
      stats: [
        { value: '3500+', label: 'Profesionales registrados' },
        { value: '92%', label: 'Tasa de satisfacción cliente' },
      ],
    },
    {
      id: 'retail',
      icon: 'shopping-cart',
      title: 'Retail y Comercio',
      description:
        'Impulse sus ventas minoristas y mayoristas con nuestras soluciones publicitarias multiplataforma.',
      stats: [
        { value: '200+', label: 'Tiendas con crecimiento sostenido' },
        { value: '40%', label: 'Incremento en ticket promedio' },
      ],
    },
    {
      id: 'turismo',
      icon: 'plane',
      title: 'Turismo y Hostelería',
      description:
        'Atraiga más turistas y visitantes a sus servicios turísticos y de hostelería en la región de Cusco.',
      stats: [
        { value: '150+', label: 'Hoteles y hostales asociados' },
        { value: '75%', label: 'Incremento en reservas directas' },
      ],
    },
    {
      id: 'educacion',
      icon: 'graduation-cap',
      title: 'Educación y Formación',
      description:
        'Capte más estudiantes para sus programas educativos con nuestra plataforma especializada.',
      stats: [
        { value: '50+', label: 'Instituciones educativas' },
        { value: '120%', label: 'Aumento en matrículas' },
      ],
    },
  ];

  const handleSectorClick = sectorId => {
    // En una aplicación real, esto podría usar un estado global o contexto
    sessionStorage.setItem('selectedSector', sectorId);

    // Scroll al formulario de contacto
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="sectors"
      className="py-20 bg-gradient-to-r from-amber-500 to-yellow-500 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sectores Especializados</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Soluciones publicitarias adaptadas a las necesidades específicas de cada industria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-gray-800 relative overflow-hidden group"
            >
              {/* Barra superior decorativa */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas fa-${sector.icon} text-2xl text-blue-600`}></i>
              </div>

              <h3 className="text-xl font-bold mb-3">{sector.title}</h3>
              <p className="text-gray-600 mb-5 text-sm">{sector.description}</p>

              <div className="flex justify-between mb-5">
                {sector.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-orange-500 font-bold text-2xl relative group">
                      {stat.value}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 transform scale-x-50 group-hover:scale-x-100 transition-transform"></div>
                    </div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleSectorClick(sector.id)}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors relative pb-1 group"
              >
                Conocer solución
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-30 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg flex flex-col md:flex-row justify-between items-center text-gray-800">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">¿Su sector no aparece en la lista?</h3>
            <p className="text-gray-600">
              Contáctenos para diseñar una solución publicitaria personalizada para su industria
              específica.
            </p>
          </div>
          <Link
            href="#contacto"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
          >
            Solicitar Asesoría
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
