/*burger-menu*/

const menuAdaptive = document.querySelector('.menu-adaptive');
const menuBurger = document.querySelector('.menu-burger');
function toggleMenu() {
  menuBurger.classList.toggle('open');
  menuAdaptive.classList.toggle('change');
}
menuAdaptive.addEventListener('click', toggleMenu);