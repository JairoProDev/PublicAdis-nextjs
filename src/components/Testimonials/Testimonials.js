import '../../css/components/testimonials.css';

export class Testimonials {
  constructor() {
    this.testimonials = [
      {
        id: 1,
        name: 'Carlos Ramírez',
        position: 'Gerente de Marketing',
        company: 'Inmobiliaria Cusco Real',
        avatar: '/assets/images/testimonials/avatar1.jpg',
        rating: 5,
        quote:
          'Desde que empezamos a utilizar PublicAdis, nuestras ventas de propiedades se han incrementado en un 70%. La visibilidad que nos da su plataforma es incomparable en el mercado inmobiliario de Cusco.',
        metrics: {
          increase: '+70%',
          metric: 'en ventas',
        },
      },
      {
        id: 2,
        name: 'María Sánchez',
        position: 'Propietaria',
        company: 'Automotriz San Jerónimo',
        avatar: '/assets/images/testimonials/avatar2.jpg',
        rating: 5,
        quote:
          'Vendíamos 5 autos usados al mes antes de PublicAdis. Ahora estamos vendiendo más de 15 mensuales. Su sistema de publicidad dirigida realmente funciona para captar clientes interesados.',
        metrics: {
          increase: '3x',
          metric: 'más ventas',
        },
      },
      {
        id: 3,
        name: 'Jorge Mendoza',
        position: 'Director',
        company: 'Instituto Tecnológico Superior',
        avatar: '/assets/images/testimonials/avatar3.jpg',
        rating: 4,
        quote:
          'Las matrículas en nuestros cursos técnicos aumentaron un 120% desde que implementamos la estrategia publicitaria de PublicAdis. Su enfoque multicanal nos permitió llegar a un público que antes no captábamos.',
        metrics: {
          increase: '+120%',
          metric: 'en matrículas',
        },
      },
      {
        id: 4,
        name: 'Ana Fernández',
        position: 'CEO',
        company: 'Consultora Andina',
        avatar: '/assets/images/testimonials/avatar4.jpg',
        rating: 5,
        quote:
          'Como firma de consultoría, necesitábamos posicionarnos con clientes corporativos. PublicAdis nos ayudó a conseguir 12 nuevos clientes en tan solo dos meses, superando todas nuestras expectativas.',
        metrics: {
          increase: '12',
          metric: 'nuevos clientes',
        },
      },
      {
        id: 5,
        name: 'Luis Vargas',
        position: 'Dueño',
        company: 'Restaurante Pachamama',
        avatar: '/assets/images/testimonials/avatar5.jpg',
        rating: 4,
        quote:
          'La afluencia de turistas a nuestro restaurante aumentó significativamente. PublicAdis nos ayudó a posicionarnos en el segmento de turismo gastronómico con una estrategia integral que funcionó desde el primer mes.',
        metrics: {
          increase: '+85%',
          metric: 'más clientes',
        },
      },
      {
        id: 6,
        name: 'Patricia Huamán',
        position: 'Gerente General',
        company: 'Centro Comercial Los Incas',
        avatar: '/assets/images/testimonials/avatar6.jpg',
        rating: 5,
        quote:
          'Implementamos la solución publicitaria de PublicAdis para todas las tiendas de nuestro centro comercial y el tráfico de visitantes aumentó en un 40%. Una inversión que se pagó sola en menos de un mes.',
        metrics: {
          increase: '+40%',
          metric: 'más tráfico',
        },
      },
    ];

    this.currentTestimonial = 0;
    this.autoplayInterval = null;
  }

  init() {
    this.render();
    this.setupCarousel();
  }

