const menuOpenBtn = document.querySelector(".mob-menu-open-btn");
const menuCloseBtn = document.querySelector(".mob-menu-close-btn");
const mobileMenu = document.querySelector(".mobile-menu-container");
const body = document.querySelector(".body");

menuOpenBtn.addEventListener("click", function () {
  body.classList.add("unscrolled");
  mobileMenu.classList.add("is-open");
});

mobileMenu.addEventListener("click", () => {
  body.classList.remove("unscrolled");
  mobileMenu.classList.remove("is-open");
});
