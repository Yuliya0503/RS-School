/*burger-menu*/

const menuAdaptive = document.querySelector('.menu-adaptive');
const menuBurger = document.querySelector('.menu-burger');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('.body');
function toggleMenu() {
  menuBurger.classList.toggle('open');
  menuAdaptive.classList.toggle('change');
  burgerMenu.classList.toggle('open-burger');
  body.classList.toggle('body-menu');
  
}
menuAdaptive.addEventListener('click', toggleMenu);

