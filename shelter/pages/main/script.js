/*burger-menu*/

const menuAdaptive = document.querySelector('.menu-adaptive');
const menuBurger = document.querySelector('.menu-burger');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('.body');
const div = document.querySelector('.div');

function toggleMenu() {
  menuBurger.classList.toggle('open');
  menuAdaptive.classList.toggle('change');
  burgerMenu.classList.toggle('open-burger');
  body.classList.toggle('body-menu');
  div.classList.toggle('shadow');
  
}
menuAdaptive.addEventListener('click', toggleMenu);


