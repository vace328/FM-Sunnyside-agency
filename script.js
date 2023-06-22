const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.primary-navigation');

menuToggle.addEventListener('click', () => {
  const isOpened = menuToggle.getAttribute('aria-expanded') === "true";
  isOpened ? closeMenu() : openMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 800) {
    const isOpened = siteNavigation.getAttribute('data-state') === "opened";
    isOpened ? closeMenu() : '';
  }
});




function openMenu() {
  menuToggle.setAttribute('aria-expanded', "true");
  siteNavigation.setAttribute('data-state', "opened");
}
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', "false");
  siteNavigation.setAttribute('data-state', "closing");

  siteNavigation.addEventListener('animationend', () => {
    siteNavigation.setAttribute('data-state', "closed");
  }, {once: true})
}