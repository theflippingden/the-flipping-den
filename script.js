//Variables
var waveJS = document.getElementsByClassName("waves");
var menuBtn = document.getElementById("menu-button");
var menuOpen = false;
var menuSelects = document.getElementsByClassName("menu-selects");
var computer = window.matchMedia("(min-width: 768px)");
var darkMode = false; // replace all instances of darkMode with localstorage darkmode
localStorage.setItem("darkmode", "false");
console.log("INITIAL LOCALSTORAGE DARKMODE IS" + localStorage.getItem("darkmode"));
var nightBtn = document.getElementById("night-button");
var rootJS = document.documentElement;
var headerTitle = document.getElementById("header-title");
var headerz = document.getElementById("header");
//Functions
function resizeWaves() {
    for (var i=0; i<waveJS.length; i++){
        document.getElementsByClassName("waves")[i].style.transform = "scale(calc(" + window.innerWidth + "/380), calc(" + window.innerHeight + "/694))";
    }
}
resizeWaves();
function toggleMenu() {
    if (menuOpen == false){
        document.getElementById("opacity-container").style.opacity = "50%";
        menuBtn.innerHTML = "<i class='material-symbols-outlined'>close</i>";
        document.getElementById("open-menu").style.left = "102.5vw";
        headerz.style.height = "50vh";
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
        headerz.style.height = "10vh";
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
        localStorage.setItem("darkmode", "true");
        darkMode = true;
        console.log("Dark Mode Toggled ON via Night button");
    } else if (darkMode == true){
        rootJS.style.setProperty('--white', '#f2f2f2');
        rootJS.style.setProperty('--dark', '#1c1c1c');
        rootJS.style.setProperty('--black', '#000000');
        document.getElementById("header").style.border = "1px solid var(--blue)";
        nightBtn.innerHTML = "<i class='material-symbols-outlined'>bedtime</i>";
        localStorage.setItem("darkmode", "false");
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
console.log(pagesJS);
var siteURL = document.URL;
var siteTag = (siteURL.split(/\/(.*)/s)[1]);
var postArr = [
    ["starterguide", "The Starter Guide: Everything that you need to know to start earning profit", "224"],
    ["shoes", "Shoes - A Lucrative but Tricky Market", "334"],
    ["pokemon-cards", "Pokemon Cards - A Cash Printer", "444"]
];
var featuredPostNums = [0,1,2];
//I have to make the full array work but i need to make it so featured posts are picked from postArr and dumped into the front page (idk how this will affect seo but idc rn)
var flagFeatured = false;
var featuredPostSquares = document.getElementsByClassName("featuredpostsquare");
var postSquares = document.getElementsByClassName("postsquare");
function fillAllFeaturedBoxes() {
    for (var f=0; f<featuredPostSquares.length; f++) {
            console.log(featuredPostSquares[f]);
            featuredPostSquares[f].querySelector("p").innerHTML = postArr[featuredPostNums[f]][1];
            featuredPostSquares[f].parentElement.href = "https://theflippingden.com/posts/" + postArr[featuredPostNums[f]][0];
            featuredPostSquares[f].querySelector("div > div > p").innerHTML = postArr[featuredPostNums[f]][2];
    }
}
function fillAllBoxes() {
    for (var g=0; g<postSquares.length; g++) {
        console.log(postSquares[g]);
        postSquares[g].querySelector("p").innerHTML = postArr[g][1];
        postSquares[f].parentElement.href = "https://theflippingden.com/posts/" + postArr[g][0];
        postSquares[f].querySelector("div > p").innerHTML = postArr[g][2];
    }
}
(function pageCheck() {
    console.log(siteTag);
    console.log(pagesJS[8]);
    restateDarkMode();
    for (var z=0; z<pagesJS.length; z++) {
        pagesJS[z].style.display = "none";
    }
    if (siteTag == "/theflippingden.com/" || siteTag == "/theflippingden.com") {
        pagesJS[0].style.display = "inline-block";
        pagesJS[1].style.display = "inline-block";
        pagesJS[2].style.display = "inline-block";
        document.title = "Home | The Flipping Den";
        console.log("Loaded home page via blank");
        fillAllFeaturedBoxes();
    } else if (siteTag == "/theflippingden.com/home") {
        pagesJS[0].style.display = "inline-block";
        pagesJS[1].style.display = "inline-block";
        pagesJS[2].style.display = "inline-block";
        document.title = "Home | The Flipping Den";
        console.log("Loaded home page via home");
        fillAllFeaturedBoxes();
    } else if (siteTag == "/theflippingden.com/about-us") {
        pagesJS[3].style.display = "inline-block";
        document.title = "About Us | The Flipping Den";
        console.log("Loaded about page via about");
    } else if (siteTag == "/theflippingden.com/socials") {
        pagesJS[4].style.display = "inline-block";
        document.title = "Socials | The Flipping Den";
        console.log("Loaded socials page via socials");
    } else if (siteTag == "/theflippingden.com/blogs") {
        pagesJS[5].style.display = "inline-block";
        document.title = "Blogs | The Flipping Den";
        console.log("Loaded blogs page via blogs");
    } else if (siteTag == "/theflippingden.com/contact-us") {
        pagesJS[6].style.display = "inline-block";
        document.title = "Contact Us | The Flipping Den";
        console.log("Loaded contact page via contact-us");
    } else if (siteTag == "/theflippingden.com/business") {
        pagesJS[7].style.display = "inline-block";
        document.title = "Business | The Flipping Den";
        console.log("Loaded business page via business");
    } else {
        var flagPost = false;
        for (var x=0; x<postArr.length; x++) {
            if (siteTag == "/theflippingden.com/posts/" + postArr[x][0]) {
                pagesJS[8][x].style.display = "inline-block";
                console.log(pagesJS[8].children);
                document.title = "Post | " + postArr[x][1];
                flagPost = true;
            }
        }
        if (flagPost == false) {
            document.body.innerHTML = "<h1 style='color: var(--black); text-align: center; line-height: 100vh; position: relative;'>URL not found, redirecting to home in 2 seconds...</h1>";
            const reloadPause = setTimeout(function(){
                window.location = "https://theflippingden.com/home";
            }, 2000);
        }
    }
})();
console.log(window.innerHeight);
