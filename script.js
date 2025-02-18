document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  menu.addEventListener("click", function () {
      navLinks.classList.toggle("show");
  });
});