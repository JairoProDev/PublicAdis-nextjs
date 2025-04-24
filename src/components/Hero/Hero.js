import '../../css/components/hero.css';
import { HeroSlider } from './HeroSlider.js';
import { HeroMetrics } from './HeroMetrics.js';
import { HeroFloatingElements } from './HeroFloatingElements.js';

export class Hero {
  constructor() {
    this.dynamicTexts = [
      'Haz Crecer Tu Negocio con',
      'Multiplica Tus Ventas con',
      'Aumenta Tu Visibilidad con',
      'Conquista Nuevos Clientes con',
      'Potencia Tu Marca con',
      'Expande Tu Alcance con',
      'Transforma Tu Presencia con',
      'Maximiza Tu Inversión con',
    ];
    this.currentTextIndex = 0;
    this.dynamicTitleElement = null;
    this.slideInterval = null;
    this.currentSlide = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  init() {
    this.render();
    this.initHeroInteractions();
    this.initHeroSlider();
    this.initMetricsAnimation();
    this.addParallaxEffect();
    this.setupTouchEvents();
    this.addGoldEffects();
  }

  render() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    heroSection.innerHTML = `
      <div class="hero-container">
        <div class="hero-content">
          <div class="premium-badge gold-shimmer">
            <i class="fas fa-crown"></i>
            <span>Plataforma Premium</span>
          </div>
          
          <h1 class="hero-title fade-in-up">
            <span id="dynamicTitle">${this.dynamicTexts[0]}</span> 
            <span class="hero-title-highlight gold-shimmer">PublicAdis</span>
          </h1>

          <p class="hero-subtitle fade-in-up delay-1">
            La plataforma publicitaria más completa de Cusco que impulsa tus ventas en todos los canales de forma efectiva
          </p>

          <div class="platforms-checklist fade-in-up delay-1">
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Sitio Web</span>
            </div>
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Aplicación Móvil</span>
            </div>
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Revista Digital</span>
            </div>
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Redes Sociales</span>
            </div>
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Locales Presenciales</span>
            </div>
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Grupos de WhatsApp</span>
            </div>
          </div>

          <div class="hero-metrics fade-in-up delay-2">
            <div class="hero-metric">
              <div class="metric-icon">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <span class="metric-number" data-value="+380">+380%</span>
              <span class="metric-text">Multiplica tus clientes potenciales</span>
            </div>
            <div class="hero-metric">
              <div class="metric-icon">
                <i class="fa-solid fa-users"></i>
              </div>
              <span class="metric-number" data-value="+25k">+25k</span>
              <span class="metric-text">Personas interesadas al mes</span>
            </div>
            <div class="hero-metric">
              <div class="metric-icon">
                <i class="fa-solid fa-sack-dollar"></i>
              </div>
              <span class="metric-number" data-value="+200">+200%</span>
              <span class="metric-text">Incremento en ventas promedio</span>
            </div>
          </div>

          <div class="hero-buttons fade-in-up delay-3">
            <a href="#services" class="btn btn-primary pulse-animation">
              <i class="fas fa-rocket"></i>
              Explorar Servicios
            </a>
            <a href="#businessTools" class="btn btn-gold">
              <i class="fas fa-tools"></i>
              Herramientas Gratuitas
            </a>
          </div>
        </div>

        <div class="hero-slider" id="heroSlider">
          <div class="slides">
            <div class="slide slide-active">
              <img src="/assets/images/hero/platform-mockup.png" alt="Plataforma PublicAdis">
              <div class="slide-overlay">
                <h3>Tecnología Publicitaria Avanzada</h3>
                <p>Algoritmos de IA que maximizan tu ROI</p>
              </div>
            </div>
            <div class="slide">
              <img src="/assets/images/hero/analytics-mockup.png" alt="Análisis en tiempo real">
              <div class="slide-overlay">
                <h3>Analytics en Tiempo Real</h3>
                <p>Toma decisiones basadas en datos precisos</p>
              </div>
            </div>
            <div class="slide">
              <img src="/assets/images/hero/integration-mockup.png" alt="Integración con Buscadis">
              <div class="slide-overlay">
                <h3>Integración con Buscadis</h3>
                <p>Alcance máximo en el marketplace líder</p>
              </div>
            </div>
          </div>

          <div class="slider-navigation">
            <button id="prevSlide" class="slider-arrow prev" aria-label="Slide anterior">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="slider-dots">
              <button class="slider-dot active" aria-label="Slide 1"></button>
              <button class="slider-dot" aria-label="Slide 2"></button>
              <button class="slider-dot" aria-label="Slide 3"></button>
            </div>
            <button id="nextSlide" class="slider-arrow next" aria-label="Siguiente slide">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div class="floating-elements">
          <div class="floating-element" data-speed="0.03">
            <i class="fa-solid fa-building"></i>
          </div>
          <div class="floating-element" data-speed="0.02">
            <i class="fa-solid fa-car"></i>
          </div>
          <div class="floating-element" data-speed="0.04">
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div class="floating-element" data-speed="0.025">
            <i class="fa-solid fa-store"></i>
          </div>
        </div>

        <div class="premium-accent"></div>
        <div class="premium-accent-secondary" style="right: 10%; top: 30%"></div>
        <div class="premium-accent-gold" style="left: 30%; top: 20%"></div>
      </div>
      
      <div class="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f9fa" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    `;

    // Guardar referencia al elemento de título dinámico
    this.dynamicTitleElement = document.getElementById('dynamicTitle');
  }

