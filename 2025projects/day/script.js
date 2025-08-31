let hDisplay = document.getElementById("h");
let minDisplay = document.getElementById("min");
let secDisplay = document.getElementById("sec");
let date = new Date()
window.onload = function() {
    clock();
  };
function clock(){
    let date = new Date()
    let h = date.getDate()
    hDisplay.innerHTML = `${h}`
}
setInterval(clock, 1000);