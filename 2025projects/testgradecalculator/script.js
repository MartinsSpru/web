function calculate(){
    let Totalquestions = document.getElementById('totalquestions').value.trim();
    let Wrong = document.getElementById('totalwrong').value.trim();
    let Precentageoutput = document.getElementById('precentage')
    let Gradeoutput = document.getElementById('grade')
    let precentage = 0
    let rightquestions = 0
    let grade = 1
    rightquestions = Totalquestions - Wrong
    precentage = (rightquestions / Totalquestions) * 100
    console.log(`${precentage}, ${rightquestions}`)
    Precentageoutput.innerHTML = `${precentage.toFixed(2)}%`
    if (precentage >= 0 && precentage < 11){
        grade = 1
    } else if (precentage >= 11 && precentage < 21){
        grade = 2
    } else if (precentage >= 21 && precentage < 34){
        grade = 3
    } else if (precentage >= 34 && precentage < 41){
        grade = 4
    } else if (precentage >= 41 && precentage < 57){
        grade = 5
    } else if (precentage >= 57 && precentage < 67){
        grade = 6
    } else if (precentage >= 67 && precentage < 80){
        grade = 7
    } else if (precentage >= 80 && precentage < 87){
        grade = 8
    } else if (precentage >= 87 && precentage < 96){
        grade = 9
    } else{
        grade = 10
    }
    Gradeoutput.innerHTML = `${grade}`
}