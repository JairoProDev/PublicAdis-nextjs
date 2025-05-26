/**
 * PropertyValueCalculator.js
 * A comprehensive tool for estimating property values based on multiple factors
 */

class PropertyValueCalculator {
  constructor() {
    this.initialized = false;
    this.basePrices = {
      centro: 3500, // Centro Histórico
      residencial: 2800, // Zona Residencial
      comercial: 4200, // Zona Comercial
      periferica: 2000, // Zona Periférica
      rural: 1200, // Zona Rural
    };

    this.typeMultipliers = {
      casa: 1.0, // Casa
      departamento: 1.1, // Departamento
      terreno: 0.8, // Terreno
      local: 1.3, // Local Comercial
      oficina: 1.2, // Oficina
    };

    // Cache DOM elements
    this.form = null;
    this.resultSection = null;
    this.valueAmount = null;
    this.valueRange = null;
    this.tipsList = null;
  }

  /**
   * Initialize the calculator with DOM elements and event listeners
   */
  init() {
    // If already initialized, don't do it again
    if (this.initialized) return;

    // Get DOM elements
    this.form = document.getElementById('property-value-form');
    this.resultSection = document.getElementById('property-value-result');
    this.valueAmount = document.getElementById('property-value-amount');
    this.valueRange = document.getElementById('property-value-range');
    this.tipsList = document.getElementById('property-value-tips');

    // Make sure all elements exist
    if (
      !this.form ||
      !this.resultSection ||
      !this.valueAmount ||
      !this.valueRange ||
      !this.tipsList
    ) {
      console.error('PropertyValueCalculator: Missing required DOM elements');
      return;
    }

    // Add event listener to form submission
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.calculateValue();
    });

    // Additional fields validation and interaction
    const propertyType = document.getElementById('property-type');
    const bedroomsField = document.getElementById('property-bedrooms');
    const bathroomsField = document.getElementById('property-bathrooms');
    const additionalFeaturesSection = document.getElementById('additional-features-section');

    // Disable bedrooms and bathrooms for terreno (land)
    if (propertyType && bedroomsField && bathroomsField && additionalFeaturesSection) {
      propertyType.addEventListener('change', () => {
        const isLand = propertyType.value === 'terreno';
        bedroomsField.disabled = isLand;
        bathroomsField.disabled = isLand;

        // Toggle appropriate fields based on property type
        additionalFeaturesSection.style.opacity = isLand ? '0.5' : '1';

        // Clear values if disabled
        if (isLand) {
          bedroomsField.value = '';
          bathroomsField.value = '';
        }
      });
    }

    // Mark as initialized
    this.initialized = true;

    return this;
  }

  /**
   * Calculate property value based on form inputs
   */
  calculateValue() {
    // Get input values
    const propertyType = document.getElementById('property-type').value;
    const area = parseFloat(document.getElementById('property-area').value) || 0;
    const location = document.getElementById('property-location').value;
    const bedrooms = parseInt(document.getElementById('property-bedrooms').value) || 0;
    const bathrooms = parseInt(document.getElementById('property-bathrooms').value) || 0;
    const age = parseInt(document.getElementById('property-age').value) || 0;

    const hasParking = document.getElementById('property-parking').checked;
    const hasGarden = document.getElementById('property-garden').checked;
    const hasSecurity = document.getElementById('property-security').checked;

    // Validate required inputs
    if (!propertyType || !area || !location) {
      this.showToolAlert(
        'Por favor completa los campos obligatorios: tipo de propiedad, área y zona.',
        'error'
      );
      return;
    }

    // Additional validation
    if (area <= 0) {
      this.showToolAlert('El área debe ser un valor positivo mayor a cero.', 'error');
      return;
    }

    if (bedrooms < 0 || bathrooms < 0 || age < 0) {
      this.showToolAlert('Los valores numéricos no pueden ser negativos.', 'error');
      return;
    }

    // Calculate base value
    let baseValue = area * this.basePrices[location] * this.typeMultipliers[propertyType];

    // Adjustments based on features
    let adjustments = 0;

    if (propertyType !== 'terreno') {
      // Age adjustment (decrease value by 0.5% per year, max 25%)
      const ageAdjustment = Math.min(age * 0.005, 0.25);

      // Rooms adjustment
      const roomsAdjustment = bedrooms * 0.05 + bathrooms * 0.03;

      // Additional features
      const featuresAdjustment =
        (hasParking ? 0.05 : 0) + (hasGarden ? 0.04 : 0) + (hasSecurity ? 0.03 : 0);

      adjustments = roomsAdjustment + featuresAdjustment - ageAdjustment;
    } else {
      // For land, only security matters
      adjustments = hasSecurity ? 0.03 : 0;
    }

    // Calculate final value with adjustments
    const finalValue = baseValue * (1 + adjustments);

    // Add 10% range for market fluctuations
    const minValue = finalValue * 0.9;
    const maxValue = finalValue * 1.1;

    // Display the results
    this.displayResults(finalValue, minValue, maxValue, {
      propertyType,
      location,
      age,
      hasParking,
      area,
    });
  }

  /**
   * Display calculated results in the UI
   * @param {number} finalValue - The calculated property value
   * @param {number} minValue - The minimum range value
   * @param {number} maxValue - The maximum range value
   * @param {Object} propertyDetails - Details about the property for recommendations
   */
  displayResults(finalValue, minValue, maxValue, propertyDetails) {
    // Format the values as Peruvian currency
    const formatter = new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      maximumFractionDigits: 0,
    });

    // Update the DOM with values
    this.valueAmount.textContent = formatter.format(finalValue);
    this.valueRange.textContent = `Rango: ${formatter.format(minValue)} - ${formatter.format(
      maxValue
    )}`;

    // Generate recommendations
    this.generateRecommendations(propertyDetails);

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
    this.logCalculation(finalValue, propertyDetails);
  }

  /**
   * Generate personalized recommendations based on property details
   * @param {Object} details - Property details to base recommendations on
   */
  generateRecommendations(details) {
    // Clear previous recommendations
    this.tipsList.innerHTML = '';

    // Add tips based on property characteristics
    const addTip = text => {
      const li = document.createElement('li');
      li.textContent = text;
      this.tipsList.appendChild(li);
    };

    // Age-based recommendations
    if (details.age > 15) {
      addTip('Considera renovar aspectos clave para aumentar el valor hasta un 20%.');
    } else if (details.age > 5 && details.age <= 15) {
      addTip('Un mantenimiento regular puede mantener el valor de la propiedad a largo plazo.');
    }

    // Parking recommendations
    if (
      !details.hasParking &&
      (details.propertyType === 'casa' || details.propertyType === 'departamento')
    ) {
      addTip('Añadir estacionamiento podría incrementar el valor hasta un 5%.');
    }

    // Location-specific advice
    if (details.location === 'centro' || details.location === 'comercial') {
      addTip('Las propiedades en esta zona tienen alta demanda, un buen momento para vender.');
    } else if (details.location === 'residencial') {
      addTip(
        'Las zonas residenciales mantienen un valor estable, ideal para inversiones a largo plazo.'
      );
    } else if (details.location === 'rural') {
      addTip('Destaca los atractivos naturales y la tranquilidad como ventajas principales.');
    }

    // Property type specific advice
    if (details.propertyType === 'terreno') {
      addTip('Consulta sobre los parámetros urbanísticos para maximizar el valor del terreno.');
    } else if (details.propertyType === 'local') {
      addTip('Resalta el tráfico peatonal y la accesibilidad para atraer compradores comerciales.');
    } else if (details.propertyType === 'oficina') {
      addTip('Destaca aspectos como conectividad a internet y posibilidades de expansión.');
    }

    // Area-based recommendations
    if (details.area > 200) {
      addTip(
        'Propiedades amplias pueden tener mayor valor por metro cuadrado si se distribuyen bien los espacios.'
      );
    }

    // Always add this tip
    addTip(
      'Resalta las características únicas de tu propiedad en tu anuncio para atraer más interesados.'
    );
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

    const container = document.querySelector('.property-value-calculator');
    container.insertBefore(alertElement, container.firstChild);

    setTimeout(() => alertElement.remove(), 5000);
  }

  /**
   * Log calculation for analytics
   * @param {number} value - Calculated property value
   * @param {Object} details - Property details
   */
  logCalculation(value, details) {
    // For future analytics implementation
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'propertyValueCalculation',
        timestamp: new Date().toISOString(),
        calculatedValue: value,
        propertyDetails: details,
      });
    }
  }
}

// Export the calculator class
window.PropertyValueCalculator = PropertyValueCalculator;
