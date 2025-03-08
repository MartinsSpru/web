let display = ''
function calculate(){
    let evaleddisplay = eval(display)
    display = evaleddisplay
    render(display)
}
function buttonPress(button) {
    if (button === '.'){
        let lastCharacter = display.slice(-1);
        if (lastCharacter === '/' || lastCharacter === '*' || lastCharacter === '-' || lastCharacter === '+'){
            
        } else{
            display += button;
            render(display);
        }
    }else{
    if (button === '/' || button === '*' || button === '-' || button === '+') {
        let lastCharacter = display.slice(-1);
        if (lastCharacter === '/' || lastCharacter === '*' || lastCharacter === '-' || lastCharacter === '+') {
            display = display.slice(0, -1);
        }
        display += button;
        render(display);
    } else {
        display += button;
        render(display);
    }
    }
}
function clearIt(){
    display = ''
    render()
}
function render(renderstring){
    let displayscreen = document.getElementById('display')
    if (renderstring == undefined){
        displayscreen.innerHTML = ''
    } else{
        displayscreen.innerHTML = renderstring
    }
}