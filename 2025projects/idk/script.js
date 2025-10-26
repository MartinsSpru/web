let bc = 1
let a = 1
function baaaa(){
  if(bc < 2){
    window.alert("wow a button so intresting")
    bc++
  }else{
    for (let i = 0; i < a; i++) {
      let Div = document.createElement('p')
      document.getElementById("main").appendChild(Div)
      Div.innerHTML = `${i}`
      a++
    }
  }
  
}