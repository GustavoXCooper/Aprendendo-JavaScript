// initial data
let currentQuestion =  0;
let correctAnswers = 0;


showQuestion();

// events

document.querySelector('.scoreArea button').addEventListener('click', ()=>{   
    
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestion();
})

// functions

function showQuestion(){
    if(questions[currentQuestion]){
        
        let q = questions[currentQuestion];

        let progressBar = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${progressBar}%`

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;

        let optionHTML = '';
        for(let i in q.options){
            optionHTML += `<div data-op="${i}"class="option"><span>${[+i+1]}</span>${q.options[i]}</div>`
        }

        document.querySelector('.options').innerHTML = optionHTML;

        document.querySelectorAll('.options .option').forEach(item =>{
            item.addEventListener('click', optionClickEvent)
        });

    } else { 
        finishQuiz();
    }   
}

function optionClickEvent(e){
    let answer = parseInt(e.target.getAttribute('data-op'));
    if (questions[currentQuestion].answer === answer){
        correctAnswers++;
    }
    currentQuestion++
    showQuestion()
}
function finishQuiz(){
    let correctAnswersPct = Math.floor((correctAnswers/questions.length) * 100);

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = `100%`

    document.querySelector('.scorePct').innerHTML = `Acertou ${correctAnswersPct}% das questões`

    if( correctAnswersPct >= 60){
        document.querySelector('.scoreText').innerHTML = 'PARABÉNS!';
        document.querySelector('.scorePct').style.color = '#0d630d';
    } else if (correctAnswersPct <= 69){
        document.querySelector('.scoreText').innerHTML = 'Treine mais :(';
        document.querySelector('.scorePct').style.color = '#FF0000'
    }
}





