// idade do eleitor
// menor 16 nao pode votar
// 16, 17 eleitor opcional
// 18 eleitor obrigatorio

let idade = Number(prompt('informe a idade'))
if(idade<16){
    console.log('nao pode voltar');
} else if (idade<18){
    console.log('voto opicional');
} else {
    console.log('voto obrigatorio');
}