//Inicialização do tabuleiro
var matrizTabuleiro = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//Controle do jogador (true == O; false == X)
var vezJogador = true
//Controlador vencedor (false == ninguém venceu; true == alguem venceu)
var vencedor = false
//Recuperando casas e textos das casas
const casa = document.querySelectorAll(".casa")
const casaTexto = document.querySelectorAll(".texto")
//Listeners para as casas jogáveis
for (let i = 0; i < casa.length; i++) {
    casa[i].addEventListener("click", () => {
        if (casaTexto[i].innerHTML == '' && vencedor == false) {
            casaTexto[i].innerHTML = `${movimentoJogador(vezJogador)}`
            aplicarNaMatriz(i)
            casa[i].classList.remove("hover--efeito")
            vezJogador = !vezJogador
            checarVencedor()
        }
    })
}
//Resetar o Jogo
btnReset = document.querySelector(".reset")
btnReset.addEventListener("click", resetarJogo)
//Resolve qual movimento será aplicado no tabuleiro de acordo com
//a vez do jogador
function movimentoJogador(vezJogador) {
    let movimento = 0
    if (vezJogador == true) {
        movimento = "O"
    } else {
        movimento = "X"
    }
    return movimento;
}
//Aplica o texto do tabuleiro em uma Matriz
function aplicarNaMatriz(num) {
    if (num == 0) {
        vezJogador == true ? matrizTabuleiro[0][0] = 'O' : matrizTabuleiro[0][0] = 'X'
    }
    if (num == 1) {
        vezJogador == true ? matrizTabuleiro[0][1] = 'O' : matrizTabuleiro[0][1] = 'X'
    }
    if (num == 2) {
        vezJogador == true ? matrizTabuleiro[0][2] = 'O' : matrizTabuleiro[0][2] = 'X'
    }
    if (num == 3) {
        vezJogador == true ? matrizTabuleiro[1][0] = 'O' : matrizTabuleiro[1][0] = 'X'
    }
    if (num == 4) {
        vezJogador == true ? matrizTabuleiro[1][1] = 'O' : matrizTabuleiro[1][1] = 'X'
    }
    if (num == 5) {
        vezJogador == true ? matrizTabuleiro[1][2] = 'O' : matrizTabuleiro[1][2] = 'X'
    }
    if (num == 6) {
        vezJogador == true ? matrizTabuleiro[2][0] = 'O' : matrizTabuleiro[2][0] = 'X'
    }
    if (num == 7) {
        vezJogador == true ? matrizTabuleiro[2][1] = 'O' : matrizTabuleiro[2][1] = 'X'
    }
    if (num == 8) {
        vezJogador == true ? matrizTabuleiro[2][2] = 'O' : matrizTabuleiro[2][2] = 'X'
    }
}
//Checa se a última jogada fez algum jogador vencer
function checarVencedor() {
    for (let i = 0; i < 3; i++) {
        if (matrizTabuleiro[i][0] == matrizTabuleiro[i][1] && matrizTabuleiro[i][0] == matrizTabuleiro[i][2]) {
            declararVencedor("linha", i)
        }
        if (matrizTabuleiro[0][i] == matrizTabuleiro[1][i] && matrizTabuleiro[0][i] == matrizTabuleiro[2][i]) {
            declararVencedor("coluna", i)
        }
    }

    if (matrizTabuleiro[0][0] == matrizTabuleiro[1][1] && matrizTabuleiro[0][0] == matrizTabuleiro[2][2]) {
        declararVencedor("diagonal", 3)
    }

    if (matrizTabuleiro[0][2] == matrizTabuleiro[1][1] && matrizTabuleiro[0][2] == matrizTabuleiro[2][0]) {
        declararVencedor("diagonal", 4)
    }

}
//Caso tenha um vencedor, declara sua vitória
function declararVencedor(tipoVitoria, num) {
    if (vezJogador == false) {
        document.querySelector(".vencedor").innerHTML = `JOGADOR O GANHOU`
        vencedor = true
    } else {
        document.querySelector(".vencedor").innerHTML = `JOGADOR X GANHOU`
        vencedor = true
    }

    if (tipoVitoria == "linha") {
        if (num == 0) {
            casa[0].classList.add("casa--vitoriosa")
            casa[1].classList.add("casa--vitoriosa")
            casa[2].classList.add("casa--vitoriosa")
        }
        if (num == 1) {
            casa[3].classList.add("casa--vitoriosa")
            casa[4].classList.add("casa--vitoriosa")
            casa[5].classList.add("casa--vitoriosa")
        }
        if (num == 2) {
            casa[6].classList.add("casa--vitoriosa")
            casa[7].classList.add("casa--vitoriosa")
            casa[8].classList.add("casa--vitoriosa")
        }
    }

    if (tipoVitoria == "coluna") {
        if (num == 0) {
            casa[0].classList.add("casa--vitoriosa")
            casa[3].classList.add("casa--vitoriosa")
            casa[6].classList.add("casa--vitoriosa")
        }
        if (num == 1) {
            casa[1].classList.add("casa--vitoriosa")
            casa[4].classList.add("casa--vitoriosa")
            casa[7].classList.add("casa--vitoriosa")
        }
        if (num == 2) {
            casa[2].classList.add("casa--vitoriosa")
            casa[5].classList.add("casa--vitoriosa")
            casa[8].classList.add("casa--vitoriosa")
        }
    }

    if (tipoVitoria == "diagonal") {
        if (num == 3) {
            casa[0].classList.add("casa--vitoriosa")
            casa[4].classList.add("casa--vitoriosa")
            casa[8].classList.add("casa--vitoriosa")
        }
        if (num == 4) {
            casa[2].classList.add("casa--vitoriosa")
            casa[4].classList.add("casa--vitoriosa")
            casa[6].classList.add("casa--vitoriosa")
        }
    }

    //retira o hover das classes não ocupadas caso já seja 
    //encontrado um vencedor
    for (let i = 0; i < casa.length; i++) {
        casa[i].classList.remove("hover--efeito")
    }

}
//Reseta o jogo
function resetarJogo() {
    matrizTabuleiro = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    vencedor = false
    vezJogador = true

    document.querySelector(".vencedor").innerHTML = ''

    for (let i = 0; i < casa.length; i++) {
        casa[i].classList.remove("casa--vitoriosa")
        casa[i].classList.add("hover--efeito")

        casaTexto[i].innerHTML = ''
    }
}