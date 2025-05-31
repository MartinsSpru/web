let input = 0
function taxed(){
    input = document.getElementById('input').value.trim('')
    let result = input * 0.745
    document.getElementById('result').innerHTML = `Your salary after tax is ${result}`
}