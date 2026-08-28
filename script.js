const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.getElementById('year').textContent = new Date().getFullYear();

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 12);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.textContent = isOpen ? 'Menu' : 'Close';
  navLinks.classList.toggle('open', !isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Menu';
    navLinks.classList.remove('open');
  });
});

if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -36px' });

  document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => observer.observe(element));

  window.setTimeout(() => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => element.classList.add('is-visible'));
  }, 1800);
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}
