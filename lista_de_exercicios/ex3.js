const prompt = require('prompt-sync')()

let nota = Number(prompt('qual foi a sua nota (0 até 10)?'))

if (nota < 5) {
    console.log('reprovado!')
}else if(nota >= 5 && nota < 7){
    console.log('recuperação!')
}else if(nota >= 7 && nota <= 10){
    console.log('aprovado!')
}else{
    console.log('nota invalida!')
}

