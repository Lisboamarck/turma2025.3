//Receber 10 idades e informar quantas são maiores de idade
let idade, somaqtdmaior = 0
for ( let i = 1; i<=10; 1++){
    idade = parseInt(prompt('idade?'));
    if (idade >= 18){
        somaqtdmaior++;
    }
} 
document.write('qtd de maiores: '+somaqtdmaior);
document.write('voce é de maior: ',idade);