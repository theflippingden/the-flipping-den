var themea = document.getElementById("theme");
var themeb = document.getElementById("theme2");
var themec = document.getElementById("theme3");
var themed = document.getElementById("theme4");
var themee = document.getElementById("theme5");
var themef = document.getElementById("theme6");
function openMenu() {
    themea.style.top = '10vh';
    themeb.style.top = '20vh';
    themec.style.top = '30vh';
    themed.style.top = '40vh';
    themee.style.top = '50vh';
    themef.style.top = '60vh';
}

themea.addEventListener('click', openMenu);