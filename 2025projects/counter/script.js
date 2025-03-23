let amount = 0
function add(){
    amount++
    render()
}
function remove(){
    amount--
    render()
}
function render(){
    document.getElementById('number').innerHTML = amount
}