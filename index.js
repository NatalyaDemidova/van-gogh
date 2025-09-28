const menuButton = document.querySelector('.mobile-menu');
const menuCloseButton = document.querySelector('.button-close');
const menu = document.querySelector('.nav');

const showMobileMenu = () => {
  menu.classList.toggle('nav--active');
  menuCloseButton.classList.toggle('button-close--active');
  menuButton.classList.toggle('mobile-menu--active');
}

menuButton.addEventListener('click', showMobileMenu);
menuCloseButton.addEventListener('click', showMobileMenu);
