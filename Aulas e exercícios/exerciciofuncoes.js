// 1.
/*
 Calcule a porcentagem entre 2 números.
Ex: 25% de 40 é 10
Fóruma da porcentagem: (x / y) * 100
*/

// Apenas jeitos diferentes de montar a função[

/*function pct(x, y){
    var porcentagem = ((x / y) * 100)
    return (porcentagem)
}
*/
function pct(x, y){
    return (x / y) * 100
}

let x = 10
let y = 40
let porcentagem = pct(x, y)
console.log(`${porcentagem}% de ${y} é ${x}`)

// 2.
/* Calcule o preço do imóvel 
 - m² = 3.000
 - Se tiver 1 quarto, o m² é 1x
 - Se tiver 2 quartos, o m² é 1.2x
 - Se tiver 3 quartos, o m² é 1.5x
*/


/* MIINHA RESOLUÇÃO
function price(m2 , quartosQuantidade){
    if (quartosQuantidade == 1){
        return m2 * 3000
    } else if ( quartosQuantidade == 2) {
        return  m2 * 3000 * 1.2
    } else if ( quartosQuantidade == 3){
        return m2 * 3000 * 1.5
    }
}

let m2 = 123
let quartosQuantidade = 3
let calculatedPrice = price (m2, quartosQuantidade)
console.log(`O preço do imóvel é de R$${calculatedPrice}`)
*/
// Resolução do professor

function calcularImovel(metragem, quartos){
    let m2 = 3000
    let preco = 0
    
    switch (quartos){
        case 1:
        default:
            preco = metragem * m2
            break
        case 2: 
            preco = metragem * (m2 * 1.2)
            break
        case 3: 
            preco = metragem * (m2 * 1.5)
            break
    }
    return preco
}

metragem = 123
quartos = 3
preco = calcularImovel (metragem, quartos)
console.log(`O preço do imóvel é R$${preco}`)

// 3.
/* Crie uma função que valide usuário e senha.
Usuário correto = Pedro
Senha = 123
*/

function validar(usuario, senha){
    if (usuario === 'Pedro' && senha == 123){
        return true 
    } else {
        return false
    }
} 

let usuario = 'Raquel'
let senha = 123
let validacao = validar(usuario, senha)

if (validacao){
    console.log('Acesso concedido')
} else{
    console.log('Acesso negado')
}