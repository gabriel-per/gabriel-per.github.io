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
const blockthing = document.getElementById("blockthing");
const tooltip = document.getElementById("tooltip");


cell.addEventListener('mousemove', (e) => {
  // Get the mouse position
  const x = e.clientX;
  const y = e.clientY;
  
  // Get tooltip dimensions
  const tooltipWidth = tooltip.width;
  const tooltipHeight = tooltip.height;
  
  // Calculate position to keep tooltip within viewport
  let left = x - 170; // 10px offset from cursor
  let top = y - tooltipHeight - 10; // Position above cursor
  
  // Prevent tooltip from going off-screen
  if (left + tooltipWidth > window.innerWidth) {
    left = x - tooltipWidth - 10;
  }
  if (top < 0) {
    top = y + 20; // Position below cursor if too close to top
  }
  
  // Set the tooltip position
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
});

    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY / 3500;

      if (scrollPos < 0.2) {
        cell.className = "cell"; // Stem cell
        blockthing.className = "blockthing";
        tooltip.innerText = "Célula capaz de se transformar em diferentes tipos celulares, fundamental para o desenvolvimento e regeneração dos tecidos.";
        blockthing.style.fontSize = "0px";
      } else if (scrollPos < 0.4) {
        cell.className = "cell muscle-cell"; // Muscle cell
        tooltip.innerText = "Célula especializada em contração, responsável pelos movimentos do corpo e funcionamento dos músculos.";
      } else if (scrollPos < 0.6) {
        cell.className = "cell blood-cell"; // Blood cell
        tooltip.innerText = "Célula vermelha do sangue, responsável pelo transporte de oxigênio para todos os tecidos do corpo.";
      } else if (scrollPos < 0.8) {
        cell.className = "cell nerve-cell"; // Nerve cell
        tooltip.innerText = "Célula de defesa do sistema imunológico, responsável por combater patógenos e proteger o organismo contra infecções.";
      } else if (scrollPos < 1) {
        cell.className = "cell adipose-cell"; // Adipose cell
        tooltip.innerText = "Célula especializada no armazenamento de gordura, importante para reserva energética e isolamento térmico do corpo.";
        blockthing.className = "blockthing";
      } else if (scrollPos >= 1 && scrollPos < 1.1) {
        cell.className = "cell skin-cell"; // Skin cell
        blockthing.className = "notblockthing";
        tooltip.innerText = "Célula que forma o revestimento interno e externo do corpo, protegendo órgãos e tecidos e realizando trocas com o ambiente.";
      } else {
        cell.className = "cell empty-cell";
        tooltip.innerText = "";
      }
    });
    document.addEventListener('click', (event) => {
      // Check if the click is outside the tooltip or the cell
      if (!event.target.closest('.cell')) {
          // Remove focus from any focused element
          const focusedElement = document.querySelector('.cell:focus');
          if (focusedElement) {
              focusedElement.blur();
          }
      }
  });