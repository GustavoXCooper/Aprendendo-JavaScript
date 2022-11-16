// Initial Data
let table =  {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
}       

let turn =  '';
let result = '';
let playing = false; 

reset()
// Events
document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach( item => {
    item.addEventListener('click', itemClick)
})

// Functions

function itemClick(event){
   let item = event.target.getAttribute('data-item');
   if (playing && table[item] === ''){
    table[item] = turn;
    renderTable();
    togglePlayer();
   }
}

function reset(){
    result = '';

    let random = Math.floor(Math.random() * 2);
    turn = (random === 0) ? 'x' : 'o';

    for (let i in table){
        table[i] = '';
    }

    playing = true;
    
    renderTable();
    renderInfo();
}

function renderTable(){
    for (let i in table){
        let item = document.querySelector(`div[data-item=${i}]`);   
        item.innerHTML = table[i];
    } 
    checkResult()
}

function renderInfo(){
    document.querySelector('.vez').innerHTML = turn;
    document.querySelector('.resultado').innerHTML = result;

    checkResult()
}

function togglePlayer(){
    turn = (turn === 'x') ? 'o' : 'x';
    renderInfo();
}

function checkResult(){
    if (checkWinnerFor('x')){
        result = 'X venceu!';
        playing = false;
    } else if (checkWinnerFor('o')){
        result = 'O venceu!';
        playing = false;
    } else if (draw()){
        result = 'Empate!';  
        playing = false;
    }
}

function checkWinnerFor(turn){
    let possibilities = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',     

        'a1,b2,c3',
        'a3,b2,c1'
    ];

    for (let w in possibilities){
        let pArray = possibilities[w].split(',');
        let winner = pArray.every( option => table[option] === turn );
        if (winner) return true;
    }
    return false;
}

function draw(){
    for(let i in table) {
        if (table[i] === ''){
            return false;
        }
    }
    return true; 
}