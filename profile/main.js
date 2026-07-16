// day night mode toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
/* ==========================================================================
   Skill data
   ========================================================================== */
const SKILLS = [
  {
    name: 'CSS',
    color: '#2965F1',
    percent: 90,
    rating: 4,
    icon: `<svg viewBox="0 0 32 32" class="icon"><path fill="#2965F1" d="M5.9 27.4 3.6 2h24.8l-2.3 25.4L15.9 30z"/><path fill="#264DE4" d="M16 27.7 23.5 25.6 25.4 4.6 16 4.6z"/><path fill="#EBEBEB" d="M16 13.5h-4.3l-.3-3.3H16V6.9H8.1l.1.9.8 9h7z"/><path fill="#fff" d="M16 20.9 12.4 20 12.2 17.3H8.9l.4 4.7 6.7 1.8z"/><path fill="#EBEBEB" d="m19.9 13.5.4-3.3H16v3.3z"/><path fill="#fff" d="m19.6 16.7-.4 3.7L16 21.3v3.4l6.6-1.8.7-8.2H16v3z"/></svg>`
  },
  {
    name: 'HTML',
    color: '#F16529',
    percent: 95,
    rating: 5,
    icon: `<svg viewBox="0 0 32 32" class="icon"><path fill="#E44D26" d="M5.9 27.4 3.6 2h24.8l-2.3 25.4L15.9 30z"/><path fill="#F16529" d="M16 27.7 23.5 25.6 25.4 4.6 16 4.6z"/><path fill="#EBEBEB" d="M16 13.7H9.9l-.2-2.4H16V6.9H8.1l.1.9.8 8.3H16z"/><path fill="#fff" d="M16 20.9 12.5 20l-.2-2.7H8.9l.4 4.6 6.7 1.8z"/><path fill="#EBEBEB" d="M16 16.1h3.4l-.3 3.6-3.1.9v3.4l6.1-1.7.1-1 .7-7.7H16z"/><path fill="#fff" d="M16 6.9v3.4h7.5l.1-.9.2-2.5z"/></svg>`
  },
  {
    name: 'JavaScript',
    color: '#F0DB4F',
    percent: 85,
    rating: 4,
    icon: `<svg viewBox="0 0 32 32" class="icon"><rect width="32" height="32" rx="5" fill="#F0DB4F"/><path fill="#323330" d="M21.3 23.4c.6 1 1.5 1.7 2.9 1.7 1.2 0 2-.6 2-1.4 0-1-.8-1.3-2.2-1.9l-.7-.3c-2.2-.9-3.6-2.1-3.6-4.6 0-2.3 1.7-4 4.5-4 1.9 0 3.3.7 4.3 2.5l-2.4 1.5c-.5-.9-1.1-1.3-1.9-1.3-.9 0-1.4.5-1.4 1.3 0 .9.5 1.2 1.8 1.8l.7.3c2.6 1.1 4 2.3 4 4.9 0 2.8-2.2 4.3-5.1 4.3-2.9 0-4.7-1.4-5.6-3.1zM9.6 23.6c.4.7.9 1.3 1.9 1.3.9 0 1.5-.4 1.5-1.8v-9.7h3.1v9.8c0 3.2-1.9 4.6-4.6 4.6-2.5 0-3.9-1.3-4.6-2.8z"/></svg>`
  },
  {
    name: 'Python',
    color: '#3776AB',
    percent: 88,
    rating: 5,
    icon: `<svg viewBox="0 0 32 32" class="icon"><path fill="#3776AB" d="M15.9 2c-1.4 0-2.6.1-3.6.3-3.2.6-3.8 1.8-3.8 4v2.9h7.6v1H8.5H6.1c-2.2 0-4.1 1.3-4.7 3.8-.7 2.9-.7 4.6 0 7.6.5 2.3 1.8 3.8 4 3.8h2.6v-3.4c0-2.5 2.2-4.7 4.7-4.7h7.6c2.1 0 3.8-1.7 3.8-3.8V6.3c0-2-1.7-3.5-3.8-3.9C19 2 17.4 2 15.9 2zM12 4.7c.8 0 1.4.6 1.4 1.4S12.8 7.5 12 7.5s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4z"/><path fill="#FFD43B" d="M23.6 9.2v3.3c0 2.6-2.2 4.8-4.7 4.8h-7.6c-2.1 0-3.8 1.8-3.8 3.8v7.1c0 2 1.7 3.2 3.8 3.8 2.6.7 5 .8 7.6 0 2-.6 3.8-1.8 3.8-3.8v-2.9h-7.6v-1h7.6 3.8c2.2 0 3-1.5 3.8-3.8.8-2.4.7-4.7 0-7.6-.5-2.1-1.6-3.8-3.8-3.8zM20 24.5c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4z"/></svg>`
  },
  {
    name: 'C++',
    color: '#00599C',
    percent: 80,
    rating: 4,
    icon: `<svg viewBox="0 0 32 32" class="icon"><path fill="#00599C" d="m16 2 12.1 7v14L16 30 3.9 23V9z"/><text x="16" y="20.5" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-weight="700" font-size="10.5" fill="#fff">C++</text></svg>`
  }
];

