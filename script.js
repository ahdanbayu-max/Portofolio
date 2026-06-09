function toggleMenu() {
  const menu = document.getElementById('nav-mobile');
  if (menu) {
    menu.classList.toggle('open');
  }
}

document.addEventListener('click', function(e) {
  const menu = document.getElementById('nav-mobile');
  const btn = document.querySelector('.nav-hamburger');
  if (menu && menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});

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
