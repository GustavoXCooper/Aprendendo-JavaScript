// exercicio padEnd/padStart
// assumindo que cartões de crédito tem 7 números
cartao = '0912321'

//mostrar os últimos 4 dígitos

let lastDigits = cartao.slice(-4);
let cartaoMascarado = lastDigits.padStart(3, '*');
console.log(`Estes são os últimos 4 números do cartão? ${cartaoMascarado}`);
