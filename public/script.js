document.addEventListener('DOMContentLoaded', () => {

    /* Clique dos Botões e Campos que serão Alterados (Resultado e Operador) */
    const botoes = document.querySelectorAll('.botoes button');
    const resultadoDiv = document.querySelector('.resultado h1');
    const operadorDiv = document.getElementById('op');

    /* Evento de Click nos botões de Operação */
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {

            /* Valor dos Inputs*/
            const inputs = document.querySelectorAll('input[type="number"]');
            const valor1 = parseFloat(inputs[0].value);
            const valor2 = parseFloat(inputs[1].value);

            /* Obriga o Usuário a inserir 2 Valores */
            if (isNaN(valor1) || isNaN(valor2)) {
                alert('Por favor, preencha os dois valores!');
                return;
            }

            let operacao = '';

            /* IF Responsável por chamar a Operação correspondente ao Botão de Subtração */
            /* Copiar o IF abaixo para adição de novas Operações (alterando a Operação "Nome do Arquivo.js") */
            if (botao.textContent === '-') {
                operacao = 'subtracao';
            } else {
                alert('Essa operação ainda não foi implementada!');
                return;
            }

            /* Parte Responsável por enviar os dados obtidos (Valores dos Inputs e a Operação Selecionada) para o index.js */
            fetch('/calcular', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ valor1, valor2, operacao })
            })
            .then(response => response.json())
            .then(data => {
                resultadoDiv.textContent = data.resultado;
                operadorDiv.textContent = data.simbolo;
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        });
    });
});
