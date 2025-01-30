window.onload = function() {
    curentQuestion = 1;
    questionRefresh();
    answers = [];
}
let answers = []
let curentQuestion = 1
let totalQuestions = 10
function buttonpressed(buttonName){
    answers.push(buttonName)
    curentQuestion++;
    progress = (curentQuestion / totalQuestions) * 100 + '%';
    questionRefresh()
    document.getElementById("progressbarinside").style.width = progress;
    
}
function questionRefresh(){
    const quizElements = document.getElementsByClassName('quiz');
    for (let i = 0; i < quizElements.length; i++) {
        quizElements[i].classList.remove('show');
    }
    let quizImage = '';
    let quizQuestion = '';
    let option1 = '';
    let option2 = '';
    let option3 = '';
    let option4 = '';
    if (curentQuestion == 1){ // correct answer 1 *
        quizImage = "img/minecraft.jpg";
        quizQuestion = "<p>Who made minecraft?</p>";
        option1 = "<p><b>Notch</b></p>";
        option2 = "<p><b>Linardo</b></p>";
        option3 = "<p><b>Jānis čakste</b></p>";
        option4 = "<p><b>Henry VIII</b></p>";
    }else if(curentQuestion == 2){ // correct answer 3 *
        quizImage = "img/enderman.jpg";
        quizQuestion = "<p>Whats the name of this mob?</p>";
        option1 = "<p><b>Kazah Bomber</b></p>";
        option2 = "<p><b>Russian Soldier</b></p>";
        option3 = "<p><b>Enderman</b></p>";
        option4 = "<p><b>Blackman</b></p>";
    }else if(curentQuestion == 3){ // correct answer 2 *
        quizImage = "img/whatore.jpg";
        quizQuestion = "<p>Whats the name of this ore?</p>";
        option1 = "<p><b>Sulfer ore</b></p>";
        option2 = "<p><b>Copper ore</b></p>";
        option3 = "<p><b>Diamond ore</b></p>";
        option4 = "<p><b>Americum ore</b></p>";
    }else if(curentQuestion == 4){ // correct answer 1 *
        quizImage = "img/Map-Schlieffen-Plan.jpg";
        quizQuestion = "<p>Is the schlieffen plan the strongest Mob?</p>";
        option1 = "<p><b>This isnt a mob.</b></p>";
        option2 = "<p><b>French lives matter</b></p>";
        option3 = "<p><b>No</b></p>";
        option4 = "<p><b>Yes</b></p>";
    }else if(curentQuestion == 5){ // correct answer 4 *
        quizImage = "img/nuke.jpg";
        quizQuestion = "<p>Is nuking Kazahstan with nukes possible in modded minecraft?</p>";
        option1 = "<p><b>No</b></p>";
        option2 = "<p><b>Kazahstan is sigma</b></p>";
        option3 = "<p><b>I dont know</b></p>";
        option4 = "<p><b>Yea</b></p>";
    }else if(curentQuestion == 6){ // correct answer 2 *
        quizImage = "img/phantom.jpg";
        quizQuestion = "<p>Whats this mob called?</p>";
        option1 = "<p><b>Kazahstan</b></p>";
        option2 = "<p><b>Phantom</b></p>";
        option3 = "<p><b>Kriptomafia</b></p>";
        option4 = "<p><b>Peter Grifin</b></p>";
    }else if(curentQuestion == 7){ // correct answer 3 *
        quizImage = "img/isreal.jpg";
        quizQuestion = "<p>Is this a real mob?</p>";
        option1 = "<p><b>Yes</b></p>";
        option2 = "<p><b>Maybe</b></p>";
        option3 = "<p><b>No</b></p>";
        option4 = "<p><b>Felfer</b></p>";
    }else if(curentQuestion == 8){ // correct answer 1 *
        quizImage = "img/didthishappem.jpg";
        quizQuestion = "<p>Did this ever happen?</p>";
        option1 = "<p><b>No</b></p>";
        option2 = "<p><b>Yes, In serbia</b></p>";
        option3 = "<p><b>Jonasekon</b></p>";
        option4 = "<p><b>Lonely lonely..</b></p>";
    }else if(curentQuestion == 9){ // correct answer 2 *
        quizImage = "img/mojangmake.jpg";
        quizQuestion = "<p>Did mojang make this?</p>";
        option1 = "<p><b>Kinda</b></p>";
        option2 = "<p><b>No.</b></p>";
        option3 = "<p><b>Its black!</b></p>";
        option4 = "<p><b>kazahstan was right...</b></p>";
    }else if(curentQuestion == 10){ // correct answer 4 *
        quizImage = "img/whatblock.jpg";
        quizQuestion = "<p>What blocks is the wall made from?</p>";
        option1 = "<p><b>Dirt</b></p>";
        option2 = "<p><b>Valdimir</b></p>";
        option3 = "<p><b>Rosiya</b></p>";
        option4 = "<p><b>Glass</b></p>";
    }
    document.getElementById('quizquestion').innerHTML = quizQuestion;
    document.getElementById('quizimage').src = quizImage;
    document.getElementById('option1').innerHTML = option1;
    document.getElementById('option2').innerHTML = option2;
    document.getElementById('option3').innerHTML = option3;
    document.getElementById('option4').innerHTML = option4;
    
    for (let i = 0; i < quizElements.length; i++) {
        quizElements[i].classList.add('show');
    }
    if(curentQuestion > 10){
        for (let i = 0; i < quizElements.length; i++) {
            quizElements[i].classList.remove('show');
        }
        let score = 0;
        if(answers.at(0) == 1){
            score++
        }
        if(answers.at(1) == 3){
            score++
        }
        if(answers.at(2) == 2){
            score++
        }
        if(answers.at(3) == 1){
            score++
        }
        if(answers.at(4) == 4){
            score++
        }
        if(answers.at(5) == 2){
            score++
        }
        if(answers.at(6) == 3){
            score++
        }
        if(answers.at(7) == 1){
            score++
        }
        if(answers.at(8) == 2){
            score++
        }
        if(answers.at(9) == 4){
            score++
        }
        totalScore = (score / totalQuestions) * 100 + '%';
        document.getElementById('title').innerHTML = "You finnished the quiz!"
        let scoreShow = document.getElementById('score');
        scoreShow.style.display = 'flex';
        scoreShow.innerHTML = `Your Score is ${totalScore}`;
    }
}
// 11 ai generated lines