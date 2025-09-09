
function named(){
   let namee = (document.getElementById('name') as HTMLInputElement).value 
   if(namee != ""){
   let firstPadge = document.getElementById('first')
   if(firstPadge){
      firstPadge.style.display = 'none'
   }
   let secondPadge = document.getElementById('second')
   if(secondPadge){
      secondPadge.style.display = 'flex'
   }
   let random: number = Math.floor(Math.random())
   let display = document.getElementById('diplay') as HTMLElement
   if(display){
      if(random === 0){
         display.innerHTML = `${namee} is a rizzler`
      }else{
         display.innerHTML = `${namee} is NOT a rizzler`
      }
   }
   }
}