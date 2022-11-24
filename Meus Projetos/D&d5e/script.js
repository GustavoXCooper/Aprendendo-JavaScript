// initial data
let resultCount = 0;
let resultEraser = 0;
let mod = character.modifier;
let prof = character.profBonus;
let skill = character.skills

// events   
document.querySelectorAll('.dices').forEach(item =>{
    item.addEventListener('click', rollDice);
});
document.querySelectorAll('.stats').forEach(item => {
    item.addEventListener('keyup', statIdentifier)
});

document.querySelectorAll('.saving-throws').forEach(item =>{
    item.addEventListener('change', savingThrowProf)
})

// events on skills 
document.querySelectorAll('.STR input').forEach(item =>{
    item.addEventListener('change', strSkills)
})

document.querySelectorAll('.DEX').forEach(item =>{
    item.addEventListener('change', dexSkills)
})

document.querySelectorAll('.CON').forEach(item =>{
    item.addEventListener('change', conSkills)
})

document.querySelectorAll('.INT').forEach(item =>{
    item.addEventListener('change', intSkills)
})

document.querySelectorAll('.WIS').forEach(item =>{
    item.addEventListener('change', wisSkills)
})

document.querySelectorAll('.CAR').forEach(item =>{
    item.addEventListener('change', carSkills)
})

// events on character info
document.querySelectorAll('.characterinfo').forEach(item =>{
    item.addEventListener('keyup', sendCharacterInfo)
})

document.querySelectorAll('.basicinfo').forEach(item=>{
    item.addEventListener('keyup', sendBasciInfo)
})
document.querySelectorAll('textarea').forEach(item =>{
    item.addEventListener('keyup', sendInfo)
})
document.querySelector('#level').addEventListener('keyup', updateLevel)

//others 

document.querySelectorAll('.combat-stat').forEach(item=>{
    item.addEventListener('keyup', combatStats)
})
document.querySelector('.inspiration').addEventListener('change', ()=>{
    if(character.inspiration == true){
        character.inspiration = false;
    }else {
        character.inspiration = true;
    }
})
document.querySelector('#total-hp').addEventListener('keyup', ()=>{
    character.totalHP = 0
    character.totalHP = parseInt(document.querySelector('#total-hp').value);
})
// functions

// dice functions
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


// saving throws function
function savingThrowProf(event){
    let savingStat = event.target.getAttribute('data-saving-throw');
    let stat = character.savingThrows;

    switch (savingStat) {
        case 'str':
            if (stat.str.proficiency == false){
                stat.str.proficiency = true;
                stat.str.value += + prof
            } else {
                stat.str.proficiency = false
                stat.str.value = mod.str
            }
            renderItem('#saving-str', stat.str.value);
        break;
        case 'dex':
            if (stat.dex.proficiency == false){
                stat.dex.proficiency = true;
                stat.dex.value += + prof
            } else {
                stat.dex.proficiency = false
                stat.dex.value = mod.dex
            }
            renderItem('#saving-dex', stat.dex.value);
        break;
        case 'con': 
        if (stat.con.proficiency == false){
            stat.con.proficiency = true;
            stat.con.value += + prof
        } else {
            stat.con.proficiency = false
            stat.con.value = mod.con
        }
        renderItem('#saving-con', stat.con.value);
        break;
        case 'int':
            if (stat.int.proficiency == false){
                stat.int.proficiency = true;
                stat.int.value += + prof
            } else {
                stat.int.proficiency = false
                stat.int.value = mod.int
            }
            renderItem('#saving-int', stat.int.value);
        break;
        case 'wis':
            if (stat.wis.proficiency == false){
                stat.wis.proficiency = true;
                stat.wis.value += + prof
            } else {
                stat.wis.proficiency = false
                stat.wis.value = mod.wis
            }
            renderItem('#saving-wis', stat.wis.value);
        break;
        case 'car':
            if (stat.car.proficiency == false){
                stat.car.proficiency = true;
                stat.car.value += + prof
            } else {
                stat.car.proficiency = false
                stat.car.value = mod.car
            }
            renderItem('#saving-car', stat.car.value);
        break;
    }
}

