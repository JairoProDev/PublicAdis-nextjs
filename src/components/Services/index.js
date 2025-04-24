import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-building',
      title: 'Inmuebles',
      description:
        'Promociona tus propiedades de venta o alquiler y conecta con clientes potenciales.',
    },
    {
      icon: 'fa-car',
      title: 'Vehículos',
      description:
        'Anuncia la venta de autos, motos y más con fotos de alta calidad y descripciones detalladas.',
    },
    {
      icon: 'fa-briefcase',
      title: 'Empleos',
      description:
        'Publica ofertas laborales y encuentra personal calificado para tu empresa de manera efectiva.',
    },
    {
      icon: 'fa-store',
      title: 'Negocios',
      description: 'Promociona tu negocio local y alcanza a más clientes en tu área de servicio.',
    },
    {
      icon: 'fa-laptop',
      title: 'Servicios Profesionales',
      description:
        'Ofrece tus servicios profesionales y conecta con clientes que necesitan tu experiencia.',
    },
    {
      icon: 'fa-bullhorn',
      title: 'Publicidad Premium',
      description:
        'Destaca tu anuncio con opciones de publicidad premium y aumenta tu visibilidad.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones publicitarias integrales para todo tipo de negocios y
            emprendimientos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-amber-500 mb-4 text-3xl">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
