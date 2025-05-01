const prompt = require('prompt-sync')()

let numero = Number(prompt('digite o numero que deseja saber a tabuada: '))
let tabuada

for (let i = 1; i <= 10; i++) {
    let tabuada = i * numero
    console.log(`${numero} x ${i} = ${tabuada}`)
}
