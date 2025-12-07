class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) return "Infantil"
        if (this.idade >= 12 && this.idade <= 13) return "Juvenil"
        if (this.idade >= 14 && this.idade <= 15) return "Intermediário"
        if (this.idade >= 16 && this.idade <= 30) return "Adulto"
        
        return "Sem categoria"
        
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida() {
        let notasOrdenadas = [...this.notas].sort((a, b) => a-b)
        let notasValidas = notasOrdenadas.slice(1, 4)
        let soma = 0
        notasValidas.forEach((nota) => {
            soma += nota
        })
        
        return soma / notasValidas.length
    }

    obtemNomeAtleta() { return this.nome }
    obtemIdadeAtleta() { return this.idade }
    obtemPesoAtleta() { return this.peso }
    obtemAlturaAtleta() { return this.altura }
    obtemNotasAtleta() { return this.notas.join(", ") }
    obtemCategoria() { return this.calculaCategoria() }
    obtemIMC() { return this.calculaIMC() }
    obtemMediaValida() { return this.calculaMediaValida() }
}

function exibirResultados(atleta) {
     console.log(`Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()}
Altura: ${atleta.obtemAlturaAtleta()}
Notas: ${atleta.obtemNotasAtleta()}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC()}
Média válida: ${atleta.obtemMediaValida()}`)
}


const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

exibirResultados(atleta)