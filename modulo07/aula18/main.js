const btnSubmit = document.querySelector("#fsubmit")
const btnJuros = document.querySelector("#fsubmitjuros")
const clientes = []
var clientesNovo = []
var dataHoje = new Date("12/13/2021")

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    var nome = document.querySelector("#fnome").value
    var dataVencimento = document.querySelector("#fdata").value
    var valorCompra = document.querySelector("#fvalor").valueAsNumber
    var obj = {}
    obj["nome"] = nome
    obj["dataVencimento2"] = new Date(dataVencimento)
    obj["dataVencimento"] = dataVencimento
    obj["valor"] = valorCompra
    clientes.push(obj)
    adicionarNaTabela(nome, dataVencimento, valorCompra)
})

function adicionarNaTabela(nome, dataVencimento, valorCompra) {
    tbody = document.querySelector("#tabela__body")

    var trow = document.createElement("tr")

    trow.innerHTML = ` <td>${nome}</td>
                        <td>${dataVencimento}</td>
                        <td>${valorCompra}</td>`

    tbody.appendChild(trow)
}

btnJuros.addEventListener("click", (event) => {
    event.preventDefault()
    clientesNovo = clientes.map((conta) => {
        var diferencaTempo = dataHoje.getTime() - conta.dataVencimento2.getTime()
        var diferencaDias = Math.floor(diferencaTempo / (1000 * 3600 * 24))
        conta["diferencaDias"] = diferencaDias
        conta["valor"] = conta.valor
        conta["novoValor"] = ((diferencaDias + 2) * 0.1 / 100 * conta.valor) + conta.valor
        return conta
    })
    console.log(clientesNovo)
    updateTabela(clientesNovo)
})

function updateTabela(clientesNovo) {
    tbody = document.querySelector("#tabela__body")
    tbody.innerHTML = ""
    for (let i = 0; i < clientesNovo.length; i++) {
        var trow = document.createElement("tr")
        trow.innerHTML = ` <td>${clientesNovo[i].nome}</td>
                            <td>${clientesNovo[i].dataVencimento}</td>
                            <td>${clientesNovo[i].valor}</td>
                            <td>${clientesNovo[i].novoValor}</td>`
        tbody.appendChild(trow)
    }

}