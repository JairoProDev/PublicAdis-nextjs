import React, { useState } from 'react';

const EventPlanner = () => {
  const [formData, setFormData] = useState({
    eventType: 'conference',
    guests: '',
    duration: '1',
  });

  const [result, setResult] = useState(null);

  const calculateBudget = e => {
    if (e) e.preventDefault();
    const guests = parseInt(formData.guests) || 0;
    const duration = parseInt(formData.duration) || 1;

    // Simple logic inspired by the original
    const baseCost = 5000;
    const attendeeCost = 100;
    const total = baseCost + (attendeeCost * guests * duration);

    setResult({
      totalBudget: total,
      costPerGuest: total / (guests || 1),
    });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="event-planner">
      {!result ? (
        <form onSubmit={calculateBudget} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Evento</label>
              <select name="eventType" value={formData.eventType} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="conference">Conferencia</option>
                <option value="workshop">Taller</option>
                <option value="meeting">Reunión</option>
                <option value="corporate">Corporativo</option>
                <option value="social">Social</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Número de Asistentes</label>
              <input name="guests" type="number" placeholder="Ej: 50" value={formData.guests} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duración (días)</label>
            <input name="duration" type="number" value={formData.duration} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Planificar Presupuesto</button>
        </form>
      ) : (
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <h4 className="font-bold mb-2">Presupuesto Estimado</h4>
          <div className="text-4xl font-bold text-blue-700">S/. {result.totalBudget.toLocaleString()}</div>
          <div className="text-sm text-gray-600 mt-2">Costo promedio por asistente: S/. {Math.round(result.costPerGuest).toLocaleString()}</div>
          <button onClick={() => setResult(null)} className="mt-6 w-full py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100">Nueva Planificación</button>
        </div>
      )}
    </div>
  );
};

export default EventPlanner;
