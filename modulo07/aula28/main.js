//Classe Calculadora
class Calculadora {
    constructor(operand1, operand2, operation) {
    }

    //Define o primeiro operando
    setOperand1(_operand1) {
        this.operand1 = _operand1;
    }
    //Define o segundo operando
    setOperand2(_operand2) {
        this.operand2 = _operand2;
    }
    //Define o tipo de operação
    setOperation(_operation) {
        this.operation = _operation;
    }

    //Retorna o resultado da operação (se possível)
    getResult() {
        if (this.operation === "+") return this.operand1 + this.operand2;
        if (this.operation === "-") return this.operand1 - this.operand2;
        if (this.operation === "*") return this.operand1 * this.operand2;
        if (this.operation === "/") {
            if (this.operand2 === 0) return "Operação não possível (divisão por zero)"
            return this.operand1 / this.operand2;
        }
    }

    //Retorna os valores padrão para operand1, operand2 e operaton
    clearCalculator() {
        this.setOperand1("")
        this.setOperand2("")
        this.setOperation("")
    }

}

//Função Imprimir conta no visor
function displayResult(result) {
    const displayCalculator = document.querySelector(".display__text")
    displayCalculator.textContent = result

}

//Botões de número, operação e igualdade
const btnNumber = document.querySelectorAll(".btn--number")
const btnOperation = document.querySelectorAll(".btn--operation")
const btnEquals = document.querySelector(".btn--equals")

//Variáveis de controle
let displayNumber = "" //Número mostrado no visor
let contOperator = 0 //Flag que indica se na conta já existe uma operação

//Aplicação dos event listeners nos botões numerais
for (let buttons of btnNumber) {
    buttons.addEventListener("click", event => {
        displayNumber += event.target.textContent
        displayResult(displayNumber)
    })
}

//Aplicação dos event listeners nos botões de operação
for (let buttons of btnOperation) {
    buttons.addEventListener("click", event => {
        displayNumber = displayNumber.replace(" + ", ` ${event.target.textContent} `)
        displayNumber = displayNumber.replace(" - ", ` ${event.target.textContent} `)
        displayNumber = displayNumber.replace(" * ", ` ${event.target.textContent} `)
        displayNumber = displayNumber.replace(" / ", ` ${event.target.textContent} `)
        if (contOperator == 0) {
            displayNumber += " " + event.target.textContent + " "
            contOperator++
        }
        displayResult(displayNumber)
    })
}

//Obter resultado 
btnEquals.addEventListener("click", event => {
    //Separação da string displayNumber
    const arrayDisplayNumbers = displayNumber.split(" ")

    //Criação da classe, set de valores e impressão do resultado
    const novaConta = new Calculadora()
    novaConta.setOperand1(parseFloat(arrayDisplayNumbers[0]))
    novaConta.setOperation(arrayDisplayNumbers[1])
    novaConta.setOperand2(parseFloat(arrayDisplayNumbers[2]))
    displayResult(novaConta.getResult())

    //Resetar valores para mais um uso
    novaConta.clearCalculator()
    displayNumber = ""
    contOperator = 0
})