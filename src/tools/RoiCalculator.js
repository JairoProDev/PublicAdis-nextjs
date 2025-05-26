/**
 * RoiCalculator.js
 * A comprehensive tool for calculating return on investment for advertising campaigns
 */

class RoiCalculator {
  constructor() {
    this.initialized = false;

    // Industry benchmarks for reference
    this.industryBenchmarks = {
      digital: {
        average: 120,
        good: 200,
        excellent: 300,
      },
      social: {
        average: 100,
        good: 180,
        excellent: 280,
      },
      tradicional: {
        average: 80,
        good: 150,
        excellent: 250,
      },
      clasificados: {
        average: 150,
        good: 230,
        excellent: 320,
      },
      email: {
        average: 140,
        good: 220,
        excellent: 300,
      },
    };

    // Cache DOM elements
    this.form = null;
    this.resultSection = null;
    this.roiPercentage = null;
    this.roiProfit = null;
    this.roiCac = null;
    this.roiAnalysis = null;
    this.chartInvestment = null;
    this.chartRevenue = null;
    this.investmentBar = null;
    this.revenueBar = null;
  }

  /**
   * Initialize the calculator with DOM elements and event listeners
   */
  init() {
    // If already initialized, don't do it again
    if (this.initialized) return;

    // Get DOM elements
    this.form = document.getElementById('roi-form');
    this.resultSection = document.getElementById('roi-result');
    this.roiPercentage = document.getElementById('roi-percentage');
    this.roiProfit = document.getElementById('roi-profit');
    this.roiCac = document.getElementById('roi-cac');
    this.roiAnalysis = document.getElementById('roi-analysis');
    this.chartInvestment = document.getElementById('chart-investment');
    this.chartRevenue = document.getElementById('chart-revenue');
    this.investmentBar = document.querySelector('.investment-bar');
    this.revenueBar = document.querySelector('.revenue-bar');

    // Make sure all elements exist
    if (
      !this.form ||
      !this.resultSection ||
      !this.roiPercentage ||
      !this.roiProfit ||
      !this.roiCac ||
      !this.roiAnalysis ||
      !this.chartInvestment ||
      !this.chartRevenue ||
      !this.investmentBar ||
      !this.revenueBar
    ) {
      console.error('RoiCalculator: Missing required DOM elements');
      return;
    }

    // Add event listener to form submission
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.calculateRoi();
    });

    // Add real-time validation
    const investmentInput = document.getElementById('roi-investment');
    const revenueInput = document.getElementById('roi-revenue');
    const customersInput = document.getElementById('roi-customers');

    // Validate numeric inputs
    [investmentInput, revenueInput, customersInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          // Only allow numbers
          input.value = input.value.replace(/[^0-9.]/g, '');

          // Validate the value is positive
          const value = parseFloat(input.value);
          if (value < 0) {
            input.value = Math.abs(value);
          }
        });
      }
    });

    // Mark as initialized
    this.initialized = true;

    return this;
  }

  /**
   * Calculate ROI based on form inputs
   */
  calculateRoi() {
    // Get input values
    const investment = parseFloat(document.getElementById('roi-investment').value) || 0;
    const revenue = parseFloat(document.getElementById('roi-revenue').value) || 0;
    const customers = parseInt(document.getElementById('roi-customers').value) || 0;
    const period = parseInt(document.getElementById('roi-period').value) || 1;
    const channel = document.getElementById('roi-channel').value;

    // Validate inputs
    if (!investment || !revenue) {
      this.showToolAlert(
        'Por favor ingresa tanto la inversión como los ingresos generados.',
        'error'
      );
      return;
    }

    if (investment <= 0 || revenue < 0) {
      this.showToolAlert(
        'La inversión debe ser mayor que cero y los ingresos no pueden ser negativos.',
        'error'
      );
      return;
    }

    // Calculate key metrics
    const profit = revenue - investment;
    const roi = (profit / investment) * 100;
    const cac = customers > 0 ? investment / customers : 0;
    const monthlyRoi = period > 1 ? roi / period : roi;

    // Display the results
    this.displayResults(
      investment,
      revenue,
      profit,
      roi,
      cac,
      monthlyRoi,
      channel,
      period,
      customers
    );
  }

  /**
   * Display calculated results in the UI
   * @param {number} investment - Total investment amount
   * @param {number} revenue - Total revenue generated
   * @param {number} profit - Net profit (revenue - investment)
   * @param {number} roi - ROI percentage
   * @param {number} cac - Customer acquisition cost
   * @param {number} monthlyRoi - Monthly ROI percentage
   * @param {string} channel - Marketing channel used
   * @param {number} period - Time period in months
   * @param {number} customers - Number of customers acquired
   */
  displayResults(investment, revenue, profit, roi, cac, monthlyRoi, channel, period, customers) {
    // Format values
    const currencyFormatter = new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      maximumFractionDigits: 0,
    });

    const percentFormatter = new Intl.NumberFormat('es-PE', {
      style: 'percent',
      maximumFractionDigits: 1,
    });

    // Update the metrics
    this.roiPercentage.textContent = percentFormatter.format(roi / 100);
    this.roiProfit.textContent = currencyFormatter.format(profit);
    this.roiCac.textContent = currencyFormatter.format(cac);

    // Update chart values
    this.chartInvestment.textContent = currencyFormatter.format(investment);
    this.chartRevenue.textContent = currencyFormatter.format(revenue);

    // Set chart bar heights proportionally
    const maxValue = Math.max(investment, revenue);
    this.investmentBar.style.height = `${(investment / maxValue) * 150}px`;
    this.revenueBar.style.height = `${(revenue / maxValue) * 150}px`;

    // Generate analysis
    this.roiAnalysis.textContent = this.generateAnalysis(
      roi,
      monthlyRoi,
      channel,
      period,
      cac,
      customers
    );

    // Show the results section with animation
    this.resultSection.style.display = 'block';

    // Scroll to results
    setTimeout(() => {
      this.resultSection.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }, 100);

    // Log the calculation (for debugging or analytics)
    this.logCalculation({
      investment,
      revenue,
      profit,
      roi,
      cac,
      monthlyRoi,
      channel,
      period,
      customers,
    });
  }

  /**
   * Generate insightful analysis based on ROI calculation
   * @param {number} roi - ROI percentage
   * @param {number} monthlyRoi - Monthly ROI percentage
   * @param {string} channel - Marketing channel used
   * @param {number} period - Time period in months
   * @param {number} cac - Customer acquisition cost
   * @param {number} customers - Number of customers acquired
   * @returns {string} Analysis text
   */
  generateAnalysis(roi, monthlyRoi, channel, period, cac, customers) {
    let analysis = '';

    // Base ROI analysis
    if (roi < 0) {
      analysis = `Tu campaña publicitaria está generando pérdidas. Por cada sol invertido, estás perdiendo ${(
        Math.abs(roi) / 100
      ).toFixed(2)} soles.`;
    } else if (roi < 50) {
      analysis = `Tu ROI es positivo pero bajo. Por cada sol invertido, obtienes ${(
        roi / 100
      ).toFixed(2)} soles de retorno.`;
    } else if (roi < 200) {
      analysis = `¡Buen trabajo! Tu ROI es saludable. Por cada sol invertido, obtienes ${(
        roi / 100
      ).toFixed(2)} soles de retorno.`;
    } else {
      analysis = `¡Excelente! Tu ROI es excepcional. Por cada sol invertido, obtienes ${(
        roi / 100
      ).toFixed(2)} soles de retorno.`;
    }

    // Compare with industry benchmarks if channel is selected
    if (channel && this.industryBenchmarks[channel]) {
      const benchmark = this.industryBenchmarks[channel];

      if (roi < benchmark.average) {
        analysis += ` Este ROI está por debajo del promedio de la industria para ${this.getChannelName(
          channel
        )} (${benchmark.average}%).`;
      } else if (roi < benchmark.good) {
        analysis += ` Este ROI está dentro del promedio de la industria para ${this.getChannelName(
          channel
        )}.`;
      } else if (roi < benchmark.excellent) {
        analysis += ` Este ROI está por encima del promedio de la industria para ${this.getChannelName(
          channel
        )}.`;
      } else {
        analysis += ` Este ROI es considerado excelente para el sector de ${this.getChannelName(
          channel
        )}.`;
      }
    }

    // Channel-specific advice
    if (channel) {
      const channelAdvice = {
        digital: 'Optimiza tus palabras clave y segmentación para mejorar aún más tu rendimiento.',
        social:
          'Analiza qué tipos de contenido generan más engagement para focalizar tus esfuerzos.',
        tradicional:
          'Considera complementar con canales digitales para aumentar el alcance y medición.',
        clasificados:
          'Destaca más tus anuncios con fotos profesionales y descripciones detalladas.',
        email: 'Prueba diferentes asuntos y horarios de envío para mejorar la tasa de apertura.',
      };

      analysis += ` ${channelAdvice[channel]}`;
    }

    // CAC analysis
    if (customers > 0) {
      if (cac > 500) {
        analysis += ` Tu coste de adquisición de cliente (${cac.toFixed(
          0
        )} soles) es relativamente alto. Considera estrategias para reducirlo.`;
      } else if (cac < 100) {
        analysis += ` Tu coste de adquisición de cliente es muy eficiente (${cac.toFixed(
          0
        )} soles).`;
      }
    }

    // Period advice
    if (period > 1) {
      analysis += ` Tu ROI mensual promedio es de ${monthlyRoi.toFixed(1)}%.`;

      if (period > 6) {
        analysis +=
          ' Para campañas de larga duración, evalúa los resultados trimestralmente para optimizar la estrategia.';
      }
    } else {
      analysis +=
        ' Considera analizar el rendimiento durante un período más largo para obtener datos más confiables.';
    }

    return analysis;
  }

  /**
   * Get human-readable channel name
   * @param {string} channelKey - Channel key from form
   * @returns {string} Human-readable channel name
   */
  getChannelName(channelKey) {
    const channelNames = {
      digital: 'Marketing Digital',
      social: 'Redes Sociales',
      tradicional: 'Medios Tradicionales',
      clasificados: 'Anuncios Clasificados',
      email: 'Email Marketing',
    };

    return channelNames[channelKey] || channelKey;
  }

  /**
   * Show error message to user
   * @param {string} message - Error message to display
   * @param {string} type - Type of message ('error' or 'warning')
   */
  showToolAlert(message, type) {
    const alertElement = document.createElement('div');
    alertElement.className = `tool-alert tool-alert-${type}`;
    alertElement.textContent = message;

    const container = document.querySelector('.roi-calculator');
    container.insertBefore(alertElement, container.firstChild);

    setTimeout(() => alertElement.remove(), 5000);
  }

  /**
   * Log calculation for analytics
   * @param {Object} data - Calculation data
   */
  logCalculation(data) {
    // For future analytics implementation
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'roiCalculation',
        timestamp: new Date().toISOString(),
        ...data,
      });
    }
  }
}

// Export the calculator class
window.RoiCalculator = RoiCalculator;
