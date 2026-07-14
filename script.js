const root = document.documentElement;
const topbar = document.querySelector('.topbar');
const progress = document.querySelector('.page-progress span');
const hero = document.querySelector('.hero');

document.getElementById('year').textContent = new Date().getFullYear();

function updateScrollState() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  topbar.classList.toggle('scrolled', y > Math.min(80, hero.offsetHeight * 0.12));
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
}

window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('resize', updateScrollState);
updateScrollState();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => observer.observe(element));

window.setTimeout(() => {
  document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => element.classList.add('is-visible'));
}, 1200);

if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  hero.addEventListener('pointermove', (event) => {
    root.style.setProperty('--pointer-x', `${event.clientX}px`);
    root.style.setProperty('--pointer-y', `${event.clientY}px`);
  });

  document.querySelectorAll('.tilt-frame').forEach((frame) => {
    frame.addEventListener('pointermove', (event) => {
      const rect = frame.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      frame.style.transform = `perspective(1000px) rotateX(${-y * 3}deg) rotateY(${x * 4}deg)`;
    });
    frame.addEventListener('pointerleave', () => { frame.style.transform = ''; });
  });
}
