//Crie uma função chamada verificarIdade(idade), que recebe a idade de uma pessoa e retorna "Maior de idade" se for 18 anos ou mais, e "Menor de idade" caso contrário.
function verificarIdade (idade) {
    if (idade >= 18) {
        alert(" Maior de idade ");
    } else {
        alert ("Menor de idade");
    }
    return mensagem1;
    }

let idade = parseInt(prompt('informe a idade'));
let texto = verificarIdade(idade);
alert(texto);