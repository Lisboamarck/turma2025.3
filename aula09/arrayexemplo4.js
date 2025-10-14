// Número Aleatório Dentro de um Intervalo //
//Enunciado: Crie um programa que solicita ao usuário dois números (mínimo e máximo) e sorteia um número dentro desse intervalo. Exiba o número sorteado na tela. 
let min = parseInt(prompt("Digite o número mínimo:")); 

let max = parseInt(prompt("Digite o número máximo:")); 

 

// Gera um número aleatório dentro do intervalo [min, max] 

let numeroSort = Math.floor(Math.random() * (max - min + 1)) + min; 

console.log(numeroSort); 