  initHeroInteractions() {
    // Iniciar la rotación del título
    setInterval(() => {
      // Fade out
      if (this.dynamicTitleElement) {
        this.dynamicTitleElement.style.opacity = '0';

        setTimeout(() => {
          // Cambiar texto
          this.currentTextIndex = (this.currentTextIndex + 1) % this.dynamicTexts.length;
          this.dynamicTitleElement.textContent = this.dynamicTexts[this.currentTextIndex];

          // Fade in
          this.dynamicTitleElement.style.opacity = '1';
        }, 500);
      }
    }, 4000);

    // Observe elements for animation
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-up, .fade-in-right').forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      });
    });

    // Agregar animación de contador para las métricas cuando son visibles
    this.initCounterAnimation();
  }

  initCounterAnimation() {
    const counters = document.querySelectorAll('.metric-number');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = counter.getAttribute('data-value');
            let isNumeric = !isNaN(parseInt(target.replace(/[^\d]/g, '')));

            if (isNumeric) {
              let num = parseInt(target.replace(/[^\d]/g, ''));
              let prefix = target.match(/[^\d]*/)[0];
              let count = 0;
              let step = Math.ceil(num / 50); // Aumentamos más rápido para números grandes

              const updateCounter = () => {
                count += step;
                if (count > num) count = num;
                counter.textContent = `${prefix}${count}`;
                if (count < num) {
                  requestAnimationFrame(updateCounter);
                } else {
                  counter.textContent = target; // Aseguramos el valor final exacto
                }
              };

              updateCounter();
            } else {
              counter.textContent = target;
            }

            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (!slides.length || !dots.length) return;

    // Inicializar
    this.currentSlide = 0;
    this.showSlide(this.currentSlide);

    // Navegación con botones
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.prevSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextSlide();
      });
    }

    // Navegación con puntos
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.showSlide(index);
      });
    });

    // Auto-rotación
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  showSlide(index) {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.slider-dot');

    if (!slides.length || !dots.length) return;

    // Ocultar slide actual
    slides[this.currentSlide].classList.remove('slide-active');
    dots[this.currentSlide].classList.remove('active');

    // Configurar dirección de la animación
    if (index > this.currentSlide) {
      slides[this.currentSlide].classList.add('slide-from-left');
      slides[index].classList.add('slide-from-right');
    } else {
      slides[this.currentSlide].classList.add('slide-from-right');
      slides[index].classList.add('slide-from-left');
    }

    // Actualizar índice actual
    this.currentSlide = index;

    // Si está fuera de rango, volver al inicio
    if (this.currentSlide >= slides.length) {
      this.currentSlide = 0;
    } else if (this.currentSlide < 0) {
      this.currentSlide = slides.length - 1;
    }

    // Mostrar nuevo slide después de un breve retraso
    setTimeout(() => {
      // Limpiar clases de dirección
      slides.forEach(slide => {
        slide.classList.remove('slide-from-left', 'slide-from-right');
      });

      // Mostrar slide actual
      slides[this.currentSlide].classList.add('slide-active');
      dots[this.currentSlide].classList.add('active');
    }, 50);
  }

  nextSlide() {
    let newIndex = this.currentSlide + 1;
    if (newIndex >= document.querySelectorAll('.hero-slider .slide').length) {
      newIndex = 0;
    }
    this.showSlide(newIndex);
  }

  prevSlide() {
    let newIndex = this.currentSlide - 1;
    if (newIndex < 0) {
      newIndex = document.querySelectorAll('.hero-slider .slide').length - 1;
    }
    this.showSlide(newIndex);
  }

  setupTouchEvents() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    slider.addEventListener(
      'touchstart',
      e => {
        this.touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    slider.addEventListener(
      'touchend',
      e => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      },
      { passive: true }
    );
  }

  handleSwipe() {
    const threshold = 50; // Mínima distancia para considerar como swipe
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) < threshold) return;

    if (diff > 0) {
      // Swipe hacia la izquierda - siguiente slide
      this.nextSlide();
    } else {
      // Swipe hacia la derecha - slide anterior
      this.prevSlide();
    }

    // Reiniciar temporizador de autorotación
    clearInterval(this.slideInterval);
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  initMetricsAnimation() {
    // Esta función ahora se maneja dentro de initCounterAnimation()
  }

  addParallaxEffect() {
    const floatingElements = document.querySelectorAll('.floating-element');

    window.addEventListener('mousemove', e => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      floatingElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.05;
        const moveX = (x - 0.5) * 100 * speed;
        const moveY = (y - 0.5) * 100 * speed;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  }

  addGoldEffects() {
    // Añadir efectos dorados adicionales cuando se pase el cursor sobre elementos del hero
    const heroHighlight = document.querySelector('.hero-title-highlight');
    if (heroHighlight) {
      heroHighlight.addEventListener('mouseover', () => {
        heroHighlight.classList.add('gold-shimmer');
      });
      heroHighlight.addEventListener('mouseout', () => {
        setTimeout(() => {
          heroHighlight.classList.remove('gold-shimmer');
        }, 1000);
      });
    }

    // Añadir efecto pulsante a los botones gold
    const goldButton = document.querySelector('.btn-gold');
    if (goldButton) {
      goldButton.classList.add('gold-pulse');
    }

    // Añadir efecto de rotación a los acentos premium
    const goldAccent = document.querySelector('.premium-accent-gold');
    if (goldAccent) {
      goldAccent.classList.add('rotate-effect');
    }
  }
}
