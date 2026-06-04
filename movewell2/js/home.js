/* ============================================================
   HOME PAGE JAVASCRIPT
============================================================ */

// ==================== NAVBAR SCROLL ====================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
});

// ==================== HAMBURGER MENU ====================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// ==================== SCROLL TO SERVICES ====================
const scrollToServicesBtn = document.getElementById('scrollToServicesBtn');
if (scrollToServicesBtn) {
  scrollToServicesBtn.addEventListener('click', () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ==================== FADE-UP OBSERVER ====================
function observeFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

observeFadeUp();

// ==================== CLOSE MOBILE MENU ON LINK CLICK ====================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
  });
});