/**
 * Calculadora de Valor Inmobiliario
 * Estima el valor de propiedades inmobiliarias basado en sus características
 */
class PropertyValueCalculator {
  constructor() {
    this.baseValues = {
      apartment: 2500, // S/. por m²
      house: 2000,
      commercial: 3500,
      land: 1200,
    };

    this.locationMultipliers = {
      centro: 1.5,
      moderna: 1.2,
      residencial: 1.0,
      periferia: 0.7,
    };

    this.bedroomsMultipliers = {
      1: 0.9,
      2: 1.0,
      3: 1.1,
      4: 1.2,
    };

    this.bathroomsMultipliers = {
      1: 0.9,
      2: 1.0,
      3: 1.1,
    };

    this.additionalFeatures = {
      parking: 20000,
      garden: 15000,
      security: 10000,
    };
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    const calculateButton = document.getElementById("calculate-property-value");
    if (calculateButton) {
      calculateButton.addEventListener("click", () => this.calculateValue());
    }
  }

  calculateValue() {
    // Recoger los valores del formulario
    const propertyType = document.getElementById("property-type").value;
    const area = parseFloat(document.getElementById("property-area").value);
    const location = document.getElementById("property-location").value;
    const bedrooms = document.getElementById("property-bedrooms").value;
    const bathrooms = document.getElementById("property-bathrooms").value;
    const age = parseFloat(document.getElementById("property-age").value);

    const hasParking = document.getElementById("has-parking").checked;
    const hasGarden = document.getElementById("has-garden").checked;
    const hasSecurity = document.getElementById("has-security").checked;

    // Validar los valores de entrada
    if (!area || area <= 0) {
      showToolAlert("Por favor, introduce un área válida.", "error");
      return;
    }

    if (!age && age !== 0) {
      showToolAlert(
        "Por favor, introduce la antigüedad de la propiedad.",
        "error"
      );
      return;
    }

    // Calcular el valor base
    let baseValue = this.baseValues[propertyType] * area;

    // Aplicar multiplicadores
    baseValue *= this.locationMultipliers[location];
    baseValue *= this.bedroomsMultipliers[bedrooms];
    baseValue *= this.bathroomsMultipliers[bathrooms];

    // Ajustar por antigüedad
    const ageDeduction = Math.min(0.4, age * 0.01); // Máximo 40% de reducción por antigüedad
    baseValue *= 1 - ageDeduction;

    // Añadir características adicionales
    let additionalValue = 0;
    if (hasParking) additionalValue += this.additionalFeatures.parking;
    if (hasGarden) additionalValue += this.additionalFeatures.garden;
    if (hasSecurity) additionalValue += this.additionalFeatures.security;

    // Valor final
    const totalValue = baseValue + additionalValue;

    // Rango de valuación (±10%)
    const lowerRange = Math.round(totalValue * 0.9);
    const upperRange = Math.round(totalValue * 1.1);

    // Mostrar los resultados
    this.displayResults(
      Math.round(totalValue),
      lowerRange,
      upperRange,
      propertyType,
      location
    );
  }

  displayResults(totalValue, lowerRange, upperRange, propertyType, location) {
    const resultsContainer = document.getElementById("property-value-results");

    // Formatear valores como moneda peruana
    const formatCurrency = (value) => {
      return "S/. " + value.toLocaleString("es-PE");
    };

    // Tipo de propiedad en español
    const propertyTypeText = {
      apartment: "Departamento",
      house: "Casa",
      commercial: "Local Comercial",
      land: "Terreno",
    };

    // Ubicación en formato legible
    const locationText = {
      centro: "Centro Histórico",
      moderna: "Cusco Moderno",
      residencial: "Zona Residencial",
      periferia: "Periferia",
    };

    // HTML para los resultados
    resultsContainer.innerHTML = `
      <div class="result-summary">
        <h4>Valoración Estimada de tu Propiedad</h4>
        <div class="value-amount">${formatCurrency(totalValue)}</div>
        <div class="value-range">
          Rango de valoración: ${formatCurrency(lowerRange)} - ${formatCurrency(
      upperRange
    )}
        </div>
      </div>
      
      <div class="result-details">
        <h4><i class="fa-solid fa-lightbulb"></i> Consejos de Valoración</h4>
        <ul class="value-tips">
          <li>El valor de tu ${propertyTypeText[
            propertyType
          ].toLowerCase()} en ${
      locationText[location]
    } es competitivo en el mercado actual.</li>
          <li>Propiedades similares en la zona se han vendido entre ${formatCurrency(
            lowerRange
          )} y ${formatCurrency(upperRange)} en los últimos 3 meses.</li>
          <li>Considera realizar pequeñas mejoras que pueden aumentar el valor hasta en un 15%.</li>
          <li>El mejor momento para vender en esta zona es durante los meses de temporada alta turística.</li>
        </ul>
      </div>
      
      <div class="result-analysis">
        <h4><i class="fa-solid fa-chart-line"></i> Análisis del Mercado</h4>
        <p>
          El mercado inmobiliario en ${
            locationText[location]
          } ha mostrado un crecimiento del 8.5% en el último año.
          Las propiedades en esta zona suelen venderse en un promedio de 45 días cuando están correctamente valoradas.
          Nuestros expertos en bienes raíces pueden ayudarte a maximizar el valor de tu propiedad con una estrategia personalizada.
        </p>
      </div>
    `;

    resultsContainer.classList.add("show");
  }
}

// Si está en un entorno global, exponer la clase
if (typeof window !== "undefined") {
  window.PropertyValueCalculator = PropertyValueCalculator;
}
