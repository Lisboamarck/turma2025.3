/* ler dois numeros e a operação até que o usuario informe a saida*/
let continua = 's';
let num1 , num2;
let operacao;
while(continua == 's'){
    num1 = parseInt(prompt('informe o primeiro número'));
    num2 = parseInt(prompt('informe o segundo número'));
    operacao = prompt('operacao <+,-,*,/>');
    if(operacao == '+') {alert('resultadoo: '+ (num1 + num2))}
    else if(operacao == '-') {alert('resultadoo: '+(num1 - num2))}
    else if(operacao == '*') {alert('resultadoo: '+ (num1 * num2))}
    else if(operacao == '/') {alert('resultadoo: '+ (num1 / num2))}
    else {alert('operação invalida');}
    continua = prompt('deseja permanecer no programa? <s/n>');
}
alert('programa finalizado');
