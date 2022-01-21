function funcionariosPorSetor(setor) {
    const listaFuncionarios = require("../db.js").listaFuncionarios
    return listaFuncionarios.filter((funcionario) => funcionario.setor == setor)
}

module.exports = {
    funcionariosPorSetor,
}