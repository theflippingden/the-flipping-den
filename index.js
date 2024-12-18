var storageCircle = document.getElementById('storage');
function greenOut(){
    storageCircle.style.backgroundColor = 'rgb(100,200,100)';
    storageCircle.style.opacity = '0%';
    document.body.style.backgroundColor = 'rgb(100,200,100)';
}
storageCircle.addEventListener('click', greenOut);
function shake() {
    document.getElementById('coax').style.transform = 'rotate(' + Math.random()*30 + 'deg)';
    console.log('skibidi');
}
document.getElementById('coax').addEventListener('click', shake);