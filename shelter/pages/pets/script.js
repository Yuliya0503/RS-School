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
const pets = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie'];
const petsCardWrapper = document.querySelector('#wrapper');
const BUTTON_FIRST = document.querySelector('#button-first');
const PREV = document.querySelector('#prev');
const number = document.querySelector('#number');
const NEXT = document.querySelector('#next');
const LAST = document.querySelector('#last');
let page = 1;

const moveFirst = () => {
  number.innerHTML = 1;
  page = 1;
  LAST.classList.add('active');
  LAST.classList.remove('inactive');
  NEXT.classList.add('active');
  NEXT.classList.remove('inactive');
  BUTTON_FIRST.classList.add('inactive');
  BUTTON_FIRST.classList.remove('active');
  PREV.classList.add('inactive');
  PREV.classList.remove('active');
};

const movePrev = () => {
  if(page > 1 && page < 7) {
    page -=1;
    LAST.classList.add('active');
    BUTTON_FIRST.classList.add('active');
    NEXT.classList.add('active');
  }
  if(page === 1) {
  BUTTON_FIRST.classList.add('inactive');
  BUTTON_FIRST.classList.remove('active');
  PREV.classList.add('inactive');
  PREV.classList.remove('active');
  }
  number.innerHTML = page;
}

const moveNext = () => {  
  if (page > 0 && page < 6){
    page += 1;
    LAST.classList.add('active');
    BUTTON_FIRST.classList.add('active');
    NEXT.classList.add('active');
    PREV.classList.add('active');
  }
  if (page === 6) {
    LAST.classList.add('inactive');
    LAST.classList.remove('active');
    NEXT.classList.add('inactive');
    NEXT.classList.remove('active');
  }
  number.innerHTML = page;  
}
const moveLast = () => {
  number.innerHTML = 6;
  page = 6;
  LAST.classList.add('inactive');
  LAST.classList.remove('active');
  NEXT.classList.add('inactive');
  NEXT.classList.remove('active');
  BUTTON_FIRST.classList.add('active');
  BUTTON_FIRST.classList.remove('inactive');
  PREV.classList.add('active');
  PREV.classList.remove('inactive');
};


BUTTON_FIRST.addEventListener("click", moveFirst);
LAST.addEventListener("click", moveLast);
PREV.addEventListener('click', movePrev);
NEXT.addEventListener('click', moveNext);

const page1 = [...petsCardWrapper.children].forEach(f => petsCardWrapper.appendChild(f));


const pages2 = (petsCardWrapper) => {
  const page2 = [...petsCardWrapper.children].sort(() => Math.random()-0.5);
  page2.forEach(f => petsCardWrapper.appendChild(f));
};

LAST.addEventListener('click', () => pages2(petsCardWrapper));
PREV.addEventListener('click', () => pages2(petsCardWrapper));
NEXT.addEventListener('click', () => pages2(petsCardWrapper));
BUTTON_FIRST.addEventListener('click', () => page1(petsCardWrapper));
