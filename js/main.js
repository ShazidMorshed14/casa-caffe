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

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
};
