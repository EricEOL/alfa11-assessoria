/* TESTEMONIALS SLIDER */

window.addEventListener('load', start);
const interval = 12000;

function start() {

  createTestemonialsSliderButtons(testemonialButtonSlider);

  setInterval(() => {
    autoNextTestemonial();
  }, interval)
}

const testemonials = document.querySelectorAll('.testemonial');
let maxTestemonialsLength = testemonials.length;
let currentTestemonial = 0;
let currentTestemonialButton = 0;

function autoNextTestemonial() {

  testemonials[currentTestemonial].classList.remove('visible');

  currentTestemonial++;

  if (currentTestemonial >= maxTestemonialsLength) {
    currentTestemonial = 0;
  }

  testemonials[currentTestemonial].classList.add('visible');
}

function handlerNextTestemonial(index) {
  testemonials[currentTestemonial].classList.remove('visible');
  testemonials[index].classList.add('visible');
  currentTestemonial = index;
}

/* BUTTONS TESTEMONIALS SLIDER */

function createTestemonialsSliderButtons(callback) {
  const sliderTestemonialsButtons = document.querySelector('.slider-testemonials-buttons');

  testemonials.forEach((element, index) => {
    const sliderButton = sliderTestemonialsButtons.appendChild(document.createElement('button'));
    sliderButton.addEventListener('click', () => {
      handlerNextTestemonial(index);
      handlerNextTestemonialButton(index);
    })
  })
  const firstButton = sliderTestemonialsButtons.firstChild.nextSibling;
  firstButton.classList.add('current')

  callback();
}

function testemonialButtonSlider() {
  const buttons = document.querySelectorAll('.slider-testemonials-buttons button');

  setInterval(() => {
    buttons[currentTestemonialButton].classList.remove('current');

    currentTestemonialButton++;

    if (currentTestemonialButton >= maxTestemonialsLength) {
      currentTestemonialButton = 0;
    }

    buttons[currentTestemonialButton].classList.add('current');
  }, interval)
}

function handlerNextTestemonialButton(index) {
  const buttons = document.querySelectorAll('.slider-testemonials-buttons button');

  buttons[currentTestemonialButton].classList.remove('current');
  buttons[index].classList.add('current');
  currentTestemonialButton = index;
}

/* HEADER */

const header = document.querySelector('header');

window.addEventListener('scroll', (event) => {
  if (event.path[1].scrollY > 100) {
    header.classList.add('headerScrolled');
  } else {
    header.classList.remove('headerScrolled');
  }
})

/* MENU FOR MOBILE DEVICES */

const menuMobileBtn = document.querySelector(".menu-hamburger");

menuMobileBtn.addEventListener('click', () => {
  menuMobileBtn.classList.toggle('is-active');
});

const mobileMenu = document.querySelector(".links-mobile");
menuMobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
})

const mobileMenuItems = document.querySelectorAll(".links-mobile ul li");
mobileMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    menuMobileBtn.classList.toggle('is-active');
  })
})