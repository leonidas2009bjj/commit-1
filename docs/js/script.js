// 🌙 Modo escuro
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("dark-mode") === "true") {
  body.classList.toggle("dark-mode");

  toggleButton.textContent = "☀️ Modo Claro";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleButton.textContent = isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro";
  localStorage.setItem("dark-mode", isDark);
});

// 🛍️ Carrinho
const botoes = document.querySelectorAll(".btn-comprar");
const lista = document.getElementById("itensCarrinho");
const totalTexto = document.getElementById("total");
const limpar = document.getElementById("limparCarrinho");
const finalizar = document.getElementById("finalizarCompra");
const toggleCarrinho = document.getElementById("toggleCarrinho");
const painelCarrinho = document.getElementById("painelCarrinho");

let total = 0;

// Criar overlay e aviso
const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

const aviso = document.createElement("div");
aviso.id = "avisoCarrinho";
document.body.appendChild(aviso);

function mostrarAviso(texto) {
  aviso.textContent = texto;
  aviso.style.display = "block";
  setTimeout(() => (aviso.style.display = "none"), 1500);
}

// Adicionar produtos ao carrinho
botoes.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    const produto = e.target.closest(".produto");
    const nome = produto.querySelector("h3").textContent;
    const precoTexto = produto
      .querySelector(".preco")
      .textContent.replace("R$ ", "");
    const preco = parseFloat(precoTexto.replace(",", "."));

    const item = document.createElement("li");
    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    lista.appendChild(item);

    total += preco;
    totalTexto.textContent = `Total: R$ ${total.toFixed(2)}`;

    mostrarAviso("✅ Produto adicionado ao carrinho!");
  });
});

// Limpar carrinho
limpar.addEventListener("click", () => {
  lista.innerHTML = "";
  total = 0;
  totalTexto.textContent = "Total: R$ 0,00";
});

// 💳 Finalizar compra (nova função)
finalizar.addEventListener("click", () => {
  if (lista.children.length === 0) {
    mostrarAviso("⚠️ Seu carrinho está vazio!");
    return;
  }

  // Redireciona para a página de pagamento
  window.open("pagamento.html", "_blank");
});

// Mostrar/ocultar painel
toggleCarrinho.addEventListener("click", () => {
  painelCarrinho.classList.toggle("mostrar");
  overlay.classList.toggle("mostrar");
});

overlay.addEventListener("click", () => {
  painelCarrinho.classList.remove("mostrar");
  overlay.classList.remove("mostrar");
});
