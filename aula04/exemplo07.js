let idade = parseInt(prompt("digite a idade"));
if(idade <= 2 ) {
    console.log("bebe");
}else if(idade > 2 && idade<= 12) { console.log('criança')}
else if(idade > 11 && idade<= 18) { console.log('adolecente')}
else if(idade >18 && idade<= 59){ console.log('adulto')}
else {console.log('idoso')}