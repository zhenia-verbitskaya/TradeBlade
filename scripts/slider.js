const swiper = new Swiper(".swiper", {
  slidesPerView: 1.2,
  spaceBetween: 8,
  keyboard: {
    enabled: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.8,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4.3,
      spaceBetween: 20,
    },
  },
});
