/* 2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */

const prompt = require('prompt-sync') ()

let numeroAleatorio = Math.floor(Math.random() * 100) +1 

let tentativas = 0
let palpite
let acertou = false

while (!acertou) {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"))
    tentativas++

if (palpite === numeroAleatorio) {
    acertou = true
    console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`)
} else if (palpite < numeroAleatorio) {
    console.log("Mais alto!")
} else {
    console.log("Mais baixo!")
}   
}

console.log("Número secreto:", numeroAleatorio)