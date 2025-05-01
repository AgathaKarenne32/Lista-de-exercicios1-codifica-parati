const prompt = require('prompt-sync')()

let peso = parseFloat(prompt('digite qual o seu peso:')) 
let altura = parseFloat(prompt('digite qual a sua altura:'))

let imc = (peso / (altura * altura))

if (imc < 18.5) {
    console.log('baixo peso')
}else if(imc >= 18.5 && imc <= 24.9){
    console.log('peso normal')
}else if(imc >= 25 && imc <= 29.9){
    console.log('sobrepeso')
}else if(imc >= 30 && imc <= 34.9){
    console.log('obesidade')
}

/*Menor que 18,5	
baixo peso
18,5 a 24,9	
peso normal
25 a 29,9	
sobrepeso
30 a 34,9	
obesidade*/
