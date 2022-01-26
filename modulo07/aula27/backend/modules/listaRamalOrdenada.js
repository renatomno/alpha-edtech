const fs = require('fs');

function listaRamalOrdenada() {
    const { listaFuncionarios } = JSON.parse(fs.readFileSync("./db.json"))
    return listaFuncionarios.sort((a, b) => (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0));

}


module.exports = {
    listaRamalOrdenada,
}