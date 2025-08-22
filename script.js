document.getElementById('formLogin').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  const msg = document.getElementById('msg');

  // Exemplo de login e senha corretos
  const loginCorreto = 'admin';
  const senhaCorreta = '1234';

  if (user === loginCorreto && pass === senhaCorreta) {
    msg.style.color = 'green';
    msg.textContent = 'Login bem-sucedido!';
    // Aqui você poderia redirecionar, ex: window.location.href = 'pagina.html';
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

