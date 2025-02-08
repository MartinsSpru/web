let totalSum = []
let allItems = []
let allAmounts = []
function AddItem(){
    let name = document.getElementById('nameOfExpense').value.trim()
    let amount = document.getElementById('costOfExpense').value.trim()
    let namespot = document.getElementById('name')
    let namespotamount = document.getElementById('cost')
    if (name == '' || amount == ''){
    }else{ // VERY COOL CODE BELOW THAT LETS YOU MAKE TODOLISTS!!!!
    allAmounts.push(amount)
    let textnode = document.createElement('p',)
    textnode.textContent = name;
    namespot.appendChild(textnode);
    let numbernode = document.createElement('p',)
    numbernode.textContent = amount;
    namespotamount.appendChild(numbernode);
    calcBottom();
    }
    document.getElementById('nameOfExpense').value = ''
    document.getElementById('costOfExpense').value = ''
}

function calcBottom(){
    let totalCalculatedAmount = 0
    for (let loopper = 0; loopper < allAmounts.length; loopper++){
        totalCalculatedAmount += parseFloat(allAmounts.at(loopper))
    }
    let bottomDisplay = document.getElementById('totalcost')
    bottomDisplay.textContent = totalCalculatedAmount + '€'
}
