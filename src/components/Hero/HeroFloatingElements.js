export class HeroFloatingElements {
  constructor() {
    this.elements = [
      { icon: 'chart-pie', color: 'var(--primary-orange)', size: '2rem' },
      { icon: 'bullseye', color: 'var(--premium-gold)', size: '3rem' },
      { icon: 'lightbulb', color: 'var(--primary-blue)', size: '2.5rem' },
      { icon: 'rocket', color: 'var(--primary-orange)', size: '2rem' },
      { icon: 'star', color: 'var(--premium-gold)', size: '1.5rem' },
    ];
  }

  init() {
    this.render();
    this.setupParallaxEffect();
  }

  render() {
    const container = document.querySelector('.floating-elements');
    if (!container) return;

    container.innerHTML = this.elements
      .map(
        (element, index) => `
      <div class="floating-element float-${index + 1}" 
           style="--element-color: ${element.color}; --element-size: ${element.size}">
        <i class="fas fa-${element.icon}"></i>
      </div>
    `
      )
      .join('');
  }

  setupParallaxEffect() {
    const container = document.querySelector('.hero-section');
    const elements = document.querySelectorAll('.floating-element');
    if (!container || !elements.length) return;

    let mouseX = 0;
    let mouseY = 0;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    // Update dimensions on resize
    window.addEventListener('resize', () => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
    });

    // Track mouse position
    container.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Animate elements
    const animate = () => {
      elements.forEach((element, index) => {
        const speed = 0.03 + (index % 3) * 0.01;
        const x = (mouseX / windowWidth - 0.5) * 100 * speed;
        const y = (mouseY / windowHeight - 0.5) * 100 * speed;

        element.style.transform = `translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }
}
