//
// Js code for toggle animation on click!
const menuToggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");

///On lcik toggle to active
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});
