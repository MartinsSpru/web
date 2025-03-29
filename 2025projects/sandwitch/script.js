window.onload = function() {
    bottomselect(1)
  };
function bottomselect(id){
    let bot = document.getElementById('bottom')
    let fil = document.getElementById('filling')
    let top = document.getElementById('top')
    let flat = document.getElementById('flat')
    if(id === 1){
        bot.style.display = 'flex'
        fil.style.display = 'none'
        top.style.display = 'none'
        flat.style.display = 'none'
    } else if(id === 2){
        bot.style.display = 'none'
        fil.style.display = 'flex'
        top.style.display = 'none'
        flat.style.display = 'none'
    } else if(id === 3){ 
        bot.style.display = 'none'
        fil.style.display = 'none'
        top.style.display = 'flex'
        flat.style.display = 'none'
    } else{
        bot.style.display = 'none'
        fil.style.display = 'none'
        top.style.display = 'none'
        flat.style.display = 'flex'
    }
}

function draw(color, thickness, group){
    let holder = document.getElementById('breadholder')
    let div = document.createElement('div')
    holder.appendChild(div)
    // sets the group
    if(group === 1){  // bottom slice
        div.className = 'bottombread'
    } else if(group === 2){ // top slice
        div.className = 'topbread'    
    } else{   // flat
        div.className = 'filling'
    }
    // sets the color
    div.style.backgroundColor = `${color}`
    div.style.height = `${thickness}px`
    div.style.borderColor = `${color}`
}

