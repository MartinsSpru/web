let kumcount = 0
const leaf = document.getElementById('spawn')
function kum(){
    const newDiv = document.createElement("button")
    leaf.appendChild(newDiv)
    newDiv.style.backgroundColor = '#ff9900'
    newDiv.style.border = 'none'
    newDiv.onclick = (event) => {newDiv.remove(); kumoo()}
    let top = Math.random() * 100
    let left = Math.random() * 100
    newDiv.style.top = `${top}%`;
    newDiv.style.left = `${left}%`;
    newDiv.style.zIndex = '4'
    let roat = Math.random() * 181
    newDiv.style.rotate = `${roat}deg`
    newDiv.style.width = '15px'
    newDiv.style.height = '30px'
    newDiv.style.borderRadius = '50%'
    newDiv.style.position = 'absolute'
    newDiv.draggable = false;
    newDiv.addEventListener('mousedown', e => e.preventDefault());
}
setInterval(kum, 300);
function kumoo(){
    let audio = new Audio('mmm.mp3')
    kumcount++
    document.getElementById('kumoo').innerHTML = `kumquats collected: ${kumcount}`
    audio.play()
}