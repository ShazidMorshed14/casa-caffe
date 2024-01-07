window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.scrollY > 100) {
      document.querySelector(".navbar_wrapper").classList.add("is_scrolling");
    } else {
      document
        .querySelector(".navbar_wrapper")
        .classList.remove("is_scrolling");
    }
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");
  const nav_close_btn = document.querySelector(".nav_close_btn");
  const go_back_btn = document.querySelector("#contrast_link");

  menu_btn.addEventListener("click", function () {
    mobile_menu.classList.toggle("is-active");
  });

  nav_close_btn.addEventListener("click", function () {
    mobile_menu.classList.toggle("is-active");
  });

  go_back_btn.addEventListener("click", function () {
    mobile_menu.classList.toggle("is-active");
  });
};

var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
