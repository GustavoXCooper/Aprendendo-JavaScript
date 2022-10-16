// .1 No array abaixo, qual numero que pega Ferrari?
let carros = ['BMW', ' Ferrari', ' Mercedes'];
let x = 1;
console.log(`1. ${carros[x]}`);

// 2. Troque a Ferrari por Audi

carros[1] = ' Audi'
console.log(`2. Lista com Audi: ${carros}` );

// 3. Adicione o valor Volvo a lista

carros.push(' Volvo')
console.log(`3. Lista com Volvo ${carros}`)

// 4. Exiba quantos itens tem no array

console.log(`4. Itens no array: ${carros.length}`)