/*const-burger*/
const menuAdaptive = document.querySelector('.menu-adaptive');
const menuBurger = document.querySelector('.menu-burger');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('.body');
const div = document.querySelector('.div');


/*pets*/

/*const PETS = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.jpg",
    type: "Dog",
    breed: "Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.jpg",
    type: "Dog",
    breed: "Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.jpg",
    type: "Dog",
    breed: "Golden Retriever",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"]
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlet.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"]
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"]
  }
];*/

/*const-slider*/
const BUTTON_LEFT = document.querySelector('#button-left');
const BUTTON_RIGHT = document.querySelector('#button-right');
const CAROUSEL = document.querySelector('#pets-carousel');
const BLOCK_LEFT = document.querySelector('#block-left');
const BLOCK_RIGHT =document.querySelector('#block-right');
const card = document.querySelectorAll('.pet');
/*const Katrine = document.querySelector('#Katrine');
const Jennifer = document.querySelector('#Jennifer');
const Woody = document.querySelector('#Woody');
const Sophia = document.querySelector('#Sophia');
const Timmy = document.querySelector('#Timmy');
const Charly = document.querySelector('#Charly');
const Scarlett = document.querySelector('#Scarlett');
const Freddie = document.querySelector('#Freddie');*/
const pets = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie'];


/*burger-menu*/
function toggleMenu() {
  menuBurger.classList.toggle('open');
  menuAdaptive.classList.toggle('change');
  burgerMenu.classList.toggle('open-burger');
  body.classList.toggle('body-menu');
  div.classList.toggle('shadow');
}
menuAdaptive.addEventListener('click', toggleMenu);

/*carousel*/

const createPetTemplate = () => {// генерирует карточки
  const card = document.createElement('div');
  card.classList.add('pet');
  
  return card;
}



const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");//добавление анимации
  BUTTON_LEFT.removeEventListener("click", moveLeft);//убираем слушатель
  BUTTON_RIGHT.removeEventListener("click", moveRight);

};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");//добавление анимации
  BUTTON_LEFT.removeEventListener("click", moveLeft);//убираем слушатель
  BUTTON_RIGHT.removeEventListener("click", moveRight)
};

BUTTON_LEFT.addEventListener("click", moveLeft);
BUTTON_RIGHT.addEventListener("click", moveRight);


/*анимация*/ 

CAROUSEL.addEventListener('animationend', (animationEvent) => {//убараем анимацию(удаляем класс)
  let blockChange;//новая переменная, случайные карточки
  if (animationEvent.animationName == 'move-left') {
    CAROUSEL.classList.remove('transition-left');//убираем класс анимации
    blockChange = BLOCK_LEFT;
    document.querySelector('#block-active').innerHTML = BLOCK_LEFT.innerHTML;//меняем активный элемент, видимый
  } else if (animationEvent.animationName == 'move-right') {
    CAROUSEL.classList.remove('transition-right');//убираем класс анимации
    blockChange = BLOCK_RIGHT;
    document.querySelector('#block-active').innerHTML = BLOCK_RIGHT.innerHTML;//меняем активный элемент, видимый
  }
  
  blockChange.innerHTML = "";//обнуляем элемент
  for (let i = 0; i < 3; i++) {
    const card = createPetTemplate();    
    let random1 = pets[Math.floor(Math.random() * (pets.length - 1))];
    card.innerHTML =
    `<div class="pet__img">
    <img class="img" src="../../assets/images/pets-${random1}.jpg" alt="pets-${random1}">
    </div>
    <h4 class="pet__title">${random1}</h4>
    <button class="button pet__button_border"><a href="#" class="button__a">Learn more</a></button>`
    
    let random2 = pets[Math.floor(Math.random() * (pets.length - 1))];
      card.innerHTML =
    `<div class="pet__img">
    <img class="img" src="../../assets/images/pets-${random2}.jpg" alt="pets-${random1}">
    </div>
    <h4 class="pet__title">${random2}</h4>
    <button class="button pet__button_border"><a href="#" class="button__a">Learn more</a></button>`
   
    let random3 = pets[Math.floor(Math.random() * (pets.length - 1))];
    card.innerHTML =
    `<div class="pet__img">
    <img class="img" src="../../assets/images/pets-${random3}.jpg" alt="pets-${random1}">
    </div>
    <h4 class="pet__title">${random3}</h4>
    <button class="button pet__button_border"><a href="#" class="button__a">Learn more</a></button>`
    blockChange.appendChild(card);
  }
   

  BUTTON_LEFT.addEventListener("click", moveLeft);
  BUTTON_RIGHT.addEventListener("click", moveRight);
})
