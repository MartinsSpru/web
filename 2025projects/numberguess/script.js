function Search(){
    let output = document.getElementById('outputsigma')
    let input = document.getElementById('ingredients').value.trim();
    let computerNumber = Math.floor(Math.random() * 11)
    if (input == computerNumber){
        output.style.backgroundColor = '#47cc1f'
        output.innerHTML = `You Won! The computers number was ${computerNumber}`
    } else{
        output.style.backgroundColor = '#aa1a1a'
        output.innerHTML = `You Lost! The computers number was ${computerNumber}`
    }
}