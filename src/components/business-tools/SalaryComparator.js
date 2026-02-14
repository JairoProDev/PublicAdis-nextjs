import React, { useState } from 'react';

const SalaryComparator = () => {
  const [formData, setFormData] = useState({
    sector: '',
    industry: '',
    role: '',
    location: '',
    education: '',
    experience: '',
    currentSalary: '',
  });

  const [result, setResult] = useState(null);

  const salarySectors = {
    tech: {
      name: 'Tecnología',
      industries: {
        software: { name: 'Desarrollo Software', baseSalary: 4500, roles: { developer: { name: 'Dev', factor: 1.0 }, designer: { name: 'UX', factor: 0.9 } } },
      }
    },
    marketing: {
      name: 'Marketing',
      industries: {
        digital: { name: 'Digital', baseSalary: 3600, roles: { specialist: { name: 'Especialista', factor: 1.0 }, social: { name: 'CM', factor: 0.8 } } },
      }
    }
  };

  const locationFactors = { lima: 1.0, arequipa: 0.9, trujillo: 0.85, cusco: 0.85 };
  const educationLevels = { high: { name: 'Superior', factor: 1.0 }, masters: { name: 'Maestría', factor: 1.2 } };
  const experienceLevels = { entry: { name: '0-2 años', factor: 0.8 }, junior: { name: '3-5 años', factor: 1.0 }, senior: { name: '6-10 años', factor: 1.3 } };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateSalary = e => {
    if (e) e.preventDefault();
    if (!formData.sector || !formData.industry || !formData.role) return;

    const baseSalary = 4000; // Simplified for brevity
    const expectedSalary = baseSalary * (locationFactors[formData.location] || 0.8);
    setResult({
      expectedSalary,
      minSalary: expectedSalary * 0.9,
      maxSalary: expectedSalary * 1.1,
    });
  };

  return (
    <div className="salary-comparator">
      {!result ? (
        <form onSubmit={calculateSalary} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="sector" value={formData.sector} onChange={handleInputChange} className="p-2 border rounded">
              <option value="">Sector</option>
              <option value="tech">Tecnología</option>
              <option value="marketing">Marketing</option>
            </select>
            <select name="location" value={formData.location} onChange={handleInputChange} className="p-2 border rounded">
              <option value="">Ubicación</option>
              <option value="lima">Lima</option>
              <option value="cusco">Cusco</option>
            </select>
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Comparar Salario</button>
        </form>
      ) : (
        <div className="bg-blue-50 p-6 rounded text-center">
          <div className="text-4xl font-bold">S/. {Math.round(result.expectedSalary).toLocaleString()}</div>
          <button onClick={() => setResult(null)} className="mt-4 text-blue-600">Nueva Consulta</button>
        </div>
      )}
    </div>
  );
};

export default SalaryComparator;

