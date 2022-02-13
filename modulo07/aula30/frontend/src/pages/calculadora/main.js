//Função Imprimir conta no visor
function displayResult(result) {
    const displayCalculator = document.querySelector(".display__text")
    displayCalculator.textContent = result

}
function factoryFunction(_operand1, _operand2, _operation) {
    return {
        setOperand1: (_operand1) => {
            this.operand1 = _operand1
        },
        setOperand2: (_operand2) => {
            this.operand2 = _operand2
        },
        setOperation: (_operation) => {
            this.operation = _operation
        },
        getResult: () => {
            if (this.operation === "+") return this.operand1 + this.operand2;
            if (this.operation === "-") return this.operand1 - this.operand2;
            if (this.operation === "*") return this.operand1 * this.operand2;
            if (this.operation === "/") {
                if (this.operand2 === 0) return "Operação não possível (divisão por zero)"
                return this.operand1 / this.operand2;
            }
        },
        clearCalculator() {
            this.setOperand1("")
            this.setOperand2("")
            this.setOperation("")
        }
    }
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

    //Usando FactoryFunction, set de valores e impressão do resultado
    const operand1 = parseFloat(arrayDisplayNumbers[0])
    const operation = arrayDisplayNumbers[1]
    const operand2 = parseFloat(arrayDisplayNumbers[2])

    const calculadora = factoryFunction(operand1, operand2, operation)
    console.log(calculadora)

    async function api(operand1, operand2, operation) {
        const req = await fetch("http://localhost:3030/resolucao", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ operand1, operand2, operation }),
        })

        const result = await req.json()
        displayResult(result)
    }



    api(operand1, operand2, operation)

    //Resetar valores para mais um uso
    displayNumber = ""
    contOperator = 0
})
