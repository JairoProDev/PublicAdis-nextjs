import React from 'react';
import Layout from '../src/components/Layout';
import { CheckIcon } from '@heroicons/react/24/solid';

const features = {
  simple: [
    'Espacio pequeño',
    'Duración 1 semana',
    'Publicación en el local',
    'Revista digital gratuita',
    'Blanco y negro',
  ],
  destacado: [
    'Espacio grande',
    'Duración 1 semana',
    'Publicación en el local',
    'Publicación en redes sociales',
    'Con imágenes',
    'A colores',
    'Revista digital gratuita',
    'Publicación multiplataforma',
  ],
  premium: [
    'Espacio gigante',
    'Duración 1 semana',
    'Publicación en el local',
    'Publicación en redes sociales',
    'Con imágenes y videos',
    'A colores',
    'Revista digital gratuita',
    'Publicación multiplataforma (7 canales)',
    'Sesión de fotos profesional',
    'Grabación y edición de video',
    'Publicación en la multiplataforma',
  ],
};

export default function Pricing() {
  return (
    <Layout title="Precios | PublicAdis" description="Planes de publicidad adaptados a tu negocio">
      <div className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-4">Planes de Publicidad</h1>
            <p className="text-xl text-gray-600">
              Elige el plan que mejor se adapte a tus necesidades y comienza a hacer crecer tu
              negocio con PublicAdis
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Plan Simple */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Plan Simple</h3>
                <p className="text-gray-500 mb-6">Perfecto para comenzar</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">S/</span>
                  <span className="text-6xl font-bold">30</span>
                  <span className="text-gray-500 ml-2">/semana</span>
                </div>
                <ul className="space-y-4">
                  {features.simple.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-50">
                <button className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
                  Comenzar Ahora
                </button>
              </div>
            </div>

            {/* Plan Destacado */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-blue-500">
              <div className="bg-blue-500 text-white text-center py-2">
                <span className="text-sm font-semibold">MÁS POPULAR</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Plan Destacado</h3>
                <p className="text-gray-500 mb-6">Para negocios en crecimiento</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">S/</span>
                  <span className="text-6xl font-bold">50</span>
                  <span className="text-gray-500 ml-2">/semana</span>
                </div>
                <ul className="space-y-4">
                  {features.destacado.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-50">
                <button className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
                  Comenzar Ahora
                </button>
              </div>
            </div>

            {/* Plan Premium */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Plan Premium</h3>
                <p className="text-gray-500 mb-6">Máximo impacto y alcance</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">S/</span>
                  <span className="text-6xl font-bold">100</span>
                  <span className="text-gray-500 ml-2">/semana</span>
                </div>
                <ul className="space-y-4">
                  {features.premium.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-50">
                <button className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
                  Comenzar Ahora
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  ¿Qué incluye la publicación multiplataforma?
                </h3>
                <p className="text-gray-600">
                  La publicación multiplataforma incluye presencia en nuestro local, redes sociales
                  (Facebook, Instagram, TikTok), revista digital, WhatsApp Business y grupos de
                  difusión.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  ¿Cómo funciona la sesión de fotos profesional?
                </h3>
                <p className="text-gray-600">
                  Un fotógrafo profesional visitará tu negocio para capturar imágenes de alta
                  calidad de tus productos o servicios. Incluye edición y optimización de las fotos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">¿Puedo personalizar mi plan?</h3>
                <p className="text-gray-600">
                  ¡Sí! Contáctanos para discutir tus necesidades específicas y podemos crear un plan
                  personalizado que se ajuste a tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
