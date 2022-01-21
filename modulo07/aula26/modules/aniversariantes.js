function aniversariantes(mes) {
    const listaFuncionarios = require('../db.js').listaFuncionarios
    return listaFuncionarios.filter((funcionario) => funcionario.dataNascimento.getMonth() == mes - 1)
}

module.exports = {
    aniversariantes
}
