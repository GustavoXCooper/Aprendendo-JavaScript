// Operador spread

// Em array
let numeros = [1, 2, 3, 4];
let outros = [...numeros, 5, 6, 7];

// Em objeto

let info = {
    nome: 'XXX',
    sobrenome: 'YYY',
    idade: 20
}

let novaInfo = {
    ...info,
    cidade: 'AAAA',
    estado: 'BBBB',
    pais: 'Brasil'
}

// Em objeto e função

function addInf(inf){
    let newInf = {
        ...inf,
        status: 0,
        token: 'aaasa',
        data_cadastro: '...'
    };


    return newInf

}

console.log(addInf({nome: 'XXXX', sobrenome: 'YYYY',}))