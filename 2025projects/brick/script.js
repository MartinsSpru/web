const clayblock = document.getElementById('but1')
const furnaceblock = document.getElementById('furnace')
const brickblock = document.getElementById('brick')
const text = document.getElementById('text')
let stage = 0
function clayup(){
    clayblock.style.display = 'none'
    document.body.style.cursor = 'url("au/clay.ico") 16 16, auto'
    document.getElementById('but1').style.display = 'none'
    text.innerHTML = 'Put the clay in the furnace by clicking on it'
    stage = 1
}
function furnace(){
    if(stage == 1){
        text.innerHTML = 'Wait until the clay finishes cooking'
        furnaceblock.src = 'au/Furnace_on.webp'
        document.body.style.cursor = 'default'
        setTimeout(fu, 5000)
    }else if(stage == 2){
        document.body.style.cursor = 'url("au/brick.ico") 16 16, auto'
        text.innerHTML = "FIX THE WALL BY CLICKING ON IT WITH THE BRICKS FAST"
        stage = 3
    }

}
function fu(){
    stage = 2
    furnaceblock.src = 'au/Furnace_off.webp'
    console.log(stage)
    brickblock.src = 'au/crazy.webp'
    text.innerHTML = 'KILLER STEVE IS COMING TAKE THE BRICKS OUT OF THE FURNACE'
}
function end(){
    if(stage = 3){
    brickblock.src = 'au/Bricks_JE5_BE3.webp'
    document.body.style.cursor = 'default'
    text.innerHTML = "Phew, we're safe... for now"
    }
}