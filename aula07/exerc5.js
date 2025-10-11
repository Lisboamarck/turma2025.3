//Pedir nome e idade de 5 pessoas, mostrar quem é o mais velho
//Descrição: Solicite nome e idade de 5 pessoas e exiba o nome do mais velho. 
let num = 0
let idade =0
for (let i =0; i < 5; i++){
nome = parseInt(prompt('digite o nome da pessoa' + (i + 1)));
idade = parseInt(prompt('digite a idade de ' + nome));

if(idade > maioridade) {
    maioridade = idade; maisVelho = nome;
}
}
console.log("A pessoa mais velha é:", maisVelho, 'com', maiorIdade, "anos.")