/**
 * Planificador de Eventos
 * Ayuda a organizar eventos con presupuesto y cronograma
 */
class EventPlanner {
  constructor() {
    // Costos estimados por tipo de evento (en soles)
    this.eventBaseCosts = {
      corporate: {
        name: "Corporativo",
        baseCost: 8000,
        attendeeCost: 100,
        durationFactor: 1.2,
      },
      social: {
        name: "Social/Celebración",
        baseCost: 6000,
        attendeeCost: 120,
        durationFactor: 1.1,
      },
      wedding: {
        name: "Boda",
        baseCost: 15000,
        attendeeCost: 180,
        durationFactor: 1.05,
      },
      conference: {
        name: "Conferencia/Congreso",
        baseCost: 12000,
        attendeeCost: 80,
        durationFactor: 1.25,
      },
      workshop: {
        name: "Taller/Capacitación",
        baseCost: 4000,
        attendeeCost: 60,
        durationFactor: 1.3,
      },
    };

    // Multiplicadores por ubicación
    this.locationFactors = {
      hotel: { name: "Hotel", factor: 1.4 },
      restaurant: { name: "Restaurante", factor: 1.2 },
      outdoor: { name: "Espacio Exterior", factor: 1.0 },
      office: { name: "Oficina/Sala Corporativa", factor: 0.8 },
      venue: { name: "Local de Eventos", factor: 1.1 },
    };

    // Costos aproximados de servicios adicionales
    this.additionalServices = {
      catering: {
        name: "Catering Completo",
        costPerPerson: 85,
        isPerPerson: true,
        icon: "fa-utensils",
      },
      drinks: {
        name: "Bebidas/Bar",
        costPerPerson: 35,
        isPerPerson: true,
        icon: "fa-martini-glass-citrus",
      },
      audiovisual: {
        name: "Equipos Audiovisuales",
        cost: 2500,
        isPerPerson: false,
        icon: "fa-tv",
      },
      decoration: {
        name: "Decoración",
        cost: 3500,
        isPerPerson: false,
        icon: "fa-wand-magic-sparkles",
      },
      photography: {
        name: "Fotografía/Video",
        cost: 2800,
        isPerPerson: false,
        icon: "fa-camera",
      },
      entertainment: {
        name: "Entretenimiento/Música",
        cost: 3000,
        isPerPerson: false,
        icon: "fa-music",
      },
      gifts: {
        name: "Regalos/Merchandising",
        costPerPerson: 25,
        isPerPerson: true,
        icon: "fa-gift",
      },
      transportation: {
        name: "Transporte",
        cost: 2200,
        isPerPerson: false,
        icon: "fa-car",
      },
      staff: {
        name: "Personal Adicional",
        cost: 1800,
        isPerPerson: false,
        icon: "fa-user-group",
      },
    };

    // Cronograma típico por tipo de evento (en días antes del evento)
    this.timelineTemplates = {
      corporate: [
        {
          days: 60,
          task: "Definir objetivos y presupuesto",
          category: "planning",
          critical: true,
        },
        {
          days: 45,
          task: "Seleccionar y reservar local",
          category: "venue",
          critical: true,
        },
        {
          days: 40,
          task: "Contratar proveedores principales",
          category: "vendors",
          critical: true,
        },
        {
          days: 30,
          task: "Enviar invitaciones",
          category: "communication",
          critical: true,
        },
        {
          days: 25,
          task: "Planificar menú y bebidas",
          category: "catering",
          critical: false,
        },
        {
          days: 20,
          task: "Confirmar equipos audiovisuales",
          category: "logistics",
          critical: true,
        },
        {
          days: 15,
          task: "Seguimiento a invitados",
          category: "communication",
          critical: false,
        },
        {
          days: 10,
          task: "Confirmar proveedores",
          category: "vendors",
          critical: true,
        },
        {
          days: 7,
          task: "Finalizar agenda y programa",
          category: "planning",
          critical: true,
        },
        {
          days: 3,
          task: "Reconfirmar asistencia",
          category: "communication",
          critical: false,
        },
        {
          days: 1,
          task: "Preparación final y verificaciones",
          category: "logistics",
          critical: true,
        },
      ],
      social: [
        {
          days: 45,
          task: "Definir tema y presupuesto",
          category: "planning",
          critical: true,
        },
        {
          days: 35,
          task: "Seleccionar y reservar local",
          category: "venue",
          critical: true,
        },
        {
          days: 30,
          task: "Enviar invitaciones",
          category: "communication",
          critical: true,
        },
        {
          days: 25,
          task: "Contratar catering",
          category: "catering",
          critical: true,
        },
        {
          days: 20,
          task: "Planificar decoración",
          category: "decor",
          critical: false,
        },
        {
          days: 15,
          task: "Contratar entretenimiento",
          category: "entertainment",
          critical: false,
        },
        {
          days: 10,
          task: "Seguimiento a invitados",
          category: "communication",
          critical: false,
        },
        {
          days: 7,
          task: "Confirmar proveedores",
          category: "vendors",
          critical: true,
        },
        {
          days: 5,
          task: "Organizar transporte si es necesario",
          category: "logistics",
          critical: false,
        },
        {
          days: 1,
          task: "Verificación final",
          category: "logistics",
          critical: true,
        },
      ],
      wedding: [
        {
          days: 365,
          task: "Definir presupuesto y fecha",
          category: "planning",
          critical: true,
        },
        {
          days: 300,
          task: "Seleccionar y reservar local",
          category: "venue",
          critical: true,
        },
        {
          days: 270,
          task: "Elegir y reservar proveedores principales",
          category: "vendors",
          critical: true,
        },
        {
          days: 240,
          task: "Elegir vestimenta",
          category: "attire",
          critical: true,
        },
        {
          days: 180,
          task: 'Enviar "Save the Date"',
          category: "communication",
          critical: false,
        },
        {
          days: 150,
          task: "Planificar luna de miel",
          category: "travel",
          critical: false,
        },
        {
          days: 120,
          task: "Enviar invitaciones formales",
          category: "communication",
          critical: true,
        },
        {
          days: 90,
          task: "Degustación del menú",
          category: "catering",
          critical: false,
        },
        {
          days: 60,
          task: "Recopilar RSVPs",
          category: "communication",
          critical: false,
        },
        {
          days: 45,
          task: "Finalizar detalles de decoración",
          category: "decor",
          critical: false,
        },
        {
          days: 30,
          task: "Ensayo y coordinación final",
          category: "planning",
          critical: true,
        },
        {
          days: 15,
          task: "Confirmar todos los proveedores",
          category: "vendors",
          critical: true,
        },
        {
          days: 7,
          task: "Reconfirmar asistencia",
          category: "communication",
          critical: false,
        },
        {
          days: 3,
          task: "Verificación final de todos los detalles",
          category: "logistics",
          critical: true,
        },
      ],
      conference: [
        {
          days: 180,
          task: "Definir objetivos, fecha y presupuesto",
          category: "planning",
          critical: true,
        },
        {
          days: 150,
          task: "Seleccionar y reservar sede",
          category: "venue",
          critical: true,
        },
        {
          days: 120,
          task: "Contactar y confirmar ponentes",
          category: "speakers",
          critical: true,
        },
        {
          days: 90,
          task: "Abrir registro de participantes",
          category: "registration",
          critical: true,
        },
        {
          days: 75,
          task: "Planificar agenda y horarios",
          category: "planning",
          critical: true,
        },
        {
          days: 60,
          task: "Confirmar equipos técnicos",
          category: "logistics",
          critical: true,
        },
        {
          days: 45,
          task: "Organizar alojamiento para ponentes",
          category: "logistics",
          critical: false,
        },
        {
          days: 30,
          task: "Cerrar registro anticipado",
          category: "registration",
          critical: false,
        },
        {
          days: 20,
          task: "Finalizar detalles de catering",
          category: "catering",
          critical: false,
        },
        {
          days: 15,
          task: "Producir materiales y acreditaciones",
          category: "materials",
          critical: true,
        },
        {
          days: 7,
          task: "Confirmar asistencia final",
          category: "registration",
          critical: false,
        },
        {
          days: 3,
          task: "Ensayo técnico",
          category: "logistics",
          critical: true,
        },
      ],
      workshop: [
        {
          days: 60,
          task: "Definir contenido y objetivos",
          category: "planning",
          critical: true,
        },
        {
          days: 45,
          task: "Seleccionar y reservar espacio",
          category: "venue",
          critical: true,
        },
        {
          days: 30,
          task: "Desarrollar material didáctico",
          category: "materials",
          critical: true,
        },
        {
          days: 25,
          task: "Abrir inscripciones",
          category: "registration",
          critical: true,
        },
        {
          days: 20,
          task: "Confirmar facilitadores/instructores",
          category: "speakers",
          critical: true,
        },
        {
          days: 15,
          task: "Organizar equipos y materiales necesarios",
          category: "logistics",
          critical: true,
        },
        {
          days: 10,
          task: "Enviar recordatorios a participantes",
          category: "communication",
          critical: false,
        },
        {
          days: 5,
          task: "Preparar espacio y verificar equipos",
          category: "logistics",
          critical: true,
        },
        {
          days: 2,
          task: "Confirmar asistencia final",
          category: "registration",
          critical: false,
        },
        {
          days: 1,
          task: "Revisión final de materiales",
          category: "materials",
          critical: true,
        },
      ],
    };
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    const calculateButton = document.getElementById("calculate-event");
    if (calculateButton) {
      calculateButton.addEventListener("click", () => this.planEvent());
    }

    // Listener para actualizar campos adicionales basados en el tipo de evento
    const eventTypeSelect = document.getElementById("event-type");
    if (eventTypeSelect) {
      eventTypeSelect.addEventListener("change", () =>
        this.updateServiceOptions(eventTypeSelect.value)
      );
    }
  }