/* ==========================================================================
   Star rating markup
   ========================================================================== */
const STAR_PATH = 'M12 2.5l2.9 6 6.6.8-4.8 4.6 1.2 6.6L12 17.3 6.1 20.5l1.2-6.6-4.8-4.6 6.6-.8z';

function starsMarkup(rating) {
  let out = '';
  for (let i = 1; i <= 5; i++) {
    const cls = i <= rating ? 'star-filled' : 'star-empty';
    out += `<svg class="${cls}" viewBox="0 0 24 24"><path d="${STAR_PATH}"/></svg>`;
  }
  return out;
}

/* ==========================================================================
   Build cards
   ========================================================================== */
const track = document.getElementById('track');
const dotsWrap = document.getElementById('dots');
let activeIndex = 1; // start on HTML, mirrors reference layout

SKILLS.forEach((skill, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.index = i;
  card.style.setProperty('--ring-color', skill.color);
  card.innerHTML = `
    <h3 class="card-name">${skill.name}</h3>
    <div class="ring" style="--pct:${skill.percent}">
      <div class="ring-inner">${skill.icon}</div>
    </div>
    <div class="card-footer">
      <span class="percent">${skill.percent}%</span>
      <span class="divider"></span>
      <span class="stars">${starsMarkup(skill.rating)}</span>
    </div>
  `;
  card.addEventListener('click', () => goTo(i));
  track.appendChild(card);

  const dot = document.createElement('button');
  dot.className = 'dot';
  dot.setAttribute('aria-label', `Show ${skill.name}`);
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});

const cardEls = [...track.children];
const dotEls = [...dotsWrap.children];

/* ==========================================================================
   Coverflow positioning
   ========================================================================== */
function render() {
  const n = SKILLS.length;

  cardEls.forEach((card, i) => {
    let offset = i - activeIndex;
    if (offset > n / 2) offset -= n;
    if (offset < -n / 2) offset += n;

    const abs = Math.abs(offset);
    const spacing = 210;
    const x = offset * spacing;
    const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : 0.68;
    const rotate = offset === 0 ? 0 : offset > 0 ? -28 : 28;
    const z = 100 - abs * 10;
    const opacity = abs > 2 ? 0 : abs === 0 ? 1 : abs === 1 ? 0.85 : 0.55;

    card.style.transform = `translateX(${x}px) scale(${scale}) rotateY(${rotate}deg)`;
    card.style.zIndex = z;
    card.style.opacity = opacity;
    card.classList.toggle('is-active', offset === 0);
    card.setAttribute('aria-hidden', offset !== 0);
  });

  dotEls.forEach((dot, i) => dot.classList.toggle('is-active', i === activeIndex));
}

function goTo(index) {
  const n = SKILLS.length;
  activeIndex = ((index % n) + n) % n;
  render();
}

function next() { goTo(activeIndex + 1); }
function prev() { goTo(activeIndex - 1); }

/* ==========================================================================
   Controls: buttons, keyboard, swipe
   ========================================================================== */
document.getElementById('nextBtn').addEventListener('click', next);
document.getElementById('prevBtn').addEventListener('click', prev);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});

let touchStartX = null;
track.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

track.addEventListener('touchend', (e) => {
  if (touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40) dx > 0 ? prev() : next();
  touchStartX = null;
});

let autoplay = setInterval(next, 4500);
track.addEventListener('mouseenter', () => clearInterval(autoplay));
track.addEventListener('mouseleave', () => { autoplay = setInterval(next, 4500); });

render();