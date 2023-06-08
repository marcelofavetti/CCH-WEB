// script.js
function enviarFormulario(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  // Lógica para enviar o formulário ou processar os dados

  // Exemplo de exibição de mensagem de sucesso
  alert(`Formulário enviado com sucesso para o e-mail: ${email}`);
  emailInput.value = "";
}
