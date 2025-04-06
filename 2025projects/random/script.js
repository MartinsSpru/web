function go(){
    let min = parseInt(document.getElementById('min').value.trim());
    let max = parseInt(document.getElementById('max').value.trim());
    let ran = Math.floor(Math.random()*(max - min + 1)) + min
    let holder = document.getElementById('outpoooo')
    holder.innerHTML = `Your number is: ${ran}`
}