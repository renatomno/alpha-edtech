const btnMais = document.querySelector("#btn-aumentar")
const btnMenos = document.querySelector("#btn-diminuir")
const texto = document.querySelector(".historia")

function alteraTamanho(valorMudanca) {
    //tamanho original de fonte da tag span
    var tamanhoFonte = 16
    return {
        aumentar: () => {
            tamanhoFonte += valorMudanca
            texto.style.fontSize = `${tamanhoFonte}px`
        },
        diminuir: () => {
            tamanhoFonte -= valorMudanca
            texto.style.fontSize = `${tamanhoFonte}px`
        }
    }
}

const mudancaTamanho = alteraTamanho(1)

btnMais.addEventListener("click", () => {
    mudancaTamanho.aumentar()
})

btnMenos.addEventListener("click", () => {
    mudancaTamanho.diminuir()
})