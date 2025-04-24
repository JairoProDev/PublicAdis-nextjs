import '../../css/components/benefits.css';

// Benefits Component
export class Benefits {
  constructor() {
    this.benefits = [
      {
        icon: 'fa-bullhorn',
        title: 'Exposición en 7 Canales Diferentes',
        description:
          'Tu anuncio aparecerá en nuestra web, app, local físico, Facebook, TikTok, WhatsApp y revista digital.',
        stats: [{ value: '7x', label: 'Más alcance' }],
        color: 'blue',
      },
      {
        icon: 'fa-user-plus',
        title: 'Audiencia Local Altamente Interesada',
        description:
          'Conecta con personas que realmente buscan tus productos o servicios en Cusco y alrededores.',
        stats: [{ value: '+5K', label: 'Usuarios diarios' }],
        color: 'green',
      },
      {
        icon: 'fa-chart-line',
        title: 'Incremento de Ventas Demostrado',
        description:
          'Nuestros anunciantes reportan un aumento significativo en consultas y ventas tras publicar.',
        stats: [{ value: '+40%', label: 'Ventas promedio' }],
        color: 'orange',
      },
      {
        icon: 'fa-clock',
        title: 'Publicación Simple y Rápida',
        description:
          'Crea y publica tu anuncio en menos de 5 minutos, desde cualquier dispositivo y a cualquier hora.',
        stats: [{ value: '5 min', label: 'Tiempo promedio' }],
        color: 'purple',
      },
      {
        icon: 'fa-hand-pointer',
        title: 'Control Total de tus Anuncios',
        description:
          'Gestiona, edita o actualiza tus anuncios cuando quieras. Tú tienes el control total.',
        stats: [{ value: '100%', label: 'Control' }],
        color: 'teal',
      },
      {
        icon: 'fa-comments-dollar',
        title: 'Retorno de Inversión Superior',
        description:
          'El mejor ROI del mercado publicitario local. Inversión mínima, resultados máximos.',
        stats: [{ value: '3.5x', label: 'ROI promedio' }],
        color: 'red',
      },
      {
        icon: 'fa-globe',
        title: 'Alcance Multicanal',
        description:
          'Su mensaje llegará a través de web, aplicación móvil, revista digital, redes sociales, grupos de WhatsApp y puntos físicos.',
        stats: [{ value: '7', label: 'Canales integrados' }],
        color: 'amber',
      },
      {
        icon: 'fa-shield-alt',
        title: 'Protección Antifrauide',
        description:
          'Nuestro sistema de detección de fraude garantiza que su presupuesto publicitario se invierta exclusivamente en interacciones legítimas.',
        stats: [{ value: '100%', label: 'Seguridad' }],
        color: 'indigo',
      },
    ];

    this.testimonials = [
      {
        text: 'Desde que empecé a publicar mis propiedades en PublicAdis, logré alquilar dos departamentos en menos de una semana. El alcance es impresionante.',
        rating: 5,
        author: 'Carlos Mendoza',
        title: 'Agente Inmobiliario',
        image: './src/assets/images/testimonials/user1.jpg',
      },
      {
        text: 'Encontré a mi equipo de trabajo gracias a los anuncios de empleo. La plataforma es muy fácil de usar y los resultados son rápidos.',
        rating: 4.5,
        author: 'María Flores',
        title: 'Dueña de Restaurante',
        image: './src/assets/images/testimonials/user2.jpg',
      },
      {
        text: 'Vendí mi auto en 3 días gracias a PublicAdis. Lo mejor es que pude publicarlo en todos los canales con un solo clic. Muy recomendado.',
        rating: 5,
        author: 'Juan Perez',
        title: 'Ingeniero',
        image: './src/assets/images/testimonials/user3.jpg',
      },
    ];
  }

  init() {
    console.log('Initializing Benefits component');
    this.render();
    this.addAnimations();
    this.initTestimonialSlider();
  }

