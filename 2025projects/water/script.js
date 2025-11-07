let totalfilled = 0;
let margin = 300
function fill(){
  let randomfill = Math.floor(Math.random() * 5)
  if(margin > 0){
    totalfilled += randomfill
    if(totalfilled > 300){
      totalfilled = 300
    }
    margin -= totalfilled
    if(margin < 0){
      margin = 0
    }
    console.log(margin)
    console.log(totalfilled)
    document.getElementById('inside').style.marginTop = `${margin}px`
  }else{
    document.getElementById('ta').style.display = 'flex'
  }
}