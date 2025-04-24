import React, { useState } from 'react';

const HeadlineAnalyzer = () => {
  const [headline, setHeadline] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [history, setHistory] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!headline.trim()) {
      return;
    }

    setIsAnalyzing(true);

    // Simulate API call with timeout
    setTimeout(() => {
      const analysisResults = analyzeHeadline(headline);
      setResults(analysisResults);
      setIsAnalyzing(false);

      // Add to history
      setHistory(prev => [
        {
          headline,
          score: analysisResults.overallScore,
          timestamp: new Date().toISOString(),
        },
        ...prev.slice(0, 9), // Keep only last 10
      ]);
    }, 1200);
  };

  const analyzeHeadline = text => {
    // This would be replaced with actual NLP analysis in a real implementation

    // Word count
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Character count
    const charCount = text.length;

    // Emotional words analysis
    const emotionalWords = detectEmotionalWords(text);
    const powerWords = detectPowerWords(text);
    const uncommonWords = detectUncommonWords(text);

    // Headline type detection
    const headlineType = detectHeadlineType(text);

    // Calculate scores
    const lengthScore = calculateLengthScore(wordCount, charCount);
    const emotionScore = calculateEmotionScore(emotionalWords, powerWords);
    const structureScore = calculateStructureScore(text, headlineType);
    const clarityScore = calculateClarityScore(text);
    const overallScore = Math.round(
      (lengthScore + emotionScore + structureScore + clarityScore) / 4
    );

    // Generate improvement suggestions
    const suggestions = generateSuggestions(
      text,
      wordCount,
      charCount,
      emotionalWords,
      powerWords,
      headlineType,
      lengthScore,
      emotionScore,
      structureScore,
      clarityScore
    );

    return {
      wordCount,
      charCount,
      emotionalWords,
      powerWords,
      uncommonWords,
      headlineType,
      scores: {
        length: lengthScore,
        emotion: emotionScore,
        structure: structureScore,
        clarity: clarityScore,
      },
      overallScore,
      suggestions,
    };
  };

  const detectEmotionalWords = text => {
    const emotionalWordsList = [
      'asombroso',
      'increíble',
      'genial',
      'impresionante',
      'fantástico',
      'sorprendente',
      'impactante',
      'inspirador',
      'maravilloso',
      'extraordinario',
      'miedo',
      'preocupación',
      'emocionante',
      'terrible',
      'horrible',
      'imperdible',
      'exclusivo',
      'único',
      'especial',
      'esencial',
      'crucial',
      'feliz',
      'triste',
      'enojado',
      'emocionado',
      'ansioso',
      'temeroso',
    ];

    const lowercaseText = text.toLowerCase();
    return emotionalWordsList.filter(word => lowercaseText.includes(word.toLowerCase()));
  };

  const detectPowerWords = text => {
    const powerWordsList = [
      'gratis',
      'descubrir',
      'secreto',
      'revolucionario',
      'instantáneo',
      'científicamente',
      'garantizado',
      'probado',
      'inmediato',
      'exclusivo',
      'nuevo',
      'ahora',
      'revelar',
      'oculto',
      'solución',
      'potente',
      'última',
      'esencial',
      'mejor',
      'importante',
      'vital',
      'fácil',
      'simple',
      'rápido',
      'efectivo',
    ];

    const lowercaseText = text.toLowerCase();
    return powerWordsList.filter(word => lowercaseText.includes(word.toLowerCase()));
  };

  const detectUncommonWords = text => {
    // This would use a more sophisticated algorithm in a real implementation
    const uncommonWordsList = [
      'revolucionar',
      'optimizar',
      'fundamental',
      'extraordinario',
      'innovador',
      'vanguardia',
      'transformar',
      'excepcional',
      'garantizado',
      'auténtico',
      'exclusivo',
      'insuperable',
      'legendario',
      'magistral',
      'trascendental',
    ];

    const lowercaseText = text.toLowerCase();
    return uncommonWordsList.filter(word => lowercaseText.includes(word.toLowerCase()));
  };

  const detectHeadlineType = text => {
    // Simple pattern recognition for headline types
    const lowercaseText = text.toLowerCase();

    if (text.includes('?')) {
      return 'Pregunta';
    } else if (lowercaseText.includes('cómo') || lowercaseText.includes('como')) {
      return 'Guía / Tutorial';
    } else if (
      /\d+/.test(text) &&
      (lowercaseText.includes('razones') ||
        lowercaseText.includes('formas') ||
        lowercaseText.includes('tips'))
    ) {
      return 'Listado';
    } else if (
      lowercaseText.includes('secreto') ||
      lowercaseText.includes('revelado') ||
      lowercaseText.includes('verdad') ||
      lowercaseText.includes('descubrir')
    ) {
      return 'Revelación';
    } else if (
      lowercaseText.includes('no creerás') ||
      lowercaseText.includes('sorprendente') ||
      lowercaseText.includes('increíble') ||
      lowercaseText.includes('impactante')
    ) {
      return 'Sorpresa';
    } else {
      return 'Estándar';
    }
  };

  const calculateLengthScore = (wordCount, charCount) => {
    // Ideal headline length: 6-8 words, 40-60 characters
    let score = 100;

    // Word count scoring
    if (wordCount < 4) {
      score -= 20; // Too short
    } else if (wordCount > 12) {
      score -= 15 * Math.min(3, Math.floor((wordCount - 12) / 2)); // Too long
    } else if (wordCount < 6 || wordCount > 8) {
      score -= 10; // Not in ideal range
    }

    // Character count scoring
    if (charCount < 30) {
      score -= 15; // Too short
    } else if (charCount > 70) {
      score -= 15 * Math.min(3, Math.floor((charCount - 70) / 10)); // Too long
    } else if (charCount < 40 || charCount > 60) {
      score -= 5; // Not in ideal range
    }

    return Math.max(0, Math.min(100, score));
  };

  const calculateEmotionScore = (emotionalWords, powerWords) => {
    // Calculate based on presence of emotional and power words
    let score = 50; // Base score

    if (emotionalWords.length > 0) {
      score += Math.min(30, emotionalWords.length * 15); // Up to +30 for emotional words
    }

    if (powerWords.length > 0) {
      score += Math.min(20, powerWords.length * 10); // Up to +20 for power words
    }

    // Penalty for too many emotional/power words (can seem spammy)
    if (emotionalWords.length + powerWords.length > 3) {
      score -= 10;
    }

    return Math.max(0, Math.min(100, score));
  };

  const calculateStructureScore = (text, headlineType) => {
    // Analysis based on headline structure
    let score = 70; // Base score

    // Bonus for certain headline types
    if (headlineType === 'Listado' || headlineType === 'Guía / Tutorial') {
      score += 15;
    } else if (headlineType === 'Pregunta' || headlineType === 'Revelación') {
      score += 10;
    }

    // Check for numbers (which often perform well)
    if (/\d+/.test(text)) {
      score += 5;
    }

    // Check for use of parentheses or brackets (can increase CTR)
    if (/[([{].*[)\]}]/.test(text)) {
      score += 5;
    }

    // Check for all caps (usually not good)
    if (text === text.toUpperCase() && text.length > 15) {
      score -= 15;
    }

    return Math.max(0, Math.min(100, score));
  };

  const calculateClarityScore = text => {
    // Simple clarity score based on length and readability indicators
    let score = 80; // Base score

    // Penalize very long headlines
    if (text.length > 80) {
      score -= 20;
    } else if (text.length > 65) {
      score -= 10;
    }

    // Penalize excessive punctuation
    const punctuationCount = (text.match(/[.,;:!?-]/g) || []).length;
    if (punctuationCount > 3) {
      score -= (punctuationCount - 3) * 5;
    }

    // Penalize excessive use of hashtags or special characters
    const specialCharCount = (text.match(/[#@%&*_]/g) || []).length;
    if (specialCharCount > 2) {
      score -= (specialCharCount - 2) * 5;
    }

    return Math.max(0, Math.min(100, score));
  };

  const generateSuggestions = (
    text,
    wordCount,
    charCount,
    emotionalWords,
    powerWords,
    headlineType,
    lengthScore,
    emotionScore,
    structureScore,
    clarityScore
  ) => {
    const suggestions = [];

    // Length suggestions
    if (wordCount < 4) {
      suggestions.push(
        'Tu titular es demasiado corto. Intenta añadir más detalles o especificidad.'
      );
    } else if (wordCount > 12) {
      suggestions.push('Tu titular es demasiado largo. Intenta ser más conciso y directo.');
    }

    // Emotion suggestions
    if (emotionalWords.length === 0 && powerWords.length === 0) {
      suggestions.push(
        'Añade palabras emocionales o poderosas para generar más impacto. Ejemplos: "increíble", "esencial", "revolucionario".'
      );
    } else if (emotionalWords.length + powerWords.length > 3) {
      suggestions.push(
        'Considera reducir el número de palabras emocionales o poderosas. Demasiadas pueden hacer que el titular parezca exagerado.'
      );
    }

    // Structure suggestions
    if (headlineType === 'Estándar' && structureScore < 80) {
      suggestions.push(
        'Considera usar una estructura más atractiva, como una pregunta, lista numerada o "cómo hacer" para aumentar el interés.'
      );
    }

    if (!/\d+/.test(text) && headlineType !== 'Pregunta') {
      suggestions.push(
        'Añadir números específicos puede mejorar el rendimiento (ej: "7 formas de..." en lugar de "Formas de...").'
      );
    }

    // Clarity suggestions
    if (clarityScore < 70) {
      suggestions.push(
        'Simplifica tu titular. Usa menos puntuación y sé más directo para mejorar la claridad.'
      );
    }

    if (text === text.toUpperCase() && text.length > 15) {
      suggestions.push(
        'Evita usar MAYÚSCULAS en todo el titular. Puede parecer agresivo y reducir la credibilidad.'
      );
    }

    // Add generic suggestions if few specific ones
    if (suggestions.length < 2) {
      if (emotionScore < 80) {
        suggestions.push('Intenta despertar más curiosidad o emociones en el lector.');
      }
      if (!text.includes('tú') && !text.includes('tu') && !text.includes('te')) {
        suggestions.push(
          'Considera hacer el titular más personal dirigiéndote directamente al lector usando "tú" o "tu".'
        );
      }
    }

    return suggestions;
  };

  const getScoreColor = score => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-amber-500';
    return 'text-red-500';
  };

  const getScoreClass = score => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className="headline-analyzer">
      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          Analiza tus titulares para artículos, anuncios o emails y recibe sugerencias para mejorar
          su efectividad. Los titulares más efectivos suelen generar entre un 5-10% más de clics o
          conversiones.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="headline" className="block text-sm font-medium text-gray-700 mb-1">
              Introduce tu titular
            </label>
            <input
              type="text"
              id="headline"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ej: 7 estrategias infalibles para aumentar tus ventas en 30 días"
              value={headline}
              onChange={e => setHeadline(e.target.value)}
            />
            <p className="mt-1 text-xs text-gray-500">
              Caracteres: {headline.length} | Palabras:{' '}
              {headline.trim() ? headline.trim().split(/\s+/).length : 0}
            </p>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            disabled={isAnalyzing || !headline.trim()}
          >
            {isAnalyzing ? (
              <>
                <span className="inline-block animate-spin mr-2">⏳</span>
                Analizando...
              </>
            ) : (
              'Analizar titular'
            )}
          </button>
        </form>
      </div>

      {results && (
        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Resultados del análisis</h3>
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <span className="text-sm text-gray-700 mr-2">Puntuación:</span>
              <span className={`text-lg font-bold ${getScoreColor(results.overallScore)}`}>
                {results.overallScore}
              </span>
              <span className="text-gray-700">/100</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5 mb-6">
            <h4 className="font-medium mb-4">Análisis del titular</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Longitud</span>
                    <span className={`text-sm font-medium ${getScoreColor(results.scores.length)}`}>
                      {results.scores.length}/100
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getScoreClass(results.scores.length)}`}
                      style={{ width: `${results.scores.length}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {results.wordCount} palabras | {results.charCount} caracteres
                    {results.wordCount >= 6 && results.wordCount <= 8
                      ? ' (óptimo)'
                      : results.wordCount < 4
                        ? ' (demasiado corto)'
                        : results.wordCount > 12
                          ? ' (demasiado largo)'
                          : ''}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Emoción</span>
                    <span
                      className={`text-sm font-medium ${getScoreColor(results.scores.emotion)}`}
                    >
                      {results.scores.emotion}/100
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getScoreClass(results.scores.emotion)}`}
                      style={{ width: `${results.scores.emotion}%` }}
                    ></div>
                  </div>
                  {(results.emotionalWords.length > 0 || results.powerWords.length > 0) && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {results.emotionalWords.map((word, index) => (
                        <span
                          key={`e-${index}`}
                          className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {word}
                        </span>
                      ))}
                      {results.powerWords.map((word, index) => (
                        <span
                          key={`p-${index}`}
                          className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Estructura</span>
                    <span
                      className={`text-sm font-medium ${getScoreColor(results.scores.structure)}`}
                    >
                      {results.scores.structure}/100
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getScoreClass(results.scores.structure)}`}
                      style={{ width: `${results.scores.structure}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Tipo: {results.headlineType}</p>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Claridad</span>
                    <span
                      className={`text-sm font-medium ${getScoreColor(results.scores.clarity)}`}
                    >
                      {results.scores.clarity}/100
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getScoreClass(results.scores.clarity)}`}
                      style={{ width: `${results.scores.clarity}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {results.uncommonWords.length > 0 && (
              <div className="mb-4">
                <h5 className="text-sm font-medium mb-1">Palabras inusuales o distintivas:</h5>
                <div className="flex flex-wrap gap-1">
                  {results.uncommonWords.map((word, index) => (
                    <span
                      key={index}
                      className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">Análisis semántico:</h5>
              <ul className="space-y-1">
                <li className="flex items-start text-sm">
                  <span className="text-gray-700 mr-2">•</span>
                  <span>
                    Este titular utiliza un tono
                    {results.powerWords.length > 1
                      ? ' persuasivo'
                      : results.emotionalWords.length > 1
                        ? ' emocional'
                        : ' informativo'}
                    .
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-gray-700 mr-2">•</span>
                  <span>
                    {results.headlineType === 'Listado'
                      ? 'Los titulares de lista suelen tener un 30% más de clics.'
                      : results.headlineType === 'Pregunta'
                        ? 'Las preguntas generan curiosidad e involucran al lector.'
                        : results.headlineType === 'Guía / Tutorial'
                          ? 'Los tutulares instructivos atraen a personas buscando soluciones.'
                          : results.headlineType === 'Revelación'
                            ? 'Revelar secretos o información exclusiva genera interés.'
                            : 'Este tipo de titular puede ser efectivo si está bien dirigido a tu audiencia.'}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {results.suggestions.length > 0 && (
            <div className="bg-amber-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-amber-800 mb-2">Sugerencias para mejorar</h4>
              <ul className="space-y-2">
                {results.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-500 mr-2">→</span>
                    <span className="text-sm text-amber-700">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {history.length > 1 && (
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <h4 className="px-4 py-2 bg-gray-50 font-medium border-b">Titulares anteriores</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Titular
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20"
                      >
                        Puntuación
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {history.slice(1).map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 truncate max-w-xs">
                          {item.headline}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">
                          <span className={`${getScoreColor(item.score)} font-medium`}>
                            {item.score}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeadlineAnalyzer;
