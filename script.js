const topbar = document.querySelector('.topbar');
const progress = document.querySelector('.page-progress span');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const portfolioGroups = [...document.querySelectorAll('.portfolio-group[data-category]')];
const filterStatus = document.getElementById('filter-status');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.getElementById('year').textContent = new Date().getFullYear();

function updateScrollState() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  topbar.classList.toggle('scrolled', y > 18);
  progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
}

window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('resize', updateScrollState);
updateScrollState();

if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -42px' });

  document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => observer.observe(element));

  window.setTimeout(() => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => element.classList.add('is-visible'));
  }, 1400);
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}

function applyFilter(filter) {
  filterButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
  });

  portfolioGroups.forEach((group) => {
    group.hidden = filter !== 'all' && group.dataset.category !== filter;
  });

  const label = filter === 'all' ? 'all work' : filter === 'analytics' ? 'analytics projects' : 'software projects';
  filterStatus.textContent = `Showing ${label}.`;
  updateScrollState();
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => applyFilter(button.dataset.filter));
});

applyFilter('all');
