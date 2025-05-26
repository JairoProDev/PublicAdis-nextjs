/**
 * VehiclePriceCalculator.js
 * A tool for estimating fair market value of vehicles based on multiple factors
 */

class VehiclePriceCalculator {
  constructor() {
    this.initialized = false;

    // Reference base prices by vehicle type (in Peruvian Soles)
    this.basePrices = {
      sedan: 35000,
      suv: 45000,
      pickup: 50000,
      hatchback: 28000,
      van: 42000,
      luxury: 80000,
      motorcycle: 12000,
    };

    // Brand multipliers
    this.brandMultipliers = {
      toyota: 1.1,
      nissan: 1.05,
      hyundai: 1.0,
      kia: 0.95,
      chevrolet: 0.9,
      volkswagen: 1.0,
      honda: 1.15,
      ford: 1.0,
      mercedes: 1.25,
      bmw: 1.2,
      audi: 1.15,
      suzuki: 0.9,
      mazda: 1.05,
      mitsubishi: 1.0,
      renault: 0.9,
      subaru: 1.15,
      jeep: 1.1,
      changan: 0.8,
      great_wall: 0.8,
      jac: 0.75,
      other: 0.85,
    };

    // Cache DOM elements
    this.form = null;
    this.resultSection = null;
    this.valueAmount = null;
    this.valueRange = null;
    this.marketComparison = null;
    this.conditionDescription = null;
    this.depreciationChart = null;
  }

  /**
   * Initialize the calculator with DOM elements and event listeners
   */
  init() {
    // If already initialized, don't do it again
    if (this.initialized) return;

    // Get DOM elements
    this.form = document.getElementById('vehicle-price-form');
    this.resultSection = document.getElementById('vehicle-price-result');
    this.valueAmount = document.getElementById('vehicle-value-amount');
    this.valueRange = document.getElementById('vehicle-value-range');
    this.marketComparison = document.getElementById('market-comparison');
    this.conditionDescription = document.getElementById('condition-description');
    this.depreciationChart = document.getElementById('depreciation-chart');

    // Make sure all required elements exist
    if (
      !this.form ||
      !this.resultSection ||
      !this.valueAmount ||
      !this.valueRange ||
      !this.marketComparison ||
      !this.conditionDescription
    ) {
      console.error('VehiclePriceCalculator: Missing required DOM elements');
      return;
    }

    // Add event listener to form submission
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.calculatePrice();
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
    const vehicleType = document.getElementById('vehicle-type');
    const motorcycleFields = document.getElementById('motorcycle-fields');
    const carFields = document.getElementById('car-fields');
    const mileageUnit = document.getElementById('mileage-unit');

    if (vehicleType && motorcycleFields && carFields) {
      vehicleType.addEventListener('change', () => {
        const isMotorcycle = vehicleType.value === 'motorcycle';

        motorcycleFields.style.display = isMotorcycle ? 'block' : 'none';
        carFields.style.display = isMotorcycle ? 'none' : 'block';

        if (mileageUnit) {
          mileageUnit.textContent = isMotorcycle ? 'km' : 'km';
        }
      });
    }

    // Condition slider with visual indicator
    const conditionSlider = document.getElementById('vehicle-condition');
    const conditionValue = document.getElementById('condition-value');

    if (conditionSlider && conditionValue) {
      conditionSlider.addEventListener('input', () => {
        const value = conditionSlider.value;
        conditionValue.textContent = this.getConditionLabel(value);

        // Update slider color based on value
        const percentage =
          ((value - conditionSlider.min) / (conditionSlider.max - conditionSlider.min)) * 100;
        conditionSlider.style.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;
      });

      // Trigger on load to set initial value
      conditionSlider.dispatchEvent(new Event('input'));
    }
  }

  /**
   * Get descriptive label for condition value
   * @param {number} value - Condition value from slider
   * @returns {string} Condition label
   */
  getConditionLabel(value) {
    const labels = ['Malo', 'Regular', 'Bueno', 'Muy Bueno', 'Excelente'];

    // Convert 1-10 value to 0-4 index
    const index = Math.floor((value - 1) / 2);
    return labels[index];
  }

