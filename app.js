const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const mount = document.querySelector('#teaser-mount');
const container = document.querySelector('.teaser-scroll');
const section = document.querySelector('.teaser-section');
const pauseButton = document.querySelector('#pause-animation');
const originalButton = document.querySelector('#original-toggle');
const panelButtons = [...document.querySelectorAll('.teaser-controls [data-panel]')];
const narrowFigure = matchMedia('(max-width:800px)');
let svg = null, travelers = [], paused = reduceMotion.matches;
let selectedPanel = 0, motionTime = 0, inView = true, original = false;

function sizeFigure() {
  if (!svg) return;
  const cropped = narrowFigure.matches && !original;
  svg.setAttribute('viewBox', cropped ? '0 0 476 164' : '0 0 476 182');
  svg.setAttribute('height', cropped ? '164' : '182');
}
function scrollPanel(instant = false) {
  if (!svg || original || container.scrollWidth <= container.clientWidth + 1) return;
  container.scrollTo({left: container.scrollWidth * selectedPanel / 3,
    behavior: instant || reduceMotion.matches ? 'instant' : 'smooth'});
}
narrowFigure.addEventListener('change', () => { sizeFigure(); scrollPanel(true); });
new ResizeObserver(() => scrollPanel(true)).observe(container);
function syncPause() {
  pauseButton.setAttribute('aria-pressed', String(paused));
  pauseButton.textContent = paused ? '▷ Play animation' : 'Ⅱ Pause animation';
}
function setOriginal(value) {
  original = value;
  section.classList.toggle('original-view', value);
  sizeFigure();
  originalButton.setAttribute('aria-pressed', String(value));
  originalButton.textContent = value ? 'Animated figure' : 'Original figure';
  if (value) container.scrollTo({left: 0, behavior: 'instant'});
  else scrollPanel();
  paint();
}
pauseButton.addEventListener('click', () => { if (paused && motionTime >= 5000) motionTime = 0; paused = !paused; syncPause(); paint(); });
originalButton.addEventListener('click', () => setOriginal(!original));
panelButtons.forEach((button, index) => button.addEventListener('click', () => {
  selectedPanel = index;
  if (original) setOriginal(false);
  panelButtons.forEach((item, i) => {
    item.classList.toggle('active', i === index);
    item.setAttribute('aria-pressed', String(i === index));
  });
  scrollPanel();
}));
document.querySelector('#replay').addEventListener('click', () => {
  motionTime = 0;
  if (original) setOriginal(false);
  paused = reduceMotion.matches;
  syncPause();
  paint();
});
function paint() {
  // Only the traveling markers move; coverage and original artwork stay fixed.
  travelers.forEach(({particle, path, length}, index) => {
    if (original || reduceMotion.matches) {
      particle.setAttribute('opacity', '0');
      return;
    }
    const phase = (motionTime / 2500 + (index % 4) * .21) % 1;
    const point = path.getPointAtLength(length * phase);
    particle.setAttribute('cx', point.x);
    particle.setAttribute('cy', point.y);
    particle.setAttribute('opacity', String(Math.min(phase * 10, (1 - phase) * 10, 1)));
  });
}
async function loadTeaser() {
  try {
    svg = mount.querySelector('svg');
    if (!svg) throw new Error('Teaser not available');
    sizeFigure();
    travelers = [...svg.querySelectorAll('.traveler')].map(particle => {
      const path = svg.querySelector('#' + particle.dataset.path);
      return {particle, path, length: path.getTotalLength()};
    });
    paint();
  } catch (error) {
    mount.textContent = 'The interactive figure could not load. Please refresh the page.';
    document.querySelector('.teaser-actions').hidden = true;
    document.querySelector('.teaser-controls').hidden = true;
    console.error(error);
  }
}
syncPause();
loadTeaser();
new IntersectionObserver(entries => { inView = entries[0].isIntersecting; }, {threshold: .15}).observe(mount);
let previous = performance.now();
function tick(now) {
  const dt = Math.min(now - previous, 100);
  previous = now;
  if (svg && !paused && !original && inView && !document.hidden) {
    motionTime = Math.min(motionTime + dt, 5000);
    paint();
    if (motionTime >= 5000) { paused = true; syncPause(); }
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
reduceMotion.addEventListener('change', e => {
  if (e.matches) paused = true;
  syncPause();
  paint();
});
const navLinks=[...document.querySelectorAll('nav a')];const navObserver=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting)navLinks.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));},{rootMargin:'-10% 0px -65% 0px'});document.querySelectorAll('.content-section').forEach(s=>navObserver.observe(s));
