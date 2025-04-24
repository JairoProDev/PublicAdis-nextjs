/**
 * Calculadora de Alcance en Redes Sociales
 * Estima el alcance potencial y ROI de campañas sociales
 */
class SocialMediaReach {
  constructor() {
    // Factores de alcance orgánico base por plataforma (% de seguidores)
    this.organicReachFactors = {
      facebook: 0.055, // 5.5% de alcance orgánico promedio
      instagram: 0.12, // 12% de alcance orgánico promedio
      twitter: 0.25, // 25% de alcance orgánico promedio
      linkedin: 0.08, // 8% de alcance orgánico promedio
      tiktok: 0.18, // 18% de alcance orgánico promedio
      youtube: 0.15, // 15% de alcance orgánico promedio
    };

    // Factores de engagement por plataforma (% del alcance)
    this.engagementRates = {
      facebook: 0.009, // 0.9% engagement rate promedio
      instagram: 0.028, // 2.8% engagement rate promedio
      twitter: 0.006, // 0.6% engagement rate promedio
      linkedin: 0.013, // 1.3% engagement rate promedio
      tiktok: 0.055, // 5.5% engagement rate promedio
      youtube: 0.03, // 3% engagement rate promedio
    };

    // Tipos de contenido y sus factores de multiplicación para el alcance
    this.contentFactors = {
      text: 1.0,
      image: 1.4,
      carousel: 1.6,
      video: 1.8,
      reels: 2.2,
      livestream: 2.5,
    };

    // Factores por categoría de contenido
    this.categoryFactors = {
      food: 1.2,
      fashion: 1.15,
      travel: 1.3,
      tech: 1.1,
      beauty: 1.2,
      health: 1.05,
      business: 0.95,
      education: 0.9,
      entertainment: 1.4,
      sports: 1.15,
    };

    // Multiplicadores para engagement basados en la hora del día
    this.timeFactors = {
      earlyMorning: 0.7, // 5am-8am
      morning: 1.0, // 8am-11am
      noon: 1.2, // 11am-2pm
      afternoon: 1.1, // 2pm-5pm
      evening: 1.3, // 5pm-8pm
      night: 1.15, // 8pm-11pm
      lateNight: 0.8, // 11pm-5am
    };

    // Cost Per Click promedio por plataforma (en soles)
    this.cpcRates = {
      facebook: 0.8,
      instagram: 1.1,
      twitter: 0.7,
      linkedin: 1.8,
      tiktok: 0.6,
      youtube: 1.5,
    };

    // Tasas promedio de conversión (% del engagement)
    this.conversionRates = {
      facebook: 0.03, // 3% del engagement
      instagram: 0.02, // 2% del engagement
      twitter: 0.01, // 1% del engagement
      linkedin: 0.04, // 4% del engagement
      tiktok: 0.015, // 1.5% del engagement
      youtube: 0.02, // 2% del engagement
    };
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    const calculateButton = document.getElementById("calculate-reach");
    if (calculateButton) {
      calculateButton.addEventListener("click", () => this.calculateReach());
    }

    // Actualizar UI basado en opciones seleccionadas
    const platformSelect = document.getElementById("platform");
    if (platformSelect) {
      platformSelect.addEventListener("change", () =>
        this.updateContentTypes(platformSelect.value)
      );
    }
  }

  updateContentTypes(platform) {
    const contentSelect = document.getElementById("content-type");
    if (!contentSelect) return;

    // Resetear opciones
    contentSelect.innerHTML =
      '<option value="">Selecciona tipo de contenido</option>';

    // Opciones comunes
    contentSelect.innerHTML += `
      <option value="text">Texto/Estado</option>
      <option value="image">Imagen</option>
      <option value="video">Video</option>
    `;

    // Opciones específicas por plataforma
    switch (platform) {
      case "facebook":
        contentSelect.innerHTML += `
          <option value="carousel">Carrusel de imágenes</option>
          <option value="livestream">Transmisión en vivo</option>
        `;
        break;
      case "instagram":
        contentSelect.innerHTML += `
          <option value="carousel">Carrusel de imágenes</option>
          <option value="reels">Reels</option>
          <option value="livestream">Transmisión en vivo</option>
        `;
        break;
      case "twitter":
        contentSelect.innerHTML += `
          <option value="carousel">Hilo</option>
        `;
        break;
      case "linkedin":
        contentSelect.innerHTML += `
          <option value="carousel">Carrusel de imágenes</option>
          <option value="livestream">Transmisión en vivo</option>
        `;
        break;
      case "tiktok":
        contentSelect.innerHTML += `
          <option value="reels">TikTok</option>
          <option value="livestream">LIVE</option>
        `;
        break;
      case "youtube":
        contentSelect.innerHTML += `
          <option value="livestream">Livestream</option>
        `;
        break;
    }
  }

