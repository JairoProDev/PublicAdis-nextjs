import React, { useState } from 'react';

const AdCopyGenerator = () => {
  const [formData, setFormData] = useState({
    product: '',
    targetAudience: '',
    uniqueSellingPoint: '',
    callToAction: '',
    tone: 'professional',
    platform: 'facebook',
  });

  const [generatedAds, setGeneratedAds] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validate form
    if (
      !formData.product ||
      !formData.targetAudience ||
      !formData.uniqueSellingPoint ||
      !formData.callToAction
    ) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    setIsGenerating(true);

    // Simulate API call with timeout
    setTimeout(() => {
      const ads = generateAdCopy(formData);
      setGeneratedAds(ads);
      setIsGenerating(false);
    }, 1500);
  };

  const generateAdCopy = data => {
    // This would be replaced with actual AI-generated content in a real implementation
    const { product, targetAudience, uniqueSellingPoint, callToAction, tone, platform } = data;

    // Templates for different platforms and tones
    const templates = {
      facebook: {
        professional: [
          `Presentamos ${product}. Diseñado específicamente para ${targetAudience}. ${uniqueSellingPoint}. ${callToAction}`,
          `${uniqueSellingPoint}. ${product} es la solución que ${targetAudience} ha estado buscando. ${callToAction} hoy mismo.`,
          `Mejore su experiencia con ${product}. ${uniqueSellingPoint} para ${targetAudience}. No espere más. ${callToAction}.`,
        ],
        casual: [
          `¡Hola ${targetAudience}! 👋 ¿Sabías que ${product} ${uniqueSellingPoint}? ¡${callToAction}!`,
          `Lo que todos ${targetAudience} están usando ahora: ${product}. ¿Por qué? ${uniqueSellingPoint}. ¡${callToAction}!`,
          `${uniqueSellingPoint} ✨ Descubre ${product}, la mejor opción para ${targetAudience}. ¡${callToAction}!`,
        ],
        promotional: [
          `🔥 OFERTA ESPECIAL 🔥\n${product} para ${targetAudience}.\n${uniqueSellingPoint}.\n${callToAction} antes que termine la promoción!`,
          `⏰ Tiempo limitado: ${uniqueSellingPoint}.\n${product} al mejor precio para ${targetAudience}.\n👉 ${callToAction}`,
          `EXCLUSIVO PARA ${targetAudience.toUpperCase()}:\n${product} con beneficios únicos: ${uniqueSellingPoint}.\n${callToAction} y aprovecha ahora!`,
        ],
      },
      instagram: {
        professional: [
          `${product}: La elección profesional para ${targetAudience}.\n\n${uniqueSellingPoint}.\n\n${callToAction}`,
          `Conozca el poder de ${product}.\n\nDesarrollado para satisfacer las necesidades de ${targetAudience}.\n\n${uniqueSellingPoint}.\n\n${callToAction}`,
          `Descubra por qué ${targetAudience} confían en ${product}.\n\n${uniqueSellingPoint}.\n\n${callToAction}`,
        ],
        casual: [
          `✨ ${product} ✨\n\nPerfecto para ${targetAudience} como tú!\n\n${uniqueSellingPoint} 💯\n\n${callToAction} 👇`,
          `La vida de ${targetAudience} es mejor con ${product}! 🙌\n\n${uniqueSellingPoint}\n\n${callToAction}`,
          `Hey ${targetAudience}! 👋\n\nTienes que probar ${product}.\n\n${uniqueSellingPoint} 🔥\n\n${callToAction}`,
        ],
        promotional: [
          `🎉 NOVEDAD PARA ${targetAudience.toUpperCase()} 🎉\n\n${product}\n\n${uniqueSellingPoint}\n\n${callToAction}`,
          `OFERTA FLASH 🚀\n\n${product} - ${uniqueSellingPoint}\n\nEspecial para ${targetAudience}\n\n${callToAction} ⏰`,
          `DESCUENTO EXCLUSIVO 💰\n\n${product}\n\nEspecialmente para ${targetAudience}\n\n${uniqueSellingPoint}\n\n${callToAction}`,
        ],
      },
      google: {
        professional: [
          `${product} - ${uniqueSellingPoint}\n${callToAction} - Ideal para ${targetAudience}`,
          `${uniqueSellingPoint} | ${product}\n${callToAction} - Soluciones para ${targetAudience}`,
          `${product} para ${targetAudience}\n${uniqueSellingPoint}. ${callToAction}`,
        ],
        casual: [
          `${product} - ¡Perfecto para ${targetAudience}!\n${uniqueSellingPoint}. ${callToAction}`,
          `¿Eres ${targetAudience}? ${product} es para ti\n${uniqueSellingPoint}. ${callToAction}`,
          `${product}: Lo que ${targetAudience} necesitan\n${uniqueSellingPoint}. ${callToAction}`,
        ],
        promotional: [
          `${product} | OFERTA para ${targetAudience}\n${uniqueSellingPoint}. ${callToAction}`,
          `${product} - DESCUENTO ESPECIAL\n${uniqueSellingPoint} para ${targetAudience}. ${callToAction}`,
          `PROMOCIÓN: ${product} para ${targetAudience}\n${uniqueSellingPoint}. ${callToAction}`,
        ],
      },
    };

    // Get the relevant templates
    const platformTemplates = templates[platform] || templates.facebook;
    const toneTemplates = platformTemplates[tone] || platformTemplates.professional;

    // Return ad variations
    return {
      platform,
      tone,
      variations: toneTemplates.map((template, index) => ({
        id: `ad-${index + 1}`,
        content: template,
      })),
    };
  };

  // Character count for different platforms
  const platformCharacterLimits = {
    facebook: {
      headline: 25,
      description: 125,
    },
    instagram: {
      caption: 2200,
    },
    google: {
      headline: 30,
      description: 90,
    },
  };

  return (
    <div className="ad-copy-generator">
      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          Crea anuncios atractivos para diferentes plataformas con nuestro generador de texto
          publicitario. Simplemente introduce la información básica de tu producto o servicio y
          genera múltiples opciones.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                Producto o Servicio <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="product"
                name="product"
                placeholder="Ej: Consultoría de marketing digital"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.product}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="targetAudience"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Público objetivo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="targetAudience"
                name="targetAudience"
                placeholder="Ej: Dueños de pequeños negocios"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.targetAudience}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="uniqueSellingPoint"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Punto de venta único <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="uniqueSellingPoint"
              name="uniqueSellingPoint"
              placeholder="Ej: Aumenta tus ventas en un 30% en 60 días"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={formData.uniqueSellingPoint}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="callToAction" className="block text-sm font-medium text-gray-700 mb-1">
              Llamada a la acción <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="callToAction"
              name="callToAction"
              placeholder="Ej: Agenda una consulta gratuita"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={formData.callToAction}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-1">
                Tono del mensaje
              </label>
              <select
                id="tone"
                name="tone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.tone}
                onChange={handleInputChange}
              >
                <option value="professional">Profesional</option>
                <option value="casual">Casual</option>
                <option value="promotional">Promocional</option>
              </select>
            </div>

            <div>
              <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-1">
                Plataforma
              </label>
              <select
                id="platform"
                name="platform"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.platform}
                onChange={handleInputChange}
              >
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="google">Google Ads</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <span className="inline-block animate-spin mr-2">⏳</span>
                  Generando...
                </>
              ) : (
                'Generar anuncios'
              )}
            </button>
          </div>
        </form>
      </div>

      {generatedAds && (
        <div className="mt-6 pt-6 border-t">
          <h3 className="text-xl font-semibold mb-4">Anuncios generados</h3>

          <div className="mb-4 text-sm">
            <p>
              <span className="font-medium">Plataforma:</span>{' '}
              {generatedAds.platform === 'facebook'
                ? 'Facebook'
                : generatedAds.platform === 'instagram'
                  ? 'Instagram'
                  : 'Google Ads'}
            </p>
            <p>
              <span className="font-medium">Tono:</span>{' '}
              {generatedAds.tone === 'professional'
                ? 'Profesional'
                : generatedAds.tone === 'casual'
                  ? 'Casual'
                  : 'Promocional'}
            </p>
          </div>

          <div className="space-y-4">
            {generatedAds.variations.map(ad => (
              <div key={ad.id} className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{`Variante ${ad.id.split('-')[1]}`}</h4>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(ad.content);
                      alert('Texto copiado al portapapeles');
                    }}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Copiar
                  </button>
                </div>
                <div className="p-3 bg-gray-50 rounded whitespace-pre-line">{ad.content}</div>
                <div className="mt-2 text-right text-xs text-gray-500">
                  {ad.content.length} caracteres
                  {generatedAds.platform === 'facebook' && (
                    <span
                      className={
                        ad.content.length > platformCharacterLimits.facebook.description
                          ? 'text-red-500'
                          : ''
                      }
                    >
                      {' '}
                      (Max. recomendado: {platformCharacterLimits.facebook.description})
                    </span>
                  )}
                  {generatedAds.platform === 'google' && (
                    <span
                      className={
                        ad.content.length > platformCharacterLimits.google.description
                          ? 'text-red-500'
                          : ''
                      }
                    >
                      {' '}
                      (Max. recomendado: {platformCharacterLimits.google.description})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Consejos para mejorar tus anuncios</h4>
            <ul className="text-sm space-y-1 text-blue-800">
              <li>• Sé conciso y directo - cada palabra cuenta en un anuncio</li>
              <li>• Destaca claramente el beneficio para tu audiencia objetivo</li>
              <li>• Utiliza palabras de acción que motiven a hacer clic</li>
              <li>• Personaliza según la plataforma donde se mostrará</li>
              <li>• Prueba diferentes variantes para ver cuál tiene mejor rendimiento</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdCopyGenerator;
