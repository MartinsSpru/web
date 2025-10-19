window.onload = function() {
    taxed()
  };
function taxed(){
    const today = new Date
    const nov4 = new Date(2025, 10, 4)
    if(today >= nov4){
      document.getElementById('js').innerHTML = 'Yes'
    }else{
        document.getElementById('js').innerHTML = 'No'
    }
     
}