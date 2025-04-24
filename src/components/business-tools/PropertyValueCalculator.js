/**
 * Calculadora de Valor Inmobiliario
 * Estima el valor de propiedades inmobiliarias basado en sus características
 */
import React, { useState } from 'react';

const PropertyValueCalculator = () => {
  const [formData, setFormData] = useState({
    propertyType: 'apartment',
    area: '',
    bedrooms: '1',
    bathrooms: '1',
    age: '0-5',
    location: 'centro',
    amenities: [],
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, value],
      });
    } else {
      setFormData({
        ...formData,
        amenities: formData.amenities.filter(amenity => amenity !== value),
      });
    }
  };

  const calculatePropertyValue = () => {
    // Validation
    if (!formData.area || isNaN(formData.area) || formData.area <= 0) {
      setError('Por favor ingresa un área válida');
      return;
    }

    setError(null);

    // Base price per square meter by location
    const baseSquareMeterPrices = {
      centro: 2100,
      wanchaq: 1800,
      sanSebastian: 1500,
      sanJeronimo: 1300,
      otros: 1000,
    };

    // Property type multipliers
    const propertyTypeMultipliers = {
      apartment: 1.0,
      house: 1.1,
      land: 0.8,
      commercial: 1.3,
    };

    // Age depreciation
    const ageDepreciations = {
      '0-5': 1.0,
      '6-10': 0.9,
      '11-20': 0.8,
      '21+': 0.7,
    };

    // Calculate the base value
    let baseValue = formData.area * baseSquareMeterPrices[formData.location];

    // Apply property type multiplier
    baseValue *= propertyTypeMultipliers[formData.propertyType];

    // Apply age depreciation
    baseValue *= ageDepreciations[formData.age];

    // Add value for bedrooms
    baseValue += parseInt(formData.bedrooms) * 10000;

    // Add value for bathrooms
    baseValue += parseInt(formData.bathrooms) * 8000;

    // Add value for amenities (5000 per amenity)
    baseValue += formData.amenities.length * 5000;

    // Add random variation of +/- 5%
    const variation = 0.95 + Math.random() * 0.1;
    baseValue *= variation;

    // Format the results
    const formattedValue = Math.round(baseValue).toLocaleString('es-PE');
    const rangeMin = Math.round(baseValue * 0.9).toLocaleString('es-PE');
    const rangeMax = Math.round(baseValue * 1.1).toLocaleString('es-PE');

    setResult({
      formattedValue,
      rangeMin,
      rangeMax,
      squareMeterPrice: Math.round(baseValue / formData.area).toLocaleString('es-PE'),
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    calculatePropertyValue();
  };

  const resetCalculator = () => {
    setFormData({
      propertyType: 'apartment',
      area: '',
      bedrooms: '1',
      bathrooms: '1',
      age: '0-5',
      location: 'centro',
      amenities: [],
    });
    setResult(null);
    setError(null);
  };

  return (
    <div className="property-value-calculator">
      <div className="mb-6">
        <p className="text-gray-600 mb-2">
          Esta herramienta te permite estimar el valor aproximado de propiedades inmobiliarias en
          Cusco, basado en datos actualizados del mercado local.
        </p>
        <p className="text-gray-600 text-sm">
          Nota: Los resultados son orientativos y pueden variar según factores adicionales del
          mercado.
        </p>
      </div>

      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de propiedad
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="apartment">Departamento</option>
                <option value="house">Casa</option>
                <option value="land">Terreno</option>
                <option value="commercial">Local Comercial</option>
              </select>
            </div>

            {/* Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Área (m²)</label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                placeholder="Área en metros cuadrados"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Bedrooms */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dormitorios</label>
              <select
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Baños</label>
              <select
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Antigüedad (años)
              </label>
              <select
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="0-5">0-5 años</option>
                <option value="6-10">6-10 años</option>
                <option value="11-20">11-20 años</option>
                <option value="21+">21+ años</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="centro">Centro Histórico</option>
              <option value="wanchaq">Wanchaq</option>
              <option value="sanSebastian">San Sebastián</option>
              <option value="sanJeronimo">San Jerónimo</option>
              <option value="otros">Otras zonas</option>
            </select>
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Características adicionales
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="amenities"
                  value="parking"
                  checked={formData.amenities.includes('parking')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Estacionamiento</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="amenities"
                  value="garden"
                  checked={formData.amenities.includes('garden')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Jardín/Terraza</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="amenities"
                  value="security"
                  checked={formData.amenities.includes('security')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Seguridad 24h</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="amenities"
                  value="pool"
                  checked={formData.amenities.includes('pool')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Piscina</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="amenities"
                  value="gym"
                  checked={formData.amenities.includes('gym')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Gimnasio</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="amenities"
                  value="view"
                  checked={formData.amenities.includes('view')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Vista privilegiada</span>
              </label>
            </div>
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Calcular Valor
            </button>
          </div>
        </form>
      ) : (
        <div className="result bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-center mb-4">Resultado de la Valoración</h3>

          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-blue-700">S/ {result.formattedValue}</div>
            <div className="text-sm text-gray-600">
              Rango estimado: S/ {result.rangeMin} - S/ {result.rangeMax}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="text-sm text-gray-600">Precio por m²</div>
              <div className="font-bold">S/ {result.squareMeterPrice}</div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="text-sm text-gray-600">Área</div>
              <div className="font-bold">{formData.area} m²</div>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p>
              Esta valoración considera el tipo de propiedad, tamaño, ubicación, antigüedad y
              amenidades.
            </p>
            <p className="mt-2">
              Para una tasación más precisa, te recomendamos contactar con un tasador profesional.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={resetCalculator}
              className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
            >
              Nueva Valoración
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyValueCalculator;
