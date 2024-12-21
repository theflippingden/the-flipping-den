var themea = document.getElementById("theme");
var themeb = document.getElementById("theme2");
var themec = document.getElementById("theme3");
var themed = document.getElementById("theme4");
var themee = document.getElementById("theme5");
var themef = document.getElementById("theme6");
function changeColor(clr) {
    document.getElementById("title").style.color = clr;
}
themea.addEventListener("click", function(){changeColor("var(--green)")});
themeb.addEventListener("click", function(){changeColor("var(--red)")});
themec.addEventListener("click", function(){changeColor("var(--blue)")});
themed.addEventListener("click", function(){changeColor("var(--yellow)")});
themee.addEventListener("click", function(){changeColor("var(--pink)")});
themef.addEventListener("click", function(){changeColor("var(--aqua)")});