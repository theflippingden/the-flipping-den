function mtc() {
  if (document.getElementById("swbtn").textContent="menu") {
    document.getElementById("swbtn").textContent="close";
  }else{
    document.getElementById("swbtn").textContent="menu";
  }
}

document.getElementById("swbtn").addEventListener("click", function() {mtc()})