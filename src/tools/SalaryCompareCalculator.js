/**
 * SalaryCompareCalculator.js
 * A tool for comparing salaries across different industries and calculating total compensation
 */

class SalaryCompareCalculator {
  constructor() {
    this.initialized = false;

    // Industry average salaries in Peruvian Soles (monthly)
    this.industrySalaries = {
      technology: {
        junior: 2500,
        mid: 4500,
        senior: 8000,
        manager: 12000,
      },
      healthcare: {
        junior: 2800,
        mid: 4000,
        senior: 7000,
        manager: 10000,
      },
      education: {
        junior: 1800,
        mid: 2800,
        senior: 4500,
        manager: 7000,
      },
      finance: {
        junior: 3000,
        mid: 5000,
        senior: 9000,
        manager: 15000,
      },
      retail: {
        junior: 1500,
        mid: 2500,
        senior: 4000,
        manager: 7500,
      },
      manufacturing: {
        junior: 2000,
        mid: 3500,
        senior: 6000,
        manager: 9000,
      },
      marketing: {
        junior: 2200,
        mid: 3800,
        senior: 6500,
        manager: 10000,
      },
      hospitality: {
        junior: 1600,
        mid: 2600,
        senior: 4200,
        manager: 7000,
      },
      construction: {
        junior: 2200,
        mid: 3500,
        senior: 6000,
        manager: 9500,
      },
      legal: {
        junior: 3000,
        mid: 5500,
        senior: 9000,
        manager: 14000,
      },
    };

    // Location multipliers based on region in Peru
    this.locationMultipliers = {
      lima: 1.0, // Base reference
      callao: 0.95,
      arequipa: 0.9,
      cusco: 0.85,
      trujillo: 0.85,
      piura: 0.8,
      chiclayo: 0.8,
      huancayo: 0.75,
      iquitos: 0.8,
      tacna: 0.8,
      other: 0.75,
    };

    // Cache DOM elements
    this.form = null;
    this.resultSection = null;
    this.comparisonSection = null;
    this.totalCompensation = null;
    this.salaryPercentile = null;
    this.marketPosition = null;
    this.locationAdjustment = null;
    this.salaryChart = null;
    this.recommendationsSection = null;
    this.benefitsValue = null;
  }

