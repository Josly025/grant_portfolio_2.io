//
// Js code for toggle animation on click!
const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

///On lcik toggle to active
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
