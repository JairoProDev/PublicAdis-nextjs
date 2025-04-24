import React, { useState } from 'react';

const ContentCalendarGenerator = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [industry, setIndustry] = useState('retail');
  const [contentTypes, setContentTypes] = useState({
    blog: true,
    social: true,
    email: true,
    video: false,
    infographic: false,
    podcast: false,
  });
  const [postFrequency, setPostFrequency] = useState({
    blog: 'weekly',
    social: 'daily',
    email: 'biweekly',
    video: 'biweekly',
    infographic: 'monthly',
    podcast: 'biweekly',
  });
  const [themes, setThemes] = useState('');
  const [events, setEvents] = useState('');
  const [calendarData, setCalendarData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const contentTypeLabels = {
    blog: 'Blog',
    social: 'Redes Sociales',
    email: 'Email Marketing',
    video: 'Video',
    infographic: 'Infografía',
    podcast: 'Podcast',
  };

  const contentColors = {
    blog: 'bg-blue-500',
    social: 'bg-purple-500',
    email: 'bg-amber-500',
    video: 'bg-red-500',
    infographic: 'bg-green-500',
    podcast: 'bg-teal-500',
  };

  const handleContentTypeChange = type => {
    setContentTypes({
      ...contentTypes,
      [type]: !contentTypes[type],
    });
  };

  const handleFrequencyChange = (type, value) => {
    setPostFrequency({
      ...postFrequency,
      [type]: value,
    });
  };

  const generateCalendar = () => {
    setIsGenerating(true);

    // Simulating server processing time
    setTimeout(() => {
      const days = new Date(selectedYear, selectedMonth + 1, 0).getDate();
      const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

      // Parse user-entered themes
      const themesList = themes
        .split('\n')
        .map(theme => theme.trim())
        .filter(theme => theme.length > 0);

      // Parse user-entered events
      const eventsList = events
        .split('\n')
        .map(event => {
          const parts = event.trim().split(':');
          if (parts.length === 2) {
            const dayString = parts[0].trim();
            const day = parseInt(dayString, 10);
            const description = parts[1].trim();

            if (!isNaN(day) && day >= 1 && day <= days) {
              return { day, description };
            }
          }
          return null;
        })
        .filter(event => event !== null);

      // Generate content for each day
      const content = generateContentPlan(days, themesList, eventsList);

      setCalendarData({
        days,
        firstDayOfMonth,
        content,
        eventsList,
      });

      setIsGenerating(false);
    }, 1500);
  };

  const generateContentPlan = (daysInMonth, themes, events) => {
    const content = {};
    const industryTopics = getIndustrySpecificTopics(industry);

    // Initialize all days
    for (let day = 1; day <= daysInMonth; day++) {
      content[day] = [];
    }

    // Check which types of content the user wants
    const selectedTypes = Object.keys(contentTypes).filter(type => contentTypes[type]);

    // Generate content based on frequency
    selectedTypes.forEach(contentType => {
      const frequency = postFrequency[contentType];
      let interval;
      let startDay = 1;

      switch (frequency) {
        case 'daily':
          interval = 1;
          break;
        case 'weekday':
          interval = 1; // We'll filter for weekdays later
          break;
        case 'weekly':
          interval = 7;
          break;
        case 'biweekly':
          interval = 14;
          break;
        case 'monthly':
          interval = 30; // We'll just do one per month
          break;
        default:
          interval = 7;
      }

      // For monthly content, place in the middle of the month
      if (frequency === 'monthly') {
        const day = Math.floor(daysInMonth / 2);
        const date = new Date(selectedYear, selectedMonth, day);
        if (frequency !== 'weekday' || (date.getDay() !== 0 && date.getDay() !== 6)) {
          const topic = generateTopicSuggestion(contentType, themes, industryTopics, events);
          content[day].push({
            type: contentType,
            topic,
          });
        }
        return;
      }

      // For other frequencies
      for (let day = startDay; day <= daysInMonth; day += interval) {
        const date = new Date(selectedYear, selectedMonth, day);

        // Skip weekends for weekday content
        if (frequency === 'weekday' && (date.getDay() === 0 || date.getDay() === 6)) {
          continue;
        }

        const topic = generateTopicSuggestion(contentType, themes, industryTopics, events, day);
        content[day].push({
          type: contentType,
          topic,
        });
      }
    });

    return content;
  };

  const getIndustrySpecificTopics = industry => {
    // These would be expanded in a real implementation
    const topics = {
      retail: [
        'Tendencias de temporada',
        'Destacados de productos',
        'Historias de clientes',
        'Consejos de compra',
        'Guías de estilo',
        'Reseñas de productos',
        'Ofertas especiales',
        'Sostenibilidad',
      ],
      tech: [
        'Últimas innovaciones',
        'Tutoriales prácticos',
        'Análisis de producto',
        'Tendencias tecnológicas',
        'Seguridad digital',
        'Casos de éxito',
        'Comparativas',
        'Futuro de la tecnología',
      ],
      health: [
        'Consejos de bienestar',
        'Recetas saludables',
        'Rutinas de ejercicio',
        'Investigaciones recientes',
        'Historias de transformación',
        'Salud mental',
        'Suplementos y nutrición',
        'Prevención',
      ],
      education: [
        'Técnicas de estudio',
        'Recursos educativos',
        'Tendencias en educación',
        'Historias de estudiantes',
        'Desarrollo profesional',
        'Tecnología educativa',
        'Consejos para padres',
        'Metodologías de enseñanza',
      ],
      finance: [
        'Consejos de ahorro',
        'Educación financiera',
        'Análisis de mercado',
        'Planificación para el retiro',
        'Inversiones inteligentes',
        'Tendencias económicas',
        'Historias de éxito financiero',
        'Emprendimiento',
      ],
      food: [
        'Recetas de temporada',
        'Consejos de cocina',
        'Tendencias gastronómicas',
        'Reseñas de productos',
        'Historias sobre ingredientes',
        'Dietas especiales',
        'Maridajes',
        'Entrevistas con chefs',
      ],
    };

    return topics[industry] || topics.retail;
  };

  const generateTopicSuggestion = (contentType, userThemes, industryTopics, events, day = null) => {
    // Find if there's an event for this day
    const dayEvent = day && events.find(event => event.day === day);

    // Content type specific templates
    const templates = {
      blog: [
        'Guía: Cómo [beneficio]',
        '[Número] maneras de [acción]',
        'Por qué [tema] es importante para [audiencia]',
        'El secreto para [resultado deseado]',
        'Errores comunes en [tema] y cómo evitarlos',
      ],
      social: [
        '¿Sabías que [dato interesante]?',
        'Consejo del día: [consejo rápido]',
        '[Cita inspiradora] #[hashtag]',
        '¡Nuevo! [anuncio]',
        'Encuesta: ¿Prefieres [opción A] o [opción B]?',
      ],
      email: [
        '[Beneficio principal] - Boletín semanal',
        'No te pierdas [oferta/contenido]',
        'Últimas novedades sobre [tema]',
        'Especial: [tema de temporada]',
        'Exclusivo para suscriptores: [beneficio]',
      ],
      video: [
        'Tutorial: Cómo [acción] en [tiempo]',
        '[Número] consejos para [objetivo]',
        'Entrevista con [experto/cliente]',
        'Detrás de escenas: [proceso]',
        'Análisis: [producto/tendencia]',
      ],
      infographic: [
        '[Número] estadísticas sobre [tema]',
        'Guía visual: Cómo [proceso]',
        'Comparativa: [opción A] vs [opción B]',
        'Línea de tiempo: Historia de [tema]',
        'Desglose de [concepto complejo]',
      ],
      podcast: [
        'Episodio [número]: Conversación con [invitado]',
        'Análisis profundo: [tema especializado]',
        'Debate: [tema controvertido]',
        'Preguntas y respuestas sobre [tema]',
        'Historias de éxito: [caso]',
      ],
    };

    // If there's an event for this day, create content related to it
    if (dayEvent) {
      const eventTemplates = {
        blog: `Todo lo que debes saber sobre ${dayEvent.description}`,
        social: `¡Hoy celebramos ${dayEvent.description}! 🎉`,
        email: `Especial: ${dayEvent.description}`,
        video: `Celebrando ${dayEvent.description} - Video especial`,
        infographic: `Datos interesantes sobre ${dayEvent.description}`,
        podcast: `Episodio especial: ${dayEvent.description}`,
      };

      return eventTemplates[contentType] || `Contenido sobre ${dayEvent.description}`;
    }

    // Use user themes if available, otherwise use industry specific topics
    const topicsToUse = userThemes.length > 0 ? userThemes : industryTopics;
    const randomTopic = topicsToUse[Math.floor(Math.random() * topicsToUse.length)];
    const randomTemplate =
      templates[contentType][Math.floor(Math.random() * templates[contentType].length)];

    // Replace placeholders with actual content
    return randomTemplate
      .replace('[tema]', randomTopic.toLowerCase())
      .replace('[tema de temporada]', randomTopic.toLowerCase())
      .replace('[hashtag]', randomTopic.replace(/\s+/g, ''))
      .replace('[número]', Math.floor(Math.random() * 7) + 3) // 3-10
      .replace('[beneficio]', `maximizar tu ${randomTopic.toLowerCase()}`)
      .replace('[acción]', `mejorar tu ${randomTopic.toLowerCase()}`)
      .replace('[audiencia]', 'tu empresa')
      .replace('[resultado deseado]', `lograr mejores resultados en ${randomTopic.toLowerCase()}`)
      .replace(
        '[dato interesante]',
        `el ${Math.floor(Math.random() * 60) + 20}% de empresas usan ${randomTopic.toLowerCase()}`
      )
      .replace('[consejo rápido]', `optimiza tu ${randomTopic.toLowerCase()} diariamente`)
      .replace('[cita inspiradora]', '"El éxito comienza con la decisión de intentarlo"')
      .replace('[anuncio]', `Recursos de ${randomTopic.toLowerCase()} disponibles`)
      .replace('[opción A]', `${randomTopic.toLowerCase()} tradicional`)
      .replace('[opción B]', `${randomTopic.toLowerCase()} innovador`)
      .replace('[oferta/contenido]', `nuestra guía de ${randomTopic.toLowerCase()}`)
      .replace('[tiempo]', 'menos de 10 minutos')
      .replace('[objetivo]', `dominar el ${randomTopic.toLowerCase()}`)
      .replace('[experto/cliente]', 'un experto del sector')
      .replace('[proceso]', `nuestro enfoque para ${randomTopic.toLowerCase()}`)
      .replace('[producto/tendencia]', randomTopic)
      .replace('[concepto complejo]', randomTopic)
      .replace('[número]', '#' + (Math.floor(Math.random() * 50) + 1))
      .replace('[invitado]', 'un líder de la industria')
      .replace('[tema especializado]', randomTopic)
      .replace('[tema controvertido]', `el futuro de ${randomTopic.toLowerCase()}`)
      .replace('[caso]', 'casos de éxito en el sector');
  };

  const renderCalendarDay = day => {
    const dayContent = calendarData?.content[day] || [];
    const dayEvents = calendarData?.eventsList.filter(event => event.day === day) || [];

    return (
      <div className="h-full min-h-[100px] bg-white p-1 border border-gray-200">
        <div className="text-right mb-1">
          <span className="text-xs font-medium">{day}</span>
        </div>

        {dayEvents.length > 0 && (
          <div className="mb-1">
            {dayEvents.map((event, index) => (
              <div
                key={index}
                className="text-xs bg-red-100 text-red-800 p-1 rounded mb-1 truncate"
                title={event.description}
              >
                {event.description}
              </div>
            ))}
          </div>
        )}

        <div className="space-y-1">
          {dayContent.map((content, index) => (
            <div
              key={index}
              className={`text-xs text-white p-1 rounded truncate ${contentColors[content.type]}`}
              title={content.topic}
            >
              {contentTypeLabels[content.type]}:{' '}
              {content.topic.length > 15 ? content.topic.substring(0, 15) + '...' : content.topic}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCalendar = () => {
    if (!calendarData) return null;

    const { days, firstDayOfMonth } = calendarData;
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    // Create calendar grid
    const calendarDays = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(
        <div key={`empty-${i}`} className="bg-gray-50 border border-gray-200"></div>
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= days; day++) {
      calendarDays.push(
        <div key={`day-${day}`} className="overflow-hidden">
          {renderCalendarDay(day)}
        </div>
      );
    }

    return (
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">
          Calendario de contenido: {months[selectedMonth]} {selectedYear}
        </h3>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {Object.keys(contentTypes)
              .filter(type => contentTypes[type])
              .map(type => (
                <div key={type} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-1 ${contentColors[type]}`}></div>
                  <span className="text-xs">{contentTypeLabels[type]}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {dayNames.map(day => (
            <div key={day} className="text-center py-1 bg-gray-100 font-medium text-sm">
              {day}
            </div>
          ))}
          {calendarDays}
        </div>

        <div className="mt-4 text-right">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200"
          >
            Imprimir calendario
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="content-calendar-generator">
      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          Crea un calendario de contenido personalizado para tu negocio. Planifica tus publicaciones
          de blog, redes sociales, emails y más con sugerencias de temas adaptados a tu industria.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h3 className="font-medium mb-4">Configuración básica</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">
                      Mes
                    </label>
                    <select
                      id="month"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={selectedMonth}
                      onChange={e => setSelectedMonth(parseInt(e.target.value, 10))}
                    >
                      {months.map((month, index) => (
                        <option key={index} value={index}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                      Año
                    </label>
                    <select
                      id="year"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={selectedYear}
                      onChange={e => setSelectedYear(parseInt(e.target.value, 10))}
                    >
                      {Array.from({ length: 3 }, (_, i) => currentYear + i).map(year => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Industria
                  </label>
                  <select
                    id="industry"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={industry}
                    onChange={e => setIndustry(e.target.value)}
                  >
                    <option value="retail">Comercio minorista</option>
                    <option value="tech">Tecnología</option>
                    <option value="health">Salud y bienestar</option>
                    <option value="education">Educación</option>
                    <option value="finance">Finanzas</option>
                    <option value="food">Alimentación y hostelería</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h3 className="font-medium mb-4">Tipos de contenido</h3>

              <div className="space-y-4">
                {Object.keys(contentTypes).map(type => (
                  <div key={type} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`content-${type}`}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        checked={contentTypes[type]}
                        onChange={() => handleContentTypeChange(type)}
                      />
                      <label
                        htmlFor={`content-${type}`}
                        className="ml-2 block text-sm text-gray-700"
                      >
                        {contentTypeLabels[type]}
                      </label>
                    </div>

                    {contentTypes[type] && (
                      <select
                        className="ml-2 block pl-3 pr-10 py-1 text-xs border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                        value={postFrequency[type]}
                        onChange={e => handleFrequencyChange(type, e.target.value)}
                      >
                        <option value="daily">Diario</option>
                        <option value="weekday">Días laborables</option>
                        <option value="weekly">Semanal</option>
                        <option value="biweekly">Quincenal</option>
                        <option value="monthly">Mensual</option>
                      </select>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h3 className="font-medium mb-4">Temas específicos (opcional)</h3>
              <p className="text-sm text-gray-500 mb-2">
                Introduce temas específicos para tu calendario (uno por línea). Si los dejas en
                blanco, usaremos temas relacionados con tu industria.
              </p>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Ej: Lanzamiento nuevo producto&#10;Consejos de productividad&#10;Historias de clientes"
                value={themes}
                onChange={e => setThemes(e.target.value)}
              ></textarea>
            </div>

            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h3 className="font-medium mb-4">Eventos y fechas importantes (opcional)</h3>
              <p className="text-sm text-gray-500 mb-2">
                Introduce eventos o fechas importantes (formato: día: descripción).
              </p>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Ej: 5: Lanzamiento nueva colección&#10;15: Webinar de producto&#10;28: Día del cliente"
                value={events}
                onChange={e => setEvents(e.target.value)}
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              onClick={generateCalendar}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <span className="inline-block animate-spin mr-2">⏳</span>
                  Generando calendario...
                </>
              ) : (
                'Generar calendario de contenido'
              )}
            </button>
          </div>
        </div>
      </div>

      {calendarData && renderCalendar()}
    </div>
  );
};

export default ContentCalendarGenerator;
