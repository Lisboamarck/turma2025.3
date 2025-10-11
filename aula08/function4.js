//Crie uma Função que Calcula o Quadrado de um Número
function CalcularQuadrado(num){
    return num ** 2;
}    

let numero = parseInt(prompt('digite um numero'));
let calculo = quadrado(numero);
alert('O quadrado de ' + numero + ' é ' + calculo);