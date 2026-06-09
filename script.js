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

// 3. Logika Efek Mengetik Otomatis - KALIMAT UTUH & HANYA NAMA YANG HIJAU
window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.typing-text') && typeof Typed !== 'undefined') {
    new Typed('.typing-text', {
      strings: [
        'I am <span style="color: var(--color-green-mid); font-weight: 700;">Akhdan Bayu</span>, Crafting digital experiences as a UI/UX Designer & Web Developer. <span style="color: var(--color-green-mid);">✦</span>'
      ],
      typeSpeed: 40,       // Kecepatan mengetik kalimat
      backSpeed: 20,       // Kecepatan menghapus kalimat jika diulang
      backDelay: 4000,     // Menahan kalimat selama 4 detik sebelum diulang
      loop: true,          // Efek mengetik terus berulang otomatis
      contentType: 'html'  // Wajib ada agar tag warna hijau di atas bisa terbaca browser
    });
  }
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