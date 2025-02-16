let body = document.querySelector('body')
let colorDisplay = document.querySelector('#color')

function newColor(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let rgb = `${r}, ${g}, ${b}`
    body.style.backgroundColor = `rgb(${rgb})`
    colorDisplay.innerHTML = `Your RGB color is: ${rgb}`
}