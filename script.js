/* script.js */

(function() {
  // Navbar toggle for mobile
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarLinks = document.getElementById('navbarLinks');

  navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
  });

  // Theme toggle (light/dark)
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
})();
