const prompt = require('prompt-sync')()

let valor1 = Number(prompt('digite o primeiro valor'))
let valor2 = Number(prompt('digite o segundo valor (diferente do primeiro)'))

if (valor1 === valor2) {
    console.log('os valores precisam ser diferentes')
}else {
    if (valor1 < valor2) {
        console.log('valores em ordem crescente:', valor1, valor2)

    }else{
    console.log('valores em ordem crescente', valor2, valor1)
    }
}