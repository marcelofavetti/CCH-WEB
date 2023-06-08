// script.js
function enviarFormulario(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  // Lógica para enviar o formulário ou processar os dados
  const nomeInput = document.getElementById("nome");
  const nome = nomeInput.value;

  const tipoServicoSelect = document.getElementById("tipo-servico");
  const tipoServico = tipoServicoSelect.value;

  const metrosQuadradosInput = document.getElementById("metros-quadrados");
  const metrosQuadrados = metrosQuadradosInput.value;

  // Validar a quantidade de metros quadrados
  if (metrosQuadrados <= 0) {
    alert("A quantidade de metros quadrados deve ser maior que zero.");
    return; // Encerrar a função se a validação falhar
  }

  const corDesejadaInput = document.getElementById("cor-desejada");
  const corDesejada = corDesejadaInput.value;

  const dadosFormulario = {
    email: email,
    nome: nome,
    tipoServico: tipoServico,
    metrosQuadrados: metrosQuadrados,
    corDesejada: corDesejada,
  };

  // Lógica do orçamento
  const valorServico = 100; // Valor do serviço de pintura por metro quadrado

  const valorEstimadoServico = valorServico * metrosQuadrados;

  // Exibição do orçamento
  const mensagem = `Orçamento:
  Nome: ${nome}
  E-mail: ${email}
  Tipo de Serviço: ${tipoServico}
  Metros Quadrados: ${metrosQuadrados}
  Cor Desejada: ${corDesejada}
  
  Valor Estimado de Serviço: R$ ${valorEstimadoServico.toFixed(2)}`;

  // Simulação do envio do formulário
  console.log("Dados do formulário:", dadosFormulario);

  // Exibição da mensagem de envio para análise
  alert(
    `Formulário enviado para análise. Retornaremos para o e-mail: ${email}`
  );

  // Limpar campos do formulário
  emailInput.value = "";
  nomeInput.value = "";
  tipoServicoSelect.value = "";
  metrosQuadradosInput.value = "";
  corDesejadaInput.value = "";
}

function redirect(path) {
  window.location.href = path;
}
