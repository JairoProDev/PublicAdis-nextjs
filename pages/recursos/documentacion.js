import React from 'react';
import Layout from '../../src/components/Layout';

export default function ApiDocumentation() {
  return (
    <Layout
      title="Documentación API | PublicAdis"
      description="Documentación técnica de nuestra API para desarrolladores"
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentación API</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Recursos técnicos para integrar nuestras soluciones publicitarias en tus aplicaciones
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4">Contenido</h3>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <a href="#introduccion" className="text-blue-600 hover:text-blue-800">
                        Introducción
                      </a>
                    </li>
                    <li>
                      <a href="#autenticacion" className="text-blue-600 hover:text-blue-800">
                        Autenticación
                      </a>
                    </li>
                    <li>
                      <a href="#endpoints" className="text-blue-600 hover:text-blue-800">
                        Endpoints
                      </a>
                      <ul className="pl-4 mt-2 space-y-1">
                        <li>
                          <a
                            href="#endpoint-campanas"
                            className="text-gray-700 hover:text-blue-600"
                          >
                            Campañas
                          </a>
                        </li>
                        <li>
                          <a
                            href="#endpoint-anuncios"
                            className="text-gray-700 hover:text-blue-600"
                          >
                            Anuncios
                          </a>
                        </li>
                        <li>
                          <a
                            href="#endpoint-metricas"
                            className="text-gray-700 hover:text-blue-600"
                          >
                            Métricas
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#ejemplos" className="text-blue-600 hover:text-blue-800">
                        Ejemplos de código
                      </a>
                    </li>
                    <li>
                      <a href="#errores" className="text-blue-600 hover:text-blue-800">
                        Manejo de errores
                      </a>
                    </li>
                    <li>
                      <a href="#limites" className="text-blue-600 hover:text-blue-800">
                        Límites de uso
                      </a>
                    </li>
                    <li>
                      <a href="#versiones" className="text-blue-600 hover:text-blue-800">
                        Versionado
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-700 mb-2">¿Necesitas ayuda?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Si tienes preguntas sobre nuestra API, contáctanos:
                  </p>
                  <a
                    href="mailto:api@publicadis.com"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    api@publicadis.com
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Introduction */}
              <div id="introduccion" className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Introducción</h2>
                <p className="text-gray-700 mb-4">
                  La API de PublicAdis te permite integrar nuestras soluciones publicitarias en tus
                  aplicaciones. Puedes crear y gestionar campañas, anuncios, y acceder a datos de
                  rendimiento en tiempo real.
                </p>
                <p className="text-gray-700 mb-4">
                  Esta API RESTful utiliza JSON para todas las solicitudes y respuestas, y se
                  encuentra actualmente en la versión 1.0.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-medium">URL Base:</p>
                  <code className="text-sm bg-gray-800 text-white px-2 py-1 rounded">
                    https://api.publicadis.com/v1
                  </code>
                </div>
              </div>

              {/* Authentication */}
              <div id="autenticacion" className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Autenticación</h2>
                <p className="text-gray-700 mb-4">
                  Todas las solicitudes a la API requieren autenticación mediante un token API. Para
                  obtener tu token, sigue estos pasos:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Inicia sesión en tu panel de control de PublicAdis</li>
                  <li>Ve a la sección "Configuración" &gt; "API"</li>
                  <li>Haz clic en "Generar nuevo token"</li>
                  <li>Guarda tu token en un lugar seguro, ya que no podrás verlo nuevamente</li>
                </ol>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="font-medium mb-2">Ejemplo de encabezado de autenticación:</p>
                  <code className="text-sm bg-gray-800 text-white px-2 py-1 rounded block">
                    Authorization: Bearer tu_token_api
                  </code>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                  <p className="text-amber-800">
                    <strong>Importante:</strong> Mantén tu token API seguro. No lo compartas ni
                    expongas en código público.
                  </p>
                </div>
              </div>

              {/* Endpoints */}
              <div id="endpoints" className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Endpoints</h2>

                {/* Campaigns Endpoint */}
                <div id="endpoint-campanas" className="mb-10">
                  <h3 className="text-xl font-bold mb-3">Campañas</h3>
                  <p className="text-gray-700 mb-4">
                    Estos endpoints te permiten crear, consultar, actualizar y eliminar campañas
                    publicitarias.
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-sm">/campaigns</code>
                    </div>
                    <p className="text-gray-700 mb-2">Obtiene una lista de todas tus campañas.</p>
                    <div className="bg-gray-100 p-4 rounded-lg mt-3">
                      <p className="font-medium mb-2">Parámetros opcionales:</p>
                      <ul className="list-disc pl-6 text-gray-700 text-sm">
                        <li>
                          <code>status</code> (string): Filtra por estado de campaña (active,
                          paused, completed)
                        </li>
                        <li>
                          <code>limit</code> (integer): Límite de resultados (por defecto: 20, máx:
                          100)
                        </li>
                        <li>
                          <code>offset</code> (integer): Desplazamiento para paginación
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-sm">/campaigns/{'{campaign_id}'}</code>
                    </div>
                    <p className="text-gray-700">Obtiene detalles de una campaña específica.</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                        POST
                      </span>
                      <code className="text-sm">/campaigns</code>
                    </div>
                    <p className="text-gray-700 mb-2">Crea una nueva campaña publicitaria.</p>
                    <div className="bg-gray-100 p-4 rounded-lg mt-3">
                      <p className="font-medium mb-2">Cuerpo de la solicitud (JSON):</p>
                      <pre className="text-sm bg-gray-800 text-white p-3 rounded overflow-x-auto">
                        {`{
  "name": "Mi Campaña de Verano",
  "budget": 1000,
  "start_date": "2023-07-01",
  "end_date": "2023-08-31",
  "status": "active",
  "objective": "traffic",
  "targeting": {
    "locations": ["Cusco"],
    "age_range": [18, 65],
    "interests": ["turismo", "gastronomía"]
  }
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                        PUT
                      </span>
                      <code className="text-sm">/campaigns/{'{campaign_id}'}</code>
                    </div>
                    <p className="text-gray-700">Actualiza una campaña existente.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                        DELETE
                      </span>
                      <code className="text-sm">/campaigns/{'{campaign_id}'}</code>
                    </div>
                    <p className="text-gray-700">Elimina una campaña.</p>
                  </div>
                </div>

                {/* Ads Endpoint */}
                <div id="endpoint-anuncios" className="mb-10">
                  <h3 className="text-xl font-bold mb-3">Anuncios</h3>
                  <p className="text-gray-700 mb-4">
                    Estos endpoints te permiten gestionar los anuncios asociados a tus campañas.
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-sm">/campaigns/{'{campaign_id}'}/ads</code>
                    </div>
                    <p className="text-gray-700">
                      Lista todos los anuncios de una campaña específica.
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                        POST
                      </span>
                      <code className="text-sm">/campaigns/{'{campaign_id}'}/ads</code>
                    </div>
                    <p className="text-gray-700">Crea un nuevo anuncio para una campaña.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-sm">/ads/{'{ad_id}'}</code>
                    </div>
                    <p className="text-gray-700">Obtiene detalles de un anuncio específico.</p>
                  </div>
                </div>

                {/* Metrics Endpoint */}
                <div id="endpoint-metricas">
                  <h3 className="text-xl font-bold mb-3">Métricas</h3>
                  <p className="text-gray-700 mb-4">
                    Estos endpoints te permiten acceder a datos de rendimiento de tus campañas y
                    anuncios.
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-sm">/campaigns/{'{campaign_id}'}/metrics</code>
                    </div>
                    <p className="text-gray-700 mb-2">
                      Obtiene métricas de rendimiento para una campaña específica.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg mt-3">
                      <p className="font-medium mb-2">Parámetros opcionales:</p>
                      <ul className="list-disc pl-6 text-gray-700 text-sm">
                        <li>
                          <code>date_range</code> (string): Rango de fechas (last_7_days,
                          last_30_days, custom)
                        </li>
                        <li>
                          <code>start_date</code> (string): Fecha de inicio (formato: YYYY-MM-DD)
                        </li>
                        <li>
                          <code>end_date</code> (string): Fecha de fin (formato: YYYY-MM-DD)
                        </li>
                        <li>
                          <code>metrics</code> (array): Métricas específicas a obtener (impresiones,
                          clics, conversiones, etc.)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-sm">/ads/{'{ad_id}'}/metrics</code>
                    </div>
                    <p className="text-gray-700">
                      Obtiene métricas de rendimiento para un anuncio específico.
                    </p>
                  </div>
                </div>
              </div>

              {/* Code Examples */}
              <div id="ejemplos" className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Ejemplos de código</h2>
                <p className="text-gray-700 mb-4">
                  A continuación, te mostramos cómo interactuar con nuestra API en diferentes
                  lenguajes de programación:
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">JavaScript (Node.js)</h3>
                  <pre className="text-sm bg-gray-800 text-white p-4 rounded overflow-x-auto">
                    {`const fetch = require('node-fetch');

const API_TOKEN = 'tu_token_api';
const BASE_URL = 'https://api.publicadis.com/v1';

async function createCampaign(campaignData) {
  try {
    const response = await fetch(\`\${BASE_URL}/campaigns\`, {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaignData),
    });

    if (!response.ok) {
      throw new Error(\`Error: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating campaign:', error);
    throw error;
  }
}

// Ejemplo de uso
const newCampaign = {
  name: 'Campaña de Invierno',
  budget: 5000,
  start_date: '2023-06-01',
  end_date: '2023-08-31',
  status: 'active',
  objective: 'conversions',
};

createCampaign(newCampaign)
  .then(campaign => console.log('Campaña creada:', campaign))
  .catch(error => console.error(error));`}
                  </pre>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Python</h3>
                  <pre className="text-sm bg-gray-800 text-white p-4 rounded overflow-x-auto">
                    {`import requests

API_TOKEN = 'tu_token_api'
BASE_URL = 'https://api.publicadis.com/v1'

def get_campaign_metrics(campaign_id, date_range='last_30_days'):
    headers = {
        'Authorization': f'Bearer {API_TOKEN}',
        'Content-Type': 'application/json'
    }
    
    params = {
        'date_range': date_range
    }
    
    response = requests.get(
        f'{BASE_URL}/campaigns/{campaign_id}/metrics',
        headers=headers,
        params=params
    )
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f'Error: {response.status_code}')
        print(response.json())
        return None

# Ejemplo de uso
metrics = get_campaign_metrics('campaign_12345')
print(metrics)`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">cURL</h3>
                  <pre className="text-sm bg-gray-800 text-white p-4 rounded overflow-x-auto">
                    {`curl -X POST \\
  https://api.publicadis.com/v1/campaigns \\
  -H 'Authorization: Bearer tu_token_api' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "Mi Campaña de Verano",
    "budget": 1000,
    "start_date": "2023-07-01",
    "end_date": "2023-08-31",
    "status": "active",
    "objective": "traffic",
    "targeting": {
      "locations": ["Cusco"],
      "age_range": [18, 65],
      "interests": ["turismo", "gastronomía"]
    }
  }'`}
                  </pre>
                </div>
              </div>

              {/* Error Handling */}
              <div id="errores" className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Manejo de errores</h2>
                <p className="text-gray-700 mb-4">
                  La API utiliza códigos de estado HTTP estándar para indicar el éxito o fracaso de
                  una solicitud. Los códigos comunes incluyen:
                </p>

                <table className="w-full mb-6">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-700">Código</th>
                      <th className="px-4 py-2 text-left text-gray-700">Descripción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3">200 - OK</td>
                      <td className="px-4 py-3 text-gray-700">
                        La solicitud se ha completado con éxito
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">201 - Created</td>
                      <td className="px-4 py-3 text-gray-700">
                        El recurso se ha creado correctamente
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">400 - Bad Request</td>
                      <td className="px-4 py-3 text-gray-700">
                        La solicitud contiene errores o datos inválidos
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">401 - Unauthorized</td>
                      <td className="px-4 py-3 text-gray-700">
                        Autenticación requerida o inválida
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">403 - Forbidden</td>
                      <td className="px-4 py-3 text-gray-700">
                        No tienes permisos para acceder al recurso
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">404 - Not Found</td>
                      <td className="px-4 py-3 text-gray-700">El recurso solicitado no existe</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">429 - Too Many Requests</td>
                      <td className="px-4 py-3 text-gray-700">
                        Has excedido el límite de solicitudes
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">500 - Server Error</td>
                      <td className="px-4 py-3 text-gray-700">Error interno del servidor</td>
                    </tr>
                  </tbody>
                </table>

                <p className="text-gray-700 mb-4">
                  Cuando ocurre un error, la API devuelve una respuesta JSON con información
                  detallada:
                </p>

                <pre className="text-sm bg-gray-800 text-white p-4 rounded overflow-x-auto mb-4">
                  {`{
  "error": {
    "code": "invalid_request",
    "message": "El campo 'budget' debe ser un número positivo",
    "status": 400,
    "details": {
      "field": "budget",
      "value": "-100",
      "constraint": "must_be_positive"
    }
  }
}`}
                </pre>

                <p className="text-gray-700">
                  Recomendamos siempre manejar los errores adecuadamente en tu aplicación para
                  proporcionar una mejor experiencia al usuario.
                </p>
              </div>

              {/* Rate Limits */}
              <div id="limites" className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Límites de uso</h2>
                <p className="text-gray-700 mb-4">
                  Para garantizar un servicio estable, aplicamos límites al número de solicitudes
                  que puedes realizar:
                </p>

                <table className="w-full mb-6">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-700">Plan</th>
                      <th className="px-4 py-2 text-left text-gray-700">Límite de solicitudes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3">Básico</td>
                      <td className="px-4 py-3 text-gray-700">100 solicitudes por minuto</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Profesional</td>
                      <td className="px-4 py-3 text-gray-700">300 solicitudes por minuto</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Empresarial</td>
                      <td className="px-4 py-3 text-gray-700">1000 solicitudes por minuto</td>
                    </tr>
                  </tbody>
                </table>

                <p className="text-gray-700 mb-4">
                  Si excedes estos límites, recibirás un error 429 Too Many Requests. Cada respuesta
                  incluye encabezados que indican tu límite y cuántas solicitudes te quedan:
                </p>

                <pre className="text-sm bg-gray-800 text-white p-4 rounded overflow-x-auto">
                  {`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 85
X-RateLimit-Reset: 1624987483`}
                </pre>
              </div>

              {/* Versioning */}
              <div id="versiones" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4">Versionado</h2>
                <p className="text-gray-700 mb-4">
                  Para garantizar la compatibilidad a largo plazo, nuestra API está versionada. La
                  versión actual es v1.
                </p>

                <p className="text-gray-700 mb-4">
                  Cuando realizamos cambios importantes que podrían romper la compatibilidad,
                  incrementamos el número de versión. Las versiones anteriores siguen siendo
                  compatibles durante al menos 12 meses después del lanzamiento de una nueva
                  versión.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                  <p className="text-amber-800">
                    <strong>Recomendación:</strong> Especifica siempre la versión en tus solicitudes
                    a la API para asegurar la compatibilidad a largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Listo para empezar a integrar nuestra API?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Regístrate en nuestra plataforma, obtén tu token API y comienza a desarrollar
              aplicaciones que aprovechen nuestras soluciones publicitarias.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://panel.publicadis.com/registro"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crear Cuenta
              </a>
              <a
                href="https://github.com/publicadis/api-examples"
                className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Ejemplos en GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
