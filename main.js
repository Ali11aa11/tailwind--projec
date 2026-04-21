const menuBtn = document.getElementById("nav-btn");
const nav = document.getElementById("nav-list");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("hidden");
});
