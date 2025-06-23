/* 3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array. */

prompt = require('prompt-sync') ()

const frase = prompt("Digite uma frase: ")
const palavras = frase.split(" ")

const palavrasUnicas = []

for (let i = 0; i < palavras.length; i++) {
    const palavraAtual = palavras[i]
    if (!palavrasUnicas.includes(palavraAtual)) {
        palavrasUnicas.push(palavraAtual)
    }
}

console.log(palavrasUnicas)

