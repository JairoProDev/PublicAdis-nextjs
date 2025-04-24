/**
 * Comparador Salarial
 * Analiza salarios por industria, rol y experiencia
 */
class SalaryComparator {
  constructor() {
    // Rangos salariales por sector e industria (en soles peruanos mensuales)
    this.salarySectors = {
      tech: {
        name: 'Tecnología',
        icon: 'fa-solid fa-microchip',
        industries: {
          software: {
            name: 'Desarrollo de Software',
            baseSalary: 4500,
            experienceMultiplier: 1.15,
            educationMultiplier: 1.1,
            roles: {
              developer: { name: 'Desarrollador', factor: 1.0 },
              designer: { name: 'Diseñador UX/UI', factor: 0.9 },
              projectManager: { name: 'Gerente de Proyecto', factor: 1.2 },
              dataScientist: { name: 'Científico de Datos', factor: 1.3 },
              devops: { name: 'DevOps/SRE', factor: 1.15 },
            },
          },
          cloud: {
            name: 'Servicios Cloud',
            baseSalary: 5000,
            experienceMultiplier: 1.2,
            educationMultiplier: 1.1,
            roles: {
              architect: { name: 'Arquitecto Cloud', factor: 1.4 },
              engineer: { name: 'Ingeniero Cloud', factor: 1.2 },
              specialist: { name: 'Especialista en Seguridad', factor: 1.3 },
              consultant: { name: 'Consultor', factor: 1.1 },
            },
          },
          telecom: {
            name: 'Telecomunicaciones',
            baseSalary: 4200,
            experienceMultiplier: 1.1,
            educationMultiplier: 1.05,
            roles: {
              networkengineer: { name: 'Ingeniero de Red', factor: 1.1 },
              systemadmin: { name: 'Administrador de Sistemas', factor: 1.0 },
              technician: { name: 'Técnico', factor: 0.8 },
            },
          },
        },
      },
      finance: {
        name: 'Finanzas',
        icon: 'fa-solid fa-sack-dollar',
        industries: {
          banking: {
            name: 'Banca',
            baseSalary: 4000,
            experienceMultiplier: 1.2,
            educationMultiplier: 1.15,
            roles: {
              analyst: { name: 'Analista Financiero', factor: 1.0 },
              advisor: { name: 'Asesor Financiero', factor: 1.1 },
              manager: { name: 'Gerente de Banca', factor: 1.4 },
              specialist: { name: 'Especialista en Riesgos', factor: 1.2 },
            },
          },
          insurance: {
            name: 'Seguros',
            baseSalary: 3800,
            experienceMultiplier: 1.15,
            educationMultiplier: 1.1,
            roles: {
              agent: { name: 'Agente de Seguros', factor: 0.9 },
              underwriter: { name: 'Suscriptor', factor: 1.1 },
              actuary: { name: 'Actuario', factor: 1.3 },
              claimsAnalyst: { name: 'Analista de Reclamos', factor: 1.0 },
            },
          },
          invest: {
            name: 'Inversiones',
            baseSalary: 5500,
            experienceMultiplier: 1.25,
            educationMultiplier: 1.2,
            roles: {
              investmentAnalyst: {
                name: 'Analista de Inversiones',
                factor: 1.2,
              },
              portfolioManager: { name: 'Gestor de Portafolio', factor: 1.5 },
              trader: { name: 'Trader', factor: 1.3 },
              wealthAdvisor: { name: 'Asesor Patrimonial', factor: 1.4 },
            },
          },
        },
      },
      health: {
        name: 'Salud',
        icon: 'fa-solid fa-stethoscope',
        industries: {
          clinical: {
            name: 'Clínica',
            baseSalary: 4500,
            experienceMultiplier: 1.15,
            educationMultiplier: 1.2,
            roles: {
              doctor: { name: 'Médico', factor: 1.5 },
              nurse: { name: 'Enfermero/a', factor: 0.9 },
              technician: { name: 'Técnico Médico', factor: 0.8 },
              specialist: { name: 'Especialista', factor: 1.7 },
            },
          },
          pharma: {
            name: 'Farmacéutica',
            baseSalary: 4200,
            experienceMultiplier: 1.1,
            educationMultiplier: 1.15,
            roles: {
              researcher: { name: 'Investigador', factor: 1.3 },
              chemist: { name: 'Químico Farmacéutico', factor: 1.2 },
              salesRep: { name: 'Representante de Ventas', factor: 1.0 },
              regulator: { name: 'Especialista Regulatorio', factor: 1.1 },
            },
          },
        },
      },
      marketing: {
        name: 'Marketing',
        icon: 'fa-solid fa-bullhorn',
        industries: {
          advertising: {
            name: 'Publicidad',
            baseSalary: 3800,
            experienceMultiplier: 1.1,
            educationMultiplier: 1.05,
            roles: {
              marketingManager: { name: 'Gerente de Marketing', factor: 1.3 },
              creativeDir: { name: 'Director Creativo', factor: 1.2 },
              copywriter: { name: 'Redactor', factor: 0.9 },
              mediaPlanner: { name: 'Planificador de Medios', factor: 1.0 },
            },
          },
          digital: {
            name: 'Marketing Digital',
            baseSalary: 3600,
            experienceMultiplier: 1.15,
            educationMultiplier: 1.05,
            roles: {
              digitalSpecialist: { name: 'Especialista Digital', factor: 1.1 },
              socialManager: { name: 'Community Manager', factor: 0.9 },
              seoSpecialist: { name: 'Especialista SEO', factor: 1.05 },
              contentManager: { name: 'Gestor de Contenido', factor: 1.0 },
            },
          },
        },
      },
      education: {
        name: 'Educación',
        icon: 'fa-solid fa-graduation-cap',
        industries: {
          school: {
            name: 'Colegio',
            baseSalary: 2800,
            experienceMultiplier: 1.08,
            educationMultiplier: 1.1,
            roles: {
              teacher: { name: 'Profesor', factor: 1.0 },
              coordinator: { name: 'Coordinador', factor: 1.2 },
              principal: { name: 'Director', factor: 1.5 },
              counselor: { name: 'Orientador', factor: 1.1 },
            },
          },
          university: {
            name: 'Universidad',
            baseSalary: 4000,
            experienceMultiplier: 1.12,
            educationMultiplier: 1.2,
            roles: {
              professor: { name: 'Profesor', factor: 1.3 },
              researcher: { name: 'Investigador', factor: 1.4 },
              dean: { name: 'Decano', factor: 1.7 },
              admin: { name: 'Administrativo', factor: 1.0 },
            },
          },
        },
      },
    };

    // Factores por ubicación
    this.locationFactors = {
      lima: 1.0,
      callao: 0.95,
      arequipa: 0.9,
      trujillo: 0.85,
      cusco: 0.85,
      piura: 0.8,
      chiclayo: 0.8,
      iquitos: 0.75,
      huancayo: 0.8,
      tacna: 0.85,
    };

    // Factores por nivel educativo
    this.educationLevels = {
      high: { name: 'Superior Universitario', factor: 1.0 },
      technical: { name: 'Técnico / Instituto', factor: 0.85 },
      masters: { name: 'Maestría', factor: 1.2 },
      phd: { name: 'Doctorado', factor: 1.4 },
    };

    // Factores por años de experiencia
    this.experienceLevels = {
      entry: { name: '0-2 años', factor: 0.8 },
      junior: { name: '3-5 años', factor: 1.0 },
      senior: { name: '6-10 años', factor: 1.3 },
      expert: { name: 'Más de 10 años', factor: 1.6 },
    };
  }

