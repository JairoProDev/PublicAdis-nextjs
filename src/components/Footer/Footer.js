import '../../css/components/footer.css';

export class Footer {
  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  init() {
    this.render();
    this.initFooterFunctionality();
  }

  render() {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;

    footer.innerHTML = `
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-logo">
            <img src="/assets/images/logo-white.png" alt="PublicAdis Logo" class="footer-logo-img" />
            <h2 class="footer-logo-text">PublicAdis</h2>
          </div>

          <div class="footer-slogan">
            La plataforma publicitaria líder en Cusco
          </div>

          <div class="footer-social">
            <h4>Síguenos</h4>
            <div class="social-links">
              <a href="https://wa.me/937054328" class="social-link" title="WhatsApp" rel="noopener" target="_blank">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://www.facebook.com/publicadis" class="social-link" title="Facebook" rel="noopener" target="_blank">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/publicadis" class="social-link" title="Instagram" rel="noopener" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@publicadis" class="social-link" title="TikTok" rel="noopener" target="_blank">
                <i class="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://linkedin.com/company/publicadis" target="_blank" rel="noopener">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-middle">
          <div class="footer-section">
            <h3 class="footer-heading">Empresa</h3>
            <ul class="footer-links">
              <li><a href="/nosotros"><i class="fas fa-chevron-right"></i>Sobre Nosotros</a></li>
              <li><a href="/equipo"><i class="fas fa-chevron-right"></i>Nuestro Equipo</a></li>
              <li><a href="/carreras"><i class="fas fa-chevron-right"></i>Trabaja con Nosotros</a></li>
              <li><a href="/blog"><i class="fas fa-chevron-right"></i>Blog</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-heading">Servicios</h3>
            <ul class="footer-links">
              <li><a href="#servicesSection" data-target="inmuebles"><i class="fas fa-chevron-right"></i>Inmuebles</a></li>
              <li><a href="#servicesSection" data-target="vehiculos"><i class="fas fa-chevron-right"></i>Vehículos</a></li>
              <li><a href="#servicesSection" data-target="empleos"><i class="fas fa-chevron-right"></i>Empleos</a></li>
              <li><a href="#servicesSection" data-target="servicios"><i class="fas fa-chevron-right"></i>Servicios Profesionales</a></li>
              <li><a href="#servicesSection" data-target="productos"><i class="fas fa-chevron-right"></i>Productos</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-heading">Recursos</h3>
            <ul class="footer-links">
              <li><a href="/recursos/guias"><i class="fas fa-chevron-right"></i>Guías y Tutoriales</a></li>
              <li><a href="/recursos/webinars"><i class="fas fa-chevron-right"></i>Webinars</a></li>
              <li><a href="/recursos/casos"><i class="fas fa-chevron-right"></i>Casos de Éxito</a></li>
              <li><a href="/recursos/documentacion"><i class="fas fa-chevron-right"></i>Documentación API</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-heading">Herramientas</h3>
            <ul class="footer-links">
              <li>
                <a href="#businessToolsSection" data-tool="property-valuation">
                  <i class="fa-solid fa-home"></i> Calculadora Inmobiliaria
                </a>
              </li>
              <li>
                <a href="#businessToolsSection" data-tool="roi-calculator">
                  <i class="fa-solid fa-chart-line"></i> Calculadora ROI
                </a>
              </li>
              <li>
                <a href="#businessToolsSection" data-tool="vehicle-price">
                  <i class="fa-solid fa-car"></i> Precio de Vehículos
                </a>
              </li>
              <li>
                <a href="#businessToolsSection" data-tool="salary-compare">
                  <i class="fa-solid fa-sack-dollar"></i> Comparador Salarial
                </a>
              </li>
              <li>
                <a href="#businessToolsSection" data-tool="social-media">
                  <i class="fa-solid fa-share-nodes"></i> Alcance en Redes
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-heading">Contacto</h3>
            <ul class="footer-contact-info">
              <li>
                <i class="fa-solid fa-location-dot"></i>
                <span>Local físico en San Sebastián, Cusco</span>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <span><a href="tel:+51937054328">+51 937 054 328</a></span>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <span><a href="mailto:publicadiss@gmail.com">publicadiss@gmail.com</a></span>
              </li>
            </ul>
            <div class="footer-app-download">
              <h5>Descarga nuestra app:</h5>
              <a href="https://play.google.com/store/apps/details?id=buscadis.publicadis&pli=1" class="app-download-btn" target="_blank" rel="noopener">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copyright">&copy; ${this.currentYear} PublicAdis - BuscAdis. Todos los derechos reservados.</p>

          <div class="footer-badges">
            <a href="#">Términos y Condiciones</a>
            <a href="#">Política de Privacidad</a>
          </div>
        </div>
      </div>
    `;
  }

  initFooterFunctionality() {
    // Scroll to section functionality for service links
    const serviceLinks = document.querySelectorAll('.footer-section a[data-target]');
    serviceLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });

          setTimeout(() => {
            const targetTab = this.getAttribute('data-target');
            if (targetTab) {
              const tab = document.querySelector(`.service-tab[data-target="${targetTab}"]`);
              if (tab) {
                tab.click();
              }
            }
          }, 800);
        }
      });
    });

    // Scroll to business tools section and select specific tool
    const toolLinks = document.querySelectorAll('.footer-section a[data-tool]');
    toolLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });

          setTimeout(() => {
            const toolId = this.getAttribute('data-tool');
            if (toolId) {
              const toolTab = document.querySelector(`.tool-tab[data-tool="${toolId}"]`);
              if (toolTab) {
                toolTab.click();
              }
            }
          }, 800);
        }
      });
    });
  }
}
