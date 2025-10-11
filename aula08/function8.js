//Crie uma Função para Converter Metros para Centímetros  
function converte(m){ 

    return m * 100; 

} 

 

let metros = parseInt(prompt('informe quantos metros')); 

let centimetros = converte(metros); 

alert('a metragem em centímetros é: ' + centimetros); 