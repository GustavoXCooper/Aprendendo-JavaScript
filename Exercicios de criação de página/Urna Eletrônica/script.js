let q = (el) => document.querySelector(el);
let qS =  (el) => document.querySelectorAll(el);

let seuVotoPara = q('.d1-1 span');
let cargo = q('.d1-2 span');
let descricao = q('.d1-4');
let aviso = q('.d2');
let lateral = q('.d1-right');
let numeros = q('.d1-3');

let etapaAtual = 0;
let numero = '';


function comecarEtapa(){
    let etapa = etapas[etapaAtual]; 
    
    let numeroHtml = '';

    for (let i=0;i<etapa.numeros;i++){
        if(i ===0 ){      
        numeroHtml += '<div class="numero pisca"></div>';   
        } else {
        numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInferface(){

}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if (elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInferface()
        }
    }
}

comecarEtapa();