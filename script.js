const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name')?.value?.trim() || 'there';
    formStatus.textContent = `Thank you, ${name}. Your message has been received.`;
    contactForm.reset();
  });
}
const links = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
let fromTop = window.scrollY;

links.forEach(link => {
let section = document.querySelector(link.hash);

if(
section.offsetTop <= fromTop + 100 &&
section.offsetTop + section.offsetHeight > fromTop + 100
){
link.classList.add("active");
}else{
link.classList.remove("active");
}
});
});
// MENU TOGGLE
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('open');
});

// CLOSE MENU ON LINK CLICK (optional)
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
    }
  });
});

// ACTIVE NAV LINK
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navMenu a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

