(() => {
  const mount = document.querySelector('#architecture-mount');
  const image = document.querySelector('#architecture-model-image');
  const toggle = document.querySelector('#architecture-view-toggle');
  if (!mount || !image || !toggle) return;

  const steps = [
    ['Language & visual context', 'Start with an instruction, two scales of visual history, and the current observation.', 'Context'],
    ['Video expert', 'Encode visual conditions and noisy future frames, with language conditioning through cross-attention.', 'Video expert'],
    ['Unified action space', 'Map robot and egocentric data into a shared 46D representation, with validity masks and grouped normalization.', 'Action space'],
    ['Action expert', 'Encode the action chunk together with robot state and learned register tokens.', 'Action expert'],
    ['Shared video–action attention', 'Connect video and action representations through shared attention across the two experts.', 'Attention'],
    ['Joint flow matching', 'Train the video and action experts jointly; decode future video and executable actions.', 'Joint training']
  ];
  // Regions follow model.pdf at half of the 3200 × 1529 render size.
  // Restore the original artwork over a faint view of the complete figure.
  const regions = [
    '<rect x="0" y="87" width="229" height="386"/><rect x="0" y="489" width="738" height="275.5"/>',
    '<rect x="229" y="158" width="490" height="143"/><rect x="229" y="365" width="490" height="124"/><rect x="211" y="255" width="40" height="46"/>',
    '<rect x="1075" y="0" width="525" height="764.5"/>',
    '<rect x="732" y="158" width="302" height="143"/><rect x="732" y="365" width="302" height="354"/><rect x="1014" y="675" width="327" height="18"/>',
    '<rect x="247" y="301" width="770" height="64"/><rect x="1034" y="278" width="40" height="29"/>',
    '<rect x="0" y="0" width="1600" height="764.5"/>'
  ];
  const scene = document.createElement('div');
  scene.className = 'architecture-scene';
  scene.innerHTML = `
    <div class="architecture-stage-copy">
      <p class="architecture-story-label">WorldBridge / Model construction</p>
      <h3 class="architecture-stage-title"></h3>
      <p class="architecture-stage-description"></p>
    </div>
    <svg class="architecture-stages" viewBox="0 0 1600 764.5" role="img" aria-labelledby="architecture-svg-title">
      <title id="architecture-svg-title"></title>
      <defs>${regions.map((region, i) => `<clipPath id="architecture-region-${i}">${region}</clipPath>`).join('')}</defs>
      <rect width="1600" height="764.5" fill="white"/>
      <image href="${image.getAttribute('src')}" width="1600" height="764.5" opacity="0.1"/>
      ${regions.map((_, i) => `<g class="architecture-reveal" clip-path="url(#architecture-region-${i})"><image href="${image.getAttribute('src')}" width="1600" height="764.5"/></g>`).join('')}
    </svg>
    <div class="architecture-progress" role="group" aria-label="Model construction stages">
      ${steps.map((step, i) => `<button type="button" data-architecture-step="${i}"><span>${String(i + 1).padStart(2, '0')}</span> ${step[2]}</button>`).join('')}
    </div>`;
  mount.append(scene);
  image.hidden = true;
  toggle.hidden = false;

  const title = scene.querySelector('.architecture-stage-title');
  const description = scene.querySelector('.architecture-stage-description');
  const accessibleTitle = scene.querySelector('#architecture-svg-title');
  const layers = [...scene.querySelectorAll('.architecture-reveal')];
  const buttons = [...scene.querySelectorAll('[data-architecture-step]')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let complete = motion.matches;
  let stage = 0;
  let timer;
  let visible = !('IntersectionObserver' in window);

  function render() {
    scene.classList.toggle('is-complete', complete);
    title.textContent = complete ? 'Complete WorldBridge model' : `${String(stage + 1).padStart(2, '0')}  ${steps[stage][0]}`;
    description.textContent = complete ? steps[5][1] : steps[stage][1];
    accessibleTitle.textContent = complete ? image.alt : `Stage ${stage + 1} of 6: ${steps[stage][0]}. ${steps[stage][1]}`;
    layers.forEach((layer, i) => layer.classList.toggle('is-revealed', complete || i <= stage));
    buttons.forEach((button, i) => {
      button.classList.toggle('is-revealed', complete || i <= stage);
      if (!complete && i === stage) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
    toggle.textContent = complete ? 'Play construction loop' : 'View complete model';
    toggle.setAttribute('aria-pressed', String(complete));
  }
  function schedule() {
    clearTimeout(timer);
    if (complete || !visible || document.hidden) return;
    timer = setTimeout(() => {
      stage = (stage + 1) % steps.length;
      render();
      schedule();
    }, stage === 5 ? 4000 : 2000);
  }
  toggle.addEventListener('click', () => {
    complete = !complete;
    if (!complete) stage = 0;
    render();
    schedule();
  });
  buttons.forEach((button, i) => button.addEventListener('click', () => {
    complete = false;
    stage = i;
    render();
    schedule();
  }));
  motion.addEventListener('change', event => {
    complete = event.matches;
    stage = 0;
    render();
    schedule();
  });
  document.addEventListener('visibilitychange', schedule);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      schedule();
    }, {threshold: 0.1});
    observer.observe(mount);
  }
  render();
  schedule();
})();
