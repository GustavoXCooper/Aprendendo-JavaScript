// Exercícios propostos em aula sobre loops
// 1. Faça um loop que mostre todas as frutas
let lista = ['Banana', 'Maça', 'Uva'];

/*
for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}
*/

for (let frutas in lista){
    console.log(lista[frutas]);
}


// 2. Faça um loop que conte de 1 até 100 usando WHILE
x = 1
while (x <= 100){
    console.log(x)
    x++
}