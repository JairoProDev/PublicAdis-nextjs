import React, { useState } from 'react';

const CustomerAvatarBuilder = () => {
  const initialSections = {
    demographics: {
      title: 'Demografía',
      fields: [
        { id: 'age', label: 'Edad', value: '', type: 'text', placeholder: 'Ej: 25-34' },
        { id: 'gender', label: 'Género', value: '', type: 'select', 
          options: ['', 'Hombre', 'Mujer', 'No binario', 'Prefiero no especificar'] },
        { id: 'location', label: 'Ubicación', value: '', type: 'text', placeholder: 'Ej: Cusco, Perú' },
        { id: 'education', label: 'Nivel educativo', value: '', type: 'select',
          options: ['', 'Educación básica', 'Secundaria', 'Técnico', 'Universitario', 'Postgrado'] },
        { id: 'income', label: 'Nivel de ingresos', value: '', type: 'select',
          options: ['', 'Menos de S/ 1,500', 'S/ 1,500 - S/ 3,000', 'S/ 3,000 - S/ 6,000', 'S/ 6,000 - S/ 10,000', 'Más de S/ 10,000'] },
        { id: 'occupation', label: 'Ocupación', value: '', type: 'text', placeholder: 'Ej: Profesional de marketing' },
        { id: 'marital', label: 'Estado civil', value: '', type: 'select',
          options: ['', 'Soltero(a)', 'Casado(a)', 'Divorciado(a)', 'Viudo(a)', 'Otro'] },
        { id: 'children', label: 'Hijos', value: '', type: 'text', placeholder: 'Ej: 2 hijos (5 y 8 años)' },
      ]
    },
    psychographics: {
      title: 'Psicografía',
      fields: [
        { id: 'personality', label: 'Rasgos de personalidad', value: '', type: 'text', placeholder: 'Ej: Extravertido, entusiasta, organizado' },
        { id: 'values', label: 'Valores principales', value: '', type: 'text', placeholder: 'Ej: Familia, sostenibilidad, crecimiento personal' },
        { id: 'interests', label: 'Intereses y pasatiempos', value: '', type: 'text', placeholder: 'Ej: Yoga, lectura, viajes de aventura' },
        { id: 'lifestyle', label: 'Estilo de vida', value: '', type: 'text', placeholder: 'Ej: Activo, consciente de la salud, orientado a la familia' },
        { id: 'attitudes', label: 'Actitudes y creencias', value: '', type: 'text', placeholder: 'Ej: Progresista, ambientalista, orientado a resultados' },
        { id: 'goals', label: 'Objetivos personales/profesionales', value: '', type: 'textarea', placeholder: 'Ej: Ascender a un puesto gerencial en 2 años, comprar una casa en 5 años' },
        { id: 'challenges', label: 'Desafíos personales', value: '', type: 'textarea', placeholder: 'Ej: Equilibrar carrera y vida familiar, mantenerse al día con la tecnología' },
      ]
    },
    painPoints: {
      title: 'Puntos de dolor',
      fields: [
        { id: 'problems', label: 'Problemas principales', value: '', type: 'textarea', placeholder: 'Ej: Falta de tiempo para marketing, bajo ROI en campañas actuales' },
        { id: 'frustrations', label: 'Frustraciones diarias', value: '', type: 'textarea', placeholder: 'Ej: Herramientas complicadas, dificultad para medir resultados' },
        { id: 'objections', label: 'Objeciones comunes', value: '', type: 'textarea', placeholder: 'Ej: "Es demasiado caro", "No tengo tiempo para aprender algo nuevo"' },
        { id: 'fears', label: 'Miedos y preocupaciones', value: '', type: 'textarea', placeholder: 'Ej: Desperdicio de presupuesto, quedarse atrás de la competencia' },
      ]
    },
    buyingBehavior: {
      title: 'Comportamiento de compra',
      fields: [
        { id: 'decision_process', label: 'Proceso de decisión', value: '', type: 'select',
          options: ['', 'Rápido/impulsivo', 'Investigación moderada', 'Investigación exhaustiva', 'Necesita aprobación externa'] },
        { id: 'buying_triggers', label: 'Desencadenantes de compra', value: '', type: 'textarea', placeholder: 'Ej: Promociones especiales, recomendaciones de colegas, necesidad urgente' },
        { id: 'information_sources', label: 'Fuentes de información', value: '', type: 'text', placeholder: 'Ej: Blogs de marketing, LinkedIn, conferencias del sector' },
        { id: 'price_sensitivity', label: 'Sensibilidad al precio', value: '', type: 'select',
          options: ['', 'Alta (busca el precio más bajo)', 'Media (equilibrio precio-valor)', 'Baja (prioriza calidad sobre precio)'] },
        { id: 'brand_loyalty', label: 'Lealtad a la marca', value: '', type: 'select',
          options: ['', 'Alta (fiel a marcas preferidas)', 'Media (considera alternativas)', 'Baja (cambia frecuentemente)'] },
        { id: 'shopping_channels', label: 'Canales de compra preferidos', value: '', type: 'text', placeholder: 'Ej: Online, telefónico, en persona' },
      ]
    },
    digitalBehavior: {
      title: 'Comportamiento digital',
      fields: [
        { id: 'social_platforms', label: 'Plataformas sociales más usadas', value: '', type: 'text', placeholder: 'Ej: Instagram, LinkedIn, TikTok' },
        { id: 'online_activity', label: 'Actividad online diaria', value: '', type: 'select',
          options: ['', 'Menos de 1 hora', '1-3 horas', '3-5 horas', 'Más de 5 horas'] },
        { id: 'device_usage', label: 'Dispositivos más usados', value: '', type: 'text', placeholder: 'Ej: Smartphone (70%), laptop (30%)' },
        { id: 'content_preference', label: 'Preferencia de contenido', value: '', type: 'text', placeholder: 'Ej: Videos cortos, podcasts, artículos detallados' },
        { id: 'email_behavior', label: 'Comportamiento con email', value: '', type: 'select',
          options: ['', 'Revisa constantemente', 'Revisa regularmente (varias veces al día)', 'Revisa ocasionalmente (1-2 veces al día)', 'Raramente revisa'] },
      ]
    },
  };

  const [sections, setSections] = useState(initialSections);
  const [avatarName, setAvatarName] = useState('');
  const [avatarStory, setAvatarStory] = useState('');
  const [activeSection, setActiveSection] = useState('demographics');
  const [progress, setProgress] = useState(0);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Handle field changes
  const handleFieldChange = (sectionId, fieldId, value) => {
    setSections(prevSections => {
      const newSections = { ...prevSections };
      const fieldIndex = newSections[sectionId].fields.findIndex(field => field.id === fieldId);
      newSections[sectionId].fields[fieldIndex] = {
        ...newSections[sectionId].fields[fieldIndex],
        value
      };
      return newSections;
    });
    
    // Calculate progress
    calculateProgress();
  };

  // Calculate completion progress
  const calculateProgress = () => {
    let totalFields = 0;
    let completedFields = 0;
    
    Object.values(sections).forEach(section => {
      totalFields += section.fields.length;
      completedFields += section.fields.filter(field => field.value && field.value.trim() !== '').length;
    });
    
    const progressPercentage = Math.round((completedFields / totalFields) * 100);
    setProgress(progressPercentage);
  };

  // Toggle preview mode
  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  // Reset all fields
  const handleReset = () => {
    if (window.confirm('¿Estás seguro de que quieres reiniciar todos los campos? Esta acción no se puede deshacer.')) {
      setSections(initialSections);
      setAvatarName('');
      setAvatarStory('');
      setProgress(0);
      setIsPreviewMode(false);
    }
  };

  // Generate PDF (would be implemented with actual PDF library in production)
  const handleExport = () => {
    alert('En una implementación real, esta función exportaría el avatar a PDF o permitiría compartirlo.');
  };

  // Calculate the number of completed fields in a section
  const getSectionCompletionCount = (sectionId) => {
    const section = sections[sectionId];
    const completed = section.fields.filter(field => field.value && field.value.trim() !== '').length;
    return `${completed}/${section.fields.length}`;
  };

  // Render field based on type
  const renderField = (section, field) => {
    switch (field.type) {
      case 'select':
        return (
          <select
            id={field.id}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={field.value}
            onChange={(e) => handleFieldChange(section, field.id, e.target.value)}
            disabled={isPreviewMode}
          >
            {field.options.map((option, index) => (
              <option key={index} value={option}>
                {option === '' ? `Seleccionar ${field.label.toLowerCase()}` : option}
              </option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            id={field.id}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder={field.placeholder}
            value={field.value}
            onChange={(e) => handleFieldChange(section, field.id, e.target.value)}
            rows="3"
            disabled={isPreviewMode}
          ></textarea>
        );
      default: // text input
        return (
          <input
            type="text"
            id={field.id}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder={field.placeholder}
            value={field.value}
            onChange={(e) => handleFieldChange(section, field.id, e.target.value)}
            disabled={isPreviewMode}
          />
        );
    }
  };

  return (
    <div className="customer-avatar-builder">
      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          Crea un perfil detallado de tu cliente ideal para orientar mejor tus estrategias de marketing y comunicación.
          Un avatar de cliente bien definido te ayudará a desarrollar mensajes más relevantes y efectivos.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="mb-4 md:mb-0 md:mr-4 flex-1">
              <label htmlFor="avatarName" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del Avatar
              </label>
              <input
                type="text"
                id="avatarName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ej: María, la Gerente de Marketing"
                value={avatarName}
                onChange={(e) => setAvatarName(e.target.value)}
                disabled={isPreviewMode}
              />
            </div>
            <div className="flex items-end space-x-3">
              <button 
                type="button" 
                onClick={togglePreviewMode}
                className={`px-4 py-2 font-medium rounded-md ${isPreviewMode 
                  ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
              >
                {isPreviewMode ? 'Editar' : 'Vista previa'}
              </button>
              <button 
                type="button" 
                onClick={handleReset}
                className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200"
                title="Reiniciar todos los campos"
              >
                Reiniciar
              </button>
              <button 
                type="button" 
                onClick={handleExport}
                className="px-4 py-2 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600"
                title="Exportar a PDF"
              >
                Exportar
              </button>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="progressBar" className="block text-sm font-medium text-gray-700">
                Progreso: {progress}% completado
              </label>
              <span className="text-sm text-gray-500">
                {Object.values(sections).reduce((acc, section) => {
                  return acc + section.fields.filter(field => field.value && field.value.trim() !== '').length;
                }, 0)} de {Object.values(sections).reduce((acc, section) => acc + section.fields.length, 0)} campos
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {isPreviewMode ? (
            // Preview Mode
            <div className="avatar-preview">
              {avatarName ? (
                <h3 className="text-xl font-bold mb-4">{avatarName}</h3>
              ) : (
                <p className="text-gray-500 italic mb-4">Sin nombre de avatar</p>
              )}
              
              {Object.entries(sections).map(([sectionId, section]) => {
                const completedFields = section.fields.filter(f => f.value && f.value.trim() !== '');
                if (completedFields.length === 0) return null;
                
                return (
                  <div key={sectionId} className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {completedFields.map(field => (
                          <div key={field.id} className="mb-2">
                            <dt className="text-sm font-medium text-gray-500">{field.label}</dt>
                            <dd className="mt-1 text-sm text-gray-900">{field.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                );
              })}
              
              {avatarStory && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Historia del Avatar</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm whitespace-pre-line">{avatarStory}</p>
                  </div>
                </div>
              )}
              
              {progress < 50 && (
                <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-700">
                  <p className="text-sm">
                    <strong>Sugerencia:</strong> Tu avatar del cliente está incompleto. Considera completar más campos para obtener un perfil más detallado y útil.
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Edit Mode
            <div className="avatar-editor">
              <div className="flex mb-4 border-b overflow-x-auto pb-1">
                {Object.entries(sections).map(([sectionId, section]) => (
                  <button
                    key={sectionId}
                    className={`px-4 py-2 text-sm font-medium rounded-t-lg mr-1 whitespace-nowrap
                      ${activeSection === sectionId 
                        ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-500' 
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                    onClick={() => setActiveSection(sectionId)}
                  >
                    {section.title} ({getSectionCompletionCount(sectionId)})
                  </button>
                ))}
              </div>
              
              <div className="avatar-section">
                <h3 className="text-lg font-semibold mb-4">{sections[activeSection].title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sections[activeSection].fields.map(field => (
                    <div key={field.id} className="mb-4">
                      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                      </label>
                      {renderField(activeSection, field)}
                    </div>
                  ))}
                </div>
                
                {activeSection === Object.keys(sections)[Object.keys(sections).length - 1] && (
                  <div className="mt-6">
                    <label htmlFor="avatarStory" className="block text-sm font-medium text-gray-700 mb-1">
                      Historia del Avatar (opcional)
                    </label>
                    <textarea
                      id="avatarStory"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe un día típico en la vida de tu avatar, sus motivaciones, desafíos, y cómo tu producto/servicio se integra en su vida."
                      value={avatarStory}
                      onChange={(e) => setAvatarStory(e.target.value)}
                      rows="4"
                    ></textarea>
                    <p className="mt-1 text-xs text-gray-500">
                      Humaniza tu avatar con una narrativa para mejor entender su contexto y necesidades.
                    </p>
                  </div>
                )}
                
                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200"
                    onClick={() => {
                      const sectionKeys = Object.keys(sections);
                      const currentIndex = sectionKeys.indexOf(activeSection);
                      if (currentIndex > 0) {
                        setActiveSection(sectionKeys[currentIndex - 1]);
                      }
                    }}
                    disabled={activeSection === Object.keys(sections)[0]}
                  >
                    Anterior
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
                    onClick={() => {
                      const sectionKeys = Object.keys(sections);
                      const currentIndex = sectionKeys.indexOf(activeSection);
                      if (currentIndex < sectionKeys.length - 1) {
                        setActiveSection(sectionKeys[currentIndex + 1]);
                      } else {
                        // Last section - show preview
                        setIsPreviewMode(true);
                      }
                    }}
                  >
                    {activeSection === Object.keys(sections)[Object.keys(sections).length - 1] 
                      ? 'Ver resultado' 
                      : 'Siguiente'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-medium text-blue-800 mb-2">Consejos para crear un avatar efectivo:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Basa tu avatar en investigación real, no en suposiciones</li>
            <li>• Cuanto más específico, mejor - evita descripciones genéricas</li>
            <li>• Prioriza los puntos de dolor y motivaciones sobre los datos demográficos</li>
            <li>• Actualiza tu avatar regularmente a medida que evoluciona tu negocio</li>
            <li>• Crea múltiples avatares si tienes diferentes segmentos de clientes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerAvatarBuilder; 