let input = 0
let arr1 = []
let pressed = 0
let inputb = ''
function taxed(){
    input = document.getElementById('input').value.trim('')
    if(input != ''){
        if(pressed === 0){
          inputb = `'${input}'`  
        }else{
          inputb = ` '${input}'`  
        }
        arr1.push(inputb)
        document.getElementById('result').innerHTML = `let arr1 = [${arr1}]`
        pressed++
        document.getElementById('input').value = ''
    }
}