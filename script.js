document.getElementById("year").innerHTML = new Date().getFullYear();

new Swiper(".image-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  keyboard: {
    enable: true,
    onlyInVievport: true,
    pageUDown: true,
  },

  mousewheel: {
    sensitivity: 2,
    eventsTarget: ".image-slider",
  },

  slidesPerView: 1,

  spaceBetween: 20,

  speed: 500,

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },


});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