  render() {
    const container =
      document.getElementById('testimonialsContainer') || document.querySelector('#testimonials');
    if (!container) return;

    container.innerHTML = `
      <section id="testimonials" class="testimonials-section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Lo que dicen nuestros clientes</h2>
            <p class="section-subtitle">Historias de éxito de empresas que confiaron en PublicAdis</p>
          </div>
          
          <div class="testimonials-carousel">
            <div class="testimonials-wrapper">
              ${this.testimonials
                .map(
                  (testimonial, index) => `
                <div class="testimonial-card ${index === this.currentTestimonial ? 'active' : ''}">
                  <div class="testimonial-rating">
                    ${this.getRatingStars(testimonial.rating)}
                  </div>
                  
                  <div class="testimonial-quote">
                    <i class="fas fa-quote-left quote-icon"></i>
                    <blockquote>${testimonial.quote}</blockquote>
                  </div>
                  
                  <div class="testimonial-metrics">
                    <div class="metric">
                      <span class="metric-value">${testimonial.metrics.increase}</span>
                      <span class="metric-label">${testimonial.metrics.metric}</span>
                    </div>
                  </div>
                  
                  <div class="testimonial-author">
                    <div class="author-avatar">
                      <img src="${testimonial.avatar}" alt="${testimonial.name}">
                    </div>
                    <div class="author-info">
                      <h4 class="author-name">${testimonial.name}</h4>
                      <p class="author-position">${testimonial.position}</p>
                      <p class="author-company">${testimonial.company}</p>
                    </div>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>
            
            <div class="carousel-controls">
              <button class="carousel-arrow prev" aria-label="Testimonio anterior">
                <i class="fas fa-chevron-left"></i>
              </button>
              
              <div class="carousel-dots">
                ${this.testimonials
                  .map(
                    (_, index) => `
                  <button class="carousel-dot ${index === this.currentTestimonial ? 'active' : ''}" data-index="${index}" aria-label="Ver testimonio ${index + 1}"></button>
                `
                  )
                  .join('')}
              </div>
              
              <button class="carousel-arrow next" aria-label="Siguiente testimonio">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <div class="testimonials-cta">
            <div class="cta-content">
              <h3>¿Listo para convertirse en un caso de éxito?</h3>
              <p>Únase a cientos de empresas que están multiplicando sus ventas con PublicAdis</p>
            </div>
            <div class="cta-actions">
              <a href="#contacto" class="btn btn-primary">Empezar Ahora</a>
              <a href="#services" class="btn btn-outline">Ver Servicios</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  setupCarousel() {
    // Configurar navegación por flechas
    const prevButton = document.querySelector('.carousel-arrow.prev');
    const nextButton = document.querySelector('.carousel-arrow.next');

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        this.prevTestimonial();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        this.nextTestimonial();
      });
    }

    // Configurar navegación por puntos
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'), 10);
        this.showTestimonial(index);
      });
    });

    // Iniciar rotación automática
    this.startAutoplay();

    // Pausar rotación al interactuar con el carrusel
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => {
        this.stopAutoplay();
      });

      carousel.addEventListener('mouseleave', () => {
        this.startAutoplay();
      });
    }

    // Configurar interacción táctil
    let touchStartX = 0;
    let touchEndX = 0;

    if (carousel) {
      carousel.addEventListener(
        'touchstart',
        e => {
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true }
      );

      carousel.addEventListener(
        'touchend',
        e => {
          touchEndX = e.changedTouches[0].screenX;
          this.handleSwipe();
        },
        { passive: true }
      );
    }
  }

  showTestimonial(index) {
    // Actualizar el estado interno
    this.currentTestimonial = index;

    // Actualizar la UI
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dot');

    // Ocultar todos los testimonios
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
    });

    // Mostrar el testimonio actual
    if (testimonials[index]) {
      testimonials[index].classList.add('active');
    }

    // Actualizar dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  nextTestimonial() {
    const nextIndex = (this.currentTestimonial + 1) % this.testimonials.length;
    this.showTestimonial(nextIndex);
  }

  prevTestimonial() {
    const prevIndex =
      (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
    this.showTestimonial(prevIndex);
  }

  startAutoplay() {
    this.stopAutoplay(); // Limpiar intervalo existente

    this.autoplayInterval = setInterval(() => {
      this.nextTestimonial();
    }, 6000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  handleSwipe() {
    const SWIPE_THRESHOLD = 50;

    if (touchEndX < touchStartX - SWIPE_THRESHOLD) {
      this.nextTestimonial(); // Swipe izquierdo
    }

    if (touchEndX > touchStartX + SWIPE_THRESHOLD) {
      this.prevTestimonial(); // Swipe derecho
    }
  }

  getRatingStars(rating) {
    let stars = '';

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars += '<i class="fas fa-star"></i>'; // Estrella llena
      } else if (i - 0.5 <= rating) {
        stars += '<i class="fas fa-star-half-alt"></i>'; // Media estrella
      } else {
        stars += '<i class="far fa-star"></i>'; // Estrella vacía
      }
    }

    return stars;
  }
}
