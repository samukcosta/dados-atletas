# ✅ **README.md — Projeto: Dados dos Atletas**

# 🏅 Dados dos Atletas

Aplicação desenvolvida em **JavaScript** para processar informações de atletas, calcular categoria, IMC e média válida de notas conforme regras de uma competição esportiva.  
Projeto baseado no desafio proposto pelo DEVstart.


## 📌 Objetivo do Projeto

Criar uma aplicação capaz de:

- Receber informações de um atleta
- Classificar sua categoria por idade
- Calcular o IMC
- Calcular a média válida de notas (removendo a maior e a menor)
- Exibir tudo de forma organizada no console

## 🧠 Contexto

Este projeto é uma continuação de um desafio anterior, no qual foi desenvolvida uma ferramenta para calcular médias de notas de atletas.  
Com base no bom desempenho do time, os organizadores solicitaram esta evolução com novos cálculos e encapsulamento em uma **classe JavaScript**.


# 🧩 Estrutura da Classe `Atleta`

A classe foi desenvolvida para concentrar todos os **atributos** e **métodos** relacionados ao atleta.

### 🔸 **Atributos**
- `nome`
- `idade`
- `peso`
- `altura`
- `notas` (array de 5 notas)

### 🔸 **Métodos principais**
| Método | Função |
|-------|--------|
| `calculaCategoria()` | Determina a categoria do atleta com base na idade |
| `calculaIMC()` | Calcula o Índice de Massa Corporal |
| `calculaMediaValida()` | Ordena as notas, remove a maior e a menor, e calcula a média |
| `obtemNomeAtleta()` | Retorna o nome |
| `obtemIdadeAtleta()` | Retorna a idade |
| `obtemPesoAtleta()` | Retorna o peso |
| `obtemAlturaAtleta()` | Retorna a altura |
| `obtemNotasAtleta()` | Retorna as notas formatadas |
| `obtemCategoria()` | Retorna a categoria |
| `obtemIMC()` | Retorna o IMC |
| `obtemMediaValida()` | Retorna a média válida |



## 🧮 Regras de Cálculo

### 📌 **1. Categoria por idade**
| Faixa etária | Categoria |
|--------------|-----------|
| 9–11 anos | Infantil |
| 12–13 anos | Juvenil |
| 14–15 anos | Intermediário |
| 16–30 anos | Adulto |
| Outras idades | Sem categoria |



### 📌 **2. Cálculo do IMC**
Fórmula usada:

```

IMC = peso / (altura²)

````


### 📌 **3. Média válida das notas**

- São fornecidas **5 notas**.
- A menor e a maior são descartadas.
- A média é feita com as **3 notas centrais**.



# 📂 Exemplo de Uso

```js
const atleta = new Atleta(
    "Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]
);

exibirResultados(atleta);
````

---

# 📤 Saída esperada

```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10, 9.34, 8.42, 10, 7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.253333333333334
```

---

# 📦 Estrutura do Repositório

```
dados-atletas/
 ├── dados-atletas.js
 └── README.md
```

---

# ▶️ Como executar o projeto

1. Instale o Node.js (se ainda não tiver)
2. Faça o download/clonagem do repositório
3. Execute o comando:

```
node dados-atletas.js
```

A saída será exibida diretamente no console.

---

# 🛠 Tecnologias utilizadas

* JavaScript (ES6+)
* Node.js para execução local

---

# 🧠 Aprendizados e conceitos aplicados

* Programação orientada a objetos (POO)
* Criação e uso de classes e métodos
* Encapsulamento de dados
* Manipulação de arrays (`sort`, `slice`)
* Cálculos matemáticos (IMC e médias)
* Uso de template strings
* Boas práticas de código limpo
