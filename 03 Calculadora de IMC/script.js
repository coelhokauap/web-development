// // Criar uma Variável
// let nome =  window.prompt("Digite o Seu Nome: ");
// let idade = window.prompt("Digite a Sua Idade: ");
// //          entidade.metodo(parametro, parametro).propriedade()
// let nova_idade = idade + 1;

// // Frase
// console.log("Olá, Meu Nome é " + nome);

// // DOM
// let nome = document.getElementById("txtNome").value;

// const btn_escreve = document.getElementById("btn_alerta");
// // Evento de Clique no Botão, Função - Criando uma Função
// btn_escreve.addEventListener("click", () => {
//   // btn_escreve.addEventListener("click", FUNCTION);
//   let nome = document.getElementById("txt_nome").value;
//   document.getElementById("titulo_nome").innerHTML = "Olá, Meu Nome é " + nome;
//   let idade = document.getElementById("txt_idade").value;
//   document.getElementById("titulo_idade").innerHTML =
//     "Olá, Minha Idade é " + idade;

const btn_calcula = document.getElementById("btn_calcula");
btn_calcula.addEventListener("click", () => {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let imc = weight / (height * height);

  document.getElementById("titulo_imc").innerHTML = "IMC - " + imc.toFixed(2);

  let classificacao = "";
  const cor_classificacao = document.getElementById("titulo_classificacao");

  if (imc >= 30) {
    classificacao = "Obesidade";
    cor_classificacao.style.color = "red";
  } else if (imc >= 25 && imc < 30) {
    classificacao = "Sobrepeso";
    cor_classificacao.style.color = "darkgoldenrod";
  } else if (imc >= 18.5 && imc < 25) {
    classificacao = "Peso Normal";
    cor_classificacao.style.color = "green";
  } else {
    classificacao = "Abaixo do Peso";
    cor_classificacao.style.color = "blue";
  }
  document.getElementById("titulo_classificacao").innerHTML = classificacao;
});
