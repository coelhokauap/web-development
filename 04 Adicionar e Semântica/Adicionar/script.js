// Pega o botão
const btn_add_card = document.getElementById("add_card");
// Pega o carrinho
const carrinho = document.getElementById("carrinho");

// Troca o texto do botão (Adicionar -> Comprar)
btn_add_card.innerText = "Comprar";

// Card que será adicionado (HTML)
const card = '<div class="produto"></div>';

// Evento de clique
btn_add_card.addEventListener("click", () => {
  // Adiciona apenas 1 novo card (innerHTML = Adiciona HTML '<div class="produto"></div>')
  carrinho.innerHTML += card;
});

// Pega o botão
const btn_dark = document.getElementById("dark_mode");

// Evento de clique
btn_dark.addEventListener("click", () => {
  // Selecionou o Elemento body
  let corpo = document.querySelector("body");
  // Adiciona Class .dark no body
  corpo.classList.add("dark");
});
