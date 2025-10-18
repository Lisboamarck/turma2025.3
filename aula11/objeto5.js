// 4): Crie uma classe Filme com os atributos título, diretor e ano de lançamento. Depois, crie um método que exiba as informações do filme. 
class filme {
    constructor(titulo, ano, diretor){
    this.titulo = titulo
    this.ano = ano
    this.diretor = diretor
}
encenar() {
    console.log(" O filme " + this.titulo + " foi estreiado em " +this.ano+ " e digirigo por, " +this.diretor )
}
}
let movie = new filme("Linha de frente", "2013", "Gary Fleder")
movie.encenar()
