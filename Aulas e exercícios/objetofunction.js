// Não tinha certeza de como acessar as propriedades e modificá-las, então resolvi fazer uns testes tentar aplicar o que estava aprendendo

let personagem = {
    nome: 'Nome',
    sobrenome: "Qualquer",
    idade: 21,
    stats: [
        {for: 14},
        {con: 16},
        {dex: 12},
        {sab: 10},
        {int: 12},
        {car: 14},
    ],
    nomeCompleto: function () {
        return `Nome completo: ${this.nome} ${this.sobrenome}` ;
    },
    levelUp: function () {
        return this.stats[0].for = this.stats[0].for + 2;
    }
}
console.log(personagem.nomeCompleto());
console.log('Antes de subir de nível, força', personagem.stats);
personagem.levelUp();
console.log('Depois de subir de nível', personagem.stats);
