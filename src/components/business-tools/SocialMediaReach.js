import React, { useState } from 'react';

const SocialMediaReach = () => {
  const [formData, setFormData] = useState({
    platform: 'facebook',
    followers: '',
    contentType: 'image',
    category: 'business',
    postTime: 'morning',
    frequency: '1',
    budget: '',
  });

  const [result, setResult] = useState(null);

  const calculateReach = e => {
    if (e) e.preventDefault();
    const followers = parseInt(formData.followers) || 0;
    const reach = followers * 0.1; // Placeholder logic
    setResult({
      reach: Math.round(reach),
      engagement: Math.round(reach * 0.05),
    });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="social-media-reach">
      {!result ? (
        <form onSubmit={calculateReach} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="platform" value={formData.platform} onChange={handleInputChange} className="p-2 border rounded">
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
            </select>
            <input name="followers" type="number" placeholder="Seguidores" value={formData.followers} onChange={handleInputChange} className="p-2 border rounded" />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Calcular Alcance</button>
        </form>
      ) : (
        <div className="bg-blue-50 p-6 rounded text-center">
          <div className="text-2xl font-bold">Alcance: {result.reach}</div>
          <div className="text-lg">Engagement: {result.engagement}</div>
          <button onClick={() => setResult(null)} className="mt-4 text-blue-600">Nuevo Cálculo</button>
        </div>
      )}
    </div>
  );
};

export default SocialMediaReach;
