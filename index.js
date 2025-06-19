/* -------------------------Config do Server-------------------------- */

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

/* ------------------------------------------------------------------- */

/* ---------------Importar Operações-------------- */
/* Copiar o Código abaixo dando um nome a Constante e especificando o caminho da Operação (Arquivo.js) para importar novas Operações */

const subtrair = require('./operacoes/subtracao');
const multiplicar = require('./operacoes/mutiplicacao');
const dividir = require('./operacoes/divisao');
const adcao = require('./operacoes/adcao');
/* ----------------------------------------------- */

/* -------------------------Lógica das Funções------------------------ */

/* Obtem os Valores e Operação resgatadas no script.js e realiza a Operação necessária */
app.post('/calcular', (req, res) => {
    const { valor1, valor2, operacao } = req.body;

    let resultado;
    let simbolo;

    /* Copiar o IF abaixo (Mudando a Operação = Arquivo.js, Resultado = Constante definida anteriormente e Símbolo) para adição de novas Operações */

    if (operacao === 'subtracao') {
        resultado = subtrair(valor1, valor2);
        simbolo = '-';
    } else if(operacao === 'multiplicacao') {
        resultado = multiplicar(valor1, valor2);
        simbolo = '*';
    } else if(operacao === 'divisao') {
        resultado = dividir(valor1, valor2);
        simbolo = '/';
    } else if(operacao === 'adcao'){
        resultado = adcao(valor1, valor2);
        simbolo = '+'
    }
    else {
        return res.status(400).json({ erro: 'Operação não suportada' });
    }
    
    /* --------------------------------------------------------------- */ 

    res.json({ resultado, simbolo });
});

/* ------------------------------------------------------------------- */

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