// skill functions
// str: athletics
function strSkills(event){
    let skill = character.skills
    let status = event.target.getAttribute('data-str')
    if (status = 'athletics'){
        if (skill.str.athletics.proficiency == false){
            skill.str.athletics.proficiency = true;
            skill.str.athletics.value += + prof
        } else {
            skill.str.athletics.proficiency = false
            skill.str.athletics.value = mod.str
        }
        renderItem('#athletics span', skill.str.athletics.value)
    }
}
// dex: sleight of hand, acrobatics, stealth
function dexSkills(event){
    let status = event.target.getAttribute('data-dex')
    let skill = character.skills
    switch (status){
        case 'sleight-of-hand':
            if (skill.dex.sleightOfHand.proficiency == false){
                skill.dex.sleightOfHand.proficiency = true;
                skill.dex.sleightOfHand.value += + prof
            } else {
                skill.dex.sleightOfHand.proficiency = false
                skill.dex.sleightOfHand.value = mod.dex
            }
            renderItem('#sleight-of-hand span', skill.dex.sleightOfHand.value)
        break;
        case 'acrobatics':
            if (skill.dex.acrobatics.proficiency == false){
                skill.dex.acrobatics.proficiency = true;
                skill.dex.acrobatics.value += + prof
            } else {
                skill.dex.acrobatics.proficiency = false
                skill.dex.acrobatics.value = mod.dex
            }
            renderItem('#acrobatics span', skill.dex.acrobatics.value)
        break;
        case 'stealth':
            if (skill.dex.stealth.proficiency == false){
                skill.dex.stealth.proficiency = true;
                skill.dex.stealth.value += + prof
            } else {
                skill.dex.stealth.proficiency = false
                skill.dex.stealth.value = mod.dex
            }
            renderItem('#stealth span', skill.dex.stealth.value)
        break;
    } 
    
}
// there is no skill related to constitution

