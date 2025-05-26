import React from 'react';
import Layout from '../../src/components/Layout';
import { distributionChannels } from '../../src/data/distribution-channels';

const StatCard = ({ label, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="text-sm text-gray-600">{label}</div>
    <div className="text-xl font-semibold mt-1">{value}</div>
  </div>
);

const PlatformCard = ({ platform }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-4">{platform.name}</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.entries(platform.stats).map(([key, value]) => (
        <StatCard key={key} label={key} value={value} />
      ))}
    </div>
  </div>
);

const ChannelSection = ({ channel }) => (
  <section id={channel.id} className="py-16 scroll-mt-24">
    <div className="flex items-center mb-8">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mr-6"
        style={{ backgroundColor: channel.color }}
      >
        <i className={`fas fa-${channel.icon} text-white text-2xl`} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{channel.name}</h2>
        <p className="text-gray-600 mt-2">{channel.description}</p>
      </div>
    </div>

    <div className="space-y-6">
      {channel.platforms.map(platform => (
        <PlatformCard key={platform.name} platform={platform} />
      ))}
    </div>

    <div className="mt-8 bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">¿Por qué elegir {channel.name}?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Beneficios Principales</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Alcance altamente segmentado y cualificado</li>
            <li>Métricas detalladas y reportes en tiempo real</li>
            <li>Optimización continua basada en datos</li>
            <li>Soporte dedicado y estratégico</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Características Exclusivas</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Integración con otras plataformas de PublicAdis</li>
            <li>Herramientas avanzadas de segmentación</li>
            <li>Análisis competitivo del mercado</li>
            <li>Estrategias personalizadas por industria</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default function PlatformsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Red de Distribución PublicAdis</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximiza el alcance de tu marca a través de nuestra red integral de canales de
            distribución, diseñada para llegar a tu audiencia ideal en cada punto de contacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {distributionChannels.map(channel => (
            <div
              key={channel.id}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                style={{ backgroundColor: channel.color }}
              >
                <i className={`fas fa-${channel.icon} text-white text-2xl`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{channel.name}</h3>
              <p className="text-gray-600 text-sm">{channel.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-24">
          {distributionChannels.map(channel => (
            <ChannelSection key={channel.id} channel={channel} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
