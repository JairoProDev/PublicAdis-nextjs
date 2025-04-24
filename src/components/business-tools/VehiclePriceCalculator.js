/**
 * Calculadora de Precio de Vehículos
 * Estima el valor de mercado de vehículos usados
 */
class VehiclePriceCalculator {
  constructor() {
    this.baseValues = {
      sedan: 25000,
      suv: 40000,
      pickup: 35000,
      hatchback: 22000,
      van: 30000,
    };

    this.yearDepreciation = {
      0: 1.0, // nuevo
      1: 0.85, // 1 año
      2: 0.75, // 2 años
      3: 0.68, // 3 años
      4: 0.62, // 4 años
      5: 0.56, // 5 años
      6: 0.51, // 6 años
      7: 0.47, // 7 años
      8: 0.43, // 8 años
      9: 0.39, // 9 años
      10: 0.36, // 10 años
      15: 0.25, // 15 años
      20: 0.18, // 20+ años
    };

    this.brandFactors = {
      toyota: 1.15,
      nissan: 1.05,
      hyundai: 1.0,
      kia: 0.98,
      volkswagen: 1.05,
      chevrolet: 0.95,
      ford: 1.0,
      honda: 1.12,
      mazda: 1.08,
      suzuki: 0.92,
      other: 0.85,
    };

    this.conditionFactors = {
      excellent: 1.15,
      good: 1.0,
      fair: 0.85,
      poor: 0.7,
    };

    this.mileageFactors = {
      low: 1.1, // < 40,000 km
      medium: 1.0, // 40,000 - 100,000 km
      high: 0.85, // 100,000 - 180,000 km
      veryhigh: 0.7, // > 180,000 km
    };
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    const calculateButton = document.getElementById("calculate-vehicle-price");
    if (calculateButton) {
      calculateButton.addEventListener("click", () => this.calculatePrice());
    }

    // Actualizamos los rangos cuando se seleccionan
    const yearSelect = document.getElementById("vehicle-year");
    if (yearSelect) {
      yearSelect.addEventListener("change", () =>
        this.updateYearRange(yearSelect.value)
      );
    }

    const mileageSelect = document.getElementById("vehicle-mileage");
    if (mileageSelect) {
      mileageSelect.addEventListener("change", () =>
        this.updateMileageRange(mileageSelect.value)
      );
    }
  }

  updateYearRange(yearValue) {
    const yearRangeElement = document.getElementById("year-range");
    if (!yearRangeElement) return;

    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(yearValue);

    if (age === 0) {
      yearRangeElement.textContent = "Nuevo";
    } else if (age === 1) {
      yearRangeElement.textContent = "1 año";
    } else {
      yearRangeElement.textContent = `${age} años`;
    }
  }

  updateMileageRange(mileageValue) {
    const mileageRangeElement = document.getElementById("mileage-range");
    if (!mileageRangeElement) return;

    const mileageRanges = {
      low: "Menos de 40,000 km",
      medium: "Entre 40,000 y 100,000 km",
      high: "Entre 100,000 y 180,000 km",
      veryhigh: "Más de 180,000 km",
    };

    mileageRangeElement.textContent = mileageRanges[mileageValue];
  }

  calculatePrice() {
    // Recoger valores del formulario
    const vehicleType = document.getElementById("vehicle-type").value;
    const brand = document.getElementById("vehicle-brand").value;
    const year = parseInt(document.getElementById("vehicle-year").value);
    const condition = document.getElementById("vehicle-condition").value;
    const mileage = document.getElementById("vehicle-mileage").value;
    const extras = Array.from(
      document.querySelectorAll('input[name="extra"]:checked')
    ).map((el) => el.value);

    // Validar entrada
    if (!vehicleType || !brand || !year || !condition || !mileage) {
      showToolAlert(
        "Por favor, completa todos los campos del formulario.",
        "error"
      );
      return;
    }

    // Obtener valor base por tipo de vehículo
    let basePrice = this.baseValues[vehicleType];

    // Ajustar por año (depreciación)
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    // Calcular factor de depreciación
    let depreciationFactor = this.getDepreciationFactor(age);

    // Ajustar por marca
    const brandFactor = this.brandFactors[brand] || this.brandFactors.other;

    // Ajustar por condición
    const conditionFactor = this.conditionFactors[condition];

    // Ajustar por kilometraje
    const mileageFactor = this.mileageFactors[mileage];

    // Calcular precio base ajustado
    let adjustedPrice =
      basePrice *
      depreciationFactor *
      brandFactor *
      conditionFactor *
      mileageFactor;

    // Añadir extras
    let extrasValue = 0;
    extras.forEach((extra) => {
      switch (extra) {
        case "leather":
          extrasValue += 1500;
          break;
        case "sunroof":
          extrasValue += 2000;
          break;
        case "alloy":
          extrasValue += 1000;
          break;
        case "navigation":
          extrasValue += 1200;
          break;
        case "camera":
          extrasValue += 800;
          break;
      }
    });

    // Precio final
    const finalPrice = adjustedPrice + extrasValue;

    // Calcular rango de precio
    const lowerRange = finalPrice * 0.9;
    const upperRange = finalPrice * 1.1;

    // Mostrar resultados
    this.displayResults(
      finalPrice,
      lowerRange,
      upperRange,
      vehicleType,
      brand,
      year,
      condition,
      mileage,
      extras,
      extrasValue
    );
  }

