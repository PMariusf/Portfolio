function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
document.addEventListener("click", function(event) {
  if (!event.target.closest(".dropdown")) {
      document.getElementById("myDropdown").classList.remove("show");
  }
  if (!event.target.closest(".hamburger") && !event.target.closest(".nav-links")) {
      document.getElementById("navLinks").classList.remove("show");
  }
});