var parallaX = document.getElementById('slow-prlx');
function slowPara () {
    parallaX.style.top = -100 + "vh";
}
parallaX.addEventListener("mouseover", slowPara);