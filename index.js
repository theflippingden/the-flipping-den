var themea = document.getElementById("theme");
var themeb = document.getElementById("theme2");
var themec = document.getElementById("theme3");
var themed = document.getElementById("theme4");
var themee = document.getElementById("theme5");
var themef = document.getElementById("theme6");
function changeColor(clr) {
    document.getElementById("title").style.color = clr;
}
themeb.addEventListener("click", function(){changeColor("var(--red)")});
themec.addEventListener("click", function(){changeColor("var(--blue)")})
function Minimize () {
    document.getElementById("navbar").style.height = "4.5vw";
    themea.style.width = "2.5vw";
}