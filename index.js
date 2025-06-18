/* -------------------------Config do Server-------------------------- */

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

/* ------------------------------------------------------------------- */

/* ---------------Importar Operações-------------- */
/* Copiar o Código abaixo dando um nome a Constante e especificando o caminho da Operação (Arquivo.js) para importar novas Operações */

const subtrair = require('./operacoes/subtracao');
const multiplicar = require('./operacoes/mutiplicacao');

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
    } if(operacao === 'multiplicacao') {
        resultado = multiplicar(valor1, valor2);
        simbolo = '*';
    } else {
        return res.status(400).json({ erro: 'Operação não suportada' });
    }
    
    /* --------------------------------------------------------------- */ 

    res.json({ resultado, simbolo });
});

/* ------------------------------------------------------------------- */