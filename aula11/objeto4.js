// 3): Crie uma classe Pessoa com os atributos nome, idade e profissão. Depois, crie uma instância e exiba os dados.
class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
    trabalhar() {
        console.log("O " + this.nome + " com, " + this.idade + " anos de idade trabalha como, " + this.profissao)
    }
}

let minhapessoa = new Pessoa("Marcos", "27", "Programador")
minhapessoa.trabalhar()


