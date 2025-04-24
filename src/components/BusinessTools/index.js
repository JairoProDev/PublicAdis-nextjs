import React from 'react';
import Link from 'next/link';

const BusinessTools = () => {
  const tools = [
    {
      icon: 'fa-home',
      title: 'Calculadora Inmobiliaria',
      description:
        'Calcula el valor aproximado de propiedades basado en datos del mercado de Cusco.',
      link: '/tools/real-estate-calculator',
    },
    {
      icon: 'fa-chart-line',
      title: 'Calculadora ROI',
      description:
        'Mide el retorno de inversión de tus campañas publicitarias con nuestra calculadora especializada.',
      link: '/tools/roi-calculator',
    },
    {
      icon: 'fa-car',
      title: 'Precio de Vehículos',
      description:
        'Estima el valor de mercado de tu vehículo según marca, modelo, año y condición.',
      link: '/tools/vehicle-price-calculator',
    },
    {
      icon: 'fa-money-bill-wave',
      title: 'Comparador de Salarios',
      description:
        'Compara tu salario con el promedio del mercado en tu sector y descubre oportunidades.',
      link: '/tools/salary-comparison',
    },
    {
      icon: 'fa-ad',
      title: 'Generador de Anuncios',
      description:
        'Crea anuncios atractivos y profesionales para diferentes plataformas digitales.',
      link: '/tools/ad-generator',
    },
    {
      icon: 'fa-calculator',
      title: 'Calculadora de Hipoteca',
      description: 'Calcula tus pagos mensuales y planifica tu préstamo hipotecario con facilidad.',
      link: '/tools/mortgage-calculator',
    },
  ];

  return (
    <section id="businessTools" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Herramientas Gratuitas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestras herramientas gratuitas para potenciar tu presencia digital y
            maximizar tu inversión
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${tool.icon} text-blue-600 text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <Link
                href={tool.link}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Usar herramienta
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTools;
