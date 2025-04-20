function play(Weapon){
    let computerWeapon = Math.floor(Math.random() * 3)
    let loss = 1
    let comweapontranslate = 'N'
    if(computerWeapon === 0){
        comweapontranslate = 'the rock'
    }else if (computerWeapon === 1) {
        comweapontranslate = 'paper'
    }else{
        comweapontranslate = 'the scissors'
    }

    if(computerWeapon == Weapon){
        loss = 0;
    }else if(Weapon == 0 && computerWeapon == 2){
        loss = 2;
    }else if(Weapon == 0 && computerWeapon == 1){
        loss = 1;
    }else if(Weapon == 2 && computerWeapon == 0){
        loss = 1;
    }else if(Weapon == 2 && computerWeapon == 1){ 
        loss = 2;
    }else if(Weapon == 1 && computerWeapon == 0){
        loss = 2;
    }else if(Weapon == 1 && computerWeapon == 2){
        loss = 1;
    }



    if(loss == 1){
        document.getElementById('Result').innerHTML = `You lost! The computer chose ${comweapontranslate}.`
    }else if(loss == 2){
        document.getElementById('Result').innerHTML = `You won! The computer chose ${comweapontranslate}.`
    }else{
        document.getElementById('Result').innerHTML = `Draw! The computer chose ${comweapontranslate}.`
    }
}