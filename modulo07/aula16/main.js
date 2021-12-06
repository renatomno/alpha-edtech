//Classe criadora de carros
class Carro {
    constructor(raridade, velocidadeMaxima, velocidadeMinima, derrapagem) {
        this.raridade = raridade;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeMininma = velocidadeMinima;
        this.derrapagem = derrapagem;
        this.velocidadeMedia = Math.floor(Math.random() * (this.velocidadeMaxima - this.velocidadeMinima)) + this.velocidadeMinima * (100 - this.derrapagem) / 100
        this.vitorias = 0
    }

    venceuCorrida() {
        this.vitorias += 1;
    }

    recalculaVelocidadeMedia() {
        this.velocidadeMedia = Math.floor(Math.random() * (this.velocidadeMaxima - this.velocidadeMinima)) + this.velocidadeMinima * (100 - this.derrapagem) / 100
    }
}

//Arrays globais que guardam os carros de cada jogador
var carrosPedro = [];
var carrosJuca = [];
var carrosEdna = [];

//Variáveis globais que guardam o index ativo do carro de cada jogador
var indexPedro
var indexJuca
var indexEdna

//########Listener e funções para as corridas########
//Listener do botão submit
const btnSubmit = document.querySelector("#fsubmit")
btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    //Define a quantidade de voltas que a corrida terá
    let quantidadeDeVoltas = definirVoltas()

    //Define quais carros serão usados na corrida
    definirCarroAtivo()

    //Realiza as voltas da corrida
    realizarCorridas(quantidadeDeVoltas)

    //Imprime o vencedor no HTML
    anunciarVitoria()

    //Reseta as vitórias de cada jgoador para uma próxima partida
    resetaVitorias()
})

//Define a quantidade de voltas que a corrida terá
function definirVoltas() {
    if (document.querySelector('input[name="tipo__corrida"]:checked').value == "personalizada") {
        var quantidadeDeVoltas = document.querySelector("#fnumpersonalizada").valueAsNumber
    } else {
        var quantidadeDeVoltas = parseInt(document.querySelector('input[name="tipo__corrida"]:checked').value)
    }

    return quantidadeDeVoltas
}

//Define qual carro foi escolhido
function definirCarroAtivo() {
    indexPedro = parseInt(document.querySelector('input[name="carro--pedro"]:checked').value)
    indexJuca = parseInt(document.querySelector('input[name="carro--juca"]:checked').value)
    indexEdna = parseInt(document.querySelector('input[name="carro--edna"]:checked').value)
}

//Realiza a corrida
function realizarCorridas(quantidadeDeVoltas) {
    for (let i = 0; i < quantidadeDeVoltas; i++) {
        if (carrosPedro[indexPedro].velocidadeMedia > carrosJuca[indexJuca].velocidadeMedia && carrosPedro[indexPedro].velocidadeMedia > carrosEdna[indexEdna].velocidadeMedia) {
            carrosPedro[indexPedro].venceuCorrida()

        }
        if (carrosJuca[indexJuca].velocidadeMedia > carrosPedro[indexPedro].velocidadeMedia && carrosJuca[indexJuca].velocidadeMedia > carrosEdna[indexEdna].velocidadeMedia) {
            carrosJuca[indexJuca].venceuCorrida()

        }
        if (carrosEdna[indexEdna].velocidadeMedia > carrosJuca[indexJuca].velocidadeMedia && carrosEdna[indexEdna].velocidadeMedia > carrosPedro[indexPedro].velocidadeMedia) {
            carrosEdna[indexEdna].venceuCorrida()

        }
        carrosPedro[indexPedro].recalculaVelocidadeMedia()
        carrosJuca[indexJuca].recalculaVelocidadeMedia()
        carrosEdna[indexEdna].recalculaVelocidadeMedia()

    }
}

//Imprime o vencedor no HTML
function anunciarVitoria() {
    if (carrosPedro[indexPedro].vitorias > carrosJuca[indexJuca].vitorias && carrosPedro[indexPedro].vitorias > carrosEdna[indexEdna].vitorias) {
        document.querySelector(".vencedor").textContent = `Vitoria do Pedro com ${carrosPedro[indexPedro].vitorias} voltas vencidas!`
        document.querySelector(".ranking").textContent = `Juca venceu ${carrosJuca[indexJuca].vitorias} voltas e Edna venceu ${carrosEdna[indexEdna].vitorias} voltas!`

    }
    if (carrosJuca[indexJuca].vitorias > carrosPedro[indexPedro].vitorias && carrosJuca[indexJuca].vitorias > carrosEdna[indexEdna].vitorias) {
        document.querySelector(".vencedor").textContent = `Vitoria do Juca com ${carrosJuca[indexJuca].vitorias} voltas vencidas!`
        document.querySelector(".ranking").textContent = `Pedro venceu ${carrosPedro[indexPedro].vitorias} voltas e Edna venceu ${carrosEdna[indexEdna].vitorias} voltas!`

    }
    if (carrosEdna[indexEdna].vitorias > carrosJuca[indexJuca].vitorias && carrosEdna[indexEdna].vitorias > carrosPedro[indexPedro].vitorias) {
        document.querySelector(".vencedor").textContent = `Vitoria da Edna com ${carrosEdna[indexEdna].vitorias} voltas vencidas!`
        document.querySelector(".ranking").textContent = `Pedro venceu ${carrosPedro[indexPedro].vitorias} voltas e Juca venceu ${carrosJuca[indexJuca].vitorias} voltas!`

    }
}

