import './css/variables.css';
import './css/main.css';
import './css/premium.css';
import { Benefits } from './components/Benefits/Benefits.js';
import { BusinessTools } from './components/BusinessTools/BusinessTools.js';
import { Header } from './components/Header/Header.js';
import { Hero } from './components/Hero/Hero.js';
import { Services } from './components/Services/Services.js';
import { Footer } from './components/Footer/Footer.js';
import { Sectors } from './components/Sectors/Sectors.js';
import { Testimonials } from './components/Testimonials/Testimonials.js';
import { Contact } from './components/Contact/Contact.js';

// Manejador global de errores para facilitar la depuración
window.addEventListener('error', function (event) {
  console.error('Global error caught:', event.error || event.message);
  // Evitar que el loader se quede visible si hay errores
  hideLoader();
});

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded - Initializing application');

  // Initialize components
  try {
    console.log('Loading components...');

    // Función auxiliar para inicializar componentes de forma segura
    function safeInit(componentClass, name, targetSelector) {
      try {
        console.log(`Initializing ${name}...`);

        // Verificar si el selector existe
        const container = document.querySelector(targetSelector);
        if (!container) {
          console.warn(`Container ${targetSelector} for ${name} not found!`);
        }

        const component = new componentClass();
        component.init();
        console.log(`${name} initialized successfully`);
        return component;
      } catch (error) {
        console.error(`Error initializing ${name}:`, error);
        return null;
      }
    }

    // Initialize each component
    safeInit(Header, 'Header', '.site-header');
    safeInit(Hero, 'Hero', '.hero-section');
    safeInit(Services, 'Services', '#services');
    safeInit(Benefits, 'Benefits', '#benefits');
    safeInit(Footer, 'Footer', '.site-footer');
    safeInit(BusinessTools, 'BusinessTools', '#businessTools');
    safeInit(Sectors, 'Sectors', '#sectors');
    safeInit(Testimonials, 'Testimonials', '#testimonials');
    safeInit(Contact, 'Contact', '#contacto');

    console.log('All components loaded successfully');

    // Hide loader
    hideLoader();

    // Setup scroll animations
    setupScrollAnimations();

    // Setup premium effects
    applyPremiumEffects();

    // Initialize back to top button
    initBackToTop();

    // Setup parallax effects
    setupParallaxEffects();

    // Initialize global animations
    initGlobalAnimations();

    // Initialize mobile menu
    initMobileMenu();
  } catch (error) {
    console.error('Error loading components:', error);
    hideLoader();
  }

  // Register service worker for PWA functionality if needed
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  }
});

// Hide loader function
function hideLoader() {
  try {
    const loader = document.getElementById('loader');
    if (loader) {
      console.log('Ocultando loader...');

      // Ocultar el loader con transición
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        document.body.classList.add('loaded');
        console.log('Loader oculto correctamente');
      }, 300);

      // Asegurarse que el loader se oculte después de un tiempo máximo
      setTimeout(() => {
        if (loader.style.display !== 'none') {
          console.warn('Forzando ocultamiento del loader');
          loader.style.opacity = '0';
          loader.style.display = 'none';
          document.body.classList.add('loaded');
        }
      }, 3000);
    }
  } catch (error) {
    console.error('Error al ocultar el loader:', error);
    try {
      document.getElementById('loader').style.display = 'none';
      document.body.classList.add('loaded');
    } catch (e) {
      // Ignorar si falla
    }
  }
}

// Setup scroll animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all fade-in elements
  document
    .querySelectorAll('.fade-in-up, .fade-in-right, .fade-in-left, .animate-on-scroll')
    .forEach(el => {
      observer.observe(el);
    });
}

