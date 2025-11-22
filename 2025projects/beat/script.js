window.addEventListener('keydown', function (e) {
    let pressed = e.key.toLocaleLowerCase()
    if(pressed == "r" |pressed == "R" |pressed == "t" |pressed == "T" |pressed == "y" |pressed == "Y" |pressed == "u" |pressed == "U" |pressed == "i" |pressed == "I" |pressed == "o" |pressed == "O"){
        this.document.getElementById(pressed).style.backgroundColor = '#FFFFFF'
        this.document.getElementById(pressed).style.color = "#e7a400"
        const auu = new Audio(`au/${pressed}.mp3`)
        auu.play()
        setTimeout(() => {                           // pass a function to setTimeout
        this.document.getElementById(pressed).style.backgroundColor = '#e7a400';
        this.document.getElementById(pressed).style.color = '#FFFFFF';
    }, 200);
    }
}, false);