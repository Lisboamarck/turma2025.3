let num1 = Number(prompt('informe o priemiro numero'));
 let num2 = Number(prompt('informe o segundo numero'));
// ler a operação
 let operador = prompt('qual operação <+, -, *,/>:');

if(operador=='+') {
    console.log ('soma = ', num1 + num2);
} else if (operador=='-'){
    console.log('subtração = ', num1 - num2);
}else if (operador=='*'){
    console.lo('multiplicação  = ', num1 * num2);
}else if (operador== '/'){
    console.log('divisão = ', num1 / num2);
}else {
    console.log('operação inválida');
}