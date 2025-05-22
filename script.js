/* fichier script js */

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopElement = document.querySelector('.scroll-to-top');

    // Scroll to top au clic
    scrollToTopElement.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Apparition fluide après 70% de scroll
    window.addEventListener('scroll', function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      if (scrollPercent > 0.7) {
        scrollToTopElement.classList.add('visible');
      } else {
        scrollToTopElement.classList.remove('visible');
      }
    });
  });

  const hamburger = document.getElementById('hamburger');
      const navMenuMobile = document.getElementById('navMenuMobile');
      
      // Quand l'icône hamburger est cliquée
      hamburger.addEventListener('click', () => {
        navMenuMobile.classList.toggle('active');  // Affiche ou masque le menu
        hamburger.classList.toggle('active');      // Transforme l'icône hamburger en croix
        document.body.classList.toggle('menu-active'); // Empêche le scroll du site
      });

  document.querySelectorAll('.introduction-bloc, .second-bloc, .video-item, .fourth-bloc, .fifth-bloc, .topics-container, .topics-grid, .ep-square ').forEach(el => {
  el.classList.add('fade-in-on-scroll');
});

const elements = document.querySelectorAll('.fade-in-on-scroll');

function handleScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // pour déclencher au chargement

    
    
      
