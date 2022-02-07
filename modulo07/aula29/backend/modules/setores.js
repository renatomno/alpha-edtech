const fs = require('fs');


function funcionariosPorSetor(setor) {
    const { listaFuncionarios } = JSON.parse(fs.readFileSync("./db.json"))
    return listaFuncionarios.filter((funcionario) => funcionario.setor == setor)
}


module.exports = {
    funcionariosPorSetor,
}