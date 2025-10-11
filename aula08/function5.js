//Crie uma Função para Contar de 1 até um Número Informado
function Contar(x){
for (let i = 1 ; i <= x; i++){
    document.write(i+'<br>')
}
}
let num = parseInt(prompt('informe o numero'));
Contar(num); 