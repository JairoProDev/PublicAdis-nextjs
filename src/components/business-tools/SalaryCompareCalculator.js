// SalaryCompareCalculator.js - Comparador de Salarios por Sector
class SalaryCompareCalculator {
  constructor() {
    this.initialized = false;
    this.sectorSalaries = {
      // Datos de salarios promedio por sector y experiencia en Perú
      tecnologia: {
        junior: 2500,
        intermedio: 4500,
        senior: 7000,
        ejecutivo: 12000,
      },
      marketing: {
        junior: 2200,
        intermedio: 3800,
        senior: 6000,
        ejecutivo: 9000,
      },
      ventas: {
        junior: 2000,
        intermedio: 3500,
        senior: 5500,
        ejecutivo: 8500,
      },
      contabilidad: {
        junior: 2300,
        intermedio: 3700,
        senior: 5800,
        ejecutivo: 8000,
      },
      administracion: {
        junior: 2200,
        intermedio: 3600,
        senior: 5700,
        ejecutivo: 9500,
      },
      salud: {
        junior: 2800,
        intermedio: 4200,
        senior: 7500,
        ejecutivo: 12500,
      },
      educacion: {
        junior: 1800,
        intermedio: 2800,
        senior: 4200,
        ejecutivo: 6500,
      },
      construccion: {
        junior: 2200,
        intermedio: 3200,
        senior: 5000,
        ejecutivo: 8000,
      },
      legal: {
        junior: 2500,
        intermedio: 4500,
        senior: 8000,
        ejecutivo: 15000,
      },
      gastronomia: {
        junior: 1600,
        intermedio: 2500,
        senior: 4000,
        ejecutivo: 7000,
      },
      turismo: {
        junior: 1700,
        intermedio: 2600,
        senior: 4200,
        ejecutivo: 7500,
      },
      moda: {
        junior: 1800,
        intermedio: 3000,
        senior: 5000,
        ejecutivo: 8000,
      },
    };

    this.cityFactors = {
      lima: 1.0,
      arequipa: 0.85,
      cusco: 0.8,
      trujillo: 0.75,
      piura: 0.7,
      chiclayo: 0.7,
      iquitos: 0.65,
      huancayo: 0.65,
      tacna: 0.7,
      puno: 0.65,
    };

    this.educationFactors = {
      secundaria: 0.8,
      tecnico: 0.9,
      bachiller: 1.0,
      licenciatura: 1.05,
      maestria: 1.15,
      doctorado: 1.25,
    };
  }

  init() {
    if (this.initialized) return;

    // Aquí iría la inicialización del formulario de cálculo
    this.initialized = true;

    // Ya que este es un placeholder, mostramos una notificación
    const notifyButton = document.querySelector(
      "#salaryCompare .tool-notify-button"
    );
    if (notifyButton) {
      notifyButton.addEventListener("click", () => {
        showAlert(
          "Te avisaremos cuando esta herramienta esté disponible",
          "info"
        );
      });
    }
  }

