// O que são Arrow Functions?
// As Arrow Functions foram introduzidas no ECMAScript 6 (ES6), lançado em 2015. Elas representam uma sintaxe mais curta e concisa para escrever funções em JavaScript. Além disso, as arrow functions não possuem seu próprio this, o que pode evitar problemas comuns ao trabalhar com funções dentro de objetos e classes.


// Exercício 1: Arrow Function com um parâmetro
// Crie uma arrow function chamada dobro que recebe um número e retorna o dobro dele.

const dobro = x => x * 2;
console.log(dobro(16));

// Exercício 2: Arrow Function com múltiplos parâmetros
// Crie uma arrow function chamada dividir que recebe dois números e retorna o resultado da divisão do primeiro pelo segundo.

const dividir = (x, y) => x/y
console.log(dividir(8,2));

// Exercício 3: Arrow Function com múltiplas linhas
// Crie uma arrow function chamada mensagemBoasVindas que recebe um nome e retorna uma mensagem de boas-vindas no formato "Seja bem-vindo, [nome]!".

const mensagemBoasVindas = (name) => {
    return `Seja bem vindo, ${name}!`
}
console.log(mensagemBoasVindas("Kayky"))

// Exercício 4: Higher-Order Function personalizada
// Crie uma função chamada executarOperacao que recebe três parâmetros: dois números e uma função que representa uma operação matemática (adição, subtração, multiplicação ou divisão).
// Em seguida, chame essa função passando diferentes operações matemáticas como arrow functions.

const executarOperacao = (x, y, operacao) =>  operacao(x, y)
console.log(executarOperacao(10, 8, (x, y) => x + y ))
console.log(executarOperacao(10, 10, (x, y) => x / y ))

// Exercício 5: map() – Transformação de um array
// Crie um array de preços de produtos e use o método map() para aplicar um desconto de 10% em cada preço.

const precos = [100, 200, 300, 400]
const precosDesconto = precos.map(precos => precos * 0.9)
console.log(precosDesconto)

// Exercício 6: filter() – Filtrando valores em um array
// Crie um array com idades e use o método filter() para retornar apenas as idades menores que 18 anos.

const idades = [12, 25, 17, 30, 14, 19]
const menorDeIdade = idades.filter(idade => idade <= 18)
console.log(menorDeIdade)

// Exercício 7: reduce() – Somando valores de um array
// Crie um array com números e use o método reduce() para calcular o produto (multiplicação de todos os números).

const numeros = [2, 3, 4, 5]
const produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log(produto)