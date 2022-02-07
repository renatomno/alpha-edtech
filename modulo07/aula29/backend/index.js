const express = require('express');
const { aniversariantes } = require('./modules/aniversariantes');
const { funcionariosPorSetor } = require('./modules/setores')
const { listaRamalOrdenada } = require('./modules/listaRamalOrdenada')
const { Calculadora } = require('./modules/calculadora')
const path = require('path')
const fs = require('fs');
const cors = require("cors");

const app = express();
const configCors = {
    origin: "*",
    Credential: true,
    optionSuccessStatus: 200
};

app.use(cors(configCors));

app.use(express.json());

//Recurso checar os aniversariantes do mês
//Entradas esperadas: Números inteiros de 1 até 12
app.get("/aniversario/:mes", (request, response) => {
    const { mes } = request.params
    response.send(aniversariantes(mes))
})

//Recurso checar lista de funcionários
//Entradas esperadas: "operacional", "financeiro", "administrativo" e "comercial"
app.get("/setor/:setor", (request, response) => {
    const { setor } = request.params;
    response.send(funcionariosPorSetor(setor))
})

//Recurso lista de ramais em ordem alfabética
app.get("/ramais", (request, response) => {
    response.send(listaRamalOrdenada())
})

//Recurso para adicionar um funcionário
app.post("/adicionar", (request, response) => {
    const funcionario = request.body
    const listaFuncionarios = JSON.parse(fs.readFileSync("./db.json"))
    listaFuncionarios.listaFuncionarios.push(funcionario)

    fs.writeFileSync("./db.json", JSON.stringify(listaFuncionarios))
    response.status(201).send()
})

//Recurso para receber os parâmetros da Calculadora
app.post("/resolucao", (request, response) => {
    const { operand1, operand2, operation } = request.body;
    const result = Calculadora(operand1, operand2, operation).getResult()
    response.send(JSON.stringify(result))
})

//Recurso para mostrar a página de funcionários
app.get("/funcionarios", (request, response) => {
    response.sendFile(path.join(__dirname, '../frontend/src/pages/funcionarios/index.html'))
})
//Recurso para mostrar a página de calculadora
app.get("/calculadora", (request, response) => {
    response.sendFile(path.join(__dirname, '../frontend/src/pages/calculadora/index.html'))
})
app.listen(3030, () => {
    console.log("Servidor rodando na porta 3030")
})
