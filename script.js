function initButton() {
    // Pega o botao "Buscar"
    const botao = document.querySelector("#btnBuscar")

    // Adiciona evento de consulta ao botao
    botao.addEventListener("click", consultaCEP)
}

// Funcao declarada como assincrona para permitir aguardar a resposta da requisicao
async function consultaCEP() {
    // Pega o input do CEP
    const cep = document.querySelector("#cep").value;

    // Bloco de try-catch para interceptar excecoes (erros)
    try {
        // Realiza a requisicao para o viaCEP passando o valor do input do CEP. Usa await para aguardar a resposta
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        // Pega o resultado da consulta
        const data = await response.json();

        // Atualiza campo a campo com os dados da requisicao
        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;
    } catch (err) {
        // Em caso de erro, exibe mensagem de erro
        alert("Erro ao buscar CEP.");
    }
}

// Configura botao na inicializacao
initButton()
