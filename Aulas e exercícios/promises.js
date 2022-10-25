// Entendendo o funcionamento de promises e códigos assíncronos

function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log('pegando temperautra...')

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000);
    });
}

// Usando a promise

let temp = pegarTemperatura();
temp.then(function(resultado){
    console.log(`Temperatura: ${resultado}`)
});
temp.catch(function(error){
    console.log('Deu erro')
})