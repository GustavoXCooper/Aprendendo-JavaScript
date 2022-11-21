// initial data
let str = 0;
let strMod = 0;

let dex = 0;
let dexMod = 0;

let con = 0;
let conMod = 0;

let int = 0;
let intMod = 0;

let wis = 0;
let wisMod = 0;

let car = 0;
let carMod = 0;

let resultCount = 0;
let resultEraser = 0;

// events
document.querySelectorAll('.dices').forEach(item =>{
    item.addEventListener('click', rollDice);
})
document.querySelectorAll('.stats').forEach(item => {
    item.addEventListener('keyup', statIdentifier)
})
// functions

function rollDice(e){
    resultCount++
    let dice = e.target.getAttribute('data-dice')
    let res = Math.floor(((Math.random())* dice ) + 1);
    let lastRoll = resultCount - 1; 
    

    if(resultCount <= 6){
        createRollResult(dice, res);
    } else{
        replaceRollResult()
        createRollResult(dice, res);
    }
    
    if (resultCount > 1){
        document.querySelector(`.roll-count_${lastRoll}`).classList.add('old-roll');
    }

/* Sometimes, when clicked fast enough on the dices, the result-active class wouldn't be removed, 
    so every time a new dice is rolled all the result-active classes will be removed from every div with the old-roll class */

    // I tested and it seems to have worked
    document.querySelector(`.roll-count_${resultCount}`).classList.add('result-active');
    document.querySelectorAll('.old-roll').forEach(item=>{
        item.classList.remove('result-active');
    });

    diceSound()
    setTimeout(()=>{
        document.querySelector(`.roll-count_${resultCount}`).classList.remove('result-active');
    }, 100);

}


function diceSound(){
    let audio = new Audio('sound/RollingDice.mp3');
    audio.play();
}

function createRollResult(dice, res){
    let newResult = document.createElement('div');
    newResult.setAttribute('class', `roll-count_${resultCount}`);
    newResult.classList.add('diceResult');
    newResult.innerHTML = `Dice: D${dice}<br/> Rolled:${res}`;
    document.querySelector('.diceResult').appendChild(newResult)
}

function replaceRollResult(){
    resultEraser++
    document.querySelector(`.roll-count_${resultEraser}`).remove();
}


function statIdentifier(event){  
    event.preventDefault()

    let stat = event.target.getAttribute('data-item');
    let statValue = document.getElementById(`${stat}`).value;


        if(event.code === 'Enter'){
            if(statValue <=30){   
                if (stat === 'STR'){
                    str = statValue;
                    strMod = ((Math.floor(statValue/2) -5));   
                    if (parseInt(strMod) >= 0){
                        document.querySelector(`#mod_STR`).innerHTML = `+${strMod}`;
                    } else{ 
                        document.querySelector(`#mod_STR`).innerHTML = strMod;
                    }
                } else if (stat === 'DEX'){
                    dex = statValue;
                    dexMod = ((Math.floor(statValue/2) -5));
                    if (parseInt(dexMod) >= 0){
                        document.querySelector(`#mod_DEX`).innerHTML = `+${dexMod}`;
                    } else{ 
                        document.querySelector(`#mod_DEX`).innerHTML = dexMod;
                    }
                } else if (stat === 'CON'){
                    con = statValue;
                    conMod = ((Math.floor(statValue/2) -5));
                    if (parseInt(conMod) >= 0){
                        document.querySelector(`#mod_CON`).innerHTML = `+${conMod}`;
                    } else{ 
                        document.querySelector(`#mod_CON`).innerHTML = conMod;
                    }
                } else if (stat === 'INT'){
                    int = statValue;
                    intMod = ((Math.floor(statValue/2) -5));
                    if (parseInt(intMod) >= 0){
                        document.querySelector(`#mod_INT`).innerHTML = `+${intMod}`;
                    } else{ 
                        document.querySelector(`#mod_INT`).innerHTML = intMod;
                    }
                } else if (stat === 'WIS'){
                    wis = statValue;
                    wisMod = ((Math.floor(statValue/2) -5));
                    if (parseInt(wisMod) >= 0){
                        document.querySelector(`#mod_WIS`).innerHTML = `+${wisMod}`;
                    } else{ 
                        document.querySelector(`#mod_WIS`).innerHTML = wisMod;
                    }
                } else if (stat === 'CAR'){
                    car = statValue;
                    carMod = ((Math.floor(statValue/2) -5));
                    if (parseInt(carMod) >= 0){
                        document.querySelector(`#mod_CAR`).innerHTML = `+${carMod}`;
                    } else{ 
                        document.querySelector(`#mod_CAR`).innerHTML = carMod;
                    }
                };
        }else {
            alert('cheating is not cool');
        };
    }
};