  calculateReach() {
    // Recoger valores del formulario
    const platform = document.getElementById("platform").value;
    const followers = parseInt(document.getElementById("followers").value);
    const contentType = document.getElementById("content-type").value;
    const category = document.getElementById("category").value;
    const postTime = document.getElementById("post-time").value;
    const frequency = parseInt(
      document.getElementById("post-frequency").value || 1
    );
    const budget = parseFloat(document.getElementById("ad-budget").value || 0);

    // Validar entrada
    if (!platform || !followers || !contentType || !category || !postTime) {
      showToolAlert(
        "Por favor, completa todos los campos del formulario.",
        "error"
      );
      return;
    }

    if (isNaN(followers) || followers <= 0) {
      showToolAlert(
        "Por favor, introduce un número válido de seguidores.",
        "error"
      );
      return;
    }

    // CÁLCULOS DE ALCANCE ORGÁNICO

    // 1. Alcance base según plataforma
    const baseReach = followers * this.organicReachFactors[platform];

    // 2. Ajustar por tipo de contenido
    const contentAdjustedReach = baseReach * this.contentFactors[contentType];

    // 3. Ajustar por categoría
    const categoryAdjustedReach =
      contentAdjustedReach * this.categoryFactors[category];

    // 4. Ajustar por hora de publicación
    const timeAdjustedReach =
      categoryAdjustedReach * this.timeFactors[postTime];

    // 5. Calcular alcance orgánico total
    const organicReach = Math.round(timeAdjustedReach);

    // 6. Calcular engagement orgánico
    const organicEngagement = Math.round(
      organicReach * this.engagementRates[platform]
    );

    // CÁLCULOS DE ALCANCE PAGADO (si hay presupuesto)
    let paidReach = 0;
    let paidEngagement = 0;

    if (budget > 0) {
      // Estimar clics basados en CPC
      const estimatedClicks = budget / this.cpcRates[platform];

      // Estimar alcance pagado (aproximadamente 10-15 personas alcanzadas por clic)
      paidReach = Math.round(estimatedClicks * 12);

      // Calcular engagement pagado
      paidEngagement = Math.round(
        paidReach * this.engagementRates[platform] * 1.2
      ); // El engagement pagado suele ser ~20% mayor
    }

    // ALCANCE Y ENGAGEMENT TOTALES
    const totalReach = organicReach + paidReach;
    const totalEngagement = organicEngagement + paidEngagement;

    // Calcular conversiones estimadas
    const conversions = Math.round(
      totalEngagement * this.conversionRates[platform]
    );

    // Calcular métricas de frecuencia (mensual)
    const monthlyReach = totalReach * frequency;
    const monthlyEngagement = totalEngagement * frequency;
    const monthlyConversions = conversions * frequency;
    const monthlyBudget = budget * frequency;

    // Calcular ROI si hay presupuesto
    let roi = null;
    if (budget > 0) {
      // Asumiendo un valor promedio de conversión de 50 soles
      const estimatedRevenue = monthlyConversions * 50;
      roi = ((estimatedRevenue - monthlyBudget) / monthlyBudget) * 100;
    }

    // Mostrar resultados
    this.displayResults(
      platform,
      followers,
      contentType,
      category,
      postTime,
      frequency,
      budget,
      organicReach,
      organicEngagement,
      paidReach,
      paidEngagement,
      totalReach,
      totalEngagement,
      conversions,
      monthlyReach,
      monthlyEngagement,
      monthlyConversions,
      monthlyBudget,
      roi
    );
  }

