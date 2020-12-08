var mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 5,
  slidesPerView: 1.1,
  //   loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1.4,
    },

    535: {
      slidesPerView: 1.6,
    },
    630: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2.3,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
});
