import '../../css/components/tools.css';

export class BusinessTools {
  constructor() {
    this.activeTool = 'property-valuation';
    this.tools = {
      'property-valuation': {
        icon: 'fa-home',
        title: 'Calculadora Inmobiliaria',
        description:
          'Estima el valor de mercado de un inmueble basado en sus características y ubicación.',
      },
      'roi-calculator': {
        icon: 'fa-chart-line',
        title: 'Calculadora ROI',
        description:
          'Calcula el retorno de inversión de tus campañas publicitarias y optimiza tu presupuesto.',
      },
      'vehicle-price': {
        icon: 'fa-car',
        title: 'Precio de Vehículos',
        description:
          'Determina el precio justo de mercado para tu vehículo según modelo, año y condición.',
      },
      'salary-compare': {
        icon: 'fa-sack-dollar',
        title: 'Comparador Salarial',
        description:
          'Compara los rangos salariales por puesto y sector para negociar mejor tus condiciones.',
      },
      'social-media': {
        icon: 'fa-share-nodes',
        title: 'Alcance en Redes',
        description:
          'Estima el alcance potencial de tus publicaciones según plataforma, hora y contenido.',
      },
    };
  }

  init() {
    this.render();
    this.setupTools();
  }

  render() {
    const container =
      document.getElementById('businessToolsContainer') || document.querySelector('#businessTools');
    if (!container) return;

    container.innerHTML = `
      <section id="businessToolsSection" class="business-tools-section pageSection">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Herramientas Gratuitas para tu Negocio</h2>
            <p class="section-subtitle">Potencia tu estrategia con nuestras calculadoras y estimadores</p>
          </div>
          
          <div class="tools-container">
            ${Object.entries(this.tools)
              .map(
                ([key, tool], index) => `
              <div class="tool-card" data-tool="${key}" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="tool-header">
                  <div class="tool-icon">
                    <i class="fas ${tool.icon}"></i>
                  </div>
                  <h3>${tool.title}</h3>
                </div>
                <p class="tool-description">${tool.description}</p>
                <button class="tool-button" onclick="window.location.href='#${key}'">
                  Usar herramienta <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            `
              )
              .join('')}
          </div>
          
          <div class="tools-info">
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-lock"></i>
              </div>
              <div class="info-content">
                <h4>100% Seguro y Privado</h4>
                <p>Tus datos no se almacenan ni comparten con terceros.</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-chart-pie"></i>
              </div>
              <div class="info-content">
                <h4>Datos Actualizados</h4>
                <p>Usamos información de mercado actualizada mensualmente.</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-code"></i>
              </div>
              <div class="info-content">
                <h4>Algoritmos Avanzados</h4>
                <p>Tecnología de IA para cálculos precisos y personalizados.</p>
              </div>
            </div>
          </div>
          
          <div class="tools-cta">
            <a href="#contacto" class="tools-cta-button">
              Solicitar herramienta personalizada <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  setupTools() {
    // Animar la aparición de las tarjetas
    const toolCards = document.querySelectorAll('.tool-card');
    
    // Usar Intersection Observer para animar las tarjetas cuando son visibles
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    toolCards.forEach((card) => {
      observer.observe(card);
    });
    
    // Configurar los botones de herramientas
    const toolButtons = document.querySelectorAll('.tool-button');
    toolButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const href = button.getAttribute('onclick').split("'")[1];
        if (href) {
          // Aquí se implementaría la lógica para mostrar la herramienta específica
          console.log(`Abriendo herramienta: ${href}`);
        }
      });
    });
  }
}
