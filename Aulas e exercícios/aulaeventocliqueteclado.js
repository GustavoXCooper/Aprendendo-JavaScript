function clicou(){
    console.log('clicou')
}
let botao = document.querySelector('#botaoQualquer');
botao.addEventListener('click', clicou);

let botao2 = document.querySelector('#outroBotaoQualquer');
botao2.addEventListener('click', () => {
    console.log('clicou no outro botão')
})

function digitou(e){
    if(e.keyCode == 13 && e.ctrlKey == true){
        let texto = document.querySelector('#inputQualquer').value;

        console.log(texto)
    }
}