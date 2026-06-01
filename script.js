// =============== HERO SLIDER (manual only — no autoplay) ===============
(function initHeroSlider() {
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('#heroDots .hero__dot');
  if (!slides.length) return;

  let current = 0;

  function goTo(idx) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });
})();

// =============== SCROLL DOWN ARROW ===============
(function initHeroScroll() {
  const btn = document.querySelector('.hero__scroll');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = document.querySelector('.sport-grid');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  });
})();

// =============== CAROUSEL NAV BUTTONS ===============
(function initCarousels() {
  document.querySelectorAll('[data-carousel]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.carousel + '-track';
      const track = document.getElementById(id);
      if (!track) return;
      const dir = parseInt(btn.dataset.dir, 10);
      const card = track.querySelector('.card');
      const step = card ? card.getBoundingClientRect().width + 16 : 400;
      track.scrollBy({ left: step * dir, behavior: 'smooth' });
    });
  });
})();