  displayResults(
    platform,
    followers,
    contentType,
    category,
    postTime,
    frequency,
    budget,
    organicReach,
    organicEngagement,
    paidReach,
    paidEngagement,
    totalReach,
    totalEngagement,
    conversions,
    monthlyReach,
    monthlyEngagement,
    monthlyConversions,
    monthlyBudget,
    roi
  ) {
    const resultsContainer = document.getElementById("reach-results");

    // Formatear números
    const formatNumber = (num) => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
      } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
      } else {
        return num.toString();
      }
    };

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

    // Mapear valores a nombres legibles
    const platformNames = {
      facebook: "Facebook",
      instagram: "Instagram",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      tiktok: "TikTok",
      youtube: "YouTube",
    };

    const contentNames = {
      text: "Texto/Estado",
      image: "Imagen",
      carousel: "Carrusel/Colección",
      video: "Video",
      reels: "Reels/Cortos",
      livestream: "Transmisión en vivo",
    };

    const categoryNames = {
      food: "Alimentos y Cocina",
      fashion: "Moda y Estilo",
      travel: "Viajes y Aventura",
      tech: "Tecnología",
      beauty: "Belleza",
      health: "Salud y Bienestar",
      business: "Negocios",
      education: "Educación",
      entertainment: "Entretenimiento",
      sports: "Deportes",
    };

    const timeNames = {
      earlyMorning: "Temprano (5am-8am)",
      morning: "Mañana (8am-11am)",
      noon: "Mediodía (11am-2pm)",
      afternoon: "Tarde (2pm-5pm)",
      evening: "Noche (5pm-8pm)",
      night: "Noche (8pm-11pm)",
      lateNight: "Madrugada (11pm-5am)",
    };

    // Obtener ícono de plataforma
    const platformIcons = {
      facebook: "fa-brands fa-facebook",
      instagram: "fa-brands fa-instagram",
      twitter: "fa-brands fa-twitter",
      linkedin: "fa-brands fa-linkedin",
      tiktok: "fa-brands fa-tiktok",
      youtube: "fa-brands fa-youtube",
    };

    // Calcular proporción orgánico vs pagado
    const organicPercentage =
      Math.round((organicReach / totalReach) * 100) || 100;
    const paidPercentage = Math.round((paidReach / totalReach) * 100) || 0;

    // Analizar resultados y dar recomendaciones
    let reachAnalysis = "";
    let engagementAnalysis = "";
    let recommendedTime = "";

    // Análisis de alcance
    if (totalReach < followers * 0.05) {
      reachAnalysis =
        "El alcance estimado es bajo para tu base de seguidores. Considera cambiar el tipo de contenido o categoría.";
    } else if (totalReach < followers * 0.15) {
      reachAnalysis =
        "El alcance estimado es promedio para esta plataforma. Puedes mejorarlo con contenido más atractivo.";
    } else {
      reachAnalysis =
        "El alcance estimado es bueno. Tu estrategia de contenido parece efectiva para esta plataforma.";
    }

    // Análisis de engagement
    const engagementRate = (totalEngagement / totalReach) * 100;
    if (engagementRate < 1) {
      engagementAnalysis =
        "La tasa de engagement estimada es baja. Prueba con contenido más interactivo o preguntas a tu audiencia.";
    } else if (engagementRate < 3) {
      engagementAnalysis =
        "La tasa de engagement es aceptable, pero hay margen para mejorar la interacción.";
    } else {
      engagementAnalysis =
        "La tasa de engagement es buena. Tu contenido parece resonar bien con tu audiencia.";
    }

    // Recomendar mejor hora basado en la plataforma
    const bestTimes = {
      facebook: "evening",
      instagram: "noon",
      twitter: "afternoon",
      linkedin: "morning",
      tiktok: "evening",
      youtube: "evening",
    };

    if (postTime !== bestTimes[platform]) {
      recommendedTime = `Para ${
        platformNames[platform]
      }, el mejor horario suele ser ${timeNames[bestTimes[platform]]}.`;
    }

    // HTML para los resultados
    resultsContainer.innerHTML = `
      <div class="result-summary">
        <h4>Alcance Estimado por Publicación</h4>
        <div class="value-amount">${formatNumber(totalReach)}</div>
        <div class="value-range">
          ${organicPercentage}% Orgánico | ${paidPercentage}% Pagado
        </div>
      </div>
      
      <div class="platform-summary">
        <div class="platform-icon">
          <i class="${platformIcons[platform]}"></i>
        </div>
        <div class="platform-details">
          <div class="platform-name">${platformNames[platform]}</div>
          <div class="followers">${formatNumber(followers)} seguidores</div>
        </div>
      </div>
      
      <div class="metrics-grid">
        <div class="metric">
          <div class="metric-label">Alcance Orgánico</div>
          <div class="metric-value">${formatNumber(organicReach)}</div>
        </div>
        
        <div class="metric">
          <div class="metric-label">Engagement Orgánico</div>
          <div class="metric-value">${formatNumber(organicEngagement)}</div>
        </div>
        
        ${
          budget > 0
            ? `
          <div class="metric">
            <div class="metric-label">Alcance Pagado</div>
            <div class="metric-value">${formatNumber(paidReach)}</div>
          </div>
          
          <div class="metric">
            <div class="metric-label">Engagement Pagado</div>
            <div class="metric-value">${formatNumber(paidEngagement)}</div>
          </div>
        `
            : ""
        }
        
        <div class="metric">
          <div class="metric-label">Conversiones Est.</div>
          <div class="metric-value">${formatNumber(conversions)}</div>
        </div>
        
        <div class="metric">
          <div class="metric-label">Tasa Engagement</div>
          <div class="metric-value">${engagementRate.toFixed(1)}%</div>
        </div>
      </div>
      
      <div class="monthly-projection">
        <h4><i class="fa-solid fa-calendar"></i> Proyección Mensual (${frequency} publicaciones)</h4>
        <div class="metrics-grid">
          <div class="metric">
            <div class="metric-label">Alcance Total</div>
            <div class="metric-value">${formatNumber(monthlyReach)}</div>
          </div>
          
          <div class="metric">
            <div class="metric-label">Engagement Total</div>
            <div class="metric-value">${formatNumber(monthlyEngagement)}</div>
          </div>
          
          <div class="metric">
            <div class="metric-label">Conversiones Est.</div>
            <div class="metric-value">${formatNumber(monthlyConversions)}</div>
          </div>
          
          ${
            budget > 0
              ? `
            <div class="metric">
              <div class="metric-label">Inversión</div>
              <div class="metric-value">${formatCurrency(monthlyBudget)}</div>
            </div>
            
            <div class="metric">
              <div class="metric-label">ROI Estimado</div>
              <div class="metric-value ${
                roi > 0 ? "positive" : "negative"
              }">${roi.toFixed(1)}%</div>
            </div>
          `
              : ""
          }
        </div>
      </div>
      
      <div class="content-strategy">
        <h4><i class="fa-solid fa-lightbulb"></i> Estrategia de Contenido</h4>
        <div class="strategy-details">
          <div class="strategy-item">
            <div class="strategy-label">Tipo de Contenido</div>
            <div class="strategy-value">${contentNames[contentType]}</div>
          </div>
          
          <div class="strategy-item">
            <div class="strategy-label">Categoría</div>
            <div class="strategy-value">${categoryNames[category]}</div>
          </div>
          
          <div class="strategy-item">
            <div class="strategy-label">Hora de Publicación</div>
            <div class="strategy-value">${timeNames[postTime]}</div>
          </div>
        </div>
      </div>
      
      <div class="result-analysis">
        <p>${reachAnalysis}</p>
        <p>${engagementAnalysis}</p>
        ${recommendedTime ? `<p>${recommendedTime}</p>` : ""}
      </div>
    `;

    resultsContainer.classList.add("show");
  }
}

// Si está en un entorno global, exponer la clase
if (typeof window !== "undefined") {
  window.SocialMediaReach = SocialMediaReach;
}
