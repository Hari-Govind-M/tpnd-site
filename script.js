/* script.js */

(function() {
  /* Theme Toggle */
  const toggleThemeBtn = document.getElementById('toggleTheme');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  /* Scroll Progress Bar */
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
  });

  /* Back to Top Button */
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.style.display = 'flex'; 
    } else {
      backToTopBtn.style.display = 'none'; 
    }
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* Intersection Observer for fade-in */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  const fadeInElements = document.querySelectorAll('.fade-in-up');
  fadeInElements.forEach(el => observer.observe(el));

  /* FAQ Collapsible */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  /* Smooth scrolling for sidebar links */
  const smoothLinks = document.querySelectorAll('.smooth-scroll');
  smoothLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const targetEl = document.querySelector(href);
      if (targetEl) {
        const offsetTop = targetEl.offsetTop;
        window.scrollTo({ top: offsetTop - 20, behavior: 'smooth' });
      }
    });
  });
})();
