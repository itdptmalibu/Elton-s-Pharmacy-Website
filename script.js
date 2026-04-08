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
// if (contactForm) {
//   contactForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const name = document.getElementById('name')?.value?.trim() || 'there';
//     alert(`✅ Thank you, ${name}. Your message has been received.`);
//     contactForm.reset();
//   });
// }

// if (contactForm) {
//   contactForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const data = new FormData(contactForm);
    
//     const response = await fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       body: data
//     });

//     const result = await response.json();

//     if (result.success) {
//       const name = document.getElementById('name')?.value?.trim() || 'there';
//       alert(`✅ Thank you, ${name}. Your message has been received.`);
//       contactForm.reset();
//     } else {
//       alert('❌ Something went wrong. Please try again.');
//     }
//   });
// }
// 1. Add this in your HTML <head>:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

// emailjs.init("YOUR_PUBLIC_KEY"); // from emailjs.com dashboard

// if (contactForm) {
//   // contactForm.addEventListener('submit', (e) => {
//     // e.preventDefault();
//     // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
//       .then(() => {
//         alert('✅ Message sent successfully!');
//         contactForm.reset();
//       })
//       .catch((err) => {
//         console.error('EmailJS error:', err);
//         alert('❌ Failed to send. Please try again.');
//       });
//   });
// /
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');

  // Disable button during submission
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/mojprnqo', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      alert('✅ Message sent successfully! We\'ll get back to you shortly.');
    } else {
      alert('❌ Something went wrong. Please try again.');
    }

  } catch (error) {
    alert('❌ Network error. Please check your connection and try again.');
  }

  // Restore button
  submitBtn.disabled = false;
  submitBtn.textContent = 'Send Message';
});

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
