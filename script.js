const year = document.getElementById('year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const panicButton = document.getElementById('panic');
const panicPage = document.getElementById('page');
if (panicButton && panicPage) {
  panicButton.addEventListener('click', () => {
    panicPage.classList.remove('lost');
    void panicPage.offsetWidth;
    panicPage.classList.add('lost');

    window.setTimeout(() => {
      window.location.assign('/');
    }, 700);
  });
}
