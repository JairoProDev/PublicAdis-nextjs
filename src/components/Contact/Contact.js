export class Contact {
  constructor() {
    this.sectors = [
      { id: 'inmobiliario', name: 'Sector Inmobiliario' },
      { id: 'automotriz', name: 'Sector Automotriz' },
      { id: 'profesional', name: 'Servicios Profesionales' },
      { id: 'retail', name: 'Retail y Comercio' },
      { id: 'turismo', name: 'Turismo y Hostelería' },
      { id: 'educacion', name: 'Educación y Formación' },
      { id: 'otro', name: 'Otro Sector' },
    ];

    this.services = [
      { id: 'inmuebles', name: 'Publicidad para Inmuebles' },
      { id: 'vehiculos', name: 'Publicidad para Vehículos' },
      { id: 'empleos', name: 'Publicidad para Empleos' },
      { id: 'servicios', name: 'Publicidad para Servicios' },
      { id: 'productos', name: 'Publicidad para Productos' },
      { id: 'personalizado', name: 'Plan Personalizado Premium' },
    ];
  }

  init() {
    this.render();
    this.setupFormValidation();
    this.setupInteractions();
  }

  render() {
    const container =
      document.getElementById('contactoContainer') || document.querySelector('#contacto');
    if (!container) return;

    container.innerHTML = `
      <section id="contacto" class="contact-section">
        <div class="section-container">
          <div class="contact-header">
            <div class="contact-header-content">
              <h2 class="section-title">Eleve su Negocio al Siguiente Nivel</h2>
              <p class="section-subtitle">Contáctenos para iniciar su estrategia publicitaria exclusiva</p>
            </div>
            <div class="contact-header-decoration">
              <div class="premium-accent"></div>
              <div class="premium-accent-secondary"></div>
            </div>
          </div>
          
          <div class="contact-content">
            <div class="contact-info">
              <div class="contact-card">
                <div class="card-header">
                  <h3>Atención Personalizada Premium</h3>
                  <div class="divider-diamond"><span></span></div>
                </div>
                
                <div class="contact-methods">
                  <div class="contact-method premium-method">
                    <div class="method-icon">
                      <i class="fas fa-phone-alt"></i>
                    </div>
                    <div class="method-info">
                      <h4>Llámenos</h4>
                      <p>Atención inmediata en horario extendido</p>
                      <a href="tel:+51937054328" class="premium-link">+51 937 054 328</a>
                    </div>
                  </div>
                  
                  <div class="contact-method premium-method">
                    <div class="method-icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="method-info">
                      <h4>Escríbanos</h4>
                      <p>Respuesta garantizada en menos de 2 horas</p>
                      <a href="mailto:publicadis@gmail.com" class="premium-link">publicadis@gmail.com</a>
                    </div>
                  </div>
                  
                  <div class="contact-method premium-method">
                    <div class="method-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="method-info">
                      <h4>Visítenos</h4>
                      <p>Agenda una cita en nuestras oficinas premium</p>
                      <address>San Sebastián, Cusco - Perú</address>
                    </div>
                  </div>
                </div>
                
                <div class="contact-cta">
                  <h4>Conecte con nosotros</h4>
                  <div class="social-icons premium-social">
                    <a href="https://wa.me/937054328" target="_blank" rel="noopener" aria-label="WhatsApp">
                      <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.facebook.com/publicadis" target="_blank" rel="noopener" aria-label="Facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/publicadis" target="_blank" rel="noopener" aria-label="Instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/@publicadis" target="_blank" rel="noopener" aria-label="TikTok">
                      <i class="fab fa-tiktok"></i>
                    </a>
                  </div>
                </div>
                
                <div class="success-metrics">
                  <div class="metric-item">
                    <span class="metric-label">Tiempo de respuesta promedio</span>
                    <span class="metric-value">45 min</span>
                  </div>
                  <div class="metric-item">
                    <span class="metric-label">Satisfacción de clientes</span>
                    <span class="metric-value">98%</span>
                  </div>
                  <div class="metric-item">
                    <span class="metric-label">Casos resueltos</span>
                    <span class="metric-value">100%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-form-container">
              <form id="contactForm" class="contact-form premium-form">
                <div class="form-header">
                  <h3>Solicite su Estrategia Personalizada</h3>
                  <p>Complete el formulario y un asesor especializado se pondrá en contacto con usted</p>
                </div>
                
                <div class="form-body">
                  <div class="form-group">
                    <div class="input-wrapper">
                      <input type="text" id="contact-name" name="name" required>
                      <label for="contact-name">Nombre Completo</label>
                      <div class="input-border"></div>
                      <div class="input-icon">
                        <i class="fas fa-user"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div class="form-row">
                    <div class="form-group half">
                      <div class="input-wrapper">
                        <input type="email" id="contact-email" name="email" required>
                        <label for="contact-email">Correo Electrónico</label>
                        <div class="input-border"></div>
                        <div class="input-icon">
                          <i class="fas fa-envelope"></i>
                        </div>
                      </div>
                    </div>
                    
                    <div class="form-group half">
                      <div class="input-wrapper">
                        <input type="tel" id="contact-phone" name="phone" required>
                        <label for="contact-phone">Teléfono</label>
                        <div class="input-border"></div>
                        <div class="input-icon">
                          <i class="fas fa-phone"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <div class="input-wrapper">
                      <input type="text" id="contact-company" name="company">
                      <label for="contact-company">Empresa / Negocio</label>
                      <div class="input-border"></div>
                      <div class="input-icon">
                        <i class="fas fa-building"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div class="form-row">
                    <div class="form-group half">
                      <div class="select-wrapper">
                        <select id="contact-sector" name="sector" required>
                          <option value="" disabled selected>Seleccione un sector</option>
                          ${this.sectors.map(sector => `<option value="${sector.id}">${sector.name}</option>`).join('')}
                        </select>
                        <label for="contact-sector">Sector de su Negocio</label>
                        <div class="select-border"></div>
                        <div class="select-icon">
                          <i class="fas fa-chevron-down"></i>
                        </div>
                      </div>
                    </div>
                    
                    <div class="form-group half">
                      <div class="select-wrapper">
                        <select id="contact-service" name="service" required>
                          <option value="" disabled selected>Seleccione un servicio</option>
                          ${this.services.map(service => `<option value="${service.id}">${service.name}</option>`).join('')}
                        </select>
                        <label for="contact-service">Servicio que le Interesa</label>
                        <div class="select-border"></div>
                        <div class="select-icon">
                          <i class="fas fa-chevron-down"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <div class="textarea-wrapper">
                      <textarea id="contact-message" name="message" rows="4" required></textarea>
                      <label for="contact-message">¿Cómo podemos ayudarle?</label>
                      <div class="textarea-border"></div>
                      <div class="textarea-icon">
                        <i class="fas fa-comment-alt"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div class="form-group checkbox-group">
                    <div class="checkbox-wrapper">
                      <input type="checkbox" id="contact-terms" name="terms" required>
                      <label for="contact-terms">
                        <span class="checkmark"></span>
                        Acepto los <a href="#" class="premium-link">Términos y Condiciones</a> y la <a href="#" class="premium-link">Política de Privacidad</a>
                      </label>
                    </div>
                  </div>
                  
                  <div class="form-actions">
                    <button type="submit" class="btn btn-primary btn-premium">
                      <span class="btn-text">Enviar Solicitud</span>
                      <span class="btn-icon"><i class="fas fa-arrow-right"></i></span>
                    </button>
                    <button type="button" class="btn btn-outline btn-premium" id="scheduleCallBtn">
                      <span class="btn-text">Agendar Llamada</span>
                      <span class="btn-icon"><i class="fas fa-calendar-alt"></i></span>
                    </button>
                  </div>
                </div>
                
                <div class="form-footer">
                  <div class="security-badge">
                    <i class="fas fa-shield-alt"></i>
                    <span>Formulario Seguro y Protegido</span>
                  </div>
                  <div class="response-badge">
                    <i class="fas fa-hourglass-half"></i>
                    <span>Respuesta en menos de 2 horas</span>
                  </div>
                </div>
              </form>
              
              <div id="formSuccess" class="form-success">
                <div class="success-content">
                  <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <h3>¡Solicitud Enviada con Éxito!</h3>
                  <p>Gracias por contactarnos. Un asesor especializado se pondrá en contacto con usted a la brevedad posible.</p>
                  <button class="btn btn-primary btn-premium" id="newRequestBtn">
                    <span class="btn-text">Nueva Solicitud</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#030A1C" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,144C672,149,768,203,864,208C960,213,1056,171,1152,144C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
    `;
  }

  setupFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();

      if (this.validateForm(form)) {
        this.submitForm(form);
      }
    });

    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });

      input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) {
          this.validateField(input);
        }
      });
    });
  }

  validateForm(form) {
    const inputs = form.querySelectorAll('input:required, select:required, textarea:required');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(field) {
    let isValid = true;
    const parent = field.closest('.form-group');

    // Eliminar mensajes de error previos
    const errorMsg = parent.querySelector('.error-message');
    if (errorMsg) errorMsg.remove();

    // Validación según tipo de campo
    if (field.validity.valueMissing) {
      this.showError(field, 'Este campo es obligatorio');
      isValid = false;
    } else if (field.type === 'email' && !this.isValidEmail(field.value)) {
      this.showError(field, 'Por favor, ingrese un correo electrónico válido');
      isValid = false;
    } else if (field.type === 'tel' && !this.isValidPhone(field.value)) {
      this.showError(field, 'Por favor, ingrese un número de teléfono válido');
      isValid = false;
    } else if (field.id === 'contact-terms' && !field.checked) {
      this.showError(field, 'Debe aceptar los términos para continuar');
      isValid = false;
    }

    // Actualizar clases CSS
    if (isValid) {
      field.classList.remove('invalid');
      field.classList.add('valid');
    } else {
      field.classList.remove('valid');
      field.classList.add('invalid');
    }

    return isValid;
  }

  showError(field, message) {
    const parent = field.closest('.form-group');
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.innerText = message;
    parent.appendChild(errorElement);
  }

  isValidEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  isValidPhone(phone) {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(String(phone));
  }

  submitForm(form) {
    // Aquí se simula el envío del formulario
    // En una implementación real, se enviaría al servidor con fetch o XMLHttpRequest

    // Mostrar loader
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    // Simular tiempo de procesamiento
    setTimeout(() => {
      // Ocultar formulario y mostrar mensaje de éxito
      const formContainer = document.querySelector('.contact-form');
      const successMessage = document.getElementById('formSuccess');

      formContainer.style.display = 'none';
      successMessage.style.display = 'flex';

      // Restablecer formulario para futuros envíos
      form.reset();
      const validInputs = form.querySelectorAll('.valid');
      validInputs.forEach(input => input.classList.remove('valid'));

      // Restaurar botón
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  }

  setupInteractions() {
    // Activar animaciones al hacer scroll
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll('.contact-card, .contact-form-container');
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });

    // Evento para nueva solicitud
    const newRequestBtn = document.getElementById('newRequestBtn');
    if (newRequestBtn) {
      newRequestBtn.addEventListener('click', () => {
        const formContainer = document.querySelector('.contact-form');
        const successMessage = document.getElementById('formSuccess');

        successMessage.style.display = 'none';
        formContainer.style.display = 'block';
      });
    }

    // Evento para agendar llamada
    const scheduleCallBtn = document.getElementById('scheduleCallBtn');
    if (scheduleCallBtn) {
      scheduleCallBtn.addEventListener('click', () => {
        // Aquí podría implementarse un modal para agendar llamada
        alert(
          'Función de agendamiento de llamada en desarrollo. Por favor, complete el formulario y seleccione su hora preferida en el campo de mensaje.'
        );
      });
    }

    // Efectos flotantes para los elementos premium
    this.addPremiumEffects();
  }

  addPremiumEffects() {
    // Efecto de destello para elementos premium
    const premiumElements = document.querySelectorAll(
      '.premium-accent, .divider-diamond, .btn-premium'
    );

    premiumElements.forEach(element => {
      element.addEventListener('mouseover', () => {
        element.classList.add('shimmer');
      });

      element.addEventListener('mouseleave', () => {
        setTimeout(() => {
          element.classList.remove('shimmer');
        }, 500);
      });
    });

    // Efecto flotante para la tarjeta de contacto
    const contactCard = document.querySelector('.contact-card');
    if (contactCard) {
      document.addEventListener('mousemove', e => {
        const card = contactCard.getBoundingClientRect();
        const cardCenterX = card.left + card.width / 2;
        const cardCenterY = card.top + card.height / 2;

        const angleX = (e.clientY - cardCenterY) / 30;
        const angleY = (cardCenterX - e.clientX) / 30;

        contactCard.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });

      document.addEventListener('mouseleave', () => {
        contactCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    }
  }
}
