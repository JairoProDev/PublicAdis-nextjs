import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const ChannelIcon = ({ channel, index, isMobile, showTooltip }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-end">
      {/* Tooltip - Solo en desktop o si está activado */}
      <AnimatePresence>
        {(isHovered || (isMobile && showTooltip)) && (
          <motion.div
            className="absolute right-full top-1/2 -translate-y-1/2 mr-4 pointer-events-none z-50"
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div
                className="px-5 py-3 rounded-xl shadow-2xl min-w-[200px]"
                style={{ backgroundColor: channel.color }}
              >
                <p className="text-white font-bold whitespace-nowrap text-base">{channel.name}</p>
                <p className="text-white/80 text-xs mt-1 leading-tight">{channel.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {channel.platforms.map(platform => (
                    <span
                      key={platform.name}
                      className="px-2 py-0.5 rounded-full text-[10px] bg-white/20 text-white font-medium shadow-sm"
                    >
                      {platform.name}
                    </span>
                  ))}
                </div>
              </div>
              {/* Arrow */}
              <div
                className="absolute top-1/2 -right-1.5 w-3 h-3 rotate-45 -translate-y-1/2"
                style={{ backgroundColor: channel.color }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Link href={`/plataformas#${channel.id}`} passHref legacyBehavior>
        <motion.a
          className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer relative z-10"
          style={{ backgroundColor: channel.color }}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <i className={`fas fa-${channel.icon} text-xl md:text-2xl text-white`} />
        </motion.a>
      </Link>
    </div>
  );
};

const DistributionChannelsSidebar = ({ distributionChannels }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!distributionChannels) return null;

  return (
    <div className={`fixed z-[100] ${isMobile ? 'right-6 bottom-6' : 'right-6 top-1/2 -translate-y-1/2'}`}>
      <div className="flex flex-col items-end space-y-4">
        {/* Desktop View & Mobile Expanded View */}
        <AnimatePresence>
          {(!isMobile || isOpen) && (
            <motion.div
              className="flex flex-col space-y-4 items-end"
              initial={isMobile ? { opacity: 0, height: 0 } : { opacity: 1 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {[...distributionChannels].reverse().map((channel, index) => (
                <ChannelIcon
                  key={channel.id}
                  channel={channel}
                  index={index}
                  isMobile={isMobile}
                  showTooltip={false}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Toggle Button */}
        {isMobile && (
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#1a56db] to-[#d4af37] text-white shadow-2xl flex items-center justify-center relative z-[110]"
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 135 : 0 }}
          >
            <i className={`fas ${isOpen ? 'fa-plus' : 'fa-th-large'} text-2xl`} />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default DistributionChannelsSidebar;
