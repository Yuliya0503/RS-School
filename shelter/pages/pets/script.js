/*burger-menu coonst*/

const menuAdaptive = document.querySelector('.menu-adaptive');
const menuBurger = document.querySelector('.menu-burger');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('.body');
const div = document.querySelector('.div');

/*burger-menu*/
function toggleMenu() {
  menuBurger.classList.toggle('open');
  menuAdaptive.classList.toggle('change');
  burgerMenu.classList.toggle('open-burger');
  body.classList.toggle('body-menu');
  div.classList.toggle('shadow');
  
}
menuAdaptive.addEventListener('click', toggleMenu);


/*pagination const*/
/*
let count = 48;
let visualDecktop = 8;
let visualDecktopPages = Math.ceil(count / visualDecktop);*/