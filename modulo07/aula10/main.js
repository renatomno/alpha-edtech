let operadorIgual = document.querySelector(".operadorIgual")
var operacao
var resultado

operadorIgual.addEventListener("click", (e) => {
    e.preventDefault();
    num1 = parseInt(document.querySelector("#num1").value)
    num2 = parseInt(document.querySelector("#num2").value)

    if (operacao == "+") {
        resultado = num1 + num2;
    } else if (operacao == "-") {
        resultado = num1 - num2;
    } else if (operacao == "*") {
        resultado = num1 * num2
    } else {
        resultado = num1 / num2
    }

    document.querySelector(".resultado").textContent = `${resultado}`
    document.querySelector(".resultado2").textContent = `${num1} ${operacao} ${num2} = ${resultado}`

})

let operador = document.querySelectorAll(".operador")

for (let btn of operador) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        operacao = btn.textContent;
    })
}
