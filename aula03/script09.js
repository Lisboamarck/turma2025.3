let salario = parseFloat(prompt('informe o salário'));
let vt = salario * 0.06;
let inss;
if(salario < 2500){
    inss = salario * 0.08;
} else {
    inss = salario * 0.11;
}
console.log("desconto do vt: ",vt);
console.log("desconto do inss: ",inss);
    