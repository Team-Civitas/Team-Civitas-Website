
const el = document.getElementById("bg");
let index = 0;

function changeBackground(index= 0) {
    el.style.background = `url('/static/img/portfolio/synergy/synergy (17).webp')`;
    index = (index + 1) % images.length;
  }

window.addEventListener('DOMContentLoaded', () => {
    changeBackground(); // Initial set
    setInterval(changeBackground, 10000);
  });