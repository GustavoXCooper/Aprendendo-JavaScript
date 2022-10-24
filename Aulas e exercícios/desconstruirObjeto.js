let pessoa = {
    nome: 'XXX',
    social:{
        facebook: 'XXX YYY',
        instagram: {
            url: '@ ',
            followers: 123
        }
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

function pegarNomeCompleto({nome, sobrenome = 'Silva', social:{instagram:{url:instagram}}}){
    return `Nome: ${nome} ${sobrenome} (Siga em: ${instagram})`
}
console.log (pegarNomeCompleto(pessoa))
/*
let {idade = 0, social:{facebook}, social:{ instagram:{url:instagram, followers}}} = pessoa;
// idade = 0 dá o valor padrão de 0
// social:{instagram:url:instagram} entra no objeto social, depois no objeto instagram, 
// pega url e renomeia ela como "instagram"
console.log (`Nome Completo: ${pessoa.nomeCompleto()}, Idade: ${idade}, Facebook: ${facebook}, Instagram: ${instagram}`);
*/