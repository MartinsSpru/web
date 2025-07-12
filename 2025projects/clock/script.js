let hDisplay = document.getElementById("h");
let minDisplay = document.getElementById("min");
let secDisplay = document.getElementById("sec");
let date = new Date()
window.onload = function() {
    clock();
  };
function clock(){
    let date = new Date()
    let h = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    hDisplay.innerHTML = `${h}`
    minDisplay.innerHTML = `${min}`
    secDisplay.innerHTML = `${sec}`
}
setInterval(clock, 1000);