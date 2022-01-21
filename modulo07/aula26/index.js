const express = require('express');
const { aniversariantes } = require('./modules/aniversariantes');
const { funcionariosPorSetor } = require('./modules/setores')
const { listaRamalOrdenada } = require('./modules/listaRamalOrdenada')

const app = express();

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

app.listen(3030, () => {
    console.log("Servidor rodando na porta 3030")
})