  render() {
    const container =
      document.getElementById('benefitsContainer') || document.querySelector('#benefits');
    if (!container) {
      console.error('Benefits container not found');
      return;
    }

    container.innerHTML = `
      <section id="benefits" class="benefits-section pageSection">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title animate-on-scroll">
              Beneficios de Anunciarte con
              <span class="section-title-highlight">PublicAdis</span>
            </h2>
            <p class="section-subtitle animate-on-scroll">
              Descubre por qué los negocios en Cusco prefieren nuestra plataforma
            </p>
          </div>

          <div class="benefits-grid">
            ${this.benefits
              .map(
                (benefit, index) => `
              <div class="benefit-card animate-on-scroll benefit-${benefit.color}" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="benefit-icon-container">
                  <i class="fa-solid ${benefit.icon}"></i>
                </div>
                <h3 class="benefit-title">${benefit.title}</h3>
                <p class="benefit-description">${benefit.description}</p>
                <div class="benefit-metrics">
                  ${benefit.stats
                    .map(
                      stat => `
                    <div class="metric">
                      <span class="metric-value" data-count="${stat.value.replace(/\D/g, '')}">${stat.value}</span>
                      <span class="metric-label">${stat.label}</span>
                    </div>
                  `
                    )
                    .join('')}
                </div>
                <div class="benefit-icon-bg"></div>
              </div>
            `
              )
              .join('')}
          </div>

          <div class="benefits-stats">
            <div class="stat-item">
              <span class="stat-value">+380%</span>
              <span class="stat-label">ROI promedio</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">50K+</span>
              <span class="stat-label">Usuarios activos</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">+200%</span>
              <span class="stat-label">Incremento en ventas</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">7</span>
              <span class="stat-label">Canales integrados</span>
            </div>
          </div>

          <div class="benefits-cta animate-on-scroll">
            <a href="https://wa.me/937054328" class="btn-cta">
              Comienza a Anunciar Ahora
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          
          <div class="benefits-testimonials">
            <h3 class="testimonials-title animate-on-scroll">Lo que dicen nuestros usuarios</h3>
            
            <div class="testimonials-slider">
              ${this.testimonials
                .map(
                  testimonial => `
                <div class="testimonial-card animate-on-scroll">
                  <div class="testimonial-content">
                    <div class="testimonial-quote">
                      <i class="fa-solid fa-quote-left"></i>
                    </div>
                    <p class="testimonial-text">
                      ${testimonial.text}
                    </p>
                    <div class="testimonial-rating">
                      ${this.generateRatingStars(testimonial.rating)}
                    </div>
                  </div>
                  <div class="testimonial-author">
                    <div class="testimonial-author-image">
                      <img src="${testimonial.image}" alt="${testimonial.author}" onerror="this.src='https://ui-avatars.com/api/?name=${testimonial.author
                        .split(' ')
                        .map(n => n[0])
                        .join('+')}&background=0D8ABC&color=fff'">
                    </div>
                    <div class="testimonial-author-info">
                      <h4 class="testimonial-author-name">${testimonial.author}</h4>
                      <p class="testimonial-author-title">${testimonial.title}</p>
                    </div>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
        