  updateServiceOptions(eventType) {
    // Esta función podría actualizar dinámicamente qué servicios adicionales
    // se muestran como opciones según el tipo de evento seleccionado
    const servicesContainer = document.getElementById("services-options");
    if (!servicesContainer) return;

    // Por defecto, mostrar todos los servicios
    servicesContainer.innerHTML = "";

    // Crear checkboxes para los servicios
    Object.keys(this.additionalServices).forEach((serviceId) => {
      const service = this.additionalServices[serviceId];

      // Verificar si este servicio es relevante para este tipo de evento
      // (podríamos implementar una lógica más compleja aquí si es necesario)
      let isRelevant = true;

      // Por ejemplo, para talleres quizás no necesitamos ciertos servicios
      if (
        eventType === "workshop" &&
        ["gifts", "entertainment", "decoration"].includes(serviceId)
      ) {
        isRelevant = false;
      }

      if (isRelevant) {
        const checkbox = document.createElement("div");
        checkbox.className = "service-option";
        checkbox.innerHTML = `
          <input type="checkbox" id="${serviceId}" name="services" value="${serviceId}">
          <label for="${serviceId}">
            <i class="fa-solid ${service.icon}"></i>
            ${service.name}
          </label>
        `;
        servicesContainer.appendChild(checkbox);
      }
    });
  }

