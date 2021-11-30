let submitBtn = document.querySelector("#fsubmit")
let frase = "Eu não gritarei “Fogo” em uma sala de aula cheia"
let cont = 0

submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    let qtdFrases = document.querySelector("#fnumber").value
    let contWhile = 0

    while (contWhile < qtdFrases % 11) {
        slots = document.querySelectorAll(".slot")
        slots[cont].textContent = `${frase}`
        cont++
        contWhile++
    }

    document.querySelector(".quadros__apagados").textContent = `Quantidade de vezes que o quadro foi apagado: ${Math.floor(qtdFrases / 11)}`
    document.querySelector(".linhas__escritas").textContent = `Quantas linhas foram escritas na última interação: ${qtdFrases % 11}`
})