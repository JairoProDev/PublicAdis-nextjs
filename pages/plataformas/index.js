import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../src/components/Layout';
import { distributionChannels } from '../../src/data/distribution-channels';

const StatCard = ({ label, value, color }) => (
  <motion.div
    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
    whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${color}33` }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-gray-600 text-sm uppercase tracking-wider">{label}</div>
    <div className="text-2xl font-bold mt-2" style={{ color }}>
      {value}
    </div>
  </motion.div>
);

const PlatformCard = ({ platform, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
  >
    <h3 className="text-2xl font-bold mb-6" style={{ color }}>
      {platform.name}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(platform.stats).map(([key, value]) => (
        <StatCard key={key} label={key} value={value} color={color} />
      ))}
    </div>
  </motion.div>
);

const ChannelSection = ({ channel, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      id={channel.id}
      className="py-24 relative scroll-mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center mb-12 gap-8">
        <motion.div
          className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg"
          style={{
            backgroundColor: channel.color,
          }}
          whileHover={{ scale: 1.1 }}
        >
          <i className={`fas fa-${channel.icon} text-4xl text-white`} />
        </motion.div>

        <div>
          <motion.h2
            className="text-4xl font-bold"
            style={{ color: channel.color }}
            initial={{ x: isEven ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {channel.name}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-xl mt-4 max-w-2xl"
            initial={{ x: isEven ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {channel.description}
          </motion.p>
        </div>
      </div>

      <div className="space-y-8">
        {channel.platforms.map(platform => (
          <PlatformCard key={platform.name} platform={platform} color={channel.color} />
        ))}
      </div>

      <motion.div
        className="mt-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold mb-8" style={{ color: channel.color }}>
          ¿Por qué elegir {channel.name}?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Beneficios Principales</h4>
            <ul className="space-y-4">
              {[
                'Alcance altamente segmentado y cualificado',
                'Métricas detalladas y reportes en tiempo real',
                'Optimización continua basada en datos',
                'Soporte dedicado y estratégico',
              ].map((benefit, i) => (
                <motion.li
                  key={i}
                  className="flex items-center text-gray-600"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: channel.color }}
                  />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Características Exclusivas</h4>
            <ul className="space-y-4">
              {[
                'Integración con otras plataformas de PublicAdis',
                'Herramientas avanzadas de segmentación',
                'Análisis competitivo del mercado',
                'Estrategias personalizadas por industria',
              ].map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center text-gray-600"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: channel.color }}
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default function PlatformsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          className="text-center mb-24"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="text-6xl font-bold mb-6 text-gray-900"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Red de Distribución PublicAdis
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Maximiza el alcance de tu marca a través de nuestra red integral de canales de
            distribución, diseñada para llegar a tu audiencia ideal en cada punto de contacto.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {distributionChannels.map((channel, index) => (
            <motion.a
              key={channel.id}
              href={`#${channel.id}`}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 
                group-hover:transform group-hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: `0 0 40px ${channel.color}11`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: channel.color,
                  }}
                >
                  <i className={`fas fa-${channel.icon} text-2xl text-white`} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: channel.color }}>
                  {channel.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{channel.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="space-y-32">
          {distributionChannels.map((channel, index) => (
            <ChannelSection key={channel.id} channel={channel} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
