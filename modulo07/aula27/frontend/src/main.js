const btnSubmit = document.querySelector("#fsubmit")
const btnSubmit2 = document.querySelector("#fsubmit2")

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const numeroMatricula = document.querySelector("#fnumeromatricula").value
    const nome = document.querySelector("#fnome").value
    const ramal = document.querySelector("#framal").value
    const email = document.querySelector("#femail").value
    const setor = document.querySelector("#fsetor").value
    const dataNascimento = document.querySelector("#fdatanascimento").value

    const funcionario = {
        numeroMatricula,
        nome,
        ramal,
        email,
        setor,
        dataNascimento,
    }


    fetch("http://localhost:3030/adicionar", {
        method: "POST",
        body: JSON.stringify(funcionario),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
})

function imprimirResultado(funcionario) {
    document.querySelector("h3").innerHTML = ``
    for (let i = 0; i < funcionario.length; i++) {
        document.querySelector("h3").innerHTML += `
            Nome: ${funcionario[i].nome} <br /> 
            Numero de Matrícula: ${funcionario[i].numeroMatricula} <br /> 
            Ramal: ${funcionario[i].ramal} <br /> 
            Email: ${funcionario[i].email} <br /> 
            Setor: ${funcionario[i].setor} <br /> 
            Data de Nascimento: ${funcionario[i].dataNascimento} <br />
            <br /> 
        `

    }
}

btnSubmit2.addEventListener("click", (event) => {
    event.preventDefault();
    const tipoRequisicao = document.querySelector('input[name="fradiofiltro"]:checked').value;
    if (tipoRequisicao == "aniversario") {
        const valorRequisicao = document.querySelector("#faniversario").value
        const apiURL = `http://localhost:3030/aniversario/${valorRequisicao}`
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                imprimirResultado(data)
            })
    }

    if (tipoRequisicao == "setor") {
        const valorRequisicao = document.querySelector("#fsetorfiltro").value
        const apiURL = `http://localhost:3030/setor/${valorRequisicao}`

        console.log(valorRequisicao, apiURL)
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                imprimirResultado(data)
            })
    }

    if (tipoRequisicao == "ramal") {
        const apiURL = `http://localhost:3030/ramais`

        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                imprimirResultado(data)
            })
    }

})