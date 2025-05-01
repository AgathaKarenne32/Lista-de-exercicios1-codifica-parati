const prompt = require('prompt-sync')()

let opcao = Number(prompt('digite o numero da opcao:'))


switch (opcao) {
    case 1:
        console.log('voce escolheu a opcao 1')
        break;
    case 2:
        console.log('voce escolheu a opcao 2')
        break;
    case 3:
        console.log('voce escolheu a opcao 3')
    default:
        console.log('opcao invalida! tente novamente')
        break;
}