//int: arcana, history, investigation, nature, religion
function intSkills(event){
    let status = event.target.getAttribute('data-int')
    let skill = character.skills
    switch (status){
        case 'arcana':
            if (skill.int.arcana.proficiency == false){
                skill.int.arcana.proficiency = true;
                skill.int.arcana.value += + prof
            } else {
                skill.int.arcana.proficiency = false
                skill.int.arcana.value = mod.int
            }
            renderItem('#arcana span', skill.int.arcana.value)
        break;
        case 'history':
            if (skill.int.history.proficiency == false){
                skill.int.history.proficiency = true;
                skill.int.history.value += + prof
            } else {
                skill.int.history.proficiency = false
                skill.int.history.value = mod.int
            }
            renderItem('#history span', skill.int.history.value)
        break;
        case 'investigation':
            if (skill.int.investigation.proficiency == false){
                skill.int.investigation.proficiency = true;
                skill.int.investigation.value += + prof
            } else {
                skill.int.investigation.proficiency = false
                skill.int.investigation.value = mod.int
            }
            renderItem('#investigation span', skill.int.investigation.value)
        break;
        case 'nature':
            if (skill.int.nature.proficiency == false){
                skill.int.nature.proficiency = true;
                skill.int.nature.value += + prof
            } else {
                skill.int.nature.proficiency = false
                skill.int.nature.value = mod.int
            }
            renderItem('#nature span', skill.int.nature.value)
        break;
        case 'religion':
            if (skill.int.religion.proficiency == false){
                skill.int.religion.proficiency = true;
                skill.int.religion.value += + prof
            } else {
                skill.int.religion.proficiency = false
                skill.int.religion.value = mod.int
            }
            renderItem('#religion span', skill.int.religion.value)
        break;
    }
}
// wis: animalHandling, insight, medicine, perception, survival
function wisSkills(event){
    let status = event.target.getAttribute('data-wis')
    let skill = character.skills
    switch (status){
        case 'animal-handling':
            if (skill.wis.animalHandling.proficiency == false){
                skill.wis.animalHandling.proficiency = true;
                skill.wis.animalHandling.value += + prof
            } else {
                skill.wis.animalHandling.proficiency = false
                skill.wis.animalHandling.value = mod.wis
            }
            renderItem('#animal-handling span', skill.wis.animalHandling.value)
        break;
        case 'insight':
            if (skill.wis.insight.proficiency == false){
                skill.wis.insight.proficiency = true;
                skill.wis.insight.value += + prof
            } else {
                skill.wis.insight.proficiency = false
                skill.wis.insight.value = mod.wis
            }
            renderItem('#insight span', skill.wis.insight.value)
        break;
        case 'medicine':
            if (skill.wis.medicine.proficiency == false){
                skill.wis.medicine.proficiency = true;
                skill.wis.medicine.value += + prof
            } else {
                skill.wis.medicine.proficiency = false
                skill.wis.medicine.value = mod.wis
            }
            renderItem('#medicine span', skill.wis.medicine.value)
        break;
        case 'perception':
            if (skill.wis.perception.proficiency == false){
                skill.wis.perception.proficiency = true;
                skill.wis.perception.value += + prof;
                character.passivePerception = prof + mod.wis + 10;
            } else {
                skill.wis.perception.proficiency = false
                skill.wis.perception.value = mod.wis
                character.passivePerception = 10 + mod.wis;
            }

            renderItem('.passive-perception span', character.passivePerception)
            renderItem('#perception span', skill.wis.perception.value)
        break;
        case 'survival':
            if (skill.wis.survival.proficiency == false){
                skill.wis.survival.proficiency = true;
                skill.wis.survival.value += + prof
            } else {
                skill.wis.survival.proficiency = false
                skill.wis.survival.value = mod.wis
            }
            renderItem('#survival span', skill.wis.survival.value)
        break;
    }
}
// car: deception, intimidation, performance, persuasion
function carSkills(event){
    let status = event.target.getAttribute('data-car')
    let skill = character.skills
    switch (status){
        case 'deception':
            if (skill.car.deception.proficiency == false){
                skill.car.deception.proficiency = true;
                skill.car.deception.value += + prof
            } else {
                skill.car.deception.proficiency = false
                skill.car.deception.value = mod.car
            }
            renderItem('#deception span', skill.car.deception.value)
        break;

        case 'intimidation':
            if (skill.car.intimidation.proficiency == false){
                skill.car.intimidation.proficiency = true;
                skill.car.intimidation.value += + prof
            } else {
                skill.car.intimidation.proficiency = false
                skill.car.intimidation.value = mod.car
            }
            renderItem('#intimidation span', skill.car.intimidation.value)
        break;
        case 'performance':
            if (skill.car.performance.proficiency == false){
                skill.car.performance.proficiency = true;
                skill.car.performance.value += + prof
            } else {
                skill.car.performance.proficiency = false
                skill.car.performance.value = mod.car
            }
            renderItem('#performance span', skill.car.performance.value)
        break;
        case 'persuasion':
            if (skill.car.persuasion.proficiency == false){
                skill.car.persuasion.proficiency = true;
                skill.car.persuasion.value += + prof
            } else {
                skill.car.persuasion.proficiency = false
                skill.car.persuasion.value = mod.car
            }
            renderItem('#persuasion span', skill.car.persuasion.value)
        break;
    }
}
// stats function

