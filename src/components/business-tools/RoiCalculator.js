/**
 * Calculadora de ROI para Publicidad
 * Calcula el retorno de inversión para campañas publicitarias
 */
class RoiCalculator {
  constructor() {
    // Factores de conversión por canal
    this.channelFactors = {
      search: 0.065, // 6.5% tasa de conversión Google Ads
      social: 0.043, // 4.3% tasa de conversión en redes sociales
      display: 0.018, // 1.8% tasa de conversión en anuncios display
      email: 0.073, // 7.3% tasa de conversión email marketing
      content: 0.032, // 3.2% tasa de conversión marketing de contenidos
    };
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    const calculateButton = document.getElementById('calculate-roi');
    if (calculateButton) {
      calculateButton.addEventListener('click', () => this.calculateRoi());
    }
  }

  showToolAlert(message, type) {
    // Simple alert function
    alert(message);
    console.warn(`[${type}] ${message}`);
  }

  calculateRoi() {
    const investment = parseFloat(document.getElementById('advertising-investment').value);
    const revenue = parseFloat(document.getElementById('revenue-generated').value);
    const channel = document.getElementById('advertising-channel').value;
    const customers = parseFloat(document.getElementById('customers-acquired').value);
    const period = parseInt(document.getElementById('period').value);

    // Validar los valores de entrada
    if (!investment || investment <= 0) {
      this.showToolAlert('Por favor, introduce un valor válido para la inversión.', 'error');
      return;
    }

    if (!revenue && revenue !== 0) {
      this.showToolAlert('Por favor, introduce un valor para los ingresos generados.', 'error');
      return;
    }

    if (!customers && customers !== 0) {
      this.showToolAlert('Por favor, introduce el número de clientes adquiridos.', 'error');
      return;
    }

    // Calcular ROI
    const roi = ((revenue - investment) / investment) * 100;

    // Calcular métricas adicionales
    const costPerCustomer = customers > 0 ? investment / customers : 0;
    const revenuePerCustomer = customers > 0 ? revenue / customers : 0;

    // Estimar valor de por vida del cliente (LTV)
    // Asumiendo que un cliente típico genera 3 veces su valor inicial a lo largo de su vida
    const customerLifetimeValue = revenuePerCustomer * 3;

    // Determinar si el ROI es bueno o no
    let roiRating;
    let roiMessage;

    if (roi < 0) {
      roiRating = 'Negativo';
      roiMessage = 'Tu campaña está generando pérdidas.';
    } else if (roi < 50) {
      roiRating = 'Bajo';
      roiMessage = 'Tu campaña tiene un rendimiento bajo.';
    } else if (roi < 100) {
      roiRating = 'Promedio';
      roiMessage = 'Tu campaña tiene un rendimiento aceptable.';
    } else if (roi < 200) {
      roiRating = 'Bueno';
      roiMessage = 'Tu campaña tiene un buen rendimiento.';
    } else {
      roiRating = 'Excelente';
      roiMessage = '¡Felicidades! Tu campaña tiene un excelente rendimiento.';
    }

    // Mostrar resultados
    this.displayResults(
      roi,
      investment,
      revenue,
      costPerCustomer,
      revenuePerCustomer,
      customerLifetimeValue,
      channel,
      period,
      roiRating,
      roiMessage
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
    period,
    roiRating,
    roiMessage
  ) {
    const resultsContainer = document.getElementById('roi-results');

    // Formatear moneda
    const formatCurrency = value => {
      return (
        'S/. ' +
        value.toLocaleString('es-PE', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
    };

    // Formatear porcentaje
    const formatPercent = value => {
      return (
        value.toLocaleString('es-PE', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }) + '%'
      );
    };

    // Nombres legibles para los canales
    const channelNames = {
      search: 'Google Ads / Búsqueda',
      social: 'Redes Sociales',
      display: 'Anuncios Display',
      email: 'Email Marketing',
      content: 'Marketing de Contenidos',
    };

    // Periodos en texto
    const periodText = {
      1: '1 mes',
      3: '3 meses',
      6: '6 meses',
      12: '12 meses',
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
          <div class="chart-value investment-bar" style="height: ${Math.min(100, investment / 100)}px;">
            ${formatCurrency(investment)}
          </div>
          <div class="chart-label">Inversión</div>
        </div>
        
        <div class="chart-bar">
          <div class="chart-value revenue-bar" style="height: ${Math.min(100, revenue / 100)}px;">
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
          ${roiMessage} Tu campaña en <strong>${channelNames[channel]}</strong> durante <strong>${periodText[period]}</strong> 
          ha generado un retorno de inversión del <strong>${formatPercent(roi)}</strong>. 
          Cada cliente te ha costado <strong>${formatCurrency(costPerCustomer)}</strong> y ha generado 
          <strong>${formatCurrency(revenuePerCustomer)}</strong> en ingresos.
        </p>
      </div>
    `;

    resultsContainer.classList.add('show');
  }
}

// Si está en un entorno global, exponer la clase
if (typeof window !== 'undefined') {
  window.RoiCalculator = RoiCalculator;
}