// Initialize back to top button
function initBackToTop() {
  const backToTopButton = document.getElementById('backToTop');

  if (!backToTopButton) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// Setup parallax effects
function setupParallaxEffects() {
  document.addEventListener('mousemove', e => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Parallax para acentos premium
    document
      .querySelectorAll('.premium-accent, .premium-accent-secondary, .premium-accent-gold')
      .forEach(accent => {
        if (!(accent instanceof HTMLElement)) return;

        const speed = parseFloat(accent.getAttribute('data-speed') || '0.05');
        const moveX = (x - 0.5) * 100 * speed;
        const moveY = (y - 0.5) * 100 * speed;

        accent.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
  });
}

// Apply premium effects to the website
function applyPremiumEffects() {
  // Añadir títulos dorados a todas las secciones
  document.querySelectorAll('.section-title').forEach(title => {
    title.classList.add('gold-effect');
  });

  // Añadir acentos premium a las secciones
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    // No aplicar a hero y footer que ya tienen
    if (!(section instanceof HTMLElement)) return;

    if (section.classList.contains('hero-section') || section.classList.contains('site-footer')) {
      return;
    }

    // Añadir acentos de decoración
    const accent1 = document.createElement('div');
    accent1.className = 'section-accent accent-primary';
    accent1.style.left = '15%';
    accent1.style.top = '10%';

    const accent2 = document.createElement('div');
    accent2.className = 'section-accent accent-secondary';
    accent2.style.right = '15%';
    accent2.style.top = '30%';

    const accent3 = document.createElement('div');
    accent3.className = 'section-accent accent-gold';
    accent3.style.left = '30%';
    accent3.style.bottom = '20%';

    // Alternar posiciones en secciones pares
    if (index % 2 === 0) {
      accent1.style.left = '65%';
      accent2.style.right = '65%';
      accent3.style.left = '50%';
    }

    section.style.position = 'relative';
    section.style.overflow = 'hidden';
    section.appendChild(accent1);
    section.appendChild(accent2);
    section.appendChild(accent3);
  });

  // Añadir efectos de hover a las tarjetas
  document
    .querySelectorAll(
      '.card, .service-card, .benefit-card, .tool-card, .sector-card, .testimonial-card'
    )
    .forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('gold-shimmer');
      });

      card.addEventListener('mouseleave', () => {
        setTimeout(() => {
          card.classList.remove('gold-shimmer');
        }, 1000);
      });
    });

  // Añadir bordes dorados a los elementos destacados
  document.querySelectorAll('.featured').forEach(element => {
    element.classList.add('gold-border');
  });

  // Animación contador para estadísticas
  setupCounterAnimation();
}

// Setup counter animation
function setupCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const targetValue = counter.getAttribute('data-count') || '0';
          const target = parseInt(targetValue, 10);
          let count = 0;
          let step = Math.ceil(target / 50);

          const updateCounter = () => {
            count += step;
            if (count > target) count = target;
            counter.textContent = count.toString();
            if (count < target) {
              requestAnimationFrame(updateCounter);
            }
          };

          updateCounter();
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

function initGlobalAnimations() {
  // Initialize AOS (Animate On Scroll) library if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        history.pushState(null, null, targetId);
      }
    });
  });
}

