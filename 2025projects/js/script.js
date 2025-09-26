function named(){
    const input = document.querySelector('#input').textContent
    const newDiv = document.createElement("script")
    newDiv.innerHTML = `function run(){ 
    ${input}
     }`
    document.body.appendChild(newDiv)
    run()
}
