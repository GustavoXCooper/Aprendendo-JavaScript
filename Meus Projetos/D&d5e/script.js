


document.querySelectorAll('.dice').forEach(item =>{
    item.addEventListener('click', rollDice)
})
function rollDice(e){
    document.querySelector('#diceResult').classList.remove('result-active')

    let dice = e.target.getAttribute('data-dice')
    let res = Math.floor(((Math.random())* dice ) + 1); 
    document.querySelector('#diceResult').classList.add('result-active')
    document.querySelector('#diceResult').innerHTML= res;
    diceSound()
    setTimeout(()=>{
        document.querySelector('#diceResult').classList.remove('result-active')
    }, 200)
}
// running out of time, next time i'll make every dice roll create a div with each result, and they'll be erased every few rolls
function diceSound(){
    let audio = new Audio('sound/RollingDice.mp3')
    audio.play();
}
