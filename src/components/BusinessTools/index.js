import React, { useState } from 'react';
import Link from 'next/link';

// Import the business tools components
import PropertyValueCalculator from '../business-tools/PropertyValueCalculator';
import RoiCalculator from '../business-tools/RoiCalculator';
import VehiclePriceCalculator from '../business-tools/VehiclePriceCalculator';
import SalaryComparator from '../business-tools/SalaryComparator';
import SocialMediaReach from '../business-tools/SocialMediaReach';
import EventPlanner from '../business-tools/EventPlanner';

const BusinessTools = () => {
  const [activeToolId, setActiveToolId] = useState(null);

  const tools = [
    {
      id: 'property-valuation',
      icon: 'fa-home',
      title: 'Calculadora Inmobiliaria',
      description:
        'Calcula el valor aproximado de propiedades basado en datos del mercado de Cusco.',
      component: PropertyValueCalculator,
    },
    {
      id: 'roi-calculator',
      icon: 'fa-chart-line',
      title: 'Calculadora ROI',
      description:
        'Mide el retorno de inversión de tus campañas publicitarias con nuestra calculadora especializada.',
      component: RoiCalculator,
    },
    {
      id: 'vehicle-price',
      icon: 'fa-car',
      title: 'Precio de Vehículos',
      description:
        'Estima el valor de mercado de tu vehículo según marca, modelo, año y condición.',
      component: VehiclePriceCalculator,
    },
    {
      id: 'salary-compare',
      icon: 'fa-money-bill-wave',
      title: 'Comparador de Salarios',
      description:
        'Compara tu salario con el promedio del mercado en tu sector y descubre oportunidades.',
      component: SalaryComparator,
    },
    {
      id: 'social-media',
      icon: 'fa-share-nodes',
      title: 'Alcance en Redes',
      description:
        'Estima el alcance potencial de tus publicaciones según plataforma, hora y contenido.',
      component: SocialMediaReach,
    },
    {
      id: 'event-planner',
      icon: 'fa-calendar-days',
      title: 'Planificador de Eventos',
      description: 'Organiza tus eventos y calcula presupuestos, asistencia y recursos necesarios.',
      component: EventPlanner,
    },
  ];

  const handleToolClick = toolId => {
    setActiveToolId(toolId === activeToolId ? null : toolId);
  };

  const renderActiveTool = () => {
    if (!activeToolId) return null;

    const tool = tools.find(t => t.id === activeToolId);
    if (!tool) return null;

    const ToolComponent = tool.component;
    return (
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{tool.title}</h3>
          <button
            onClick={() => setActiveToolId(null)}
            className="text-gray-400 hover:text-gray-500"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ToolComponent />
      </div>
    );
  };

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
          {tools.map(tool => (
            <div
              key={tool.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              data-target={tool.id}
            >
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${tool.icon} text-blue-600 text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <button
                onClick={() => handleToolClick(tool.id)}
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
              </button>
            </div>
          ))}
        </div>

        {renderActiveTool()}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-lock text-blue-600"></i>
            </div>
            <h4 className="font-semibold mb-2">100% Seguro y Privado</h4>
            <p className="text-gray-600 text-sm">
              Tus datos no se almacenan ni comparten con terceros.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-chart-pie text-blue-600"></i>
            </div>
            <h4 className="font-semibold mb-2">Datos Actualizados</h4>
            <p className="text-gray-600 text-sm">
              Usamos información de mercado actualizada mensualmente.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-code text-blue-600"></i>
            </div>
            <h4 className="font-semibold mb-2">Algoritmos Avanzados</h4>
            <p className="text-gray-600 text-sm">
              Tecnología de IA para cálculos precisos y personalizados.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contacto"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors inline-flex items-center gap-2"
          >
            Solicitar herramienta personalizada
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BusinessTools;
