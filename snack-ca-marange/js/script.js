// Snack Ça Marange — interactions

document.addEventListener('DOMContentLoaded', () => {
  renderMenuLists();
  setupTabs();
  setupNavToggle();
  setupYear();
});

// --- Injecte les listes de prix depuis menu-data.js ---
function renderMenuLists() {
  Object.entries(MENU_DATA).forEach(([key, items]) => {
    const list = document.getElementById(`list-${key}`);
    if (!list) return;
    list.innerHTML = items
      .map(([name, price]) => `<li><span>${name}</span><b>${price}</b></li>`)
      .join('');
  });
}

// --- Onglets de la carte ---
function setupTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.menu-panel');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      buttons.forEach(b => b.classList.toggle('active', b === btn));
      panels.forEach(p => p.classList.toggle('active', p.dataset.panel === target));

      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  });
}

// --- Menu mobile ---
function setupNavToggle() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
}

// --- Année dynamique dans le footer ---
function setupYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}
