import React from 'react';
import Link from 'next/link';
// Suponiendo que distributionChannels viene de props o context en el componente padre.
// Por ahora, para que este componente funcione aislado, lo comentaré aquí y lo pasarías como prop.
// import { distributionChannels } from '../data/distribution-channels';

const ChannelIcon = ({ channel }) => {
  return (
    <Link href={`/plataformas#${channel.id}`} className="group relative flex items-center justify-center">
      {/* Ícono */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
        style={{ backgroundColor: channel.color }}
      >
        <i className={`fas fa-${channel.icon} text-white text-xl`} />
      </div>

      {/* Tooltip: se mostrará a la izquierda del ícono */}
      {/* Contenedor del tooltip que se posiciona */}
      <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 hidden group-hover:flex items-center z-20"> {/* Ajustado el z-index por si acaso */}
        {/* Caja de Texto del Tooltip */}
        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg relative"> {/* Hacemos este 'relative' para la flecha */}
          {channel.name}
          {/* Flecha del Tooltip (adjunta al lado derecho de la caja de texto, apuntando a la derecha) */}
          <div
            className="w-2.5 h-2.5 bg-gray-900 transform rotate-45 absolute top-1/2 -translate-y-1/2 left-full"
            // marginLeft negativo para meter la mitad del cuadrado rotado sobre el borde y que parezca una flecha saliente.
            // Si w-2.5 es 10px, la mitad de su diagonal es aprox 7px, pero queremos centrar el cuadrado.
            // Un cuadrado de 10x10, su centro está a 5px de su borde.
            // Left-full pone el borde izquierdo de la flecha en el borde derecho del tooltip.
            // Queremos que el *centro* de la flecha esté en el borde derecho del tooltip.
            // Entonces, translateX(-50%) después de left-full. O más simple, con marginLeft.
            style={{ marginLeft: '-0.3125rem' }} // Es -5px si 1rem = 16px. (10px / 2 = 5px). w-2.5 es 0.625rem. La mitad es 0.3125rem.
          />
        </div>
      </div>
    </Link>
  );
};

// El componente DistributionChannelsSidebar se mantiene igual,
// solo asegúrate de que `distributionChannels` esté disponible.
const DistributionChannelsSidebar = ({ distributionChannels }) => { // Añadido props
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {distributionChannels.map(channel => (
          <ChannelIcon key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
  );
};

export default DistributionChannelsSidebar;