  compareSalary(sector, experiencia, educacion, ciudad, salarioActual) {
    // Validar si tenemos datos para este sector y nivel de experiencia
    if (
      !this.sectorSalaries[sector] ||
      !this.sectorSalaries[sector][experiencia]
    ) {
      return {
        success: false,
        message: "Sector o nivel de experiencia no reconocido",
      };
    }

    // Obtener salario base para el sector y experiencia
    let salarioReferencia = this.sectorSalaries[sector][experiencia];

    // Ajustar por ciudad
    if (this.cityFactors[ciudad]) {
      salarioReferencia *= this.cityFactors[ciudad];
    }

    // Ajustar por nivel educativo
    if (this.educationFactors[educacion]) {
      salarioReferencia *= this.educationFactors[educacion];
    }

    // Redondear el salario
    salarioReferencia = Math.round(salarioReferencia / 100) * 100;

    // Calcular rango salarial (±15%)
    const salarioMinimo = Math.round((salarioReferencia * 0.85) / 100) * 100;
    const salarioMaximo = Math.round((salarioReferencia * 1.15) / 100) * 100;

    // Calcular porcentaje de diferencia con el salario actual
    let porcentajeDiferencia = 0;
    let estaSubPagado = false;
    let estaSobrePagado = false;

    if (salarioActual > 0) {
      porcentajeDiferencia =
        ((salarioActual - salarioReferencia) / salarioReferencia) * 100;
      estaSubPagado = porcentajeDiferencia < -10; // Más de 10% por debajo
      estaSobrePagado = porcentajeDiferencia > 10; // Más de 10% por encima
    }

    return {
      success: true,
      salarioReferencia: salarioReferencia,
      salarioMinimo: salarioMinimo,
      salarioMaximo: salarioMaximo,
      porcentajeDiferencia: porcentajeDiferencia.toFixed(1),
      estaSubPagado: estaSubPagado,
      estaSobrePagado: estaSobrePagado,
      rangoSalarial: `S/ ${salarioMinimo} - S/ ${salarioMaximo}`,
    };
  }

  generarRecomendaciones(resultado, sector, experiencia, educacion) {
    const recomendaciones = [];

    if (resultado.estaSubPagado) {
      recomendaciones.push(
        `Estás recibiendo aproximadamente ${Math.abs(
          resultado.porcentajeDiferencia
        )}% menos que el promedio para tu sector y experiencia.`
      );
      recomendaciones.push(
        "Considera programar una reunión para negociar tu salario mostrando tus logros recientes."
      );

      // Recomendaciones específicas por nivel de experiencia
      if (experiencia === "junior") {
        recomendaciones.push(
          "Invierte en certificaciones específicas para tu sector que aumenten tu valor de mercado."
        );
      } else if (experiencia === "intermedio" || experiencia === "senior") {
        recomendaciones.push(
          "Documenta proyectos exitosos y resultados cuantificables para justificar un incremento salarial."
        );
      }

      // Recomendación por educación
      if (educacion === "tecnico" || educacion === "bachiller") {
        recomendaciones.push(
          "Considera continuar tu formación académica para acceder a mejores rangos salariales."
        );
      }
    } else if (resultado.estaSobrePagado) {
      recomendaciones.push(
        `Estás recibiendo aproximadamente ${resultado.porcentajeDiferencia}% más que el promedio para tu sector y experiencia.`
      );
      recomendaciones.push(
        "Tu posición actual valora tus habilidades. Considera solicitar más responsabilidades para justificar tu compensación."
      );
    } else {
      recomendaciones.push(
        "Tu salario está dentro del rango promedio para tu sector y nivel de experiencia."
      );
      recomendaciones.push(
        "Para crecer profesionalmente, considera desarrollar habilidades especializadas en tu área."
      );
    }

    // Recomendaciones específicas por sector
    switch (sector) {
      case "tecnologia":
        recomendaciones.push(
          "El sector tecnológico valora las certificaciones y habilidades actualizadas. Mantente al día con las últimas tendencias."
        );
        break;
      case "marketing":
        recomendaciones.push(
          "Refuerza tu portafolio con casos de éxito cuantificables y conocimientos en marketing digital."
        );
        break;
      case "ventas":
        recomendaciones.push(
          "Documenta tus logros en términos de ingresos generados y clientes captados para negociaciones salariales."
        );
        break;
      case "contabilidad":
        recomendaciones.push(
          "Las certificaciones en software financiero y conocimientos en tributación son altamente valorados."
        );
        break;
      case "salud":
        recomendaciones.push(
          "Las especializaciones y la formación continua son críticas para mejorar tu posición salarial."
        );
        break;
    }

    return recomendaciones;
  }
}

// Exportar constructor
window.SalaryCompareCalculator = SalaryCompareCalculator;
