const prompt = require('prompt-sync')()

let a = Number(prompt('digite o numero para representar a: '))
let b = Number(prompt('digite o numero para representar b: '))

console.log(a)
console.log(b)

for (let i = 3; i <= 10; i++){
    let fib = a + b
    console.log(fib)
    a = b
    b = fib
}