function statIdentifier(event){  
    let stat = event.target.getAttribute('data-item');
    let statValue = document.getElementById(`${stat}`).value;
    let st = 0
    calculateStat(stat, statValue, st)        
};
function calculateStat(stat, statValue, st){
    switch (stat) {
        case 'STR':
            character.stats.str = 0;
            mod.str= 0;

            if(character.savingThrows.str.proficiency == true){
                character.savingThrows.str.value = prof;
            }else {
                character.savingThrows.str.value = 0;
            }
            character.stats.str = statValue;           
            mod.str = modCalculator(statValue);
            
            if(skill.str.athletics.proficiency == true){
                skill.str.athletics.value = prof;
            }else {
                skill.str.athletics.value = 0;
            }
            skill.str.athletics.value += mod.str

            renderItem('#athletics span', skill.str.athletics.value);

            character.savingThrows.str.value += mod.str;
            st = character.savingThrows.str.value
            

            renderItem('#mod_STR', mod.str);
            renderItem('#saving-str', st); 
        break;
        case 'DEX':
            character.stats.dex = 0;
            mod.dex= 0;

            if(character.savingThrows.dex.proficiency == true){
                character.savingThrows.dex.value = prof;
            }else {
                character.savingThrows.dex.value = 0;
            }

            character.stats.dex = statValue;           
            mod.dex = modCalculator(statValue);

            // dex skills

            //stealth
            if(skill.dex.stealth.proficiency == true){
                skill.dex.stealth.value = prof;
            }else {
                skill.dex.stealth.value = 0;
            }
            skill.dex.stealth.value += mod.dex
            renderItem('#stealth span', skill.dex.stealth.value);
            //sleight of hand
            if(skill.dex.sleightOfHand.proficiency == true){
                skill.dex.sleightOfHand.value = prof;
            }else {
                skill.dex.sleightOfHand.value = 0;
            }
            skill.dex.sleightOfHand.value += mod.dex
            renderItem('#sleight-of-hand span', skill.dex.sleightOfHand.value)
            //acrobatics
            if(skill.dex.acrobatics.proficiency == true){
                skill.dex.acrobatics.value = prof;
            }else {
                skill.dex.acrobatics.value = 0;
            }
            skill.dex.acrobatics.value += mod.dex
            renderItem('#acrobatics span', skill.dex.acrobatics.value);

            character.savingThrows.dex.value += mod.dex;
            st = character.savingThrows.dex.value
            character.initiative = mod.dex

            renderItem('#initiative span', character.initiative)

            renderItem('#mod_DEX', mod.dex);
            renderItem('#saving-dex', st);
        break;
        case 'CON': 
            character.stats.con = 0;
            mod.con= 0;

            if(character.savingThrows.con.proficiency == true){
                character.savingThrows.con.value = prof;
            }else {
                character.savingThrows.con.value = 0;
            }

            character.stats.con = statValue;           
            mod.con = modCalculator(statValue);

            character.savingThrows.con.value += mod.con;
            st = character.savingThrows.con.value
            
            renderItem('#mod_CON', mod.con);
            renderItem('#saving-con', st);
        break;
        case 'INT':
            character.stats.int = 0;
            mod.int = 0;

            if(character.savingThrows.int.proficiency == true){
                character.savingThrows.int.value = prof;
            }else {
                character.savingThrows.int.value = 0;
            }

            character.stats.int = statValue;           
            mod.int = modCalculator(statValue);

            // int skills

            //arcana
            if(skill.int.arcana.proficiency == true){
                skill.int.arcana.value = prof;
            }else {
                skill.int.arcana.value = 0;
            }
            skill.int.arcana.value += mod.int
            renderItem('#arcana span', skill.int.arcana.value);
            //history
            if(skill.int.history.proficiency == true){
                skill.int.history.value = prof;
            }else {
                skill.int.history.value = 0;
            }
            skill.int.history.value += mod.int
            renderItem('#history span', skill.int.history.value);
            //investigation
            if(skill.int.investigation.proficiency == true){
                skill.int.investigation.value = prof;
            }else {
                skill.int.investigation.value = 0;
            }
            skill.int.investigation.value += mod.int
            renderItem('#investigation span', skill.int.investigation.value);
            // nature
            if(skill.int.nature.proficiency == true){
                skill.int.nature.value = prof;
            }else {
                skill.int.nature.value = 0;
            }
            skill.int.nature.value += mod.int
            renderItem('#nature span', skill.int.nature.value);
            // religion
            if(skill.int.religion.proficiency == true){
                skill.int.religion.value = prof;
            }else {
                skill.int.religion.value = 0;
            }
            skill.int.religion.value += mod.int
            renderItem('#religion span', skill.int.religion.value);

            character.savingThrows.int.value += mod.int;
            st = character.savingThrows.int.value
            
            renderItem('#mod_INT', mod.int);
            renderItem('#saving-int', st);
        break;
        case 'WIS':
            character.stats.wis = 0;
            mod.wis = 0;

            if(character.savingThrows.wis.proficiency == true){
                character.savingThrows.wis.value = prof;
            }else {
                character.savingThrows.wis.value = 0;
            }

            character.stats.wis = statValue;           
            mod.wis = modCalculator(statValue);

            // wis skills
            // animalHandling
            if(skill.wis.animalHandling.proficiency == true){
                skill.wis.animalHandling.value = prof;
            }else {
                skill.wis.animalHandling.value = 0;
            }
            skill.wis.animalHandling.value += mod.wis
            renderItem('#animal-handling span', skill.wis.animalHandling.value);
            // insight
            if(skill.wis.insight.proficiency == true){
                skill.wis.insight.value = prof;
            }else {
                skill.wis.insight.value = 0;
            }
            skill.wis.insight.value += mod.wis
            renderItem('#insight span', skill.wis.insight.value);
            // medicine
            if(skill.wis.medicine.proficiency == true){
                skill.wis.medicine.value = prof;
            }else {
                skill.wis.medicine.value = 0;
            }
            skill.wis.medicine.value += mod.wis
            renderItem('#medicine span', skill.wis.medicine.value);
            // perception
            if(skill.wis.perception.proficiency == true){
                skill.wis.perception.value = prof;
                character.passivePerception = mod.wis + 10 + prof;
            }else {
                skill.wis.perception.value = 0;
                character.passivePerception = 10 + mod.wis
            }
            skill.wis.perception.value += mod.wis
            renderItem('.passive-perception span', character.passivePerception)
            renderItem('#perception span', skill.wis.perception.value);
            // survival
            if(skill.wis.survival.proficiency == true){
                skill.wis.survival.value = prof;
            }else {
                skill.wis.survival.value = 0;
            }
            skill.wis.survival.value += mod.wis
            renderItem('#survival span', skill.wis.survival.value);

            character.savingThrows.wis.value += mod.wis;
            st = character.savingThrows.wis.value

            renderItem('#mod_WIS', mod.wis);   
            renderItem('#saving-wis', st);
        break;
        case 'CAR':
            character.stats.car = 0;
            mod.car = 0 ;

            if(character.savingThrows.car.proficiency == true){
                character.savingThrows.car.value = prof;
            }else {
                character.savingThrows.car.value = 0;
            }

            character.stats.car = statValue;           
            mod.car = modCalculator(statValue);

            // car skills
            // deception
            if(skill.car.deception.proficiency == true){
                skill.car.deception.value = prof;
            }else {
                skill.car.deception.value = 0;
            }
            skill.car.deception.value += mod.car
            renderItem('#deception span', skill.car.deception.value);
            // intimidation
             if(skill.car.intimidation.proficiency == true){
                skill.car.intimidation.value = prof;
            }else {
                skill.car.intimidation.value = 0;
            }
            skill.car.intimidation.value += mod.car
            renderItem('#intimidation span', skill.car.intimidation.value);
            // performance
             if(skill.car.performance.proficiency == true){
                skill.car.performance.value = prof;
            }else {
                skill.car.performance.value = 0;
            }
            skill.car.performance.value += mod.car
            renderItem('#performance span', skill.car.performance.value);

            character.savingThrows.car.value += mod.car;
            st = character.savingThrows.car.value

            renderItem('#mod_CAR', mod.car);
            renderItem('#saving-car', st);
            // persuasion
            if(skill.car.persuasion.proficiency == true){
                skill.car.persuasion.value = prof;
            }else {
                skill.car.persuasion.value = 0;
            }
            skill.car.persuasion.value += mod.car
            renderItem('#persuasion span', skill.car.persuasion.value);   
        break;
    }
}
// character info functions 
function updateLevel(){
    level = document.querySelector('#level input').value;
    character.level = parseInt(level);
    if(level <= 4){
        prof = 2
    } else if (level > 4 && level <= 8){
        prof = 3
    } else if (level > 8 && level <= 12){
        prof = 4
    } else if (level > 12 && level <= 16){
        prof = 5
    } else if (level > 16 && level <= 20){
        prof = 6
    } else if (level > 20){
        prof = 7
    }
    calculateStat('STR', character.stats.str, character.savingThrows.str.value )
    calculateStat('DEX', character.stats.dex, character.savingThrows.dex.value )
    calculateStat('CON', character.stats.con, character.savingThrows.con.value )
    calculateStat('INT', character.stats.int, character.savingThrows.int.value )
    calculateStat('WIS', character.stats.wis, character.savingThrows.wis.value )
    calculateStat('CAR', character.stats.car, character.savingThrows.car.value )
}


