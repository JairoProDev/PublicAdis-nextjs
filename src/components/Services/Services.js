import '../../css/components/services.css';

export class Services {
  constructor() {
    this.activeTab = 'inmuebles';
    this.services = {
      inmuebles: {
        icon: 'fa-building',
        title: 'Inmuebles',
        description:
          'Publicita propiedades, terrenos, locales comerciales y más con alcance máximo en la región.',
        features: [
          'Visibilidad en múltiples canales simultáneos',
          'Fotografía profesional de propiedades',
          'Tours virtuales 360°',
          'Gestión de citas y visitas',
          'Conexión directa con compradores calificados',
        ],
      },
      vehiculos: {
        icon: 'fa-car',
        title: 'Vehículos',
        description:
          'Vende o alquila vehículos rápidamente con anuncios optimizados y enfocados en el cliente ideal.',
        features: [
          'Fichas técnicas detalladas',
          'Sesiones fotográficas profesionales',
          'Historial verificado',
          'Comparativas de mercado',
          'Promoción en grupos especializados',
        ],
      },
      empleos: {
        icon: 'fa-briefcase',
        title: 'Empleos',
        description:
          'Encuentra el talento ideal o la oportunidad laboral perfecta con nuestro sistema inteligente.',
        features: [
          'Filtrado por competencias y habilidades',
          'Evaluación preliminar de candidatos',
          'Difusión en bolsas de trabajo especializadas',
          'Gestión completa del proceso de reclutamiento',
          'Análisis de mercado laboral y salarios',
        ],
      },
      servicios: {
        icon: 'fa-handshake',
        title: 'Servicios',
        description:
          'Promociona tus servicios profesionales y construye una cartera de clientes sólida y recurrente.',
        features: [
          'Perfil profesional verificado',
          'Sistema de valoraciones y reseñas',
          'Agenda y reserva de citas online',
          'Paquetes promocionales personalizados',
          'Marketing dirigido por geolocalización',
        ],
      },
      productos: {
        icon: 'fa-shopping-cart',
        title: 'Productos',
        description:
          'Vende tus productos con un alcance incomparable y una experiencia optimizada para convertir.',
        features: [
          'Catálogos interactivos',
          'Fotografía de producto profesional',
          'Integración con sistemas de inventario',
          'Promoción segmentada por intereses',
          'Análisis de comportamiento de compra',
        ],
      },
    };
  }

  init() {
    this.render();
    this.setupTabs();
  }

  render() {
    const servicesContainer =
      document.getElementById('servicesContainer') || document.querySelector('#services');
    if (!servicesContainer) return;

    servicesContainer.innerHTML = `
      <section id="services" class="services-section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Nuestros Servicios Publicitarios</h2>
            <p class="section-subtitle">Soluciones especializadas para cada tipo de negocio</p>
          </div>
          
          <div class="services-tabs">
            <div class="tabs-navigation">
              ${Object.entries(this.services)
                .map(
                  ([key, service]) => `
                <button class="service-tab ${key === this.activeTab ? 'active' : ''}" data-target="${key}">
                  <i class="fas ${service.icon}"></i>
                  <span>${service.title}</span>
                </button>
              `
                )
                .join('')}
            </div>
            
            <div class="tabs-content">
              ${Object.entries(this.services)
                .map(
                  ([key, service]) => `
                <div class="service-content ${key === this.activeTab ? 'active' : ''}" id="${key}-content">
                  <div class="service-info">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    
                    <ul class="service-features">
                      ${service.features
                        .map(
                          feature => `
                        <li><i class="fas fa-check-circle"></i>${feature}</li>
                      `
                        )
                        .join('')}
                    </ul>
                    
                    <div class="service-actions">
                      <a href="#contacto" class="btn btn-primary">Solicitar Información</a>
                      <a href="#pricing" class="btn btn-outline">Ver Planes</a>
                    </div>
                  </div>
                  
                  <div class="service-image">
                    <img src="/assets/images/services/${key}.jpg" alt="${service.title}" />
                    <div class="service-stats">
                      <div class="stat">
                        <span class="stat-value">+120%</span>
                        <span class="stat-label">Aumento en conversiones</span>
                      </div>
                      <div class="stat">
                        <span class="stat-value">-40%</span>
                        <span class="stat-label">Reducción de tiempo de venta</span>
                      </div>
                    </div>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
          
          <div class="services-cta">
            <div class="cta-content">
              <h3>¿Necesitas una solución personalizada?</h3>
              <p>Nuestro equipo de expertos en marketing puede diseñar una estrategia a medida para tu negocio.</p>
            </div>
            <a href="#contacto" class="btn btn-primary">Contactar Ahora</a>
          </div>
        </div>
      </section>
    `;
  }

  setupTabs() {
    // Activar las tabs
    const tabs = document.querySelectorAll('.service-tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        this.setActiveTab(target);
      });
    });
  }

  setActiveTab(tabId) {
    // Actualizar el estado interno
    this.activeTab = tabId;

    // Actualizar la UI
    const tabs = document.querySelectorAll('.service-tab');
    const contents = document.querySelectorAll('.service-content');

    // Desactivar todas las tabs y contenidos
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Activar la tab seleccionada y su contenido
    const selectedTab = document.querySelector(`.service-tab[data-target="${tabId}"]`);
    const selectedContent = document.getElementById(`${tabId}-content`);

    if (selectedTab) selectedTab.classList.add('active');
    if (selectedContent) selectedContent.classList.add('active');
  }
}
