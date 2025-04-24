import React, { useState, useEffect } from 'react';

const MarketingBudgetCalculator = () => {
  const [totalBudget, setTotalBudget] = useState(5000);
  const [businessType, setBusinessType] = useState('ecommerce');
  const [businessGoal, setBusinessGoal] = useState('brand');
  const [channels, setChannels] = useState([
    { id: 'social', name: 'Redes Sociales', percentage: 25, allocation: 1250, color: '#4472C4' },
    { id: 'search', name: 'Búsqueda Paga', percentage: 20, allocation: 1000, color: '#ED7D31' },
    { id: 'email', name: 'Email Marketing', percentage: 15, allocation: 750, color: '#A5A5A5' },
    {
      id: 'content',
      name: 'Marketing de Contenidos',
      percentage: 15,
      allocation: 750,
      color: '#FFC000',
    },
    { id: 'display', name: 'Anuncios Display', percentage: 10, allocation: 500, color: '#5B9BD5' },
    {
      id: 'influencer',
      name: 'Marketing de Influencers',
      percentage: 10,
      allocation: 500,
      color: '#70AD47',
    },
    { id: 'other', name: 'Otros', percentage: 5, allocation: 250, color: '#9E480E' },
  ]);

  // Presets for different business types
  const businessTypePresets = {
    ecommerce: {
      brand: [
        { id: 'social', percentage: 25 },
        { id: 'search', percentage: 20 },
        { id: 'email', percentage: 15 },
        { id: 'content', percentage: 15 },
        { id: 'display', percentage: 10 },
        { id: 'influencer', percentage: 10 },
        { id: 'other', percentage: 5 },
      ],
      sales: [
        { id: 'search', percentage: 30 },
        { id: 'social', percentage: 20 },
        { id: 'email', percentage: 20 },
        { id: 'display', percentage: 15 },
        { id: 'content', percentage: 8 },
        { id: 'influencer', percentage: 5 },
        { id: 'other', percentage: 2 },
      ],
    },
    local: {
      brand: [
        { id: 'social', percentage: 30 },
        { id: 'search', percentage: 15 },
        { id: 'content', percentage: 20 },
        { id: 'email', percentage: 10 },
        { id: 'display', percentage: 10 },
        { id: 'influencer', percentage: 10 },
        { id: 'other', percentage: 5 },
      ],
      sales: [
        { id: 'search', percentage: 35 },
        { id: 'social', percentage: 25 },
        { id: 'display', percentage: 15 },
        { id: 'email', percentage: 10 },
        { id: 'content', percentage: 8 },
        { id: 'influencer', percentage: 5 },
        { id: 'other', percentage: 2 },
      ],
    },
    service: {
      brand: [
        { id: 'content', percentage: 25 },
        { id: 'social', percentage: 25 },
        { id: 'email', percentage: 15 },
        { id: 'search', percentage: 15 },
        { id: 'display', percentage: 10 },
        { id: 'influencer', percentage: 5 },
        { id: 'other', percentage: 5 },
      ],
      sales: [
        { id: 'content', percentage: 25 },
        { id: 'search', percentage: 25 },
        { id: 'social', percentage: 20 },
        { id: 'email', percentage: 15 },
        { id: 'display', percentage: 10 },
        { id: 'influencer', percentage: 3 },
        { id: 'other', percentage: 2 },
      ],
    },
  };

  // Update allocations when total budget changes
  useEffect(() => {
    const updatedChannels = channels.map(channel => ({
      ...channel,
      allocation: Math.round((channel.percentage / 100) * totalBudget),
    }));
    setChannels(updatedChannels);
  }, [totalBudget, channels]);

  // Apply preset when business type or goal changes
  useEffect(() => {
    if (businessTypePresets[businessType] && businessTypePresets[businessType][businessGoal]) {
      const preset = businessTypePresets[businessType][businessGoal];
      const updatedChannels = channels.map(channel => {
        const presetChannel = preset.find(p => p.id === channel.id);
        const newPercentage = presetChannel ? presetChannel.percentage : 0;
        return {
          ...channel,
          percentage: newPercentage,
          allocation: Math.round((newPercentage / 100) * totalBudget),
        };
      });
      setChannels(updatedChannels);
    }
  }, [businessType, businessGoal, channels, totalBudget, businessTypePresets]);

  // Update percentage when allocation changes
  const handleAllocationChange = (id, value) => {
    const allocationValue = parseInt(value, 10) || 0;

    // Find the channel being updated
    const channelIndex = channels.findIndex(c => c.id === id);
    if (channelIndex === -1) return;

    // Calculate the remaining budget (total minus all allocations except the current channel)
    const currentAllocation = channels[channelIndex].allocation;
    const otherAllocationsTotal = channels.reduce(
      (sum, channel) => sum + (channel.id !== id ? channel.allocation : 0),
      0
    );

    // Make sure allocation doesn't exceed total budget
    const maxAllocation = totalBudget - otherAllocationsTotal;
    const newAllocation = Math.min(allocationValue, maxAllocation);

    // Update the channels with the new allocation and percentage
    const updatedChannels = [...channels];
    updatedChannels[channelIndex] = {
      ...updatedChannels[channelIndex],
      allocation: newAllocation,
      percentage: Math.round((newAllocation / totalBudget) * 100),
    };

    setChannels(updatedChannels);
  };

  // Update allocation when percentage changes
  const handlePercentageChange = (id, value) => {
    const percentageValue = parseInt(value, 10) || 0;

    // Find the channel being updated
    const channelIndex = channels.findIndex(c => c.id === id);
    if (channelIndex === -1) return;

    // Calculate the remaining percentage (100 minus all percentages except the current channel)
    const currentPercentage = channels[channelIndex].percentage;
    const otherPercentagesTotal = channels.reduce(
      (sum, channel) => sum + (channel.id !== id ? channel.percentage : 0),
      0
    );

    // Make sure percentage doesn't exceed 100
    const maxPercentage = 100 - otherPercentagesTotal;
    const newPercentage = Math.min(percentageValue, maxPercentage);

    // Update the channels with the new percentage and allocation
    const updatedChannels = [...channels];
    updatedChannels[channelIndex] = {
      ...updatedChannels[channelIndex],
      percentage: newPercentage,
      allocation: Math.round((newPercentage / 100) * totalBudget),
    };

    setChannels(updatedChannels);
  };

  // Calculate remaining budget
  const allocatedBudget = channels.reduce((sum, channel) => sum + channel.allocation, 0);
  const remainingBudget = totalBudget - allocatedBudget;
  const totalPercentage = channels.reduce((sum, channel) => sum + channel.percentage, 0);

  return (
    <div className="marketing-budget-calculator">
      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          Planifica fácilmente cómo distribuir tu presupuesto de marketing entre diferentes canales,
          según tu tipo de negocio y objetivos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="totalBudget" className="block text-sm font-medium text-gray-700 mb-1">
              Presupuesto Total (S/)
            </label>
            <input
              type="number"
              id="totalBudget"
              min="100"
              step="100"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={totalBudget}
              onChange={e => setTotalBudget(Math.max(100, parseInt(e.target.value, 10) || 0))}
            />
          </div>

          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Negocio
            </label>
            <select
              id="businessType"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={businessType}
              onChange={e => setBusinessType(e.target.value)}
            >
              <option value="ecommerce">E-commerce / Tienda Online</option>
              <option value="local">Negocio Local</option>
              <option value="service">Servicio Profesional</option>
            </select>
          </div>

          <div>
            <label htmlFor="businessGoal" className="block text-sm font-medium text-gray-700 mb-1">
              Objetivo Principal
            </label>
            <select
              id="businessGoal"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={businessGoal}
              onChange={e => setBusinessGoal(e.target.value)}
            >
              <option value="brand">Construcción de Marca</option>
              <option value="sales">Ventas y Conversiones</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h3 className="text-lg font-semibold mb-4">Distribución del Presupuesto</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Canal
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Porcentaje
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asignación (S/)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {channels.map(channel => (
                  <tr key={channel.id}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: channel.color }}
                        ></div>
                        {channel.name}
                      </div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          className="w-16 px-2 py-1 border border-gray-300 rounded-md mr-1 focus:ring-blue-500 focus:border-blue-500"
                          value={channel.percentage}
                          onChange={e => handlePercentageChange(channel.id, e.target.value)}
                        />
                        <span>%</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="mr-1">S/</span>
                        <input
                          type="number"
                          min="0"
                          max={totalBudget}
                          className="w-24 px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          value={channel.allocation}
                          onChange={e => handleAllocationChange(channel.id, e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 whitespace-nowrap font-medium">Total</td>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    <span className={totalPercentage === 100 ? 'text-green-600' : 'text-red-600'}>
                      {totalPercentage}%
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    <span className={remainingBudget === 0 ? 'text-green-600' : 'text-red-600'}>
                      S/ {allocatedBudget}
                      {remainingBudget !== 0 &&
                        ` (${remainingBudget > 0 ? 'Falta' : 'Exceso'}: S/ ${Math.abs(remainingBudget)})`}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Visualización</h3>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-1/2 h-60">
              {/* This is where you would insert a Chart.js or similar chart component */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">Gráfico de distribución</p>
                  <p className="text-sm text-gray-400">
                    (Visualización disponible en implementación real)
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h4 className="font-medium mb-3">Recomendaciones</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    {businessType === 'ecommerce' && businessGoal === 'sales'
                      ? 'Para e-commerce con objetivo de ventas, prioriza la búsqueda paga y el email marketing.'
                      : businessType === 'local' && businessGoal === 'brand'
                        ? 'Los negocios locales enfocados en marca deben priorizar redes sociales y marketing de contenidos.'
                        : businessType === 'service'
                          ? 'Los servicios profesionales se benefician más del marketing de contenidos que genera autoridad.'
                          : 'Ajusta tu presupuesto según los canales que mejor funcionen para tu audiencia específica.'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    Monitorea el ROI de cada canal y ajusta la distribución trimestralmente.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    Considera asignar un 5-10% adicional para pruebas en nuevos canales o formatos.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingBudgetCalculator;
