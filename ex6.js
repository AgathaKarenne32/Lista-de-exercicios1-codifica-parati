const prompt= require('prompt-sync')()

let a = parseFloat(prompt('digite o lado de a'))
let b = parseFloat(prompt('digite o lado de b'))
let c = parseFloat(prompt('digite o lado de c'))

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log('triângulo equilátero')
      } else if (a === b || a === c || b === c) {
        console.log('triângulo isósceles')
      } else if(a !== b && b !== c && a !== c){
        console.log('triângulo escaleno')
    } else {
      console.log('Os valores não formam um triângulo')
    }
}
    /*Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C*/