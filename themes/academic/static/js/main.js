// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
    });
    // Close menu when clicking a link
    links.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        links.classList.remove('open');
      });
    });
  }

  // Back to top button
  const btn = document.getElementById('backToTop');
  if (btn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });
  }
});