  planEvent() {
    // Recoger valores del formulario
    const eventType = document.getElementById("event-type").value;
    const eventDate = new Date(document.getElementById("event-date").value);
    const location = document.getElementById("location-type").value;
    const attendees = parseInt(document.getElementById("attendees").value);
    const duration = parseInt(document.getElementById("duration").value);
    const budget = parseFloat(document.getElementById("budget").value || 0);

    // Seleccionar servicios adicionales
    const selectedServices = Array.from(
      document.querySelectorAll('input[name="services"]:checked')
    ).map((el) => el.value);

    // Validar entrada
    if (!eventType || !eventDate || !location || !attendees || !duration) {
      this.showToolAlert(
        "Por favor, completa todos los campos requeridos del formulario.",
        "error"
      );
      return;
    }

    if (isNaN(Date.parse(eventDate))) {
      this.showToolAlert("Por favor, selecciona una fecha válida.", "error");
      return;
    }

    const today = new Date();
    if (eventDate < today) {
      this.showToolAlert("La fecha del evento debe ser futura.", "error");
      return;
    }

    // Calcular días restantes hasta el evento
    const daysUntilEvent = Math.ceil(
      (eventDate - today) / (1000 * 60 * 60 * 24)
    );

    // CÁLCULOS DE PRESUPUESTO

    // 1. Coste base por tipo de evento
    const eventTypeData = this.eventBaseCosts[eventType];
    let totalCost = eventTypeData.baseCost;

    // 2. Añadir coste por asistente
    totalCost += eventTypeData.attendeeCost * attendees;

    // 3. Ajustar por duración
    const durationAdjustment = Math.pow(
      eventTypeData.durationFactor,
      duration - 1
    );
    totalCost *= durationAdjustment;

    // 4. Ajustar por ubicación
    const locationFactor = this.locationFactors[location].factor;
    totalCost *= locationFactor;

    // 5. Añadir servicios adicionales
    const serviceCosts = {};
    let totalServiceCost = 0;

    selectedServices.forEach((serviceId) => {
      const service = this.additionalServices[serviceId];
      const serviceCost = service.isPerPerson
        ? service.costPerPerson * attendees
        : service.cost;

      serviceCosts[serviceId] = serviceCost;
      totalServiceCost += serviceCost;
    });

    // Coste total del evento
    const grandTotal = totalCost + totalServiceCost;

    // Verificar si el presupuesto es suficiente
    let budgetStatus = null;
    if (budget > 0) {
      const budgetDifference = budget - grandTotal;
      const budgetPercentage = (grandTotal / budget) * 100;

      if (budgetDifference >= 0) {
        budgetStatus = {
          sufficient: true,
          difference: budgetDifference,
          percentage: budgetPercentage,
          message: `Tu presupuesto es suficiente, con un superávit de ${budgetDifference.toFixed(
            2
          )} soles (${(100 - budgetPercentage).toFixed(1)}% de margen).`,
        };
      } else {
        budgetStatus = {
          sufficient: false,
          difference: budgetDifference,
          percentage: budgetPercentage,
          message: `Tu presupuesto es insuficiente, con un déficit de ${Math.abs(
            budgetDifference
          ).toFixed(2)} soles. Necesitas aumentar tu presupuesto en un ${(
            budgetPercentage - 100
          ).toFixed(1)}%.`,
        };
      }
    }

    // GENERAR CRONOGRAMA

    // Obtener la plantilla de cronograma para este tipo de evento
    const timelineTemplate = this.timelineTemplates[eventType] || [];

    // Filtrar tareas basadas en los días disponibles
    const feasibleTasks = timelineTemplate.filter(
      (task) => task.days <= daysUntilEvent
    );
    const missedTasks = timelineTemplate.filter(
      (task) => task.days > daysUntilEvent
    );

    // Calcular fechas específicas para cada tarea
    const taskTimeline = feasibleTasks.map((task) => {
      const taskDate = new Date(eventDate);
      taskDate.setDate(taskDate.getDate() - task.days);

      return {
        ...task,
        date: taskDate,
        dateString: taskDate.toLocaleDateString("es-PE", {
          day: "numeric",
          month: "long",
        }),
        status: "pending",
      };
    });

    // Ordenar por fecha (más cercana primero)
    taskTimeline.sort((a, b) => a.days - b.days);

    // Mostrar resultados
    this.displayResults(
      eventType,
      eventDate,
      location,
      attendees,
      duration,
      daysUntilEvent,
      totalCost,
      serviceCosts,
      totalServiceCost,
      grandTotal,
      budgetStatus,
      taskTimeline,
      missedTasks
    );
  }

