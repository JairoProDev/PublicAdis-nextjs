import React, { useState } from 'react';

const RoiCalculator = () => {
  const [formData, setFormData] = useState({
    investment: '',
    revenue: '',
    channel: 'search',
    customers: '',
    period: '1',
  });

  const [result, setResult] = useState(null);

  const channelFactors = {
    search: 0.065,
    social: 0.043,
    display: 0.018,
    email: 0.073,
    content: 0.032,
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateRoi = e => {
    if (e) e.preventDefault();

    const investment = parseFloat(formData.investment);
    const revenue = parseFloat(formData.revenue);
    const customers = parseFloat(formData.customers) || 0;
    const period = parseInt(formData.period);

    if (!investment || investment <= 0) {
      alert('Por favor, introduce un valor válido para la inversión.');
      return;
    }

    const roi = ((revenue - investment) / investment) * 100;
    const costPerCustomer = customers > 0 ? investment / customers : 0;
    const revenuePerCustomer = customers > 0 ? revenue / customers : 0;
    const customerLifetimeValue = revenuePerCustomer * 3;

    let roiRating;
    let roiMessage;

    if (roi < 0) {
      roiRating = 'Negativo';
      roiMessage = 'Tu campaña está generando pérdidas.';
    } else if (roi < 50) {
      roiRating = 'Bajo';
      roiMessage = 'Tu campaña tiene un rendimiento bajo.';
    } else if (roi < 100) {
      roiRating = 'Promedio';
      roiMessage = 'Tu campaña tiene un rendimiento aceptable.';
    } else if (roi < 200) {
      roiRating = 'Bueno';
      roiMessage = 'Tu campaña tiene un buen rendimiento.';
    } else {
      roiRating = 'Excelente';
      roiMessage = '¡Felicidades! Tu campaña tiene un excelente rendimiento.';
    }

    setResult({
      roi,
      investment,
      revenue,
      costPerCustomer,
      revenuePerCustomer,
      customerLifetimeValue,
      roiRating,
      roiMessage,
      channel: formData.channel,
      period,
    });
  };

  const formatCurrency = value => {
    return 'S/. ' + value.toLocaleString('es-PE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const formatPercent = value => {
    return value.toLocaleString('es-PE', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }) + '%';
  };

  const channelNames = {
    search: 'Google Ads / Búsqueda',
    social: 'Redes Sociales',
    display: 'Anuncios Display',
    email: 'Email Marketing',
    content: 'Marketing de Contenidos',
  };

  const periodText = {
    1: '1 mes',
    3: '3 meses',
    6: '6 meses',
    12: '12 meses',
  };

  return (
    <div className="roi-calculator">
      {!result ? (
        <form onSubmit={calculateRoi} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Inversión Publicitaria (S/.)</label>
              <input
                type="number"
                name="investment"
                value={formData.investment}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ingresos Generados (S/.)</label>
              <input
                type="number"
                name="revenue"
                value={formData.revenue}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Canal</label>
              <select name="channel" value={formData.channel} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="search">Google Ads</option>
                <option value="social">Redes Sociales</option>
                <option value="display">Anuncios Display</option>
                <option value="email">Email Marketing</option>
                <option value="content">Marketing de Contenidos</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Clientes Adquiridos</label>
              <input
                type="number"
                name="customers"
                value={formData.customers}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Periodo</label>
              <select name="period" value={formData.period} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="1">1 mes</option>
                <option value="3">3 meses</option>
                <option value="6">6 meses</option>
                <option value="12">12 meses</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Calcular ROI</button>
        </form>
      ) : (
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold mb-2">ROI de tu Campaña</h4>
            <div className="text-4xl font-bold text-blue-700">{formatPercent(result.roi)}</div>
            <div className="text-sm text-gray-600 mt-1">Calificación: <strong>{result.roiRating}</strong></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-3 rounded-md shadow-sm text-center">
              <div className="text-xs text-gray-500">Costo por Cliente</div>
              <div className="font-bold">{formatCurrency(result.costPerCustomer)}</div>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm text-center">
              <div className="text-xs text-gray-500">Ingreso por Cliente</div>
              <div className="font-bold">{formatCurrency(result.revenuePerCustomer)}</div>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm text-center">
              <div className="text-xs text-gray-500">Valor de Vida (LTV)</div>
              <div className="font-bold">{formatCurrency(result.customerLifetimeValue)}</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md mb-6">
            <h5 className="font-bold mb-2">Análisis:</h5>
            <p className="text-sm text-gray-700">
              {result.roiMessage} Tu campaña en <strong>{channelNames[result.channel]}</strong> durante <strong>{periodText[result.period]}</strong> ha generado un retorno de inversión del <strong>{formatPercent(result.roi)}</strong>.
            </p>
          </div>

          <button onClick={() => setResult(null)} className="w-full py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100">Nueva Calculación</button>
        </div>
      )}
    </div>
  );
};

export default RoiCalculator;