  getDepreciationFactor(age) {
    // Si el año exacto existe en la tabla, lo usamos
    if (this.yearDepreciation[age] !== undefined) {
      return this.yearDepreciation[age];
    }

    // Si no, buscamos los años más cercanos para interpolación
    const years = Object.keys(this.yearDepreciation)
      .map(Number)
      .sort((a, b) => a - b);

    // Si es más antiguo que el último valor de la tabla
    if (age > years[years.length - 1]) {
      return this.yearDepreciation[years[years.length - 1]];
    }

    // Encontrar los años entre los que cae la edad
    let lowerYear = years[0];
    let upperYear = years[years.length - 1];

    for (let i = 0; i < years.length - 1; i++) {
      if (age >= years[i] && age < years[i + 1]) {
        lowerYear = years[i];
        upperYear = years[i + 1];
        break;
      }
    }

    // Interpolar linealmente entre los dos valores
    const lowerFactor = this.yearDepreciation[lowerYear];
    const upperFactor = this.yearDepreciation[upperYear];
    const ratio = (age - lowerYear) / (upperYear - lowerYear);

    return lowerFactor - ratio * (lowerFactor - upperFactor);
  }

  displayResults(
    price,
    lowerRange,
    upperRange,
    vehicleType,
    brand,
    year,
    condition,
    mileage,
    extras,
    extrasValue
  ) {
    const resultsContainer = document.getElementById("vehicle-price-results");

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
    const vehicleTypes = {
      sedan: "Sedán",
      suv: "SUV",
      pickup: "Pickup",
      hatchback: "Hatchback",
      van: "Van/Minivan",
    };

    const brandNames = {
      toyota: "Toyota",
      nissan: "Nissan",
      hyundai: "Hyundai",
      kia: "Kia",
      volkswagen: "Volkswagen",
      chevrolet: "Chevrolet",
      ford: "Ford",
      honda: "Honda",
      mazda: "Mazda",
      suzuki: "Suzuki",
      other: "Otra marca",
    };

    const conditionNames = {
      excellent: "Excelente",
      good: "Bueno",
      fair: "Regular",
      poor: "Pobre",
    };

    const mileageRanges = {
      low: "Menos de 40,000 km",
      medium: "Entre 40,000 y 100,000 km",
      high: "Entre 100,000 y 180,000 km",
      veryhigh: "Más de 180,000 km",
    };

    const extraNames = {
      leather: "Asientos de cuero",
      sunroof: "Techo solar",
      alloy: "Aros de aleación",
      navigation: "Sistema de navegación",
      camera: "Cámara de retroceso",
    };

    // Convertir extras a lista legible
    const extrasList = extras.map((e) => extraNames[e]).join(", ");

    // HTML para los resultados
    resultsContainer.innerHTML = `
      <div class="result-summary">
        <h4>Precio Estimado de Mercado</h4>
        <div class="value-amount">${formatCurrency(price)}</div>
        <div class="value-range">
          Rango: ${formatCurrency(lowerRange)} - ${formatCurrency(upperRange)}
        </div>
      </div>
      
      <div class="vehicle-features">
        <div class="feature">
          <i class="fa-solid fa-car"></i>
          <span>${vehicleTypes[vehicleType]} ${
      brandNames[brand]
    } (${year})</span>
        </div>
        <div class="feature">
          <i class="fa-solid fa-gauge"></i>
          <span>${mileageRanges[mileage]}</span>
        </div>
        <div class="feature">
          <i class="fa-solid fa-star"></i>
          <span>Estado: ${conditionNames[condition]}</span>
        </div>
      </div>
      
      <div class="price-breakdown">
        <h4><i class="fa-solid fa-calculator"></i> Desglose del Precio</h4>
        <div class="breakdown-item">
          <div class="breakdown-label">Valor base</div>
          <div class="breakdown-value">${formatCurrency(
            this.baseValues[vehicleType]
          )}</div>
        </div>
        <div class="breakdown-item">
          <div class="breakdown-label">Ajuste por año (${year})</div>
          <div class="breakdown-value">-${Math.round(
            (1 - this.getDepreciationFactor(new Date().getFullYear() - year)) *
              100
          )}%</div>
        </div>
        <div class="breakdown-item">
          <div class="breakdown-label">Ajuste por marca</div>
          <div class="breakdown-value">${
            this.brandFactors[brand] > 1 ? "+" : ""
          }${Math.round((this.brandFactors[brand] - 1) * 100)}%</div>
        </div>
        <div class="breakdown-item">
          <div class="breakdown-label">Ajuste por condición</div>
          <div class="breakdown-value">${
            this.conditionFactors[condition] > 1 ? "+" : ""
          }${Math.round((this.conditionFactors[condition] - 1) * 100)}%</div>
        </div>
        <div class="breakdown-item">
          <div class="breakdown-label">Ajuste por kilometraje</div>
          <div class="breakdown-value">${
            this.mileageFactors[mileage] > 1 ? "+" : ""
          }${Math.round((this.mileageFactors[mileage] - 1) * 100)}%</div>
        </div>
        ${
          extrasValue > 0
            ? `
          <div class="breakdown-item">
            <div class="breakdown-label">Extras (${extrasList})</div>
            <div class="breakdown-value">+${formatCurrency(extrasValue)}</div>
          </div>
        `
            : ""
        }
      </div>
      
      <div class="result-analysis">
        <p>
          Este precio estimado se basa en las condiciones actuales del mercado peruano. 
          Para una valoración más precisa, te recomendamos contactar a un concesionario oficial o un tasador profesional.
        </p>
      </div>
    `;

    resultsContainer.classList.add("show");
  }
}

// Si está en un entorno global, exponer la clase
if (typeof window !== "undefined") {
  window.VehiclePriceCalculator = VehiclePriceCalculator;
}
