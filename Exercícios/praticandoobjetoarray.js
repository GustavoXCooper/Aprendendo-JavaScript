let personagem = {
    nome : 'Gustavo',
    idade : 21,
    jogos: [
        { genero : ['RPG', ' Indie'], nome : 'Outward'},
        { genero : ['RPG', ' Turn Based' ], nome : 'Pokémon'}
    ]
}

console.log(`Nome: ${personagem.nome} \nIdade: ${personagem.idade} \nJogo favorito: ${personagem.jogos[0].nome} (${personagem.jogos[0].genero})`)

