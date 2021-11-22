bgImg = ["assets/bg1.jpg", "assets/bg2.jpg", "assets/bg3.jpg", "assets/bg4.jpg", "assets/bg5.jpg"]
let body = document.querySelector("body")

function fillHeader() {
    let header = document.createElement("header")
    header.innerHTML = "<h3>Reinicie a página e veja mais imagens do doge!</h3>"
    header.classList.add("header__text")
    body.appendChild(header)
}
function fillMainSection() {

    //Sorteio de um número entre 0 e 4
    let i = Math.floor(Math.random() * 5)

    let imgMainSection = document.createElement("img")
    imgMainSection.classList.add("mainsection__img")
    imgMainSection.setAttribute("src", bgImg[i])
    body.appendChild(imgMainSection)

    let textMainSection = document.createElement("h2")
    textMainSection.innerHTML = "doge is love <br /> doge is life"
    textMainSection.classList.add("mainsection__text")
    body.appendChild(textMainSection)
}
function fillFooter() {
    let footer = document.createElement("footer")
    footer.innerHTML = "<h2>Espécie: doge // Habitat: internet // Descrição: um cachorrinho da raça Shiba Inu que se tornou meme em 2013 e hoje é uma criptomoeda "
    footer.classList.add("footer__text")
    body.appendChild(footer)
}

fillHeader()
fillMainSection()
fillFooter()