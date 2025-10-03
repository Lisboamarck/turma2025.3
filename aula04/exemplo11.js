let idade = Number(prompt('qual sua idade'));
let acompanhada = Number(prompt('voce esta acompanhado? (s/n)'));
if(idade >= 18 ) {
    console.log('pode comprar bebida alcolica')
}else if (idade >=16 && acompanhada == 's'){
    console.log('pode comprar bebida alcolica')
  } else {
    console.log('nao pode comprar bebida alcolica')
    }

