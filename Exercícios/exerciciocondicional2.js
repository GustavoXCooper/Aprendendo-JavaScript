// 1. Substitua o @ pela condicional correta para que o resultado seja TRUE
/*
let x = 10
let y = 5

console.log(x @ y)*/

let x = 10
let y = 5

console.log(x > y)

// 2. Substitua o @ pela condicional correta para que o resultado seja FALSE
/*
let w = '10'
let y = 10

console.log( w @ y)*/

let w = '10'
let z = 10

console.log( w === z)

// 3. Substitua o @ pela condicional correta para que o resultado seja TRUE,
// mas faça de forma diferente do exercício 1.
/*
let x = 10
let y = 5

console.log(x @ y)*/

let a = 10
let b = 5

console.log(a != b)

// 4. Crie uma condicional para verificar se o preço de um produto X, que custa $40,3 está caro,
// sendo que é considerado caro acima de 45.

let preco = 40.3

if (preco <= 45){
    console.log('O produto X está barato.')
} else {
    console.log('O produto X está caro.')
}