const header = document.querySelector('header');

/* window.addEventListener('touchmove', (event) => {
  if(event.path[5].pageYOffset > 100) {
    header.classList.add('headerScrolled');
  } else {
    header.classList.remove('headerScrolled');
  }
}) */

window.addEventListener('scroll', (event) => {
  if(event.path[1].scrollY > 100) {
    header.classList.add('headerScrolled');
  } else {
    header.classList.remove('headerScrolled');
  }
})


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