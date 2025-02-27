let flowerPositions = []
let purchasedProduction = [0,0,0,0] 
let unlockedItems = [0,0,0,0,0,0]
let fields = 0
let bees = 0
let unlockedMarkets = [0,0,0,0,0,0]
let honeyIncrease = 0
let Save = []
window.onload = function() {
    drawFlower(5)
    drawBee()
    honeyCalculation()
    moneyCalculation()
  };
class bee {
    constructor(parameters) {
        
    }
}
function createSave() {
    let Save = [];
    Save.push(purchasedProduction.join('/'));
    Save.push(unlockedItems.join('/'));
    Save.push(fields);
    Save.push(bees);
    Save.push(unlockedMarkets.join('/'));
    Save.push(honey);
    Save.push(money);
    alert(Save);
}

function loadSave() {
    let input = document.getElementById('loadsaveinput').value;
    let Save = input.split(',');

    purchasedProduction = Save[0].split('/').map(Number); // loading done
    let saveunlockedItems = Save[1].split('/').map(Number); // loading done
    let savefields = parseInt(Save[2]); // loading done
    let savebees = parseInt(Save[3]); // loading done
    let saveunlockedMarkets = Save[4].split('/').map(Number); // loading done
    honey = parseFloat(Save[5]); // loading done
    money = parseFloat(Save[6]); // loading done

    if (bees < savebees){
        let difffbetween = savebees - bees
        for (let i = 0; i < difffbetween; i++){
            drawBee()
        }
    }
    if (fields < savefields){
        let difffbetween = savefields - fields
        drawFlower(difffbetween)
    }
    if (unlockedMarkets != saveunlockedMarkets){
        unlockedMarkets = [0,0,0,0,0,0]
        for (let i = 0; i < saveunlockedMarkets.length; i++){
            if (saveunlockedMarkets[i] == 1){
                unblock(3, i, 0, 0, 0, 0)
            }
        }
    }
    if (unlockedItems != saveunlockedItems){
        unlockedItems = [0,0,0,0,0,0]
        for (let i = 0; i < saveunlockedItems.length; i++){
            if (saveunlockedMarkets[i] == 1){
                unblock(1, i, 0, 0, 0, 0)
            }
        }
    }
}
function drawFlower(flowerAmount){
    const grassField = document.getElementById("grassfield");
    for (let i = 0; i < flowerAmount; i++){
        const div = document.createElement('img');
        div.id = 'flowerpatch'
        let textureIndex = Math.floor(Math.random() * 7)
        let top = Math.random() * 100
        let left = Math.random() * 100
        flowerPositions.push(`${top}|${left}`)
        div.style.top = `${top}%`;
        div.style.left = `${left}%`;
        div.style.zIndex = '1'
        div.src = `img/flowers/${textureIndex}.png`
        grassField.appendChild(div);
        fields++
        document.getElementById('maxfield').innerHTML = `<img src="img/flowers/0.png" alt="max fields">: ${fields}`
    }
}
function drawBee(){
    const grassField = document.getElementById("grassfield");
    const div = document.createElement('img');
    div.className = 'bee'
    div.id = `${bee.length + 1}`
    let randomPosIndex = Math.floor(Math.random() * flowerPositions.length)
    let compressedPos = flowerPositions[randomPosIndex]
    let [top, left] = compressedPos.split('|');
    div.style.top = `${top}%`;
    div.style.left = `${left}%`;
    div.style.zIndex = '2'
    div.src = `img/bee.png`
    grassField.appendChild(div);
    bees++
    document.getElementById('maxbee').innerHTML = `<img src="img/bee.png" alt="max bees">: ${bees}`
}
let collectedPolinPerSecond = 0 // IMPORTANT
function moveBee(){
    const grassField = document.getElementById("grassfield");
    let bees = document.getElementsByClassName('bee')
    collectedPolinPerSecond = bees.length
    for (let i = 0; i < bees.length; i++){
        let div = bees[i]
        let randomPosIndex = Math.floor(Math.random() * flowerPositions.length)
        let compressedPos = flowerPositions[randomPosIndex]
        let [top, left] = compressedPos.split('|');
        div.style.top = `${top}%`;
        div.style.left = `${left}%`;
    }
}
setInterval(moveBee, 1000);

