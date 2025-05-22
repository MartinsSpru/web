function roll(){
    let roll = Math.floor(Math.random() * 6)
    document.getElementById('skibidi').src=`img/${roll}.jpg`
}