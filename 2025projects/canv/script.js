const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#000000';

addEventListener("mousedown", (event) => {
    let boundingRect = canvas.getBoundingClientRect();
    let x = event.clientX-boundingRect.left;
    let y = event.clientY-boundingRect.top;
    ctx.fillRect(x,y,x,y)
})


