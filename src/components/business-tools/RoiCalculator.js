/**
 * Calculadora de ROI Publicitario
 * Analiza el retorno de inversión de campañas publicitarias
 */
class RoiCalculator {
  constructor() {
    this.channelEfficiencyFactors = {
      digital: 1.2,
      social: 1.3,
      traditional: 0.9,
      classified: 1.1,
      email: 1.2,
    };

    this.periodFactors = {
      1: 1.0, // 1 mes
      3: 1.05, // 3 meses
      6: 1.08, // 6 meses
      12: 1.15, // 12 meses
    };
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    const calculateButton = document.getElementById("calculate-roi");
    if (calculateButton) {
      calculateButton.addEventListener("click", () => this.calculateRoi());
    }
  }

  calculateRoi() {
    // Recoger valores del formulario
    const investment = parseFloat(
      document.getElementById("total-investment").value
    );
    const revenue = parseFloat(
      document.getElementById("revenue-generated").value
    );
    const channel = document.getElementById("advertising-channel").value;
    const customers = parseFloat(
      document.getElementById("customers-acquired").value
    );
    const period = parseInt(document.getElementById("period").value);

    // Validar los valores de entrada
    if (!investment || investment <= 0) {
      showToolAlert(
        "Por favor, introduce un valor válido para la inversión.",
        "error"
      );
      return;
    }

    if (!revenue && revenue !== 0) {
      showToolAlert(
        "Por favor, introduce un valor para los ingresos generados.",
        "error"
      );
      return;
    }

    if (!customers && customers !== 0) {
      showToolAlert(
        "Por favor, introduce el número de clientes adquiridos.",
        "error"
      );
      return;
    }

    // Calcular ROI básico
    const basicRoi = ((revenue - investment) / investment) * 100;

    // Aplicar factores de eficiencia por canal
    const adjustedRoi = basicRoi * this.channelEfficiencyFactors[channel];

    // Ajustar por período
    const finalRoi = adjustedRoi * this.periodFactors[period];

    // Calcular métricas adicionales
    const costPerCustomer = investment / customers;
    const revenuePerCustomer = revenue / customers;
    const customerLifetimeValue = revenuePerCustomer * (1 + finalRoi / 100);

    // Mostrar resultados
    this.displayResults(
      finalRoi,
      investment,
      revenue,
      costPerCustomer,
      revenuePerCustomer,
      customerLifetimeValue,
      channel,
      period
    );
  }

  displayResults(
    roi,
    investment,
    revenue,
    costPerCustomer,
    revenuePerCustomer,
    customerLifetimeValue,
    channel,
    period
  ) {
    const resultsContainer = document.getElementById("roi-results");

    // Formatear valores
    const formatPercent = (value) => {
      return value.toFixed(2) + "%";
    };

    const formatCurrency = (value) => {
      return (
        "S/. " +
        value.toLocaleString("es-PE", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      );
    };

    // Evaluar el ROI
    let roiRating, roiMessage;
    if (roi > 200) {
      roiRating = "Excelente";
      roiMessage =
        "Tu campaña está generando resultados excepcionales. Considera aumentar la inversión para maximizar el retorno.";
    } else if (roi > 100) {
      roiRating = "Muy bueno";
      roiMessage =
        "Tu campaña está funcionando bien. Analiza qué elementos están teniendo mejor desempeño para potenciarlos.";
    } else if (roi > 50) {
      roiRating = "Bueno";
      roiMessage =
        "Tu campaña tiene un rendimiento positivo. Hay margen para optimizar y mejorar los resultados.";
    } else if (roi > 0) {
      roiRating = "Aceptable";
      roiMessage =
        "Tu campaña está generando retorno positivo pero limitado. Considera ajustar tu estrategia para mejorar resultados.";
    } else {
      roiRating = "Negativo";
      roiMessage =
        "Tu campaña no está generando suficiente retorno. Recomendamos revisar tu estrategia y hacer cambios significativos.";
    }

    // Nombre del canal en español
    const channelNames = {
      digital: "Marketing Digital",
      social: "Redes Sociales",
      traditional: "Publicidad Tradicional",
      classified: "Anuncios Clasificados",
      email: "Email Marketing",
    };

    // Periodo en texto
    const periodText = {
      1: "1 mes",
      3: "3 meses",
      6: "6 meses",
      12: "12 meses",
    };

    // HTML para los resultados
    resultsContainer.innerHTML = `
      <div class="result-summary">
        <h4>ROI de tu Campaña Publicitaria</h4>
        <div class="value-amount">${formatPercent(roi)}</div>
        <div class="value-range">
          Calificación: <strong>${roiRating}</strong>
        </div>
      </div>
      
      <div class="chart-container">
        <div class="chart-bar">
          <div class="chart-value investment-bar" style="height: ${Math.min(
            100,
            investment / 100
          )}px;">
            ${formatCurrency(investment)}
          </div>
          <div class="chart-label">Inversión</div>
        </div>
        
        <div class="chart-bar">
          <div class="chart-value revenue-bar" style="height: ${Math.min(
            100,
            revenue / 100
          )}px;">
            ${formatCurrency(revenue)}
          </div>
          <div class="chart-label">Ingresos</div>
        </div>
      </div>
      
      <div class="metrics">
        <div class="metric">
          <div class="metric-label">Costo por Cliente</div>
          <div class="metric-value">
            <i class="fa-solid fa-user-tag metric-icon"></i>
            ${formatCurrency(costPerCustomer)}
          </div>
        </div>
        
        <div class="metric">
          <div class="metric-label">Ingreso por Cliente</div>
          <div class="metric-value">
            <i class="fa-solid fa-coins metric-icon"></i>
            ${formatCurrency(revenuePerCustomer)}
          </div>
        </div>
        
        <div class="metric">
          <div class="metric-label">Valor del Cliente</div>
          <div class="metric-value">
            <i class="fa-solid fa-star metric-icon"></i>
            ${formatCurrency(customerLifetimeValue)}
          </div>
        </div>
      </div>
      
      <div class="result-analysis">
        <h4><i class="fa-solid fa-chart-pie"></i> Análisis de Resultados</h4>
        <p>
          ${roiMessage} Tu campaña en <strong>${
      channelNames[channel]
    }</strong> durante <strong>${periodText[period]}</strong> 
          ha generado un retorno de inversión del <strong>${formatPercent(
            roi
          )}</strong>. 
          Cada cliente te ha costado <strong>${formatCurrency(
            costPerCustomer
          )}</strong> y ha generado 
          <strong>${formatCurrency(revenuePerCustomer)}</strong> en ingresos.
        </p>
      </div>
    `;

    resultsContainer.classList.add("show");
  }
}

// Si está en un entorno global, exponer la clase
if (typeof window !== "undefined") {
  window.RoiCalculator = RoiCalculator;
}
