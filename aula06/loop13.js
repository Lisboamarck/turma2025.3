let salario,
somasalf = 0,
somasalm = 0,
qtdm = 0,
 qtdf = 0;
let controle = 'continua' , sexo;
while (controle != 'fim'){
    salario = parseFloat(prompt('Informe o salario'));
    sexo = prompt('informe o sexo');
    if(sexo == 'f'  || sexo == 'F'){
        qtdf++; somasalf += salario;
    }else if (sexo == 'm' || sexo == 'M'){
        qtdm++; somasalm += salario;
    }else {(alert('sexo invalido'));}
    controle = prompt('Deseja continuar ? digite fim para sair')    
} 
document.write('qtd de mulheres: '+qtdf+' salarios femininos: '+somasalf+'<br>');       
document.write('qtd de homens: '+qtdm+' salarios masculinos: '+somasalm+'<br>');       
document.write('media de salarios: '+((somasalf+somasalm)/(qtdf+qtdm)));       

