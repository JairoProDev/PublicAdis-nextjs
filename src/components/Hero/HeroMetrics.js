export class HeroMetrics {
  constructor() {
    this.metrics = [
      {
        icon: 'chart-line',
        value: 300,
        suffix: '%',
        label: 'Multiplicación de Clientes',
        duration: 2000,
      },
      {
        icon: 'users',
        value: 50000,
        suffix: '+',
        label: 'Personas Interesadas al Mes',
        duration: 2500,
      },
      {
        icon: 'arrow-trend-up',
        value: 200,
        suffix: '%',
        label: 'Aumento en Ventas',
        duration: 2000,
      },
    ];
  }

  init() {
    this.render();
    this.setupIntersectionObserver();
  }

  render() {
    const metricsContainer = document.querySelector('.hero-metrics');
    if (!metricsContainer) return;

    metricsContainer.innerHTML = `
      <div class="metrics-grid">
        ${this.metrics
          .map(
            metric => `
          <div class="hero-metric" data-value="${metric.value}" data-suffix="${metric.suffix}">
            <div class="metric-icon">
              <i class="fas fa-${metric.icon}"></i>
            </div>
            <div class="metric-value">0${metric.suffix}</div>
            <div class="metric-label">${metric.label}</div>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const metric = entry.target;
          const targetValue = parseInt(metric.dataset.value);
          const suffix = metric.dataset.suffix;
          const valueDisplay = metric.querySelector('.metric-value');

          this.animateValue(valueDisplay, 0, targetValue, suffix);
          observer.unobserve(metric);
        }
      });
    }, options);

    document.querySelectorAll('.hero-metric').forEach(metric => {
      observer.observe(metric);
    });
  }

  animateValue(element, start, end, suffix, duration = 2000) {
    let startTimestamp = null;
    const step = timestamp => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      element.textContent = currentValue + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
