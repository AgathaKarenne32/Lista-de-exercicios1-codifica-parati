const prompt = require('prompt-sync')()

let soma = 0
let contador = 0
let numero = 0

do {
    numero = Number(prompt('digite um numero: (digite 0 para parar)'))

    if (numero != 0) {
        soma += numero
        contador++
    }

    
} while (numero !== 0);

if (contador > 0) {
    let media = (soma / contador)
    console.log(`a media aritmetica é:' ${media}`)
}else{
    console.log('Nenhum numero valido foi digitado')
}