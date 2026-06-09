// 1. Logika Toggle Menu Mobile (Hamburger)
function toggleMenu() {
  const menu = document.getElementById('nav-mobile');
  if (menu) {
    menu.classList.toggle('open');
  }
}

// Menutup menu mobile otomatis jika mengklik di luar area menu
document.addEventListener('click', function(e) {
  const menu = document.getElementById('nav-mobile');
  const btn = document.querySelector('.nav-hamburger');
  if (menu && menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// 2. Logika Navigasi Aktif Otomatis Saat Di-scroll (Highlight Active Link)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) {
      current = s.getAttribute('id');
    }
  });
  navLinks.forEach(a => {
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--color-dark)';
    } else {
      a.style.color = '';
    }
  });
});

// 4. Logika Animasi Memudar Halus Saat Halaman Di-scroll (Scroll Reveal Sensor)
function revealElements() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 80; 
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);
