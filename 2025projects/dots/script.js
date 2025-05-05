document.addEventListener('click', function(event) {
    let newDiv = document.createElement('div')
    document.body.appendChild(newDiv)
    newDiv.id = 'hole'
    newDiv.style.backgroundColor = '#f0f0f0'
    newDiv.style.zIndex = '3'
    let x = event.clientX
    let y = event.clientY
    newDiv.style.left = x + "px"
    newDiv.style.top = y + "px"
  }
);
