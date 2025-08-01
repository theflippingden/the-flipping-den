//fix for the waves so they stretch, need js math for this 1
var waveJS = document.getElementsByClassName("waves");
for (var i=0; i<waveJS.length; i++){
    document.getElementsByClassName("waves")[i].style.transform = "scaleX(calc(" + window.innerWidth + "/380))";
}
function resizeWaves() {
    for (var i=0; i<waveJS.length; i++){
        document.getElementsByClassName("waves")[i].style.transform = "scaleX(calc(" + window.innerWidth + "/380))";
    }
}
var menuBtn = document.getElementById("menu-button");
var menuOpen = false;
var menuSelects = document.getElementsByClassName("menu-selects");
function toggleMenu() {
    if (menuOpen == false){
        document.getElementById("opacity-container").style.opacity = "50%";
        menuBtn.innerHTML = "<i class='material-symbols-outlined'>close</i>";
        document.getElementById("open-menu").style.left = "2.5vw";
        document.getElementById("funtext").style.transform = "skew(-3deg, -3deg)";
        menuOpen = true;
    } else {
        menuBtn.innerHTML = "<i class='material-symbols-outlined'>menu</i>";
        document.getElementById("opacity-container").style.opacity = "100%";
        document.getElementById("open-menu").style.left = "102.5vw";
        document.getElementById("funtext").style.transform = "skew(3deg, 3deg)";
        menuOpen = false;
    }
    
};
var darkMode = false;
var nightBtn = document.getElementById("night-button");
var rootJS = document.documentElement;
function toggleDarkMode() {
    if (darkMode == false) {
        rootJS.style.setProperty('--white', '#1c1c1c');
        rootJS.style.setProperty('--dark', '#f2f2f2');
        rootJS.style.setProperty('--black', '#ffffff');
        document.getElementById("header").style.border = "1px solid var(--black)";
        nightBtn.innerHTML = "<i class='material-symbols-outlined'>wb_sunny</i>";
        darkMode = true;
    } else {
        rootJS.style.setProperty('--white', '#f2f2f2');
        rootJS.style.setProperty('--dark', '#1c1c1c');
        rootJS.style.setProperty('--black', '#000000');
        document.getElementById("header").style.border = "1px solid var(--blue)";
        nightBtn.innerHTML = "<i class='material-symbols-outlined'>bedtime</i>";
        darkMode = false;
    }
}
menuBtn.addEventListener("click", toggleMenu);
nightBtn.addEventListener("click", toggleDarkMode);
window.addEventListener("resize", resizeWaves);