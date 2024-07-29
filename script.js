var outtxt = document.getElementById('outtext');
function openMenu() {
  outtxt.style.width = '20vw';
  outtxt.style.height = '20vw';
  outtxt.style.fontSize = '4vw';
}
outtxt.addEventListener("click", openMenu);