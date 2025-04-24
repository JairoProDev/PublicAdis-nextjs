export class HeroSlider {
  constructor() {
    this.currentSlide = 0;
    this.autoplayInterval = null;
  }

  init() {
    this.slider = document.getElementById('heroSlider');
    this.slides = document.querySelectorAll('.slide');
    this.dots = document.querySelectorAll('.slider-dot');
    this.prevButton = document.getElementById('prevSlide');
    this.nextButton = document.getElementById('nextSlide');

    if (!this.slider || !this.slides.length) return;

    this.setupEventListeners();
    this.startAutoplay();
  }

  setupEventListeners() {
    this.prevButton?.addEventListener('click', () => this.prevSlide());
    this.nextButton?.addEventListener('click', () => this.nextSlide());

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    this.slider.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    });

    this.slider.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        this.nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        this.prevSlide();
      }
    });
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);

    // Pause on hover
    this.slider.addEventListener('mouseenter', () => {
      clearInterval(this.autoplayInterval);
    });

    this.slider.addEventListener('mouseleave', () => {
      this.startAutoplay();
    });
  }

  updateSlides() {
    this.slides.forEach((slide, index) => {
      if (index === this.currentSlide) {
        slide.classList.add('slide-active');
        slide.classList.remove('slide-from-left', 'slide-from-right');
      } else {
        slide.classList.remove('slide-active');
      }
    });

    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.slides[this.currentSlide].classList.add('slide-from-left');
    this.updateSlides();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.slides[this.currentSlide].classList.add('slide-from-right');
    this.updateSlides();
  }

  goToSlide(index) {
    if (index === this.currentSlide) return;

    if (index > this.currentSlide) {
      this.slides[index].classList.add('slide-from-right');
    } else {
      this.slides[index].classList.add('slide-from-left');
    }

    this.currentSlide = index;
    this.updateSlides();
  }
}
