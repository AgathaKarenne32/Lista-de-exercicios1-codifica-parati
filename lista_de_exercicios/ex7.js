const prompt = require('prompt-sync')()

let numeroDeMacas = Number(prompt('digite o numero de maçãs compradas'))
let precoPorMaca;

if (numeroDeMacas < 12){
    precoPorMaca = 0.30
}else {
    precoPorMaca = 0.25
}

let  valorTotal = numeroDeMacas + precoPorMaca

console.log('Valor total da compra:', valorTotal)
