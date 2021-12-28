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