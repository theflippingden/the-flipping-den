//Variables
var waveJS = document.getElementsByClassName("waves");
var menuBtn = document.getElementById("menu-button");
var menuOpen = false;
var menuSelects = document.getElementsByClassName("menu-selects");
var computer = window.matchMedia("(min-width: 768px)");
var darkMode = false; // replace all instances of darkMode with localstorage darkmode
//localStorage.setItem("darkmode", false);
console.log("INITIAL LOCALSTORAGE DARKMODE IS" + localStorage.getItem("darkmode"));
var nightBtn = document.getElementById("night-button");
var rootJS = document.documentElement;
var headerTitle = document.getElementById("header-title");
var headerz = document.getElementById("header");
//Functions
for (var i=0; i<waveJS.length; i++){
    document.getElementsByClassName("waves")[i].style.transform = "scaleX(calc(" + window.innerWidth + "/380))";
}

function resizeWaves() {
    for (var i=0; i<waveJS.length; i++){
        document.getElementsByClassName("waves")[i].style.transform = "scale(calc(" + window.innerWidth + "/380), calc(" + window.innerHeight + "/694))";
    }
}

function toggleMenu() {
    if (menuOpen == false){
        document.getElementById("opacity-container").style.opacity = "50%";
        menuBtn.innerHTML = "<i class='material-symbols-outlined'>close</i>";
        document.getElementById("open-menu").style.left = "2.5vw";
        if (!computer.matches) {
            nightBtn.style.display = "inline-block";
            headerTitle.style.display = "none";
            //headerz.style.justifyContent = "space-between";
            //nightBtn.style.marginLeft = "0";
            menuBtn.style.width = "20vh";
            //nightBtn.style.width = "20vh";
        }
        menuOpen = true;
    } else {
        menuBtn.innerHTML = "<i class='material-symbols-outlined'>menu</i>";
        document.getElementById("opacity-container").style.opacity = "100%";
        document.getElementById("open-menu").style.left = "102.5vw";
        menuOpen = false;
        if (!computer.matches) {
            nightBtn.style.display = "none";
            headerTitle.style.display = "inline-block";
            headerz.style.justifyContent = "space-between";
            //nightBtn.style.marginLeft = "auto";
            menuBtn.style.width = "10vh";
            //nightBtn.style.width = "10vh";
        }
    }
    
};
function toggleDarkMode() {
    console.log(localStorage.getItem("darkmode"));
    console.log("is the local storage darkmode variable");
    if (darkMode == false) {
        rootJS.style.setProperty('--white', '#1c1c1c');
        rootJS.style.setProperty('--dark', '#f2f2f2');
        rootJS.style.setProperty('--black', '#ffffff');
        document.getElementById("header").style.border = "1px solid var(--black)";
        nightBtn.innerHTML = "<i class='material-symbols-outlined'>wb_sunny</i>";
        localStorage.setItem("darkmode", true);
        darkMode = true;
        console.log("Dark Mode Toggled ON via Night button");
    } else if (darkMode == true){
        rootJS.style.setProperty('--white', '#f2f2f2');
        rootJS.style.setProperty('--dark', '#1c1c1c');
        rootJS.style.setProperty('--black', '#000000');
        document.getElementById("header").style.border = "1px solid var(--blue)";
        nightBtn.innerHTML = "<i class='material-symbols-outlined'>bedtime</i>";
        localStorage.setItem("darkmode", false);
        darkMode = false;
        console.log("Dark Mode Toggled OFF via Night button");
    }
}
function restateDarkMode() {
    if (localStorage.getItem("darkmode") == "false") {
        rootJS.style.setProperty('--white', '#f2f2f2');
        rootJS.style.setProperty('--dark', '#1c1c1c');
        rootJS.style.setProperty('--black', '#000000');
        document.getElementById("header").style.border = "1px solid var(--blue)";
        nightBtn.innerHTML = "<i class='material-symbols-outlined'>bedtime</i>";
        console.log("Light Mode RESTATED via restateDarkMode");
        darkMode = false;
    } else if (localStorage.getItem("darkmode") == "true") {
        rootJS.style.setProperty('--white', '#1c1c1c');
        rootJS.style.setProperty('--dark', '#f2f2f2');
        rootJS.style.setProperty('--black', '#ffffff');
        document.getElementById("header").style.border = "1px solid var(--black)";
        nightBtn.innerHTML = "<i class='material-symbols-outlined'>wb_sunny</i>";
        console.log("Dark Mode RESTATED via restateDarkMode");
        darkMode = true;
    }
}
//Event Listeners
menuBtn.addEventListener("click", toggleMenu);
nightBtn.addEventListener("click", toggleDarkMode);
window.addEventListener("resize", resizeWaves);
//Page Functionality
var pagesJS = document.getElementsByClassName("pages");
var siteURL = document.URL;
var siteTag = siteURL.split("/")[3];
(function pageCheck() {
    for (var z=0; z<pagesJS.length; z++) {
        pagesJS[z].style.display = "none";
    }
    if (siteTag == "") {
        pagesJS[0].style.display = "inline-block";
        pagesJS[1].style.display = "inline-block";
        pagesJS[2].style.display = "inline-block";
    } else if (siteTag = "home") {
        pagesJS[0].style.display = "inline-block";
        pagesJS[1].style.display = "inline-block";
        pagesJS[2].style.display = "inline-block";
    } else if(siteTag = "about-us") {
        pagesJS[3].style.display = "inline-block";
    } else if (siteTag = "socials") {
        pagesJS[4].style.display = "inline-block";
    } else if (siteTag = "blogs") {
        pagesJS[5].style.display = "inline-block";
    } else if (siteTag = "contact-us") {
        pagesJS[6].style.display = "inline-block";
    } else if (siteTag = "business") {
        pagesJS[7].style.display = "inline-block";
    } else {
        window.location = "https://theflippingden.com/home";
    }
    restateDarkMode();
})();
console.log(window.innerHeight);
