<script>
document.getElementById('formLogin').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  const msg = document.getElementById('msg');

  // Lista de usuários válidos com suas senhas
  const usuarios = [
    { username: 'Naty', senha: '1234' },
    { username: 'Cintia', senha: '1234' },
    { username: 'Ialo', senha: '1234' }
  ];

  // Verifica se há algum usuário com o login e senha informados
  const usuarioValido = usuarios.find(u => u.username === user && u.senha === pass);

  if (usuarioValido) {
    msg.style.color = 'green';
    msg.textContent = 'Login bem-sucedido!';
    // Redirecionamento opcional:
    // window.location.href = 'pagina.html';
  } else {
    msg.style.color = 'red';
    msg.textContent = 'Usuário ou senha incorretos!';

    // Limpa os campos
    document.getElementById('user').value = '';
    document.getElementById('pass').value = '';

    // Coloca o foco de volta no campo de usuário
    document.getElementById('user').focus();
  }
});
</script>

