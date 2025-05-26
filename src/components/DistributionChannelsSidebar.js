import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Suponiendo que distributionChannels viene de props o context en el componente padre.
// Por ahora, para que este componente funcione aislado, lo comentaré aquí y lo pasarías como prop.
// import { distributionChannels } from '../data/distribution-channels';

const ChannelIcon = ({ channel, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/plataformas#${channel.id}`}>
      <motion.div
        className="group relative flex items-center justify-center"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Icon container */}
        <motion.div
          className="w-14 h-14 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg"
          style={{
            backgroundColor: channel.color,
          }}
          whileHover={{
            scale: 1.2,
            boxShadow: `0 0 20px ${channel.color}66`,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Icon */}
          <motion.i
            className={`fas fa-${channel.icon} text-2xl relative z-10`}
            style={{ color: '#ffffff' }}
            animate={{
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Tooltip */}
        <motion.div
          className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 pointer-events-none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Tooltip background */}
            <div
              className="px-6 py-3 rounded-lg shadow-xl"
              style={{
                backgroundColor: channel.color,
              }}
            >
              {/* Channel name */}
              <p className="text-white font-medium whitespace-nowrap text-lg">{channel.name}</p>

              {/* Description */}
              <p className="text-white/90 text-sm mt-1 max-w-xs">{channel.description}</p>

              {/* Stats preview */}
              <div className="mt-2 flex gap-3">
                {channel.platforms.map(platform => (
                  <div
                    key={platform.name}
                    className="px-2 py-1 rounded-full text-xs bg-white/20 text-white"
                  >
                    {platform.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div
              className="absolute top-1/2 -right-2 w-4 h-4 transform -translate-y-1/2 rotate-45"
              style={{
                backgroundColor: channel.color,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

// El componente DistributionChannelsSidebar se mantiene igual,
// solo asegúrate de que `distributionChannels` esté disponible.
const DistributionChannelsSidebar = ({ distributionChannels }) => {
  // Añadido props
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-6">
        {distributionChannels.map((channel, index) => (
          <ChannelIcon key={channel.id} channel={channel} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DistributionChannelsSidebar;
