let lastbuttonindex = 10
let timeSinceLastPress = 0
let nextstate = 0
let buttonstate = 5
let question = 'a'
let answerfield = ''
let buttondata = [
    ['a', 'b', 'c'], 
    ['d', 'e', 'f'], 
    ['g', 'h', 'i'], 
    ['j', 'k', 'l'], 
    ['m', 'n', 'o'], 
    ['p', 'q', 'r', 's'], 
    ['t', 'u', 'v'], 
    ['w', 'x', 'y', 'z']
];
function dlete(){
    answerfield = answerfield.substring(0, answerfield.length - 1)
    render()
    QuestionCheck()
}
function button(buttonindex){
    let sigma = new Date();
    let timeb = sigma.getTime(); // Get the full timestamp in milliseconds
    if (timeb - timeSinceLastPress > 500) { // Compare the current time with the last press time
        lastbuttonindex = 10; // Reset lastbuttonindex if more than 500ms have passed
    }
    timeSinceLastPress = timeb; // Update the last press time
    if(lastbuttonindex != buttonindex){
        buttonstate = 0
    }
    if(lastbuttonindex == buttonindex){
        buttonstate++
        answerfield = answerfield.substring(0, answerfield.length - 1);
    }if(buttonstate > 2 && buttonindex != 5 && buttonindex != 7){
        buttonstate = 2
        lastbuttonindex = 10
        let letter = buttondata[buttonindex][buttonstate]
        answerfield = answerfield + letter
        buttonstate = 0
    }else if(buttonstate > 3){
        buttonstate = 3
        lastbuttonindex = 10
        let letter = buttondata[buttonindex][buttonstate]
        answerfield = answerfield + letter
        buttonstate = 0
    }
    if(lastbuttonindex != buttonindex){
        buttonstate = 0
        let letter = buttondata[buttonindex][buttonstate]
        answerfield = answerfield + letter
    }else{
        let letter = buttondata[buttonindex][buttonstate]
        answerfield = answerfield + letter
    }
    render()
    QuestionCheck()
    lastbuttonindex = buttonindex
}

function QuestionCheck(){
    if(question == answerfield){
        answerfield = ''
        newQuestion()
    }else{

    }
}
function newQuestion(){
    fetch('https://random-word-api.vercel.app/api?words=1')
    .then(response => response.json())
      .then(data => {
        question = data[0]
        render()
        })
    .catch(error => {
            console.error('Error fetching the random word:', error);
        });
}
function render(){
    document.getElementById('question').innerHTML = question
    document.getElementById('answer').innerHTML = answerfield
    console.log('render done')
}
function clock(){
    let skibudi = new Date
    let min = skibudi.getMinutes()
    let hour = skibudi.getHours()
    document.getElementById('nokiascreenclocktojs').innerHTML = `${hour}:${min}`
}
window.onload = function() {
    newQuestion()
    clock()
};