  init() {
    this.setupEventListeners();
    this.populateFormOptions();
  }

  setupEventListeners() {
    const calculateButton = document.getElementById('calculate-salary');
    if (calculateButton) {
      calculateButton.addEventListener('click', () => this.compareSalary());
    }

    // Event listeners para actualizar opciones dependientes
    const sectorSelect = document.getElementById('sector');
    if (sectorSelect) {
      sectorSelect.addEventListener('change', () => this.updateIndustryOptions(sectorSelect.value));
    }

    const industrySelect = document.getElementById('industry');
    if (industrySelect) {
      industrySelect.addEventListener('change', () => {
        const sector = document.getElementById('sector').value;
        this.updateRoleOptions(sector, industrySelect.value);
      });
    }
  }

  populateFormOptions() {
    // Poblar sectores
    const sectorSelect = document.getElementById('sector');
    if (sectorSelect) {
      sectorSelect.innerHTML = '<option value="">Selecciona un sector</option>';
      Object.keys(this.salarySectors).forEach(sector => {
        sectorSelect.innerHTML += `<option value="${sector}">${this.salarySectors[sector].name}</option>`;
      });
    }

    // Poblar ubicaciones
    const locationSelect = document.getElementById('location');
    if (locationSelect) {
      locationSelect.innerHTML = '<option value="">Selecciona una ubicación</option>';
      Object.keys(this.locationFactors).forEach(location => {
        const locationName = location.charAt(0).toUpperCase() + location.slice(1);
        locationSelect.innerHTML += `<option value="${location}">${locationName}</option>`;
      });
    }

    // Poblar niveles educativos
    const educationSelect = document.getElementById('education');
    if (educationSelect) {
      educationSelect.innerHTML = '<option value="">Selecciona nivel educativo</option>';
      Object.keys(this.educationLevels).forEach(edu => {
        educationSelect.innerHTML += `<option value="${edu}">${this.educationLevels[edu].name}</option>`;
      });
    }

    // Poblar niveles de experiencia
    const experienceSelect = document.getElementById('experience');
    if (experienceSelect) {
      experienceSelect.innerHTML = '<option value="">Selecciona años de experiencia</option>';
      Object.keys(this.experienceLevels).forEach(exp => {
        experienceSelect.innerHTML += `<option value="${exp}">${this.experienceLevels[exp].name}</option>`;
      });
    }
  }

