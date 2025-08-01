//fix for the waves so they stretch, need js math for this 1
var waveJS = document.getElementsByClassName("waves");
for (var i=0; i<waveJS.length; i++){
    document.getElementsByClassName("waves")[i].style.transform = "scaleX(calc(" + window.innerWidth + "/380))";
    //waveJS[i].style.left = "0px";
}

var menuBtn = document.getElementById("menu-button");
var menuOpen = false;
var menuSelects = document.getElementsByClassName("menu-selects");
function toggleMenu() {
    if (menuOpen == false){
        document.getElementById("header").style.height = "90vh";
        document.getElementById("header").style.alignItems = "top";
        document.getElementById("header-title").style.display = "none";
        document.getElementById("opacity-container").style.opacity = "50%";
        menuBtn.innerHTML = "<i class='material-symbols-outlined'>close</i>";
        document.getElementById("open-menu").style.display = "flex";
            
        menuOpen = true;
    } else {
        document.getElementById("header").style.height = "10vh";
        menuBtn.innerHTML = "<i class='material-symbols-outlined'>menu</i>";
        document.getElementById("opacity-container").style.opacity = "100%";
        document.getElementById("open-menu").style.display = "none";
        
        document.getElementById("header-title").style.display = "inline";
        menuOpen = false;
    }
    
};
menuBtn.addEventListener("click", toggleMenu);