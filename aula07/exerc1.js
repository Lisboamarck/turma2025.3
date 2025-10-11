let numero = parseInt(prompt('digite o numero'));
while (numero != 0){
    if((numero % 2) == 0) {
        alert('Numero par');
    } else {
        alert('Numero impar');    
    }
    numero = parseInt(prompt('digite o numero <0 para sair >'));
 }