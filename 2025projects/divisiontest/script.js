let solution = 0
let max = 0
let num1 = 0
let num2 = 0
let oldnum1 = -1
let oldnum2 = -1
let cortop = 0
let wrotop = 0
function start(){
    let input = document.getElementById('max').value.trim()
    if(input != ''){
    max = parseInt(input)
    document.getElementById('start').style.display = 'none'
    newQuestion()
    document.getElementById('end').style.display = 'flex'
    }
}
function newQuestion() {
    num1 = Math.floor(Math.random() * (max + 1))
    num2 = Math.floor(Math.random() * (max + 1))
    solution = num1 / num2
    if(num1 == 0 || num2 == 0 || num1 == oldnum1 || num2 == oldnum2 || num1 == num2){
        newQuestion()
    }
    if (Number.isInteger(solution)) {
        oldnum1 = num1
        oldnum2 = num2
        document.getElementById('questiontext').innerHTML = `What's ${num1} divided by ${num2}?`;
    } else {
        newQuestion();
    }
}
function answer(){
    let ans = document.getElementById('answert').value.trim()
    if(ans != ''){
    document.getElementById('answert').value = ''
    if(ans == solution){
        cortop++
    }else{
        wrotop++
    }
    newQuestion()
    rendertop()
    }
}
function rendertop(){
    document.getElementById('rightdisplay').innerHTML = `${cortop}`
    document.getElementById('wrongdisplay').innerHTML = `${wrotop}`
}