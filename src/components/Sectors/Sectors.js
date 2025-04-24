import '../../css/components/sectors.css';

// Sectors Component
export class Sectors {
  constructor() {
    this.sectors = [
      {
        id: 'inmobiliario',
        icon: 'fa-building',
        title: 'Sector Inmobiliario',
        description:
          'Multiplique sus ventas y alquileres con nuestro alcance especializado en el sector inmobiliario de Cusco.',
        stats: [
          { value: '300+', label: 'Inmobiliarias asociadas' },
          { value: '1200+', label: 'Propiedades vendidas al mes' },
        ],
      },
      {
        id: 'automotriz',
        icon: 'fa-car',
        title: 'Sector Automotriz',
        description:
          'Venda vehículos nuevos y usados más rápido con nuestra plataforma especializada en el mercado automotriz.',
        stats: [
          { value: '85%', label: 'Reducción en tiempo de venta' },
          { value: '250+', label: 'Concesionarios asociados' },
        ],
      },
      {
        id: 'profesional',
        icon: 'fa-briefcase',
        title: 'Servicios Profesionales',
        description:
          'Conecte con clientes potenciales para sus servicios profesionales y construya una cartera sólida.',
        stats: [
          { value: '3500+', label: 'Profesionales registrados' },
          { value: '92%', label: 'Tasa de satisfacción cliente' },
        ],
      },
      {
        id: 'retail',
        icon: 'fa-shopping-cart',
        title: 'Retail y Comercio',
        description:
          'Impulse sus ventas minoristas y mayoristas con nuestras soluciones publicitarias multiplataforma.',
        stats: [
          { value: '200+', label: 'Tiendas con crecimiento sostenido' },
          { value: '40%', label: 'Incremento en ticket promedio' },
        ],
      },
      {
        id: 'turismo',
        icon: 'fa-plane',
        title: 'Turismo y Hostelería',
        description:
          'Atraiga más turistas y visitantes a sus servicios turísticos y de hostelería en la región de Cusco.',
        stats: [
          { value: '150+', label: 'Hoteles y hostales asociados' },
          { value: '75%', label: 'Incremento en reservas directas' },
        ],
      },
      {
        id: 'educacion',
        icon: 'fa-graduation-cap',
        title: 'Educación y Formación',
        description:
          'Capte más estudiantes para sus programas educativos con nuestra plataforma especializada.',
        stats: [
          { value: '50+', label: 'Instituciones educativas' },
          { value: '120%', label: 'Aumento en matrículas' },
        ],
      },
    ];
  }

  init() {
    this.render();
    this.addInteractions();
  }

  render() {
    const container =
      document.getElementById('sectorsContainer') || document.querySelector('#sectors');
    if (!container) return;

    container.innerHTML = `
      <section id="sectors" class="sectors-section pageSection">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Sectores Especializados</h2>
            <p class="section-subtitle">Soluciones publicitarias adaptadas a las necesidades específicas de cada industria</p>
          </div>
          
          <div class="sectors-grid">
            ${this.sectors
              .map(
                sector => `
              <div class="sector-card fade-in-up" data-sector="${sector.id}">
                <div class="sector-icon-container">
                  <i class="fas ${sector.icon}"></i>
                </div>
                <h3 class="sector-title">${sector.title}</h3>
                <p class="sector-description">${sector.description}</p>
                
                <div class="sector-stats">
                  ${sector.stats
                    .map(
                      stat => `
                    <div class="sector-stat">
                      <div class="stat-value">${stat.value}</div>
                      <div class="stat-label">${stat.label}</div>
                    </div>
                  `
                    )
                    .join('')}
                </div>
                
                <a href="#contacto" class="sector-link" data-sector="${sector.id}">
                  Conocer solución <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            `
              )
              .join('')}
          </div>
          
          <div class="sectors-cta">
            <div class="cta-content">
              <h3>¿Su sector no aparece en la lista?</h3>
              <p>Contáctenos para diseñar una solución publicitaria personalizada para su industria específica.</p>
            </div>
            <a href="#contacto" class="btn btn-primary">Solicitar Asesoría</a>
          </div>
        </div>
      </section>
    `;
  }

  addInteractions() {
    // Añadir efectos de hover y animación a las tarjetas
    const sectorCards = document.querySelectorAll('.sector-card');

    // Observe intersection para animar entrada
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectorCards.forEach((card, index) => {
      // Añadir delay a cada card para animación escalonada
      if (card instanceof HTMLElement) {
        card.style.transitionDelay = `${index * 0.1}s`;
      }

      // Observar para animar entrada
      observer.observe(card);

      // Manejar clicks en los enlaces
      const link = card.querySelector('.sector-link');
      if (link) {
        link.addEventListener('click', e => {
          e.preventDefault();
          const sectorId = link.getAttribute('data-sector');

          // Guardar sector seleccionado en sessionStorage para referencia posterior
          sessionStorage.setItem('selectedSector', sectorId);

          // Navegar al formulario de contacto
          const contactForm = document.querySelector('#contacto');
          if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });

            // Preseleccionar el sector en el formulario si existe
            setTimeout(() => {
              const sectorSelect = document.querySelector('#contact-sector');
              if (sectorSelect) {
                sectorSelect.value = sectorId;
              }
            }, 800);
          }
        });
      }
    });
  }
}
