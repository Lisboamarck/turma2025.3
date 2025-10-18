// 2): Crie uma classe chamada Moto com os atributos marca, modelo e ano. Depois, crie uma instância da classe e exiba as informações no console. 
class moto {
    constructor(marca, modelo, ano) { 
        this.marca = marca; 
        this.modelo = modelo; 
        this.ano = ano; }
         freiar() {
        console.log("a moto "+this.modelo+" esta freiando...");}
    
    
}
let minhamoto = new moto("honda", "cb 500" , "2025");
minhamoto.freiar();
