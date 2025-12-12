// 🌙 Modo Escuro
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

// Carregar preferência salva
if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Modo Claro";
}

// Alternar modo
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");

  toggleButton.textContent = isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro";
  localStorage.setItem("dark-mode", isDark);
});

// 📩 Formulário de Contato
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Criar aviso
  const aviso = document.createElement("div");
  aviso.classList.add("aviso-sucesso");
  aviso.textContent = "Mensagem enviada com sucesso! 💜";

  document.body.appendChild(aviso);

  // Remover aviso depois de 2 segundos
  setTimeout(() => {
    aviso.remove();
  }, 2000);

  // Limpar formulário
  formulario.reset();
});

// 🎯 Scroll suave no menu
document.querySelectorAll("nav a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute("href"));
    alvo.scrollIntoView({ behavior: "smooth" });
  });
});
