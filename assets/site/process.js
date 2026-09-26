// Step through a painting's process photos with the slider, arrow buttons, or Play.
// Only the photo on screen and its neighbours are downloaded, so long series stay fast.
document.querySelectorAll('.process').forEach((section) => {
  const dir = section.dataset.dir;
  const total = Number(section.dataset.frames);
  const img = section.querySelector('.process-view img');
  const slider = section.querySelector('input[type="range"]');
  const counter = section.querySelector('output');
  const play = section.querySelector('.play');
  const src = (i) => `${dir}${String(i).padStart(2, '0')}.webp`;
  const loaded = new Set([1]);
  let timer = null;

  const preload = (i) => {
    if (i < 1 || i > total || loaded.has(i)) return;
    loaded.add(i);
    new Image().src = src(i);
  };

  const show = (i) => {
    const n = Math.min(total, Math.max(1, i));
    slider.value = n;
    img.src = src(n);
    img.alt = `Process photo ${n} of ${total}`;
    counter.textContent = `${n} / ${total}`;
    preload(n + 1);
    preload(n + 2);
    preload(n - 1);
  };

  const stop = () => {
    clearInterval(timer);
    timer = null;
    play.textContent = 'Play';
  };

  slider.addEventListener('input', () => {
    stop();
    show(Number(slider.value));
  });

  section.querySelectorAll('[data-step]').forEach((button) => {
    button.addEventListener('click', () => {
      stop();
      show(Number(slider.value) + Number(button.dataset.step));
    });
  });

  play.addEventListener('click', () => {
    if (timer) return stop();
    if (Number(slider.value) >= total) show(1);
    play.textContent = 'Pause';
    timer = setInterval(() => {
      const next = Number(slider.value) + 1;
      if (next > total) stop();
      else show(next);
    }, 450);
  });

  preload(2);
});
