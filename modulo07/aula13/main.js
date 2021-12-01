//Classe carro
class Carro {
    constructor(velocidadeMaxima, velocidadeMinima, derrapagem) {
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeMinima = velocidadeMinima;
        this.derrapagem = derrapagem;
        this.velocidadeMedia = Math.floor((Math.random() * (this.velocidadeMaxima - this.velocidadeMinima) + this.velocidadeMinima) * (100 - this.derrapagem) / 100);
        this.voltasGanhas = 0;
    }

    recalculaVelocidadeMedia() {
        this.velocidadeMedia = (Math.floor(Math.random() * (this.velocidadeMaxima - this.velocidadeMinima) + this.velocidadeMinima)) * (100 - this.derrapagem) / 100;
    }

    voltaGanha() {
        this.voltasGanhas++
    }

    resetarVitorias() {
        this.voltasGanhas = 0;
    }
}

//Carros predefinidos
var carroPedro = new Carro(230, 150, 3)
var carroJuca = new Carro(260, 120, 5)
var carroEdna = new Carro(220, 180, 1)

//Evento que origina toda a aplicação
let btnSubmit = document.querySelector("#fsubmit")
btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    //Definição da quantidade de voltas
    let numeroVoltas = document.querySelector('input[name="corrida"]:checked').value
    if (numeroVoltas == "custom") {
        numeroVoltas = document.querySelector("#fvoltapersonalizada").value
    }

    //Definição do tipo de carro
    let tipoCorrida = document.querySelector('input[name="tipo-carro"]:checked').value
    if (tipoCorrida == "aleatorios") {
        gerarCarrosAleatorios()
    } else {
        gerarCarrosPredefinidos()
    }

    //Realização do processo
    realizarCorrida(numeroVoltas)
    anunciarCarros()
    anunciarVencedor()

    //Reinicia os contadores
    carroPedro.resetarVitorias()
    carroJuca.resetarVitorias()
    carroEdna.resetarVitorias()
})

//Realiza as corridas e recalcula a velocidade média de cada carro
function realizarCorrida(numeroVoltas) {
    for (let i = 0; i < numeroVoltas; i++) {
        if (carroPedro.velocidadeMedia >= carroJuca.velocidadeMedia && carroPedro.velocidadeMedia >= carroEdna.velocidadeMedia) {
            carroPedro.voltaGanha()
        } else if (carroJuca.velocidadeMedia >= carroPedro.velocidadeMedia && carroJuca.velocidadeMedia >= carroEdna.velocidadeMedia) {
            carroJuca.voltaGanha()

        } else if (carroEdna.velocidadeMedia >= carroPedro.velocidadeMedia && carroEdna.velocidadeMedia >= carroJuca.velocidadeMedia) {
            carroEdna.voltaGanha()
        }
        carroPedro.recalculaVelocidadeMedia()
        carroJuca.recalculaVelocidadeMedia()
        carroEdna.recalculaVelocidadeMedia()
    }
}

//Imprime os carros no HTML
function anunciarCarros() {
    document.querySelector(".card__titulo--pedro").innerHTML = `Carro do Pedro`
    document.querySelector(".card__velomin--pedro").innerHTML = `Velocidade mínima : ${carroPedro.velocidadeMinima}`
    document.querySelector(".card__velomax--pedro").innerHTML = `Velocidade máxima : ${carroPedro.velocidadeMaxima}`
    document.querySelector(".card__derrapagem--pedro").innerHTML = `Derrapagem: ${carroPedro.derrapagem}`

    document.querySelector(".card__titulo--juca").innerHTML = `Carro do Juca`
    document.querySelector(".card__velomin--juca").innerHTML = `Velocidade mínima : ${carroJuca.velocidadeMinima}`
    document.querySelector(".card__velomax--juca").innerHTML = `Velocidade máxima : ${carroJuca.velocidadeMaxima}`
    document.querySelector(".card__derrapagem--juca").innerHTML = `Derrapagem: ${carroJuca.derrapagem}`

    document.querySelector(".card__titulo--edna").innerHTML = `Carro da Edna`
    document.querySelector(".card__velomin--edna").innerHTML = `Velocidade mínima : ${carroEdna.velocidadeMinima}`
    document.querySelector(".card__velomax--edna").innerHTML = `Velocidade máxima : ${carroEdna.velocidadeMaxima}`
    document.querySelector(".card__derrapagem--edna").innerHTML = `Derrapagem: ${carroEdna.derrapagem}`

    document.querySelector(".cards__container").classList.remove("none")
}

