function cal(){
    let money = parseFloat(document.getElementById('money').value.trim())
    let tip = parseFloat(document.getElementById('tip').value.trim()) / 100
    let total = money + (money * tip)
    document.getElementById('Total').innerHTML = `${total}`
}   