function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navOptions = document.getElementById('navOptionsList');

  if (mobileMenuBtn && navOptions) {
    mobileMenuBtn.addEventListener('click', () => {
      navOptions.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');

      // Change icon based on menu state
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (navOptions.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', e => {
      if (
        !navOptions.contains(e.target) &&
        !mobileMenuBtn.contains(e.target) &&
        navOptions.classList.contains('active')
      ) {
        navOptions.classList.remove('active');
        mobileMenuBtn.classList.remove('active');

        // Restore icon
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = navOptions.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navOptions.classList.remove('active');
        mobileMenuBtn.classList.remove('active');

        // Restore icon
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
  }
}

// Add some style fixes from index.js
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Web App adjustments
    const webAppImage = document.getElementById('webAppImage');
    if (webAppImage) webAppImage.style.marginTop = '9.5%';

    const phoneAppImage = document.getElementById('phoneAppImage');
    if (phoneAppImage) {
      phoneAppImage.style.marginTop = '-10%';
      phoneAppImage.style.marginRight = '34%';
      phoneAppImage.style.marginLeft = '16%';
    }

    // Logo hover effects
    const logoContainer = document.getElementById('logoContainer');
    const pageLogoSpan = document.getElementById('pageLogoSpan');

    if (logoContainer && pageLogoSpan) {
      logoContainer.onmouseover = () => {
        pageLogoSpan.style.color = '#079cff';
      };

      logoContainer.onmouseout = () => {
        pageLogoSpan.style.color = '#ffffff';
      };
    }

    // Gmail icon hover effects
    const gmailIcon = document.getElementById('gmailIcon');
    const gmailIconMessage = document.getElementById('gmailIconMessage');

    if (gmailIcon && gmailIconMessage) {
      gmailIcon.onmouseover = () => {
        setTimeout(() => {
          gmailIconMessage.style.display = 'block';
        }, 300);
      };

      gmailIcon.onmouseout = () => {
        setTimeout(() => {
          gmailIconMessage.style.display = 'none';
        }, 300);
      };

      gmailIcon.addEventListener('click', event => {
        event.preventDefault();
        navigator.clipboard.writeText('publicadis@gmail.com');

        // Show feedback if available
        if (typeof showAlert === 'function') {
          showAlert('Correo copiado al portapapeles', 'success');
        }
      });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navBar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.style.boxShadow = 'var(--shadow-md)';
          navbar.style.height = '12vh';
        } else {
          navbar.style.boxShadow = 'none';
          navbar.style.height = '15vh';
        }
      });
    }

    // Initialize service tabs if exists
    initServiceTabs();
  } catch (error) {
    console.error('Error applying style fixes:', error);
  }
});

// Initialize service tabs
function initServiceTabs() {
  const serviceTabs = document.querySelectorAll('.service-tab');
  const serviceContents = document.querySelectorAll('.service-content');

  if (!serviceTabs.length || !serviceContents.length) return;

  serviceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      serviceTabs.forEach(t => t.classList.remove('active'));

      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all content sections
      serviceContents.forEach(content => {
        content.classList.remove('active');
      });

      // Show selected content
      const targetId = tab.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// Show alert utility function
function showAlert(message, type = 'info', duration = 5000) {
  const alertContainer = document.querySelector('.alert-container') || createAlertContainer();

  // Create alert element
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;

  alert.innerHTML = `
    <div class="alert-icon">
      <i class="fas ${getAlertIcon(type)}"></i>
    </div>
    <div class="alert-message">${message}</div>
    <button class="alert-close">
      <i class="fas fa-times"></i>
    </button>
  `;

  // Add to container
  alertContainer.appendChild(alert);

  // Add show class after a small delay (for animation)
  setTimeout(() => {
    alert.classList.add('alert-show');
  }, 10);

  // Setup close button
  const closeBtn = alert.querySelector('.alert-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeAlert(alert);
    });
  }

  // Auto close after duration
  setTimeout(() => {
    closeAlert(alert);
  }, duration);

  function closeAlert(alertElement) {
    alertElement.classList.add('alert-hide');
    alertElement.classList.remove('alert-show');

    // Remove after animation completes
    setTimeout(() => {
      alertElement.remove();
    }, 300);
  }

  function createAlertContainer() {
    const container = document.createElement('div');
    container.className = 'alert-container';
    document.body.appendChild(container);
    return container;
  }

  function getAlertIcon(alertType) {
    switch (alertType) {
      case 'success':
        return 'fa-check-circle';
      case 'error':
        return 'fa-exclamation-circle';
      case 'warning':
        return 'fa-exclamation-triangle';
      default:
        return 'fa-info-circle';
    }
  }
}

// Debug information
console.log('Main script loaded and premium effects applied');
