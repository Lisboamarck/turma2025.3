//Crie um programa que sorteia um número entre 1 e 100. Se for par, exiba "Número X é par". Se for ímpar, exiba "Número X é impar)
let x = Math.floor(Math.random() * 100) + 1;
if((x % 2) == 0) {
    alert("Numero sorteado é par " + x);
} else {
    alert("Numero sorteado é impar " + x);
}
