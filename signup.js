const slides = document.querySelectorAll(".hero-bg");
let current = 0;

function changeSlides() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}
setInterval(changeSlides, 8000); // changes every 4 seconds