  /**
   * Calculate vehicle price based on form inputs
   */
  calculatePrice() {
    // Get input values
    const vehicleType = document.getElementById('vehicle-type').value;
    const brand = document.getElementById('vehicle-brand').value;
    const year = parseInt(document.getElementById('vehicle-year').value) || 0;
    const mileage = parseInt(document.getElementById('vehicle-mileage').value) || 0;
    const condition = parseInt(document.getElementById('vehicle-condition').value) || 5;

    // Get optional fields based on vehicle type
    let transmissionType = 'manual';
    let engineSize = 0;
    let fuelType = 'gasolina';
    let cc = 0;

    if (vehicleType === 'motorcycle') {
      cc = parseInt(document.getElementById('motorcycle-cc').value) || 0;
    } else {
      transmissionType = document.getElementById('transmission-type').value;
      engineSize = parseFloat(document.getElementById('engine-size').value) || 0;
      fuelType = document.getElementById('fuel-type').value;
    }

    // Validate required inputs
    if (!vehicleType || !brand || !year || year < 1970 || year > new Date().getFullYear() + 1) {
      this.showToolAlert(
        'Por favor completa correctamente el tipo de vehículo, marca y año (1970 - actual).',
        'error'
      );
      return;
    }

    if (mileage < 0) {
      this.showToolAlert('El kilometraje no puede ser negativo.', 'error');
      return;
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    // Calculate base price
    let basePrice = this.basePrices[vehicleType] || this.basePrices.sedan;

    // Calculate motorcycle price differently
    if (vehicleType === 'motorcycle') {
      if (!cc || cc <= 0) {
        this.showToolAlert('Por favor ingresa un valor válido para el cilindraje (cc).', 'error');
        return;
      }

      // Adjust base price by cc
      if (cc <= 150) {
        basePrice = 4000 + cc * 15;
      } else if (cc <= 250) {
        basePrice = 6000 + (cc - 150) * 20;
      } else if (cc <= 500) {
        basePrice = 8000 + (cc - 250) * 25;
      } else if (cc <= 1000) {
        basePrice = 14000 + (cc - 500) * 30;
      } else {
        basePrice = 20000 + (cc - 1000) * 15;
      }
    }

    // Apply brand multiplier
    const brandMultiplier = this.brandMultipliers[brand] || this.brandMultipliers.other;
    basePrice *= brandMultiplier;

    // Age depreciation (loses ~10% per year, more in first years, less in later years)
    let ageMultiplier = 1.0;
    if (age > 0) {
      // Non-linear depreciation curve
      ageMultiplier = Math.pow(0.9, Math.min(age, 15));

      // Additional depreciation for very old vehicles
      if (age > 15) {
        ageMultiplier -= 0.01 * (age - 15);
      }

      // Collectible adjustment (vintage vehicles can appreciate)
      if (age > 30 && condition > 7) {
        ageMultiplier += 0.005 * (age - 30);
      }

      // Ensure multiplier doesn't go too low
      ageMultiplier = Math.max(ageMultiplier, 0.1);
    }

    // Mileage adjustment
    let mileageMultiplier = 1.0;
    const isMotorcycle = vehicleType === 'motorcycle';
    const averageYearlyMileage = isMotorcycle ? 5000 : 15000;
    const expectedMileage = age * averageYearlyMileage;

    if (mileage > 0) {
      if (mileage > expectedMileage) {
        // Higher than expected mileage (penalty)
        const excessMileage = mileage - expectedMileage;
        const mileagePenalty = isMotorcycle
          ? (excessMileage / 10000) * 0.05
          : (excessMileage / 20000) * 0.05;
        mileageMultiplier = Math.max(0.7, 1 - mileagePenalty);
      } else if (mileage < expectedMileage) {
        // Lower than expected mileage (bonus)
        const savingMileage = expectedMileage - mileage;
        const mileageBonus = isMotorcycle
          ? (savingMileage / 10000) * 0.03
          : (savingMileage / 20000) * 0.03;
        mileageMultiplier = Math.min(1.15, 1 + mileageBonus);
      }
    }

    // Condition adjustment (1-10 scale)
    const conditionMultiplier = 0.7 + ((condition - 1) / 9) * 0.6;

    // Additional features for non-motorcycles
    let featuresMultiplier = 1.0;
    if (vehicleType !== 'motorcycle') {
      // Transmission adjustment
      if (transmissionType === 'automatica') {
        featuresMultiplier += 0.05;
      }

      // Engine size adjustment
      if (engineSize > 0) {
        if (engineSize <= 1.4) {
          // Small engines
          featuresMultiplier -= 0.03;
        } else if (engineSize > 2.5) {
          // Large engines
          featuresMultiplier += 0.08;
        }
      }

      // Fuel type adjustment
      if (fuelType === 'diesel') {
        featuresMultiplier += 0.03;
      } else if (fuelType === 'hibrido') {
        featuresMultiplier += 0.1;
      } else if (fuelType === 'electrico') {
        featuresMultiplier += 0.15;
      }
    }

    // Calculate final price
    let finalPrice =
      basePrice * ageMultiplier * mileageMultiplier * conditionMultiplier * featuresMultiplier;

    // Apply market adjustments
    const marketFluctuation = 0.1; // 10% market fluctuation
    const minValue = finalPrice * (1 - marketFluctuation);
    const maxValue = finalPrice * (1 + marketFluctuation);

    // Display the results
    this.displayResults(finalPrice, minValue, maxValue, {
      vehicleType,
      brand,
      year,
      age,
      mileage,
      condition,
      expectedMileage,
      isMotorcycle,
    });
  }

  /**
   * Display calculated results in the UI
   * @param {number} finalPrice - Calculated vehicle price
   * @param {number} minValue - Minimum market value
   * @param {number} maxValue - Maximum market value
   * @param {Object} details - Vehicle details for recommendations
   */
  displayResults(finalPrice, minValue, maxValue, details) {
    // Format the values as currency
    const formatter = new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      maximumFractionDigits: 0,
    });

