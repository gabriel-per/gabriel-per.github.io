let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const cell = document.getElementById("morphingCell");
const nucleus = document.getElementById("nuclei");

    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY / 3500;

      if (scrollPos < 0.2) {
        cell.className = "cell"; // Stem cell
      } else if (scrollPos < 0.4) {
        cell.className = "cell muscle-cell"; // Muscle cell
      } else if (scrollPos < 0.6) {
        cell.className = "cell blood-cell"; // Blood cell
      } else if (scrollPos < 0.8) {
        cell.className = "cell nerve-cell"; // Nerve cell
      } else if (scrollPos < 1) {
        cell.className = "cell adipose-cell"; // Adipose cell
      } else if (scrollPos >= 1 && scrollPos < 1.1) {
        cell.className = "cell skin-cell"; // Skin cell
      } else {
        cell.className = "cell empty-cell";
      }
    });