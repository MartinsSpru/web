function catselector(amount) {
    const firstDiv = document.getElementsByClassName('first')[0];
    const secondDiv = document.getElementsByClassName('second')[0];
    const thirdDiv = document.getElementsByClassName('third')[0];

    if (amount == 1) {
        firstDiv.style.display = 'block';
        secondDiv.style.display = 'none';
        thirdDiv.style.display = 'none';
    } else if (amount == 2) {
        firstDiv.style.display = 'none';
        secondDiv.style.display = 'block';
        thirdDiv.style.display = 'none';
    } else if (amount == 3) {
        firstDiv.style.display = 'none';
        secondDiv.style.display = 'none';
        thirdDiv.style.display = 'block';
    }
    console.log(`The amount is ${amount}`);
}