  displayResults(
    eventType,
    eventDate,
    location,
    attendees,
    duration,
    daysUntilEvent,
    baseCost,
    serviceCosts,
    totalServiceCost,
    grandTotal,
    budgetStatus,
    taskTimeline,
    missedTasks
  ) {
    const resultsContainer = document.getElementById("event-results");

    // Formatear fecha
    const formattedDate = eventDate.toLocaleDateString("es-PE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Formatear moneda
    const formatCurrency = (value) => {
      return (
        "S/. " +
        value.toLocaleString("es-PE", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
    };

    // Nombres legibles de tipos de evento y ubicaciones
    const eventTypeName = this.eventBaseCosts[eventType].name;
    const locationName = this.locationFactors[location].name;

    // Convertir servicios a formato HTML
    let servicesHtml = "";
    let serviceList = "";

    Object.keys(serviceCosts).forEach((serviceId) => {
      const service = this.additionalServices[serviceId];
      const serviceCost = serviceCosts[serviceId];

      serviceList += `
        <div class="cost-breakdown-item">
          <div class="breakdown-label">
            <i class="fa-solid ${service.icon}"></i> ${service.name}
          </div>
          <div class="breakdown-value">${formatCurrency(serviceCost)}</div>
        </div>
      `;
    });

    if (serviceList) {
      servicesHtml = `
        <div class="services-section">
          <h4>Servicios Adicionales</h4>
          <div class="cost-breakdown">
            ${serviceList}
            <div class="cost-breakdown-total">
              <div class="breakdown-label">Total Servicios</div>
              <div class="breakdown-value">${formatCurrency(
                totalServiceCost
              )}</div>
            </div>
          </div>
        </div>
      `;
    }

    // Crear tabla de cronograma
    let timelineHtml = "";
    if (taskTimeline.length > 0) {
      timelineHtml += `
        <h4>Cronograma de Planificación</h4>
        <div class="timeline-container">
      `;

      // Agrupar tareas por categoría
      const tasksByCategory = {};
      taskTimeline.forEach((task) => {
        if (!tasksByCategory[task.category]) {
          tasksByCategory[task.category] = [];
        }
        tasksByCategory[task.category].push(task);
      });

      // Categorías y sus nombres legibles
      const categories = {
        planning: { name: "Planificación", icon: "fa-list-check" },
        venue: { name: "Local", icon: "fa-building" },
        vendors: { name: "Proveedores", icon: "fa-truck-field" },
        communication: { name: "Comunicación", icon: "fa-envelope" },
        catering: { name: "Catering", icon: "fa-utensils" },
        logistics: { name: "Logística", icon: "fa-dolly" },
        decor: { name: "Decoración", icon: "fa-palette" },
        entertainment: { name: "Entretenimiento", icon: "fa-music" },
        attire: { name: "Vestimenta", icon: "fa-shirt" },
        travel: { name: "Viaje", icon: "fa-plane" },
        speakers: { name: "Ponentes", icon: "fa-microphone" },
        registration: { name: "Registro", icon: "fa-address-card" },
        materials: { name: "Materiales", icon: "fa-book" },
      };

      // Construir HTML por categoría
      Object.keys(tasksByCategory).forEach((category) => {
        const categoryData = categories[category] || {
          name: category,
          icon: "fa-tasks",
        };

        timelineHtml += `
          <div class="timeline-category">
            <div class="category-header">
              <i class="fa-solid ${categoryData.icon}"></i>
              <span>${categoryData.name}</span>
            </div>
            <div class="timeline-tasks">
        `;

        tasksByCategory[category].forEach((task) => {
          const timingClass =
            task.days <= 7 ? "urgent" : task.days <= 14 ? "soon" : "";
          const criticalClass = task.critical ? "critical" : "";

          timelineHtml += `
            <div class="timeline-task ${timingClass} ${criticalClass}">
              <div class="task-date">${task.dateString}</div>
              <div class="task-name">
                ${task.critical ? '<span class="critical-marker">✱</span>' : ""}
                ${task.task}
              </div>
              <div class="task-timing">
                ${
                  task.days === 0
                    ? "Hoy"
                    : task.days === 1
                    ? "Mañana"
                    : `En ${task.days} días`
                }
              </div>
            </div>
          `;
        });

        timelineHtml += `
            </div>
          </div>
        `;
      });

      timelineHtml += `</div>`;

      // Añadir tareas perdidas si las hay
      if (missedTasks.length > 0) {
        timelineHtml += `
          <div class="missed-tasks">
            <h4><i class="fa-solid fa-triangle-exclamation"></i> Tareas Críticas Retrasadas</h4>
            <p>Estas tareas deberían haberse completado ya según el cronograma recomendado:</p>
            <ul>
        `;

        missedTasks
          .filter((task) => task.critical)
          .forEach((task) => {
            timelineHtml += `
            <li>${task.task} (${
              task.days - daysUntilEvent
            } días de retraso)</li>
          `;
          });

        timelineHtml += `
            </ul>
          </div>
        `;
      }
    } else {
      timelineHtml = `
        <div class="timeline-warning">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <p>El evento está demasiado cerca para generar un cronograma completo. Se recomienda más tiempo de planificación.</p>
        </div>
      `;
    }

    // HTML para los resultados
    resultsContainer.innerHTML = `
      <div class="result-summary ${
        budgetStatus && budgetStatus.sufficient ? "success" : "warning"
      }">
        <h4>Presupuesto Estimado</h4>
        <div class="value-amount">${formatCurrency(grandTotal)}</div>
        ${
          budgetStatus
            ? `
          <div class="value-range">
            ${
              budgetStatus.sufficient
                ? `<span class="positive">Presupuesto suficiente</span>`
                : `<span class="negative">Presupuesto insuficiente</span>`
            }
          </div>
        `
            : ""
        }
      </div>
      
      <div class="event-overview">
        <div class="event-header">
          <div class="event-title">
            <h4>${eventTypeName}</h4>
            <div class="event-date">${formattedDate}</div>
          </div>
          <div class="event-days">
            <div class="days-count">${daysUntilEvent}</div>
            <div class="days-label">días restantes</div>
          </div>
        </div>
        
        <div class="event-details">
          <div class="detail-item">
            <i class="fa-solid fa-location-dot"></i>
            <span>${locationName}</span>
          </div>
          <div class="detail-item">
            <i class="fa-solid fa-users"></i>
            <span>${attendees} asistentes</span>
          </div>
          <div class="detail-item">
            <i class="fa-solid fa-clock"></i>
            <span>${duration} ${duration === 1 ? "día" : "días"}</span>
          </div>
        </div>
      </div>
      
      <div class="budget-section">
        <h4>Desglose de Costos</h4>
        <div class="cost-breakdown">
          <div class="cost-breakdown-item">
            <div class="breakdown-label">Costos Base del Evento</div>
            <div class="breakdown-value">${formatCurrency(baseCost)}</div>
          </div>
          
          ${
            serviceList
              ? `
            <div class="cost-breakdown-item">
              <div class="breakdown-label">Servicios Adicionales</div>
              <div class="breakdown-value">${formatCurrency(
                totalServiceCost
              )}</div>
            </div>
          `
              : ""
          }
          
          <div class="cost-breakdown-total">
            <div class="breakdown-label">Costo Total</div>
            <div class="breakdown-value">${formatCurrency(grandTotal)}</div>
          </div>
        </div>
        
        ${
          budgetStatus
            ? `
          <div class="budget-analysis">
            <div class="budget-comparison">
              <div class="budget-bar">
                <div class="budget-amount">Presupuesto: ${formatCurrency(
                  budgetStatus.percentage <= 100
                    ? budgetStatus.difference + grandTotal
                    : grandTotal
                )}</div>
                <div class="cost-amount" style="width: ${Math.min(
                  budgetStatus.percentage,
                  100
                )}%">Costo: ${formatCurrency(grandTotal)}</div>
              </div>
            </div>
            <p class="${budgetStatus.sufficient ? "positive" : "negative"}">
              ${budgetStatus.message}
            </p>
          </div>
        `
            : ""
        }
      </div>
      
      ${servicesHtml}
      
      <div class="timeline-section">
        ${timelineHtml}
      </div>
    `;

    resultsContainer.classList.add("show");
  }

  showToolAlert(message, type) {
    // Simple alert function
    alert(message);
    console.warn(`[${type}] ${message}`);
  }
}

// Si está en un entorno global, exponer la clase
if (typeof window !== "undefined") {
  window.EventPlanner = EventPlanner;
}
