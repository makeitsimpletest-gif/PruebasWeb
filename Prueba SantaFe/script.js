// ---- Mobile nav ----
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
let navOpen = false;

menuBtn.addEventListener('click', () => {
  navOpen = !navOpen;
  mobileNav.classList.toggle('open', navOpen);
  menuBtn.setAttribute('aria-expanded', navOpen);
});

function closeMobileNav() {
  navOpen = false;
  mobileNav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}

// Close nav on click outside
document.addEventListener('click', (e) => {
  if (navOpen && !mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
    closeMobileNav();
  }
});

// ---- Scroll to top ----
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ---- Page navigation system ----
const backBtn = document.getElementById('pageBackBtn');
let currentPage = null;

function openPage(pageId) {
  // Close any open page first
  if (currentPage) {
    const prev = document.getElementById('page-' + currentPage);
    if (prev) prev.classList.remove('page-active');
  }

  if (!pageId || pageId === 'home') {
    currentPage = null;
    backBtn.classList.remove('visible');
    document.querySelectorAll('.navbar__link').forEach(l => l.classList.remove('active'));
    return;
  }

  const overlay = document.getElementById('page-' + pageId);
  if (!overlay) return;

  overlay.scrollTop = 0;
  overlay.classList.add('page-active');
  currentPage = pageId;
  backBtn.classList.add('visible');

  // Update active nav link
  document.querySelectorAll('.navbar__link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });
}

// Listen to all data-page links
document.addEventListener('click', function(e) {
  const el = e.target.closest('[data-page]');
  if (!el) return;
  e.preventDefault();
  openPage(el.dataset.page);
});

// Back button
backBtn.addEventListener('click', () => openPage('home'));

// ---- Toast ----
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}

// ---- Transport form ----
function handleTransportForm(e) {
  e.preventDefault();
  const origen = document.getElementById('ruta-origen').value.trim();
  if (!origen) {
    document.getElementById('ruta-origen').focus();
    return;
  }
  showToast('¡Ruta publicada exitosamente! Los hinchas ya pueden verla.');
  e.target.reset();
}

// ---- Register form ----
function handleRegisterForm(e) {
  e.preventDefault();
  const nombre = document.getElementById('reg-nombre').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const terms = document.getElementById('reg-terms').checked;

  if (!nombre) { document.getElementById('reg-nombre').focus(); return; }
  if (!email || !email.includes('@')) { document.getElementById('reg-email').focus(); showToast('Por favor ingresa un correo válido.'); return; }
  if (password.length < 8) { document.getElementById('reg-password').focus(); showToast('La contraseña debe tener mínimo 8 caracteres.'); return; }
  if (!terms) { document.getElementById('reg-terms').focus(); showToast('Debes aceptar los términos para continuar.'); return; }

  showToast('¡Bienvenido a la familia cardenal, ' + nombre + '! 🦁');
  e.target.reset();
}

// ---- Toggle password ----
function togglePassword() {
  const input = document.getElementById('reg-password');
  input.type = input.type === 'password' ? 'text' : 'password';
}
