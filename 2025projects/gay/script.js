function roll(){
    let blak = Math.floor(Math.random() * 2)
    if(blak === 0){
        document.getElementById('text').innerHTML = 'Your not gay'
    }else{
        document.getElementById('text').innerHTML = 'Your a homo aka gay'
    }
    console.log(blak)
}