function showMenu(menuName){
    const menus = document.getElementsByClassName("menuoverlay");
    const Production = document.getElementById("Production");
    const Marketing = document.getElementById("Marketing");
    const Sell = document.getElementById("Sell");
    const Save = document.getElementById("Save");
    const Help = document.getElementById("Help");
    if (menuName == 5) {
        for (let i = 0; i < menus.length; i++){
            let div = menus[i]
            div.style.display = "none"
        }
    } else{
        for (let i = 0; i < menus.length; i++) {
            let div = menus[i];
            div.style.display = "none";
        }
        menus[menuName].style.display = 'flex';
    }
}
let honey = 0 // IMPORTANT
function honeyCalculation() {
    let multiplier = 1 + 0.025 * purchasedProduction[0] + 0.260 * purchasedProduction[1] + 0.500 * purchasedProduction[2] + 1.170 * purchasedProduction[3];
    honeyIncrease = collectedPolinPerSecond * multiplier
    honey += honeyIncrease;
    document.getElementById('honeyvalue').innerHTML = `<img src="img/icons/honey.png" alt="Honey Production">: ${parseInt(honey)} (${honeyIncrease}/s)`;
}
setInterval(honeyCalculation, 1000);
let money = 0 // IMPORTANT
function moneyCalculation(){
    let marketAmount = 0
    for (i = 0; i < unlockedMarkets.length; i++){
        marketAmount += unlockedMarkets[i]
    }
    let neededHoney = marketAmount * 12
    let moneyOutput = (2 * unlockedMarkets[0]) + (20 * unlockedMarkets[1]) + (30 * unlockedMarkets[2]) + (50 * unlockedMarkets[3]) + (100 * unlockedMarkets[4]) + (200 * unlockedMarkets[5])
    if (honey >= neededHoney){
        honey -= neededHoney
        money += moneyOutput
    }
    document.getElementById('moneyvalue').innerHTML = `$: ${Math.floor(money)} (${Math.floor(moneyOutput)}/sale)`
}
setInterval(moneyCalculation, 1000);
function buy(storeindex, id, cost) {
    let storecategory = document.getElementById('Production').getElementsByClassName('upgradelayout')[0].getElementsByClassName('layoutitem');
    let store = storecategory[storeindex];
    let button = store.querySelector('.Buy'); // Use class selector
    if (!button) {
        console.error(`Button with class 'Buy' not found in storecategory[${storeindex}].`);
        return;
    }
    if (cost <= money) {
        money -= cost;
        if (id === 4 || id === 5) {
            if (id === 4) {
                drawFlower(1);
                let Ogval = [];
                Ogval[1] = button.innerHTML;
                button.innerHTML = 'Bought!';
                setTimeout(function () {
                    button.innerHTML = Ogval[1];
                }, 1400);
            } else {
                drawBee();
                let Ogval = [];
                Ogval[1] = button.innerHTML;
                button.innerHTML = 'Bought!';
                setTimeout(function () {
                    button.innerHTML = Ogval[1];
                }, 1400);
            }
        } else if (id >= 0 && id <= 3) {
            purchasedProduction[id]++;
            let Ogval = [];
            Ogval[1] = button.innerHTML;
            button.innerHTML = 'Bought!';
            setTimeout(function () {
                button.innerHTML = Ogval[1];
            }, 1400);
        }
    } else {
        let Ogval = [];
        Ogval[0] = button.style.backgroundColor;
        Ogval[1] = button.innerHTML;
        Ogval[2] = button.style.width;
        button.innerHTML = 'Insufficient funds';
        button.style.backgroundColor = '#cc1f1f';
        button.style.width = Ogval[2];
        setTimeout(function () {
            button.style.backgroundColor = Ogval[0];
            button.innerHTML = Ogval[1];
            button.style.width = Ogval[2];
        }, 1400);
    }
}
// How to use this function:
// buy(storeindex, id, cost)
// storeindex = product page index starting to count from 0
// id = id in the group of the product you are buying
// cost = the price of the product
function unblock(group, storeindex, honeyRequirement, moneyRequirement, beeRequirement, fieldRequirement) {
    let storecategory = document.getElementById('Production').getElementsByClassName('upgradelayout')[0].getElementsByClassName('layoutitem');
    if (group === 2) {
        storecategory = document.getElementById('Marketing').getElementsByClassName('upgradelayout')[0].getElementsByClassName('layoutitem');
    }
    if (group === 3) {
        storecategory = document.getElementById('Sell').getElementsByClassName('upgradelayout')[0].getElementsByClassName('layoutitem');
    }
    // Check if storecategory[storeindex] exists
    if (!storecategory[storeindex]) {
        console.error(`storecategory[${storeindex}] does not exist.`);
        return;
    }

    let store = storecategory[storeindex];
    let blockloader = store.querySelector('.nounlockblocker');
    if (!blockloader) {
        console.error(`nounlockblocker not found in storecategory[${storeindex}].`);
        return;
    }

    // Check if the requirements are met
    if (honey >= honeyRequirement && money >= moneyRequirement && bees >= beeRequirement && fields >= fieldRequirement) {
        blockloader.style.display = 'none'; // Unblock the item
        if (group === 3){
            unlockedMarkets[storeindex] = 1
        }
        if (group === 1){
            unlockedItems[storeindex] = 1
        }
    } else {
        console.log(`Requirements not met for unblocking item at storeindex ${storeindex}.`);
    }
}
