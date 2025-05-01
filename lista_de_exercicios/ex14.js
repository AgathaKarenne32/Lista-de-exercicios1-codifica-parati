const prompt = require('prompt-sync')()

let numero = Number(prompt('digite um numero: '))

if (numero < 0) {
    console.log('numero invalido')
}else{
    let fatorial = 1
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
        
    }
    console.log(`o fatorial de ${numero} é ${fatorial}`)
}