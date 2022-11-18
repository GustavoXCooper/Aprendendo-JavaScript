var diceRolled = 0
var allRes = []
function send(e){
    if(e.keyCode == 13){
        diceRolled = document.querySelector('#diceNumber').value;
    } else return
}
/*
Não consegui fazer funcionar usando while
Não consegui fazer os valores res novos substituírem os  antigos, mas com o for funcionou

function rollD6(Event){
    while(i < diceRolled){
        let res = Math.floor(((Math.random()) * 6) + 1);
        allRes[i] = [res]
        i++;
    }
    allRes.toString
    document.querySelector('.resultado').innerHTML = allRes;
}
*/

function rollD6(){
    for ( let i = 1; i <= diceRolled; i++){
        let res = Math.floor(((Math.random()) * 6) + 1);
        allRes[i-1] = [res]
        document.querySelector('.resultado').innerHTML = allRes;
    }
}