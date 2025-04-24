import React, { useState } from 'react';

const SeoAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    if (!url) {
      setError('Por favor ingresa una URL válida');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    // Simulate API call with a timeout
    setTimeout(() => {
      const mockResults = generateMockResults(url, keywords);
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  const generateMockResults = (url, keywords) => {
    // In a real implementation, this would be replaced with actual API data
    const keywordsList = keywords
      .split(',')
      .map(k => k.trim())
      .filter(k => k);

    return {
      titleScore: Math.floor(Math.random() * 30) + 70,
      metaDescriptionScore: Math.floor(Math.random() * 40) + 60,
      urlStructureScore: Math.floor(Math.random() * 20) + 80,
      headingsScore: Math.floor(Math.random() * 25) + 75,
      imageOptimizationScore: Math.floor(Math.random() * 35) + 65,
      mobileOptimizationScore: Math.floor(Math.random() * 15) + 85,
      pageSpeedScore: Math.floor(Math.random() * 40) + 60,
      keywordDensityScore: Math.floor(Math.random() * 30) + 70,
      keywordsAnalysis: keywordsList.map(keyword => ({
        keyword,
        density: (Math.random() * 3 + 0.5).toFixed(1) + '%',
        occurrence: Math.floor(Math.random() * 15) + 1,
        recommendation:
          Math.random() > 0.7 ? 'Aumentar' : Math.random() > 0.4 ? 'Óptimo' : 'Reducir',
      })),
      recommendations: [
        'Mejora la longitud del título para SEO (recomendado 50-60 caracteres)',
        'Incluye palabras clave principales en los primeros 100 caracteres del contenido',
        'Optimiza las imágenes para reducir el tiempo de carga',
        'Mejora la estructura de los encabezados H1, H2, H3',
        'Añade más enlaces internos relevantes',
        'Considera usar URLs amigables con SEO',
      ]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4),
    };
  };

  const getScoreColor = score => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="seo-analyzer">
      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          Analiza rápidamente aspectos básicos de SEO en tu sitio web o página específica. Obtén
          recomendaciones para mejorar tu posicionamiento en buscadores.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              URL a analizar
            </label>
            <input
              type="url"
              id="url"
              placeholder="https://ejemplo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
              Palabras clave (separadas por comas)
            </label>
            <input
              type="text"
              id="keywords"
              placeholder="marketing, publicidad, ventas"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={keywords}
              onChange={e => setKeywords(e.target.value)}
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <span className="inline-block animate-spin mr-2">⏳</span>
                Analizando...
              </>
            ) : (
              'Analizar SEO'
            )}
          </button>
        </form>
      </div>

      {results && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">Resultados del análisis</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-medium mb-2">Título y Meta</h4>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Título</span>
                <span className={`text-sm font-medium ${getScoreColor(results.titleScore)}`}>
                  {results.titleScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full ${results.titleScore >= 80 ? 'bg-green-500' : results.titleScore >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${results.titleScore}%` }}
                ></div>
              </div>

              <div className="flex justify-between mb-1">
                <span className="text-sm">Meta descripción</span>
                <span
                  className={`text-sm font-medium ${getScoreColor(results.metaDescriptionScore)}`}
                >
                  {results.metaDescriptionScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full ${results.metaDescriptionScore >= 80 ? 'bg-green-500' : results.metaDescriptionScore >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${results.metaDescriptionScore}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-medium mb-2">Estructura y Contenido</h4>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Estructura URL</span>
                <span className={`text-sm font-medium ${getScoreColor(results.urlStructureScore)}`}>
                  {results.urlStructureScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full ${results.urlStructureScore >= 80 ? 'bg-green-500' : results.urlStructureScore >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${results.urlStructureScore}%` }}
                ></div>
              </div>

              <div className="flex justify-between mb-1">
                <span className="text-sm">Encabezados</span>
                <span className={`text-sm font-medium ${getScoreColor(results.headingsScore)}`}>
                  {results.headingsScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full ${results.headingsScore >= 80 ? 'bg-green-500' : results.headingsScore >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${results.headingsScore}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-medium mb-2">Rendimiento</h4>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Optimización móvil</span>
                <span
                  className={`text-sm font-medium ${getScoreColor(results.mobileOptimizationScore)}`}
                >
                  {results.mobileOptimizationScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full ${results.mobileOptimizationScore >= 80 ? 'bg-green-500' : results.mobileOptimizationScore >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${results.mobileOptimizationScore}%` }}
                ></div>
              </div>

              <div className="flex justify-between mb-1">
                <span className="text-sm">Velocidad de página</span>
                <span className={`text-sm font-medium ${getScoreColor(results.pageSpeedScore)}`}>
                  {results.pageSpeedScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full ${results.pageSpeedScore >= 80 ? 'bg-green-500' : results.pageSpeedScore >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${results.pageSpeedScore}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-medium mb-2">Imágenes</h4>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Optimización de imágenes</span>
                <span
                  className={`text-sm font-medium ${getScoreColor(results.imageOptimizationScore)}`}
                >
                  {results.imageOptimizationScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full ${results.imageOptimizationScore >= 80 ? 'bg-green-500' : results.imageOptimizationScore >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${results.imageOptimizationScore}%` }}
                ></div>
              </div>

              <div className="flex justify-between mb-1">
                <span className="text-sm">Densidad de palabras clave</span>
                <span
                  className={`text-sm font-medium ${getScoreColor(results.keywordDensityScore)}`}
                >
                  {results.keywordDensityScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full ${results.keywordDensityScore >= 80 ? 'bg-green-500' : results.keywordDensityScore >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${results.keywordDensityScore}%` }}
                ></div>
              </div>
            </div>
          </div>

          {results.keywordsAnalysis && results.keywordsAnalysis.length > 0 && (
            <div className="mb-6">
              <h4 className="font-medium mb-3">Análisis de palabras clave</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Palabra clave
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Densidad
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ocurrencias
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Recomendación
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {results.keywordsAnalysis.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">{item.keyword}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">{item.density}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">{item.occurrence}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">
                          <span
                            className={
                              item.recommendation === 'Óptimo'
                                ? 'text-green-600'
                                : item.recommendation === 'Aumentar'
                                  ? 'text-amber-500'
                                  : 'text-red-500'
                            }
                          >
                            {item.recommendation}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div>
            <h4 className="font-medium mb-3">Recomendaciones clave</h4>
            <ul className="space-y-2">
              {results.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-sm text-gray-700">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Nota:</strong> Este análisis es una estimación básica. Para un análisis de SEO
              completo y profesional, considera contratar nuestros servicios de consultoría
              especializada.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeoAnalyzer;
