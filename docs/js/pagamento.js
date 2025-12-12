const metodo = document.getElementById("metodoPagamento");
const cartao = document.getElementById("cartao");
const pix = document.getElementById("pix");
const boleto = document.getElementById("boleto");

metodo.addEventListener("change", () => {
  cartao.classList.add("oculto");
  pix.classList.add("oculto");
  boleto.classList.add("oculto");

  if (metodo.value === "cartao") cartao.classList.remove("oculto");
  if (metodo.value === "pix") pix.classList.remove("oculto");
  if (metodo.value === "boleto") boleto.classList.remove("oculto");
});

document.getElementById("formPagamento").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🎉 Pagamento confirmado! Obrigado pela compra.");
});
