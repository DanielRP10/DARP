document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-toggle i');
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  
    function updateThemeIcon(theme) {
      themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  
    // Navegación móvil
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-nav');
      links.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      hamburger.classList.toggle('toggle');
    });
  
    // Animación de scroll suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Obtener valores del formulario
      const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value
      };
  
      // Aquí podrías agregar la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
  
      // Mostrar mensaje de éxito
      alert('¡Gracias por tu mensaje! Te contactaré pronto.');
  
      // Limpiar el formulario
      contactForm.reset();
    });
  
    // Animación de aparición al scroll
    const observerOptions = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
  
    // Observar todas las secciones
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  
    // Efecto parallax en el hero
    window.addEventListener('scroll', () => {
      const blob = document.querySelector('.blob');
      const scrolled = window.pageYOffset;
      blob.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0) rotate(${scrolled * 0.1}deg)`;
    });
  
    // Animación de las skills
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
      });
  
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
      });
    });
  });