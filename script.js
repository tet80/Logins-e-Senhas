const usuarios = [
  { usuario: "Cintia", senha: "1234" },
  { usuario: "Naty", senha: "1234" },
  { usuario: "Tete", senha: "1234" }
];

const formLogin = document.getElementById("formLogin");
const user = document.getElementById("user");
const pass = document.getElementById("pass");
const msg = document.getElementById("msg");

formLogin.onsubmit = (e) => {
  e.preventDefault();
  const u = user.value;
  const p = pass.value;

  const ok = usuarios.some(({ usuario, senha }) => u === usuario && p === senha);

  msg.textContent = ok ? "✅ Login realizado com sucesso!" : "❌ Usuário ou senha incorretos.";
  msg.style.color = ok ? "green" : "red";
};
