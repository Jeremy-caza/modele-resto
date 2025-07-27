// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Sticky header (class handled by CSS)
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 50);
});

// Menu toggle for mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Fermer le menu mobile si on clique en dehors
document.addEventListener('click', function (e) {
  const isClickInsideMenu = nav.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle && nav.classList.contains('open')) {
    nav.classList.remove('open');
  }
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

faders.forEach(el => observer.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateCarousel() {
  const container = document.querySelector('.carousel-track-container');
  const card = document.querySelector('.avis-card');
  const cardWidth = card.offsetWidth + 20;
  const maxTranslate = track.scrollWidth - container.offsetWidth;
  let translate = currentIndex * cardWidth;
  if (translate > maxTranslate) {
    currentIndex = Math.floor(maxTranslate / cardWidth);
    translate = currentIndex * cardWidth;
  }
  track.style.transform = `translateX(-${translate}px)`;
}

nextBtn.addEventListener('click', () => {
  const totalCards = document.querySelectorAll('.avis-card').length;
  const visibleCards = Math.floor(document.querySelector('.carousel-track-container').offsetWidth / (document.querySelector('.avis-card').offsetWidth + 20));
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);
