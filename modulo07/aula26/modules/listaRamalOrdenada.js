function listaRamalOrdenada() {
    const listaFuncionarios = require('../db.js').listaFuncionarios
    return listaFuncionarios.sort((a, b) => (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0));
}

module.exports = {
    listaRamalOrdenada,
}