function resetaVitorias() {
    carrosPedro[indexPedro].vitorias = 0
    carrosJuca[indexJuca].vitorias = 0
    carrosEdna[indexEdna].vitorias = 0
}


//########Listener e funções para o sorteio dos Carros########
//Listener do botão sortear carros
const btnSorteio = document.querySelector("#fsorteio")
btnSorteio.addEventListener("click", (event) => {
    event.preventDefault();

    //Esvazia os arrays caso queira sortear de novo
    carrosPedro = [];
    carrosJuca = [];
    carrosEdna = [];
    construirCarros();
    imprimirCarros();
})

//Constroi carros e inserem no array de seu dono
function construirCarros() {
    for (let i = 0; i < 16; i++) {
        let raridade = definirRaridade();
        let carro = new Carro

        if (raridade == "Popular") {
            carro.raridade = "Popular";
            carro.velocidadeMaxima = Math.floor(Math.random() * (201 - 180)) + 180
            carro.velocidadeMinima = Math.floor(Math.random() * (131 - 110)) + 110
            carro.derrapagem = Math.floor(Math.random() * (5 - 3)) + 3
            carro.velocidadeMedia = Math.floor(Math.random() * (carro.velocidadeMaxima - carro.velocidadeMinima)) + carro.velocidadeMinima * (100 - carro.derrapagem) / 100
        }

        if (raridade == "Sport") {
            carro.raridade = "Sport";
            carro.velocidadeMaxima = Math.floor(Math.random() * (216 - 195)) + 195
            carro.velocidadeMinima = Math.floor(Math.random() * (146 - 125)) + 125
            carro.derrapagem = Math.floor(Math.random() * (4 - 2)) + 2
            carro.velocidadeMedia = Math.floor(Math.random() * (carro.velocidadeMaxima - carro.velocidadeMinima)) + carro.velocidadeMinima * (100 - carro.derrapagem) / 100

        }

        if (raridade == "Super Sport") {
            carro.raridade = "Super Sport";
            carro.velocidadeMaxima = Math.floor(Math.random() * (231 - 210)) + 210
            carro.velocidadeMinima = Math.floor(Math.random() * (161 - 140)) + 140
            carro.derrapagem = parseFloat((Math.random() * (1.75 - 1) + 1).toFixed(2))
            carro.velocidadeMedia = Math.floor(Math.random() * (carro.velocidadeMaxima - carro.velocidadeMinima)) + carro.velocidadeMinima * (100 - carro.derrapagem) / 100

        }

        if (i >= 0 && i <= 5) {
            carrosPedro.push(carro)
        }
        else if (i >= 6 && i <= 10) {
            carrosJuca.push(carro)
        }
        else {
            carrosEdna.push(carro)
        }
    }
}
//sorteia raridade do carro
function definirRaridade() {
    let sorteioRaridade = Math.floor(Math.random() * 100) + 1

    if (sorteioRaridade >= 1 && sorteioRaridade <= 60) {
        return "Popular"
    }
    else if (sorteioRaridade >= 61 && sorteioRaridade <= 95) {
        return "Sport"
    }
    else {
        return "Super Sport"
    }
}
//Imprime os carros no HTML
function imprimirCarros() {
    const cardsPedro = document.querySelectorAll(".card__pedro")
    const cardsJuca = document.querySelectorAll(".card__juca")
    const cardsEdna = document.querySelectorAll(".card__edna")
    for (let i = 0; i < 5; i++) {
        cardsPedro[i].querySelector(".card__raridade").textContent = carrosPedro[i].raridade
        cardsPedro[i].querySelector(".card__velomax").textContent = carrosPedro[i].velocidadeMaxima
        cardsPedro[i].querySelector(".card__velomin").textContent = carrosPedro[i].velocidadeMinima
        cardsPedro[i].querySelector(".card__derrapagem").textContent = carrosPedro[i].derrapagem

        cardsJuca[i].querySelector(".card__raridade").textContent = carrosJuca[i].raridade
        cardsJuca[i].querySelector(".card__velomax").textContent = carrosJuca[i].velocidadeMaxima
        cardsJuca[i].querySelector(".card__velomin").textContent = carrosJuca[i].velocidadeMinima
        cardsJuca[i].querySelector(".card__derrapagem").textContent = carrosJuca[i].derrapagem

        cardsEdna[i].querySelector(".card__raridade").textContent = carrosEdna[i].raridade
        cardsEdna[i].querySelector(".card__velomax").textContent = carrosEdna[i].velocidadeMaxima
        cardsEdna[i].querySelector(".card__velomin").textContent = carrosEdna[i].velocidadeMinima
        cardsEdna[i].querySelector(".card__derrapagem").textContent = carrosEdna[i].derrapagem

    }
}