function named() {
    var namee = document.getElementById('name').value;
    if (namee != "") {
        var firstPadge = document.getElementById('first');
        if (firstPadge) {
            firstPadge.style.display = 'none';
        }
        var secondPadge = document.getElementById('second');
        if (secondPadge) {
            secondPadge.style.display = 'flex';
        }
        var random = Math.floor(Math.random());
        var display = document.getElementById('diplay');
        if (display) {
            if (random === 0) {
                display.innerHTML = "".concat(namee, " is a rizzler");
            }
            else {
                display.innerHTML = "".concat(namee, " is NOT a rizzler");
            }
        }
    }
}
