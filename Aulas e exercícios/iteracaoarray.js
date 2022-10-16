let fruits = ['Banana', 'Maçã', 'Laranja', 'Uva'];

let bigFruits = fruits.filter((value) => {
    return value.length > 4;
});
console.log(bigFruits);

let ok = fruits.every((value) => {
    return value.length > 3;
})

let someFruits = fruits.some((value) => {
    return value.length > 3;

}) 

console.log(`Todas as frutas tem mais de 3 letras: ${ok}`);
console.log(`Algumas das frutas tem mais de 3 letras: ${someFruits}`)

if (fruits.includes('Uva')){
    console.log('Tem uva')
} else {
    console.log('Não tem uva')
}