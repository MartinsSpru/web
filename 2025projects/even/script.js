const output = document.getElementById('out')

function even(){
    let input = document.getElementById('in').value.trim()
    parseFloat(input)
    if(input != ''){
        input = input % 2
        if(input == 0){
            output.innerHTML = 'Your number is even'
        }else{
            output.innerHTML = 'Your number is odd'
        }
    }else{
        output.innerHTML = 'Input a number please'
    }
}