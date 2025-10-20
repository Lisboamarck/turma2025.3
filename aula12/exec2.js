// Peça ao usuário para inserir 4 números. Armazene em um array e exiba a média. 
let numeros = []
let soma = 0
for (let i = 0; 1<4; i++){
    let n = Number(prompt('digite um numero'))
    numeros.push(n)
    soma = soma + n
}
let media = soma/numeros.length;
console.log('A media é:' + media)
console.log('O conteúdo do array: ' + numeros);