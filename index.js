var themea = document.getElementById("theme");
var themeb = document.getElementById("theme2");
var themec = document.getElementById("theme3");
var themed = document.getElementById("theme4");
var themee = document.getElementById("theme5");
var themef = document.getElementById("theme6");
var themes = document.getElementsByClassName("themes")
function showCS () {
    document.getElementById("themecell").style.visibility = "visible";
    document.getElementById("themecellarrow").style.visibility = "visible";
}
function hideCS () {
    document.getElementById("themecell").style.visibility = "hidden";
    document.getElementById("themecellarrow").style.visibility = "hidden";
}
function changeColor(clr) {
    document.getElementById("title").style.color = clr;
    for (var i in document.getElementsByClassName("headers")) {
        document.getElementsByClassName("headers")[i].style.color = clr;
    }
    hideCS();
}

themea.addEventListener("click", function(){changeColor("var(--green)")});
themeb.addEventListener("click", function(){changeColor("var(--red)")});
themec.addEventListener("click", function(){changeColor("var(--blue)")});
themed.addEventListener("click", function(){changeColor("var(--yellow)")});
themee.addEventListener("click", function(){changeColor("var(--pink)")});
themef.addEventListener("click", function(){changeColor("var(--aqua)")});
document.getElementById("themeall").addEventListener("click", showCS);
