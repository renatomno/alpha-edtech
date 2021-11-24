function ambienteRuim() {
    let img = document.querySelector(".img__ambiente")
    img.classList.remove("none")
    img.setAttribute("src", "assets/ruim.png")
}

function ambienteMedio() {
    let img = document.querySelector(".img__ambiente")
    img.classList.remove("none")
    img.setAttribute("src", "assets/medio.png")
}

function ambienteBom() {
    let img = document.querySelector(".img__ambiente")
    img.classList.remove("none")
    img.setAttribute("src", "assets/bom.png")
}

function comidaRuim() {
    let img = document.querySelector(".img__comida")
    img.classList.remove("none")
    img.setAttribute("src", "assets/ruim.png")
}

function comidaMedio() {
    let img = document.querySelector(".img__comida")
    img.classList.remove("none")
    img.setAttribute("src", "assets/medio.png")
}

function comidaBom() {
    let img = document.querySelector(".img__comida")
    img.classList.remove("none")
    img.setAttribute("src", "assets/bom.png")
}

function voltariaNao() {
    let img = document.querySelector(".img__voltaria")
    img.classList.remove("none")
    img.setAttribute("src", "assets/ruim.png")
}

function voltariaTalvez() {
    let img = document.querySelector(".img__voltaria")
    img.classList.remove("none")
    img.setAttribute("src", "assets/medio.png")
}

function voltariaSim() {
    let img = document.querySelector(".img__voltaria")
    img.classList.remove("none")
    img.setAttribute("src", "assets/bom.png")
}

function criarFeedback() {
    let card = criarElemento("div", "card__container")

    let nome = criarElemento("p", "card__texto")
    nome.innerHTML = `Nome: ${document.getElementById("fname").value}`
    card.appendChild(nome)

    let idade = criarElemento("p", "card__texto")
    idade.innerHTML = `Idade: ${document.getElementById("fage").value}`
    card.appendChild(idade)

    let ambiente = criarElemento("p", "card__texto")
    ambiente.innerHTML = "O que achou do ambiente? " + `${document.querySelector('input[name="ambiente"]:checked').value}`
    card.appendChild(ambiente)

    let comida = criarElemento("p", "card__texto")
    comida.innerHTML = "O que achou da comida do restaurante? " + `${document.querySelector('input[name="comida"]:checked').value}`
    card.appendChild(comida)


    let voltaria = criarElemento("p", "card__texto")
    voltaria.innerHTML = "Voltaria a comer no restaurante bon appetit? " + `${document.querySelector('input[name="voltaria"]:checked').value}`
    card.appendChild(voltaria)

    document.querySelector(".feedback").appendChild(card)
}


function criarElemento(elemento, classe) {
    let tag = document.createElement(elemento)
    tag.classList.add(classe)
    return tag
}