//Imprime o vencedor no HTML
function anunciarVencedor() {
    //Vitória do Pedro
    if (carroPedro.voltasGanhas > carroJuca.voltasGanhas && carroPedro.voltasGanhas > carroEdna.voltasGanhas) {
        document.querySelector(".ganhador").innerHTML = `O ganhador é o Pedro com ${carroPedro.voltasGanhas} voltas ganhas!`
        document.querySelector(".participantes").innerHTML = `Juca ganhou ${carroJuca.voltasGanhas} voltas e Edna ganhou ${carroEdna.voltasGanhas} voltas!`
        //Vitória do Juca
    } else if (carroJuca.voltasGanhas > carroPedro.voltasGanhas && carroJuca.voltasGanhas > carroEdna.voltasGanhas) {
        document.querySelector(".ganhador").innerHTML = `O ganhador é o Juca com ${carroJuca.voltasGanhas} voltas ganhas!`
        document.querySelector(".participantes").innerHTML = `Pedro ganhou ${carroPedro.voltasGanhas} voltas e Edna ganhou ${carroEdna.voltasGanhas} voltas!`
        //Vitória da Edna
    } else {
        document.querySelector(".ganhador").innerHTML = `A ganhadora é a Edna com ${carroEdna.voltasGanhas} voltas ganhas!`
        document.querySelector(".participantes").innerHTML = `Pedro ganhou ${carroPedro.voltasGanhas} voltas e Juca ganhou ${carroJuca.voltasGanhas} voltas!`
    }
}
//Gera carros aleatórios
function gerarCarrosAleatorios() {
    //Carro aleatório do Pedro
    carroPedro.velocidadeMaxima = Math.floor((Math.random() * 80) + 200)
    carroPedro.velocidadeMinima = Math.floor((Math.random() * 50) + 100);
    carroPedro.derrapagem = (Math.floor((Math.random() * 7) + 1))
    carroPedro.velocidadeMedia = Math.floor((Math.random() * (carroPedro.velocidadeMaxima - carroPedro.velocidadeMinima) + carroPedro.velocidadeMinima) * (100 - carroPedro.derrapagem) / 100);

    //Carro aleatório do Juca
    carroJuca.velocidadeMaxima = Math.floor((Math.random() * 80) + 200)
    carroJuca.velocidadeMinima = Math.floor((Math.random() * 50) + 100);
    carroJuca.derrapagem = (Math.floor((Math.random() * 7) + 1))
    carroJuca.velocidadeMedia = Math.floor((Math.random() * (carroJuca.velocidadeMaxima - carroJuca.velocidadeMinima) + carroJuca.velocidadeMinima) * (100 - carroJuca.derrapagem) / 100);

    //Carro aleatório da Edna
    carroEdna.velocidadeMaxima = Math.floor((Math.random() * 80) + 200)
    carroEdna.velocidadeMinima = Math.floor((Math.random() * 50) + 100);
    carroEdna.derrapagem = (Math.floor((Math.random() * 7) + 1))
    carroEdna.velocidadeMedia = Math.floor((Math.random() * (carroEdna.velocidadeMaxima - carroEdna.velocidadeMinima) + carroEdna.velocidadeMinima) * (100 - carroEdna.derrapagem) / 100);
}
//Redefine os carros para os prédefinidos
function gerarCarrosPredefinidos() {
    //Carro do Pedro
    carroPedro.velocidadeMaxima = 230
    carroPedro.velocidadeMinima = 150
    carroPedro.derrapagem = 5
    carroPedro.velocidadeMedia = Math.floor((Math.random() * (carroPedro.velocidadeMaxima - carroPedro.velocidadeMinima) + carroPedro.velocidadeMinima) * (100 - carroPedro.derrapagem) / 100);

    //Carro do Juca
    carroJuca.velocidadeMaxima = 260
    carroJuca.velocidadeMinima = 120
    carroJuca.derrapagem = 5
    carroJuca.velocidadeMedia = Math.floor((Math.random() * (carroJuca.velocidadeMaxima - carroJuca.velocidadeMinima) + carroJuca.velocidadeMinima) * (100 - carroJuca.derrapagem) / 100);

    //Carro da Edna
    carroEdna.velocidadeMaxima = 220
    carroEdna.velocidadeMinima = 180
    carroEdna.derrapagem = 1
    carroEdna.velocidadeMedia = Math.floor((Math.random() * (carroEdna.velocidadeMaxima - carroEdna.velocidadeMinima) + carroEdna.velocidadeMinima) * (100 - carroEdna.derrapagem) / 100);
}