function sendBasciInfo(event){
    let info = event.target.getAttribute('id');

    switch (info) {
        case 'charactername':
            character.info.class = '';
            character.characterName = document.querySelector('#characterName').value;
        break;
        case 'level':
            character.level = document.querySelector('#level').value;
        break;

    }
}

function sendCharacterInfo(event){
    let info = event.target.getAttribute('data-info');

    switch (info) {
        case 'class':
            character.info.class = '';
            character.info.class = document.querySelector('#class').value;
        break;
        case 'alignment':
            character.info.alignment = '';
            character.info.alignment = document.querySelector('#alignment').value;
        break;
        case 'background':
            character.info.background = '';
            character.info.background = document.querySelector('#background').value;
        break;
        case 'exp':
            character.exp = '';
            character.exp = document.querySelector('#exp').value;
        break;
        case 'player-name':
            character.info.playerName = '';
            character.info.playerName = document.querySelector('#player-name').value;
        break;
        case 'race':
            character.info.race = '';
            character.info.race = document.querySelector('#race').value;
        break;
    }
}
function sendInfo(event){
    let info = event.target.getAttribute('id');
    switch (info) {
        case 'languages-prof':
            character.languagesAndProf = '';
            character.languagesAndProf = document.querySelector('#languages-prof').value;
        break;
        case 'traits':
            character.personality.traits = '';
            character.personality.traits = document.querySelector('#traits').value;
        break;
        case 'ideas':
            character.personality.ideas = '';
            character.personality.ideas = document.querySelector('#ideas').value;
        break;
        case 'bonds':
            character.personality.bonds = '';
            character.personality.bonds = document.querySelector('#bonds').value;
        break;
        case 'flaws':
            character.personality.flaws = '';
            character.personality.flaws = document.querySelector('#flaws').value;
        break;
    }
}
function combatStats(event){
    let info = event.target.getAttribute('id');

    switch (info){
        case 'armor-class':
            character.ac = document.querySelector('#armor-class').value 
        break;
        case 'speed':
            character.speed = document.querySelector('#speed').value 
        break;
    }
}
// other small functions
function modCalculator(value){
    return ((Math.floor(value/2) -5));
}
function renderItem(tag, value){
    document.querySelector(tag).innerHTML = value
}

// for dev
function showCharacter(){
    console.log(character)
}