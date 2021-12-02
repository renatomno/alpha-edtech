//Adicione um botão com a função de armazenar os
//números digitados em um vetor na memória
const btnSubmit = document.querySelector("#fsubmit")
var vetorOriginal = []
var vetorInverso = []
var vetorCrescente = []

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    //Alocação do vetor original
    vetorOriginal = salvarVetor()
    imprimeVetor(vetorOriginal, 1)
})

function imprimeVetor(vetor, num) {
    if (num == 1) {
        document.querySelector(".titulo__vetor--original").innerHTML = "Vetor Original"
        document.querySelector(".vetor--original").innerHTML = `${vetor}`
        document.querySelector(".botao--inverso").classList.remove("none")
        document.querySelector(".botao--crescente").classList.remove("none")

    }

    if (num == 2) {
        document.querySelector(".titulo__vetor--inverso").innerHTML = "Vetor Inverso"
        document.querySelector(".vetor--inverso").innerHTML = `${vetor}`
    }
}
//Recupera o valor dos campos de input e transforma em um vetor
function salvarVetor() {
    let numerosForm = document.querySelectorAll(".form__number")
    let numerosVetor = []

    for (let inputNumber of numerosForm) {
        numerosVetor.push(inputNumber.valueAsNumber)
    }

    return numerosVetor
}

//Adicione um botão que reorganize e exiba o vetor ao contrário
const btnInverso = document.querySelector(".botao--inverso")
btnInverso.addEventListener("click", (event) => {
    event.preventDefault();
    vetorInverso = []
    for (let i = 3; i >= 0; i--) {
        vetorInverso.push(vetorOriginal[i])
    }

    imprimeVetor(vetorInverso, 2)
})

