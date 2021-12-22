//Array que terá todos os números sorteados
const numerosSorteados = [];

//Interações botão sortear
const btnSorteio = document.querySelector("#btnSorteio")
btnSorteio.addEventListener("click", (event) => {
    event.preventDefault()
    const h2 = document.querySelector("h2")
    h2.innerHTML = "E os números sorteados foram: "

    //Interval para execução dos sorteios
    const sorteioIntervalado = setInterval(sortearNumero, 1000)
    //Timer para parar os sorteios
    setTimeout(() => {
        clearInterval(sorteioIntervalado)
    }, 6000)
})

//Função sortear número
function sortearNumero() {
    //Numero sorteado
    let numSorteado = Math.floor(Math.random() * 60) + 1
    //Controle caso o número já tenha sido sorteado
    let jaSorteado = false
    //Elemento para renderizar os números sorteados
    let h3 = document.querySelector("h3")

    //Verifica se o número já foi sorteado
    for (let i of numerosSorteados) {
        if (numSorteado == i) {
            jaSorteado = true
        }
    }

    //Condição para o número sorteado
    if (jaSorteado == false) {
        numerosSorteados.push(numSorteado)
        h3.innerHTML += `${numSorteado} `
    } else {
        sortearNumero()
    }
}