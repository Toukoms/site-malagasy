// Animation d'apparition des éléments au défilement
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.value-card, .hero-content');
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
          element.classList.add('visible');
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  heroContent.style.opacity = 1;
  heroContent.style.transform = 'translateY(0)';
});
