const prompt = require('prompt-sync')()

let numero = Number(prompt('Escreva um número inteiro: '))

if (numero % 2 === 0) {
    console.log('Esse número é par')
} else {
    console.log('Esse número é ímpar')
}
