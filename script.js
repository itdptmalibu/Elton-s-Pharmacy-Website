const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');

// MENU TOGGLE
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

// COPYRIGHT YEAR
if (year) {
  year.textContent = new Date().getFullYear();
}

// CONTACT FORM
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name')?.value?.trim() || 'there';
    alert(`✅ Thank you, ${name}. Your message has been received.`);
    contactForm.reset();
  });
}

// ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navMenu a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 100) {
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