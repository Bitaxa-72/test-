const menuButton = document.querySelector('.header__menu-button');
const mobileNavigation = document.querySelector('.header__mobile-navigation');

if (menuButton && mobileNavigation) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Открыть меню' : 'Закрыть меню');
    mobileNavigation.hidden = isExpanded;
  });

  mobileNavigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Открыть меню');
      mobileNavigation.hidden = true;
    });
  });
}
