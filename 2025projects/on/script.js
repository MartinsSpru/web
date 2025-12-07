let state = 0
const buto = document.getElementById('ye')
function fu(){
    if(state === 0){
        buto.style.backgroundColor = '#47cc1f'
        buto.innerHTML = 'On'
        state = 1
    }else{
        buto.style.backgroundColor = '#cc1f1f'
        buto.innerHTML = 'Off'
        state = 0
    }
}