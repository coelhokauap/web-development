// Array - Um array é uma lista ordenada de valores, que podem ser de qualquer tipo (números, strings, objetos, etc). Cada item no array tem um índice (posição) que começa do zero.

// Características:
// Usa colchetes []
// Os itens são acessados por índice (posição)
// Pode conter qualquer tipo de dado

// Objeto - Um objeto é uma coleção de pares chave:valor. Ele representa uma estrutura com propriedades (como uma ficha de cadastro, por exemplo).

// Características:
// Usa chaves {}
// Os valores são acessados pelas chaves (ou "propriedades")
// Pode conter valores simples ou complexos (como arrays e outros objetos)

// JSON (JavaScript Object Notation) - O JSON é uma formatação em texto (string) para representar objetos e arrays. Ele é usado para trocar dados entre sistemas (ex: entre um servidor e o navegador).

// Características:
// Sempre é texto (string)
// Chaves e strings usam aspas duplas
// Precisa ser convertido com JSON.parse() para virar objeto
// Para transformar um objeto em JSON: JSON.stringify(objeto)

// lista_frutas.push("Melão");
// lista_frutas[99] = "Bergamota";
// lista_frutas[0] = "Tomate"; // Adiciona um item na posição 0, substituindo o valor existente
// lista_frutas.sort(); // Ordena os itens do array em ordem alfabética

const lista_frutas = ["Banana", "Limão", "Kiwi", "Morango", "Uva"];

console.log(lista_frutas);
for (let i = 0; i < lista_frutas.length; i++) {
  console.log(lista_frutas[i]);
}

document.getElementById("titulo").innerHTML = lista_frutas[0];
for (let i = 0; i < lista_frutas.length; i++) {
  document.getElementById("mercado").innerHTML +=
    "<li>" + lista_frutas[i] + "</li>";
}

const lista_produtos = [
  {
    nome: "Celular",
    preco: 2000,
    categoria: "Eletrônicos",
  },
  {
    nome: "Tablet",
    preco: 3000,
    categoria: "Eletrônicos",
  },
  {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
  },
];