  updateIndustryOptions(sector) {
    const industrySelect = document.getElementById('industry');
    if (!industrySelect) return;

    industrySelect.innerHTML = '<option value="">Selecciona una industria</option>';

    if (sector && this.salarySectors[sector]) {
      const industries = this.salarySectors[sector].industries;
      Object.keys(industries).forEach(industry => {
        industrySelect.innerHTML += `<option value="${industry}">${industries[industry].name}</option>`;
      });
    }

    // Resetear roles
    const roleSelect = document.getElementById('role');
    if (roleSelect) {
      roleSelect.innerHTML = '<option value="">Selecciona un rol</option>';
    }
  }

  updateRoleOptions(sector, industry) {
    const roleSelect = document.getElementById('role');
    if (!roleSelect) return;

    roleSelect.innerHTML = '<option value="">Selecciona un rol</option>';

    if (
      sector &&
      industry &&
      this.salarySectors[sector] &&
      this.salarySectors[sector].industries[industry]
    ) {
      const roles = this.salarySectors[sector].industries[industry].roles;
      Object.keys(roles).forEach(role => {
        roleSelect.innerHTML += `<option value="${role}">${roles[role].name}</option>`;
      });
    }
  }

  compareSalary() {
    // Recoger valores del formulario
    const sector = document.getElementById('sector').value;
    const industry = document.getElementById('industry').value;
    const role = document.getElementById('role').value;
    const location = document.getElementById('location').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const currentSalary = parseFloat(document.getElementById('current-salary').value);

    // Validar entrada
    if (!sector || !industry || !role || !location || !education || !experience) {
      this.showToolAlert('Por favor, completa todos los campos del formulario.', 'error');
      return;
    }

    if (document.getElementById('current-salary').value && isNaN(currentSalary)) {
      this.showToolAlert(
        'Por favor, introduce un valor numérico válido para el salario actual.',
        'error'
      );
      return;
    }

    // Obtener factores
    const industryData = this.salarySectors[sector].industries[industry];
    const roleData = industryData.roles[role];
    const locationFactor = this.locationFactors[location];
    const educationLevel = this.educationLevels[education];
    const experienceLevel = this.experienceLevels[experience];

    // Calcular salario base para esta combinación
    const baseSalary = industryData.baseSalary;

    // Ajustar por rol
    const roleSalary = baseSalary * roleData.factor;

    // Ajustar por experiencia
    const expAdjustment = Math.pow(
      industryData.experienceMultiplier,
      (experienceLevel.factor - 1) * 10
    );

    // Ajustar por educación
    const eduAdjustment = Math.pow(
      industryData.educationMultiplier,
      (educationLevel.factor - 1) * 5
    );

    // Ajustar por ubicación
    const expectedSalary = roleSalary * expAdjustment * eduAdjustment * locationFactor;

    // Calcular rangos salariales
    const minSalary = expectedSalary * 0.9;
    const maxSalary = expectedSalary * 1.1;

    // Calcular percentil si se proporcionó un salario actual
    let percentile = null;
    let salaryGap = null;

    if (!isNaN(currentSalary)) {
      // Calcular percentil aproximado
      if (currentSalary < minSalary) {
        percentile = Math.round((currentSalary / minSalary) * 30);
      } else if (currentSalary <= maxSalary) {
        percentile = Math.round(30 + ((currentSalary - minSalary) / (maxSalary - minSalary)) * 40);
      } else {
        percentile = Math.round(70 + Math.min(((currentSalary - maxSalary) / maxSalary) * 30, 30));
      }

      // Calcular brecha salarial
      salaryGap = ((currentSalary - expectedSalary) / expectedSalary) * 100;
    }

    // Mostrar resultados
    this.displayResults(
      expectedSalary,
      minSalary,
      maxSalary,
      currentSalary,
      percentile,
      salaryGap,
      sector,
      industry,
      role,
      location,
      education,
      experience
    );
  }