        <div class="benefits-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="white" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,176C672,160,768,160,864,181.3C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
    `;
  }

  addAnimations() {
    // Implementar animaciones en scroll para los benefit cards
    const cards = document.querySelectorAll('.benefit-card');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);

            // Si hay contadores, iniciarlos
            const counters = entry.target.querySelectorAll('.metric-value');
            counters.forEach(counter => this.animateCounter(counter));
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card, index) => {
      // Añadir delay progresivo para animar en secuencia
      if (card instanceof HTMLElement) {
        card.style.transitionDelay = `${index * 0.1}s`;
      }
      observer.observe(card);
    });

    // Animar todas las estadísticas con contador
    const statsSection = document.querySelector('.benefits-stats');
    if (statsSection) {
      const statsObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.animateStats();
              statsObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      statsObserver.observe(statsSection);
    }

    // Observar elementos con animación en scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  animateCounter(element) {
    const value = element.textContent || '';
    const finalValue = value.trim();
    let startValue = 0;
    let duration = 2000;

    // Manejar valores con +, % o x
    let isPlus = false;
    let isPercent = false;
    let isX = false;
    let targetValueStr = finalValue;

    if (typeof finalValue === 'string') {
      if (finalValue.includes('+')) {
        isPlus = true;
        targetValueStr = targetValueStr.replace('+', '');
      }

      if (finalValue.includes('%')) {
        isPercent = true;
        targetValueStr = targetValueStr.replace('%', '');
      }

      if (finalValue.includes('x')) {
        isX = true;
        targetValueStr = targetValueStr.replace('x', '');
      }

      if (finalValue.includes('K')) {
        const numericPart = parseFloat(targetValueStr.replace('K', '').replace(/,/g, ''));
        if (!isNaN(numericPart)) {
          targetValueStr = (numericPart * 1000).toString();
        } else {
          console.error('Invalid K value:', finalValue);
          return;
        }
      }
    } else {
      targetValueStr = String(finalValue);
    }

    // Convertir a número para los cálculos
    const targetValueNum = parseFloat(targetValueStr.replace(/,/g, ''));

    if (isNaN(targetValueNum)) {
      console.error(
        'Failed to parse target value as number:',
        finalValue,
        'processed as:',
        targetValueStr
      );
      element.textContent = finalValue;
      return;
    }

    const increment = targetValueNum / (duration / 16);
    let currentValue = 0;

    const counterTimer = setInterval(() => {
      currentValue += increment;

      if (currentValue >= targetValueNum) {
        clearInterval(counterTimer);
        element.textContent = finalValue;
      } else {
        let displayValue = Math.floor(currentValue).toString();

        if (isPlus) displayValue = '+' + displayValue;
        if (isPercent) displayValue += '%';
        if (isX) displayValue += 'x';

        element.textContent = displayValue;
      }
    }, 16);
  }

  animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(statValue => this.animateCounter(statValue));
  }

  generateRatingStars(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    }

    if (halfStar) {
      starsHtml += '<i class="fa-solid fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<i class="fa-regular fa-star"></i>';
    }

    return starsHtml;
  }

  initTestimonialSlider() {
    const slider = document.querySelector('.testimonials-slider');
    if (!slider) return;

    const cards = slider.querySelectorAll('.testimonial-card');
    if (cards.length <= 1) return;

    let currentIndex = 0;
    let autoplayInterval;

    // Añadir navegación
    const sliderNav = document.createElement('div');
    sliderNav.className = 'slider-nav';

    // Añadir flechas de navegación
    const prevButton = document.createElement('button');
    prevButton.className = 'slider-prev';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.addEventListener('click', () => {
      goToSlide((currentIndex - 1 + cards.length) % cards.length);
    });

    const nextButton = document.createElement('button');
    nextButton.className = 'slider-next';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.addEventListener('click', () => {
      goToSlide((currentIndex + 1) % cards.length);
    });

    sliderNav.appendChild(prevButton);
    sliderNav.appendChild(nextButton);
    slider.appendChild(sliderNav);

    // Iniciar autoplay
    startAutoplay();

    // Pausar autoplay al hacer hover
    slider.addEventListener('mouseenter', () => {
      clearInterval(autoplayInterval);
    });

    slider.addEventListener('mouseleave', () => {
      startAutoplay();
    });

    // Función para ir a un slide específico
    function goToSlide(index) {
      cards.forEach((card, i) => {
        // Asegurarse de que 'card' es un HTMLElement antes de acceder a 'style'
        if (card instanceof HTMLElement) {
          card.style.transform = `translateX(${100 * (i - index)}%)`;
          card.style.opacity = i === index ? '1' : '0.5';
          card.style.pointerEvents = i === index ? 'all' : 'none';
        } else {
          console.warn('Testimonial card is not an HTMLElement:', card);
        }
      });
      currentIndex = index;
    }

    // Iniciar autoplay
    function startAutoplay() {
      clearInterval(autoplayInterval);
      autoplayInterval = setInterval(() => {
        goToSlide((currentIndex + 1) % cards.length);
      }, 5000);
    }

    // Inicializar el primer slide
    goToSlide(0);
  }
}
