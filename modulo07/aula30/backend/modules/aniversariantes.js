const fs = require('fs');


function aniversariantes(mes) {
    const { listaFuncionarios } = JSON.parse(fs.readFileSync("./db.json"))
    if (mes.length == 1) {
        mes = "0" + mes
    }

    const listaFuncionariosFiltrada = listaFuncionarios.filter(funcionario =>
        funcionario.dataNascimento.split('-')[1] == mes
    )
    return listaFuncionariosFiltrada
}

module.exports = {
    aniversariantes
}