  displayResults(
    expectedSalary,
    minSalary,
    maxSalary,
    currentSalary,
    percentile,
    salaryGap,
    sector,
    industry,
    role,
    location,
    education,
    experience
  ) {
    const resultsContainer = document.getElementById('salary-results');

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

    // Obtener nombres legibles
    const sectorName = this.salarySectors[sector].name;
    const industryName = this.salarySectors[sector].industries[industry].name;
    const roleName = this.salarySectors[sector].industries[industry].roles[role].name;
    const locationName = location.charAt(0).toUpperCase() + location.slice(1);
    const educationName = this.educationLevels[education].name;
    const experienceName = this.experienceLevels[experience].name;
    const sectorIcon = this.salarySectors[sector].icon;

    // Análisis del salario
    let salaryAnalysis = '';
    let salaryClass = '';

    if (currentSalary) {
      if (salaryGap <= -20) {
        salaryAnalysis =
          'Tu salario está significativamente por debajo del mercado. Considera negociar un aumento o buscar mejores oportunidades.';
        salaryClass = 'below';
      } else if (salaryGap < -5) {
        salaryAnalysis =
          'Tu salario está ligeramente por debajo del promedio del mercado. Podrías considerar negociar un incremento.';
        salaryClass = 'slightly-below';
      } else if (salaryGap <= 5) {
        salaryAnalysis = 'Tu salario está alineado con el promedio del mercado para este rol.';
        salaryClass = 'average';
      } else if (salaryGap <= 20) {
        salaryAnalysis = 'Tu salario está por encima del promedio del mercado. ¡Bien hecho!';
        salaryClass = 'above';
      } else {
        salaryAnalysis =
          'Tu salario está significativamente por encima del promedio del mercado. ¡Excelente!';
        salaryClass = 'significantly-above';
      }
    } else {
      salaryAnalysis = 'Introduce tu salario actual para obtener un análisis comparativo.';
      salaryClass = 'no-current';
    }

    // HTML para los resultados
    resultsContainer.innerHTML = `
      <div class="result-summary ${salaryClass}">
        <h4>Salario Promedio de Mercado</h4>
        <div class="value-amount">${formatCurrency(expectedSalary)}</div>
        <div class="value-range">
          Rango: ${formatCurrency(minSalary)} - ${formatCurrency(maxSalary)}
        </div>
      </div>
      
      <div class="salary-position">
        <div class="position-header">
          <i class="${sectorIcon}"></i>
          <div class="position-details">
            <span class="position-role">${roleName}</span>
            <span class="position-industry">${industryName} (${sectorName})</span>
          </div>
        </div>
        <div class="position-criteria">
          <div class="criterion"><i class="fa-solid fa-location-dot"></i> ${locationName}</div>
          <div class="criterion"><i class="fa-solid fa-user-graduate"></i> ${educationName}</div>
          <div class="criterion"><i class="fa-solid fa-briefcase"></i> ${experienceName}</div>
        </div>
      </div>
      
      ${
        currentSalary
          ? `
        <div class="comparison">
          <div class="comparison-item">
            <div class="comparison-label">Tu salario actual</div>
            <div class="comparison-value ${
              salaryGap >= 0 ? 'positive' : 'negative'
            }">${formatCurrency(currentSalary)}</div>
          </div>
          <div class="comparison-item">
            <div class="comparison-label">Diferencia</div>
            <div class="comparison-value ${salaryGap >= 0 ? 'positive' : 'negative'}">
              ${salaryGap >= 0 ? '+' : ''}${salaryGap.toFixed(1)}%
            </div>
          </div>
          <div class="percentile-container">
            <div class="percentile-bar">
              <div class="percentile-marker" style="left: ${percentile}%;">
                <div class="marker-label">Tú</div>
              </div>
              <div class="percentile-25">25%</div>
              <div class="percentile-50">50%</div>
              <div class="percentile-75">75%</div>
            </div>
            <div class="percentile-text">Percentil ${percentile}</div>
          </div>
        </div>
      `
          : ''
      }
      
      <div class="result-analysis">
        <h4><i class="fa-solid fa-magnifying-glass-chart"></i> Análisis</h4>
        <p>${salaryAnalysis}</p>
        
        <div class="tips">
          <div class="tip">
            <i class="fa-solid fa-circle-info"></i>
            <span>Esta estimación se basa en datos promedio del mercado peruano en ${new Date().getFullYear()}.</span>
          </div>
          <div class="tip">
            <i class="fa-solid fa-lightbulb"></i>
            <span>Los salarios pueden variar según la empresa, beneficios adicionales y habilidades específicas.</span>
          </div>
        </div>
      </div>
    `;

    resultsContainer.classList.add('show');
  }

  showToolAlert(message, type) {
    // Simple alert function
    alert(message);
    console.warn(`[${type}] ${message}`);
  }
}

// Si está en un entorno global, exponer la clase
if (typeof window !== 'undefined') {
  window.SalaryComparator = SalaryComparator;
}
