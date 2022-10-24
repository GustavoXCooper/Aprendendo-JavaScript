// Exercício usando operadores spread e rest

function adicionar(nomes, ...novosNomes){
    return nomes = [
        ...nomes, 
        ...novosNomes
    ]
}

let nomes = ['XXX', 'YYY'];

let outros = adicionar(nomes, 'AAA', 'BBB');

console.log(outros);