    // Update the DOM with values
    this.valueAmount.textContent = formatter.format(finalPrice);
    this.valueRange.textContent = `Rango: ${formatter.format(minValue)} - ${formatter.format(
      maxValue
    )}`;

    // Generate market comparison
    this.generateMarketComparison(details);

    // Generate condition description
    this.generateConditionDescription(details);

    // Generate depreciation chart if element exists
    if (this.depreciationChart) {
      this.generateDepreciationChart(details, finalPrice);
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

    // Log the calculation (for debugging or analytics)
    this.logCalculation(finalPrice, details);
  }

  /**
   * Generate market comparison analysis
   * @param {Object} details - Vehicle details
   */
  generateMarketComparison(details) {
    const { vehicleType, brand, mileage, condition, expectedMileage, isMotorcycle } = details;

    let comparison = '';

    // Compare mileage to average
    if (mileage > 0) {
      if (mileage > expectedMileage * 1.3) {
        comparison += `<li>El kilometraje es significativamente mayor al promedio (${mileage.toLocaleString()} vs ${expectedMileage.toLocaleString()} esperado), lo que reduce el valor.</li>`;
      } else if (mileage < expectedMileage * 0.7) {
        comparison += `<li>El kilometraje es menor al promedio (${mileage.toLocaleString()} vs ${expectedMileage.toLocaleString()} esperado), lo que aumenta el valor.</li>`;
      } else {
        comparison += `<li>El kilometraje está dentro del rango promedio para un vehículo de esta edad.</li>`;
      }
    }

    // Age analysis
    const age = details.age;
    if (age <= 3) {
      comparison += `<li>El vehículo es relativamente nuevo (${age} años), lo que mantiene un buen valor de mercado.</li>`;
    } else if (age >= 10) {
      comparison += `<li>El vehículo tiene ${age} años, lo que impacta significativamente en su valor de mercado.</li>`;
    }

    // Brand perception in Peruvian market
    if (['toyota', 'honda', 'mazda', 'subaru'].includes(brand)) {
      comparison += `<li>La marca ${this.capitalizeFirstLetter(
        brand
      )} es muy valorada por su durabilidad y mantiene bien su valor en el mercado peruano.</li>`;
    } else if (['mercedes', 'bmw', 'audi'].includes(brand)) {
      comparison += `<li>La marca ${this.capitalizeFirstLetter(
        brand
      )} tiene un alto valor inicial, pero puede tener una depreciación más rápida por costos de mantenimiento en Perú.</li>`;
    }

    // Condition impact
    if (condition >= 8) {
      comparison += `<li>El excelente estado del vehículo aumenta su valor considerablemente en el mercado.</li>`;
    } else if (condition <= 4) {
      comparison += `<li>El estado del vehículo requiere mejoras, lo que se refleja en una valoración más baja.</li>`;
    }

    // Vehicle type specific analysis
    if (isMotorcycle) {
      if (this.getVehicleCategory(details) === 'deportiva') {
        comparison += `<li>Las motocicletas deportivas suelen tener un mercado más específico pero con compradores dispuestos a pagar más.</li>`;
      }
    } else {
      // Car specific analysis
      if (vehicleType === 'suv') {
        comparison += `<li>Los SUVs mantienen mejor su valor en el mercado peruano debido a su alta demanda.</li>`;
      } else if (vehicleType === 'pickup') {
        comparison += `<li>Las camionetas tienen buena reventa en Perú, especialmente para uso comercial o en provincias.</li>`;
      }
    }

    this.marketComparison.innerHTML = comparison;
  }

