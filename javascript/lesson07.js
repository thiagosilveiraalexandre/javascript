// desafio 01 - Informações
let pessoa = {
    nome: 'Fedor Vladimirovich Emelianenko',
    nacionalidade: 'Russo',
    idade: 44,
    peso: 106,
    altura: 1.83,
}
document.write(`<h2>Informações</h2> <br>`)
document.write(`Lutador: ${pessoa.nome} <br>`)
document.write(`Nacionalidade: ${pessoa.nacionalidade} <br>`)
document.write(`Idade: ${pessoa.idade} anos <br>`)
document.write(`Peso: ${pessoa.peso} kg <br>`)
document.write(`Altura: ${pessoa.altura} m <br>`)

// Desafio 02 - Frase do Dia
const dia = 10
const mes = 9
const ano = 2021
const frase = "Seja curioso. Leia de tudo. Tente coisas novas."
const autor = "Aron Swartz"

document.write(`<h2>Frase do dia</h2> <br>`)
document.write(`${dia}/${mes}/${ano} <br>`);
document.write(`${frase} <br>`)
document.write(`${autor} <br>`)

// Desafio 03 - Array de Meses do Ano
const data = {
    mes: ['Mar', 'Jun', 'Set', 'Dez'],
}

document.write(`<h2>Array de Meses do Ano</h2> <br>`)
document.write(`${data.mes[0]}, ${data.mes[1]}, ${data.mes[2]}...`)

// Desafio 04 - Objeto Jogo
let game = {
    jogo : 'League Of Legends - LOL',
    dev : 'Riot Games',
    ano : 2009
}

document.write(`<h2>Objeto Jogo</h2> <br>`)
document.write(`Jogo: ${game.jogo} <br> Desenvolvedor: ${game.dev} <br> Lançamento: ${ano}`)