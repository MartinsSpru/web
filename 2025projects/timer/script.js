let input = 0
let pressed = 0
let ticktok = 0
let hours = 0
let minutes = 0
function starttimer(){
    hours = parseInt(document.getElementById('inputh').value.trim()) || 0;
    minutes = parseInt(document.getElementById('inputm').value.trim()) || 0;
    
    if(hours != '' || minutes != ''){
        if(hours < 1){
          document.getElementById('result').innerHTML = `${minutes}min left`
        }else{
          document.getElementById('result').innerHTML = `${hours}h and ${minutes}min left`
        }
        ticktok = setInterval(tick, 1000)
    }else{
      console.log('empty')
    }
}
function tick() {
  if (minutes > 0) {
    minutes--;
  } else if (hours > 0) {
    hours--;
    minutes = 59;
  } else {
    document.getElementById('result').innerHTML = `Timer Ended`;
    clearInterval(ticktok);
    return;
  }

  if (hours < 1) {
    document.getElementById('result').innerHTML = `${minutes}min left`;
  } else {
    document.getElementById('result').innerHTML = `${hours}h and ${minutes}min left`;
  }
}