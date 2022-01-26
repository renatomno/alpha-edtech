const express = require('express');
const { aniversariantes } = require('./modules/aniversariantes');
const { funcionariosPorSetor } = require('./modules/setores')
const { listaRamalOrdenada } = require('./modules/listaRamalOrdenada')
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


app.post("/adicionar", (request, response) => {
    const funcionario = request.body
    const listaFuncionarios = JSON.parse(fs.readFileSync("./db.json"))
    listaFuncionarios.listaFuncionarios.push(funcionario)

    fs.writeFileSync("./db.json", JSON.stringify(listaFuncionarios))
    response.status(201).send()
})

app.listen(3030, () => {
    console.log("Servidor rodando na porta 3030")
})