  /**
   * Initialize the calculator with DOM elements and event listeners
   */
  init() {
    // If already initialized, don't do it again
    if (this.initialized) return;

    // Get DOM elements
    this.form = document.getElementById('salary-compare-form');
    this.resultSection = document.getElementById('salary-compare-result');
    this.comparisonSection = document.getElementById('salary-comparison');
    this.totalCompensation = document.getElementById('total-compensation');
    this.salaryPercentile = document.getElementById('salary-percentile');
    this.marketPosition = document.getElementById('market-position');
    this.locationAdjustment = document.getElementById('location-adjustment');
    this.salaryChart = document.getElementById('salary-chart');
    this.recommendationsSection = document.getElementById('salary-recommendations');
    this.benefitsValue = document.getElementById('benefits-value');

    // Make sure all required elements exist
    if (!this.form || !this.resultSection || !this.comparisonSection) {
      console.error('SalaryCompareCalculator: Missing required DOM elements');
      return;
    }

    // Add event listener to form submission
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.compareSalary();
    });

    // Dynamic field interactions
    this.setupDynamicFields();

    // Mark as initialized
    this.initialized = true;

    return this;
  }

  /**
   * Setup dynamic field behavior
   */
  setupDynamicFields() {
    // Additional benefits calculation
    const benefitsFields = document.querySelectorAll('.benefit-field');
    const bonusFrequency = document.getElementById('bonus-frequency');
    const bonusAmount = document.getElementById('bonus-amount');

    const updateBenefitsTotal = () => {
      let totalBenefits = 0;

      // Add all benefit fields
      benefitsFields.forEach(field => {
        if (field && field.value) {
          totalBenefits += parseFloat(field.value) || 0;
        }
      });

      // Calculate annual bonus and convert to monthly equivalent
      if (bonusFrequency && bonusAmount && bonusFrequency.value && bonusAmount.value) {
        const amount = parseFloat(bonusAmount.value) || 0;

        switch (bonusFrequency.value) {
          case 'monthly':
            totalBenefits += amount;
            break;
          case 'quarterly':
            totalBenefits += amount / 3;
            break;
          case 'biannual':
            totalBenefits += amount / 6;
            break;
          case 'annual':
            totalBenefits += amount / 12;
            break;
        }
      }

      // Update benefits display
      if (this.benefitsValue) {
        this.benefitsValue.textContent = this.formatCurrency(totalBenefits);
      }
    };

    // Add event listeners for real-time calculation
    benefitsFields.forEach(field => {
      if (field) {
        field.addEventListener('input', updateBenefitsTotal);
      }
    });

    if (bonusFrequency) bonusFrequency.addEventListener('change', updateBenefitsTotal);
    if (bonusAmount) bonusAmount.addEventListener('input', updateBenefitsTotal);

    // Years of experience field affecting seniority
    const experienceYears = document.getElementById('experience-years');
    const seniority = document.getElementById('seniority');

    if (experienceYears && seniority) {
      experienceYears.addEventListener('input', () => {
        const years = parseInt(experienceYears.value) || 0;

        // Suggest seniority based on years of experience
        if (years < 2) {
          seniority.value = 'junior';
        } else if (years < 5) {
          seniority.value = 'mid';
        } else if (years < 10) {
          seniority.value = 'senior';
        } else {
          seniority.value = 'manager';
        }
      });
    }

    // Industry-specific education field
    const industry = document.getElementById('industry');
    const educationRecommendation = document.getElementById('education-recommendation');

    if (industry && educationRecommendation) {
      industry.addEventListener('change', () => {
        const selectedIndustry = industry.value;

        // Show education recommendations based on industry
        switch (selectedIndustry) {
          case 'technology':
            educationRecommendation.textContent =
              'Ingeniería, Ciencias de la Computación o bootcamps con certificaciones técnicas';
            break;
          case 'healthcare':
            educationRecommendation.textContent =
              'Medicina, Enfermería, Técnicos en Salud u otras especialidades médicas';
            break;
          case 'finance':
            educationRecommendation.textContent = 'Economía, Finanzas, Contabilidad o MBA';
            break;
          case 'legal':
            educationRecommendation.textContent =
              'Derecho, especialización o maestría en área específica';
            break;
          default:
            educationRecommendation.textContent =
              'Grado universitario o técnico relevante para la industria';
        }
      });

      // Trigger on load to set initial value
      industry.dispatchEvent(new Event('change'));
    }
  }

  /**
   * Compare salary against industry standards
   */
  compareSalary() {
    // Get input values
    const baseSalary = parseFloat(document.getElementById('base-salary').value) || 0;
    const industry = document.getElementById('industry').value;
    const seniority = document.getElementById('seniority').value;
    const location = document.getElementById('location').value;
    const experienceYears = parseInt(document.getElementById('experience-years').value) || 0;
    const educationLevel = document.getElementById('education-level').value;

    // Get benefits values
    const healthInsurance = parseFloat(document.getElementById('health-insurance').value) || 0;
    const transportAllowance =
      parseFloat(document.getElementById('transport-allowance').value) || 0;
    const foodAllowance = parseFloat(document.getElementById('food-allowance').value) || 0;
    const bonusAmount = parseFloat(document.getElementById('bonus-amount').value) || 0;
    const bonusFrequency = document.getElementById('bonus-frequency').value;

    // Validate required inputs
    if (!baseSalary || !industry || !seniority || !location) {
      this.showToolAlert(
        'Por favor completa los campos obligatorios: salario base, industria, nivel y ubicación.',
        'error'
      );
      return;
    }

    if (baseSalary <= 0) {
      this.showToolAlert('El salario base debe ser mayor que cero.', 'error');
      return;
    }

    // Calculate benefits and total compensation
    let monthlyBonusEquivalent = 0;
    if (bonusAmount > 0 && bonusFrequency) {
      switch (bonusFrequency) {
        case 'monthly':
          monthlyBonusEquivalent = bonusAmount;
          break;
        case 'quarterly':
          monthlyBonusEquivalent = bonusAmount / 3;
          break;
        case 'biannual':
          monthlyBonusEquivalent = bonusAmount / 6;
          break;
        case 'annual':
          monthlyBonusEquivalent = bonusAmount / 12;
          break;
      }
    }

    const totalBenefits =
      healthInsurance + transportAllowance + foodAllowance + monthlyBonusEquivalent;
    const totalCompensation = baseSalary + totalBenefits;

    // Get industry average based on sector and seniority
    const industryAverage = this.getIndustryAverage(industry, seniority);

    // Adjust for location
    const locationMultiplier = this.locationMultipliers[location] || this.locationMultipliers.other;
    const locationAdjustedAverage = industryAverage * locationMultiplier;

    // Calculate percentile position
    const percentile = this.calculatePercentile(
      totalCompensation,
      industryAverage,
      locationMultiplier
    );

    // Display the results
    this.displayResults(
      totalCompensation,
      totalBenefits,
      industryAverage,
      locationAdjustedAverage,
      percentile,
      {
        industry,
        seniority,
        location,
        experienceYears,
        educationLevel,
      }
    );
  }

  /**
   * Get industry average salary for given sector and seniority
   * @param {string} industry - Industry sector
   * @param {string} seniority - Experience level
   * @returns {number} Industry average monthly salary
   */
  getIndustryAverage(industry, seniority) {
    if (this.industrySalaries[industry] && this.industrySalaries[industry][seniority]) {
      return this.industrySalaries[industry][seniority];
    }

    // Default fallback
    return 3000;
  }

  /**
   * Calculate salary percentile
   * @param {number} totalCompensation - User's total compensation
   * @param {number} industryAverage - Industry average salary
   * @param {number} locationMultiplier - Location adjustment multiplier
   * @returns {number} Percentile (0-100)
   */
  calculatePercentile(totalCompensation, industryAverage, locationMultiplier) {
    // This is a simplified percentile calculation
    // In a real implementation, you would use statistical distributions

    const adjustedAverage = industryAverage * locationMultiplier;

    if (totalCompensation === adjustedAverage) {
      return 50; // Exactly at the median
    } else if (totalCompensation < adjustedAverage) {
      // Below average (0-50 percentile)
      return Math.round((totalCompensation / adjustedAverage) * 50);
    } else {
      // Above average (50-100 percentile)
      const ratio = totalCompensation / adjustedAverage;
      // Cap at reasonable maximum
      const cappedRatio = Math.min(ratio, 2);
      return Math.round(50 + ((cappedRatio - 1) / 1) * 50);
    }
  }

  /**
   * Display calculated results in the UI
   * @param {number} totalCompensation - Total compensation amount
   * @param {number} totalBenefits - Total benefits value
   * @param {number} industryAverage - Industry average salary
   * @param {number} locationAdjustedAverage - Location-adjusted average
   * @param {number} percentile - Calculated percentile
   * @param {Object} details - Additional user details
   */
  displayResults(
    totalCompensation,
    totalBenefits,
    industryAverage,
    locationAdjustedAverage,
    percentile,
    details
  ) {
    // Format values as currency
    const formattedTotal = this.formatCurrency(totalCompensation);
    const formattedBenefits = this.formatCurrency(totalBenefits);
    const formattedIndustryAvg = this.formatCurrency(industryAverage);
    const formattedLocationAvg = this.formatCurrency(locationAdjustedAverage);

    // Update compensation values
    if (this.totalCompensation) {
      this.totalCompensation.textContent = formattedTotal;
    }

    if (this.benefitsValue) {
      this.benefitsValue.textContent = formattedBenefits;
    }

    // Update comparison metrics
    if (this.salaryPercentile) {
      this.salaryPercentile.textContent = `${percentile}%`;
    }

    // Determine market position
    let positionText = '';
    let positionClass = '';

    if (percentile < 25) {
      positionText = 'Por debajo del mercado';
      positionClass = 'below-market';
    } else if (percentile < 45) {
      positionText = 'Ligeramente por debajo del mercado';
      positionClass = 'slightly-below';
    } else if (percentile <= 55) {
      positionText = 'En línea con el mercado';
      positionClass = 'at-market';
    } else if (percentile <= 75) {
      positionText = 'Por encima del mercado';
      positionClass = 'above-market';
    } else {
      positionText = 'Significativamente por encima del mercado';
      positionClass = 'significantly-above';
    }

    if (this.marketPosition) {
      this.marketPosition.textContent = positionText;
      this.marketPosition.className = positionClass;
    }

    // Location adjustment
    if (this.locationAdjustment) {
      const locationName = this.getLocationName(details.location);
      this.locationAdjustment.textContent = `Ajuste por ubicación (${locationName}): ${Math.round(
        (1 - this.locationMultipliers[details.location]) * 100
      )}% menos que Lima`;
    }

    // Generate salary comparison chart
    if (this.salaryChart) {
      this.generateSalaryChart(
        totalCompensation,
        totalBenefits,
        industryAverage,
        locationAdjustedAverage
      );
    }

    // Generate recommendations
    if (this.recommendationsSection) {
      this.generateRecommendations(totalCompensation, percentile, locationAdjustedAverage, details);
    }

    // Show the results section with animation
    this.resultSection.style.display = 'block';

    // Scroll to results
    setTimeout(() => {
      this.resultSection.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }, 100);

    // Log the calculation for analytics
    this.logCalculation({
      totalCompensation,
      totalBenefits,
      industryAverage,
      locationAdjustedAverage,
      percentile,
      details,
    });
  }

  /**
   * Generate salary comparison chart
   * @param {number} totalCompensation - Total compensation amount
   * @param {number} totalBenefits - Total benefits value
   * @param {number} industryAverage - Industry average
   * @param {number} locationAdjustedAverage - Location adjusted average
   */
  generateSalaryChart(totalCompensation, totalBenefits, industryAverage, locationAdjustedAverage) {
    // This is a simplified visualization
    // In a real app, you would use a chart library like Chart.js

    // Calculate bar heights as percentages (max 100%)
    const maxValue = Math.max(totalCompensation, industryAverage, locationAdjustedAverage);
    const userBarHeight = Math.min(100, (totalCompensation / maxValue) * 100);
    const industryBarHeight = Math.min(100, (industryAverage / maxValue) * 100);
    const locationBarHeight = Math.min(100, (locationAdjustedAverage / maxValue) * 100);

    // Create the chart HTML
    let chartContent = `
      <div class="comparison-chart-container">
        <div class="chart-bar-container">
          <div class="chart-bar your-salary" style="height: ${userBarHeight}%;">
            <span class="chart-value">${this.formatCurrency(totalCompensation)}</span>
          </div>
          <div class="chart-label">Tu Compensación</div>
        </div>
        
        <div class="chart-bar-container">
          <div class="chart-bar industry-avg" style="height: ${industryBarHeight}%;">
            <span class="chart-value">${this.formatCurrency(industryAverage)}</span>
          </div>
          <div class="chart-label">Promedio Industria</div>
        </div>
        
        <div class="chart-bar-container">
          <div class="chart-bar location-avg" style="height: ${locationBarHeight}%;">
            <span class="chart-value">${this.formatCurrency(locationAdjustedAverage)}</span>
          </div>
          <div class="chart-label">Ajustado por Ubicación</div>
        </div>
      </div>
    `;

    // Add salary breakdown
    chartContent += `
      <div class="salary-breakdown">
        <h4>Desglose de tu compensación:</h4>
        <div class="breakdown-item">
          <span>Salario Base:</span>
          <span>${this.formatCurrency(totalCompensation - totalBenefits)}</span>
        </div>
        <div class="breakdown-item">
          <span>Beneficios:</span>
          <span>${this.formatCurrency(totalBenefits)}</span>
        </div>
        <div class="breakdown-item total">
          <span>Total:</span>
          <span>${this.formatCurrency(totalCompensation)}</span>
        </div>
      </div>
    `;

    this.salaryChart.innerHTML = chartContent;
  }

  /**
   * Generate personalized recommendations based on salary comparison
   * @param {number} totalCompensation - Total compensation amount
   * @param {number} percentile - Calculated percentile
   * @param {number} marketAverage - Market average for comparison
   * @param {Object} details - User details
   */
  generateRecommendations(totalCompensation, percentile, marketAverage, details) {
    let recommendations = `<ul>`;

    // Compensation positioning recommendations
    if (percentile < 25) {
      recommendations += `
        <li>Tu compensación está por debajo del mercado. Considera preparar una solicitud de aumento basada en tu valor y contribución.</li>
        <li>Evalúa opciones de capacitación para mejorar tus habilidades y certificaciones que aumenten tu valor en el mercado.</li>
      `;
    } else if (percentile < 45) {
      recommendations += `
        <li>Tu compensación está ligeramente por debajo del promedio. Documenta tus logros para tu próxima evaluación.</li>
        <li>Busca oportunidades para asumir más responsabilidades que justifiquen un aumento salarial.</li>
      `;
    } else if (percentile <= 55) {
      recommendations += `
        <li>Tu compensación está alineada con el mercado. Para seguir creciendo, considera desarrollar habilidades especializadas.</li>
        <li>Evalúa si tu paquete de beneficios es completo o si podrías negociar mejoras en áreas como seguro, educación o flexibilidad.</li>
      `;
    } else {
      recommendations += `
        <li>Tu compensación está por encima del mercado. Enfócate en demostrar consistentemente el valor que aportas.</li>
        <li>Considera negociar beneficios adicionales como flexibilidad laboral o desarrollo profesional.</li>
      `;
    }

    // Education-based recommendations
    if (details.educationLevel === 'secundaria') {
      recommendations += `
        <li>Considera cursos técnicos o certificaciones específicas para tu industria que podrían aumentar significativamente tu valor en el mercado.</li>
      `;
    } else if (details.educationLevel === 'tecnica') {
      recommendations += `
        <li>Evalúa si una especialización o diplomado podría potenciar tu perfil profesional y aumentar tus opciones de crecimiento salarial.</li>
      `;
    } else if (details.educationLevel === 'universidad') {
      recommendations += `
        <li>Considera una especialización o maestría que complemente tu formación y te permita acceder a posiciones mejor remuneradas en tu sector.</li>
      `;
    }

    // Industry-specific recommendations
    switch (details.industry) {
      case 'technology':
        recommendations += `
          <li>El sector tecnológico valora las certificaciones actualizadas y la experiencia con tecnologías emergentes. Invierte en formación continua.</li>
        `;
        break;
      case 'finance':
        recommendations += `
          <li>Considera certificaciones financieras reconocidas como CFA, ACCA o especializaciones en fintech que aumenten tu valor en el mercado.</li>
        `;
        break;
      case 'healthcare':
        recommendations += `
          <li>Las especializaciones médicas o certificaciones en áreas de alta demanda pueden incrementar significativamente tu potencial salarial.</li>
        `;
        break;
    }

    // Experience-based recommendations
    if (details.experienceYears < 3) {
      recommendations += `
        <li>Con menos de 3 años de experiencia, enfócate en aprendizaje acelerado y desarrollo de habilidades prácticas para posicionarte para un ascenso.</li>
      `;
    } else if (details.experienceYears >= 10) {
      recommendations += `
        <li>Con tu nivel de experiencia, considera roles de liderazgo, mentoría o consultoría que suelen tener mejor compensación.</li>
      `;
    }

    recommendations += `</ul>`;

    this.recommendationsSection.innerHTML = recommendations;
  }

  /**
   * Get human-readable location name
   * @param {string} locationKey - Location key from form
   * @returns {string} Human-readable location name
   */
  getLocationName(locationKey) {
    const locationNames = {
      lima: 'Lima',
      callao: 'Callao',
      arequipa: 'Arequipa',
      cusco: 'Cusco',
      trujillo: 'Trujillo',
      piura: 'Piura',
      chiclayo: 'Chiclayo',
      huancayo: 'Huancayo',
      iquitos: 'Iquitos',
      tacna: 'Tacna',
      other: 'Otras regiones',
    };

    return locationNames[locationKey] || locationKey;
  }

  /**
   * Format currency
   * @param {number} value - Value to format
   * @returns {string} Formatted currency string
   */
  formatCurrency(value) {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      maximumFractionDigits: 0,
    }).format(value);
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

    const container = document.querySelector('.salary-compare-calculator');
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
        event: 'salaryComparison',
        timestamp: new Date().toISOString(),
        ...data,
      });
    }
  }
}

// Export the calculator class
window.SalaryCompareCalculator = SalaryCompareCalculator;
