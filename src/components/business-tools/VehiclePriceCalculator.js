import React, { useState } from 'react';

const VehiclePriceCalculator = () => {
  const [formData, setFormData] = useState({
    vehicleType: 'sedan',
    brand: 'toyota',
    year: new Date().getFullYear().toString(),
    condition: 'good',
    mileage: 'medium',
    extras: [],
  });

  const [result, setResult] = useState(null);

  const baseValues = {
    sedan: 25000,
    suv: 40000,
    pickup: 35000,
    hatchback: 22000,
    van: 30000,
  };

  const yearDepreciation = {
    0: 1.0, 1: 0.85, 2: 0.75, 3: 0.68, 4: 0.62, 5: 0.56, 6: 0.51, 7: 0.47, 8: 0.43, 9: 0.39, 10: 0.36, 15: 0.25, 20: 0.18,
  };

  const brandFactors = {
    toyota: 1.15, nissan: 1.05, hyundai: 1.0, kia: 0.98, volkswagen: 1.05, chevrolet: 0.95, ford: 1.0, honda: 1.12, mazda: 1.08, suzuki: 0.92, other: 0.85,
  };

  const conditionFactors = {
    excellent: 1.15, good: 1.0, fair: 0.85, poor: 0.7,
  };

  const mileageFactors = {
    low: 1.1, medium: 1.0, high: 0.85, veryhigh: 0.7,
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExtraChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, extras: [...formData.extras, value] });
    } else {
      setFormData({ ...formData, extras: formData.extras.filter(x => x !== value) });
    }
  };

  const getDepreciationFactor = age => {
    if (yearDepreciation[age] !== undefined) return yearDepreciation[age];
    const years = Object.keys(yearDepreciation).map(Number).sort((a, b) => a - b);
    if (age > years[years.length - 1]) return yearDepreciation[years[years.length - 1]];
    let lowerYear = years[0], upperYear = years[years.length - 1];
    for (let i = 0; i < years.length - 1; i++) {
      if (age >= years[i] && age < years[i + 1]) {
        lowerYear = years[i]; upperYear = years[i + 1]; break;
      }
    }
    const lowerFactor = yearDepreciation[lowerYear], upperFactor = yearDepreciation[upperYear];
    const ratio = (age - lowerYear) / (upperYear - lowerYear);
    return lowerFactor - ratio * (lowerFactor - upperFactor);
  };

  const calculatePrice = e => {
    if (e) e.preventDefault();
    let basePrice = baseValues[formData.vehicleType];
    const age = new Date().getFullYear() - parseInt(formData.year);
    const depreciationFactor = getDepreciationFactor(age);
    const brandFactor = brandFactors[formData.brand] || brandFactors.other;
    const conditionFactor = conditionFactors[formData.condition];
    const mileageFactor = mileageFactors[formData.mileage];

    let adjustedPrice = basePrice * depreciationFactor * brandFactor * conditionFactor * mileageFactor;

    let extrasValue = 0;
    formData.extras.forEach(extra => {
      if (extra === 'leather') extrasValue += 1500;
      if (extra === 'sunroof') extrasValue += 2000;
      if (extra === 'alloy') extrasValue += 1000;
      if (extra === 'navigation') extrasValue += 1200;
      if (extra === 'camera') extrasValue += 800;
    });

    const finalPrice = adjustedPrice + extrasValue;
    setResult({
      price: finalPrice,
      lowerRange: finalPrice * 0.9,
      upperRange: finalPrice * 1.1,
      extrasValue,
    });
  };

  const formatCurrency = value => 'S/. ' + Math.round(value).toLocaleString('es-PE');

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= currentYear - 25; y--) years.push(y);

  return (
    <div className="vehicle-price-calculator">
      {!result ? (
        <form onSubmit={calculatePrice} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Tipo de Vehículo</label>
              <select name="vehicleType" value={formData.vehicleType} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="sedan">Sedán</option>
                <option value="suv">SUV</option>
                <option value="pickup">Pickup</option>
                <option value="hatchback">Hatchback</option>
                <option value="van">Van</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Marca</label>
              <select name="brand" value={formData.brand} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="toyota">Toyota</option>
                <option value="nissan">Nissan</option>
                <option value="hyundai">Hyundai</option>
                <option value="kia">Kia</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="other">Otra</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Año</label>
              <select name="year" value={formData.year} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md">
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Condición</label>
              <select name="condition" value={formData.condition} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="excellent">Excelente</option>
                <option value="good">Bueno</option>
                <option value="fair">Regular</option>
                <option value="poor">Malo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Kilometraje</label>
              <select name="mileage" value={formData.mileage} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="low">Bajo (&lt;40k km)</option>
                <option value="medium">Medio (40k-100k km)</option>
                <option value="high">Alto (100k-180k km)</option>
                <option value="veryhigh">Muy Alto (&gt;180k km)</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <label className="flex items-center text-sm"><input type="checkbox" value="leather" onChange={handleExtraChange} className="mr-2" /> Cuero</label>
            <label className="flex items-center text-sm"><input type="checkbox" value="sunroof" onChange={handleExtraChange} className="mr-2" /> Techo Solar</label>
            <label className="flex items-center text-sm"><input type="checkbox" value="alloy" onChange={handleExtraChange} className="mr-2" /> Aros Aleación</label>
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Calcular Precio</button>
        </form>
      ) : (
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <h4 className="font-bold mb-2">Precio Estimado</h4>
          <div className="text-4xl font-bold text-blue-700">{formatCurrency(result.price)}</div>
          <div className="text-sm text-gray-600 mt-1">Rango: {formatCurrency(result.lowerRange)} - {formatCurrency(result.upperRange)}</div>
          <button onClick={() => setResult(null)} className="mt-6 w-full py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100">Nueva Calculación</button>
        </div>
      )}
    </div>
  );
};

export default VehiclePriceCalculator;