  /**
   * Generate condition description based on vehicle details
   * @param {Object} details - Vehicle details
   */
  generateConditionDescription(details) {
    const { condition } = details;

    let description = '';

    switch (Math.floor((condition - 1) / 2)) {
      case 0: // 1-2: Malo
        description =
          'El vehículo presenta problemas mecánicos significativos, deterioro visible en carrocería/chasis, y requiere reparaciones importantes para operar correctamente.';
        break;
      case 1: // 3-4: Regular
        description =
          'El vehículo funciona pero presenta algunos problemas mecánicos, desgaste visible, y requiere mantenimiento para mejorar su condición.';
        break;
      case 2: // 5-6: Bueno
        description =
          'El vehículo funciona correctamente, presenta desgaste normal para su edad y kilometraje, y requiere solo mantenimiento regular.';
        break;
      case 3: // 7-8: Muy Bueno
        description =
          'El vehículo está en excelente estado mecánico, con mínimos detalles estéticos, historial de mantenimiento completo y sin problemas visibles.';
        break;
      case 4: // 9-10: Excelente
        description =
          'El vehículo está en condiciones casi perfectas, cuidado meticulosamente, sin problemas mecánicos o estéticos, y con mantenimiento documentado al día.';
        break;
    }

    this.conditionDescription.textContent = description;
  }

  /**
   * Generate depreciation chart
   * @param {Object} details - Vehicle details
   * @param {number} currentPrice - Current calculated price
   */
  generateDepreciationChart(details, currentPrice) {
    // This is a simplified implementation
    // In a real app, you would use a chart library like Chart.js

    const { age } = details;
    const currentYear = new Date().getFullYear();

    let chartContent = `
      <h4>Estimación de depreciación</h4>
      <div class="chart-container">
    `;

    // Calculate depreciation for 5 years
    for (let i = 0; i <= 5; i++) {
      const futureYear = currentYear + i;

      // Simplified depreciation formula
      const depreciationFactor = Math.pow(0.9, i);
      const futurePrice = currentPrice * depreciationFactor;

      // Calculate height percentage for visual bar (minimum 10%)
      const heightPercentage = Math.max(10, (futurePrice / currentPrice) * 100);

      chartContent += `
        <div class="chart-bar-container">
          <div class="chart-label">${futureYear}</div>
          <div class="chart-bar" style="height: ${heightPercentage}%;">
            <span class="chart-value">${this.formatCurrency(futurePrice)}</span>
          </div>
        </div>
      `;
    }

    chartContent += `</div>
      <p class="chart-note">Proyección basada en patrones típicos de depreciación. Valores reales pueden variar.</p>
    `;

    this.depreciationChart.innerHTML = chartContent;
  }

  /**
   * Get vehicle category based on details (for motorcycles)
   * @param {Object} details - Vehicle details
   * @returns {string} Vehicle category
   */
  getVehicleCategory(details) {
    // Simplified categorization logic
    if (!details.isMotorcycle) return 'auto';

    // This would be more sophisticated in a real implementation
    const cc = parseInt(document.getElementById('motorcycle-cc').value) || 0;

    if (cc > 600) return 'deportiva';
    if (cc < 200) return 'urbana';
    return 'touring';
  }

  /**
   * Capitalize first letter of a string
   * @param {string} string - Input string
   * @returns {string} Capitalized string
   */
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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

    const container = document.querySelector('.vehicle-price-calculator');
    container.insertBefore(alertElement, container.firstChild);

    setTimeout(() => alertElement.remove(), 5000);
  }

  /**
   * Log calculation for analytics
   * @param {number} value - Calculated vehicle value
   * @param {Object} details - Vehicle details
   */
  logCalculation(value, details) {
    // For future analytics implementation
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'vehiclePriceCalculation',
        timestamp: new Date().toISOString(),
        calculatedValue: value,
        vehicleDetails: details,
      });
    }
  }
}

// Export the calculator class
window.VehiclePriceCalculator = VehiclePriceCalculator;

// Use the age variable in the calculation
const calculateDepreciation = (initialValue, yearsPassed) => {
  const age = parseInt(yearsPassed);
  const annualDepreciation = 0.15; // 15% annual depreciation
  return initialValue * Math.pow(1 - annualDepreciation, age);
};
