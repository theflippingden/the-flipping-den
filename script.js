function checkHeader() {
    console.log("CHECKING!");
    if (window.scrollY > 50) {
        document.getElementById("header").style.opacity = "50%";
    }
};
window.addEventListener("scroll", checkHeader);

