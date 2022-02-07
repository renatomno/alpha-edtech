function Calculadora(operand1, operand2, operation) {
    return {
        operand1,
        operand2,
        operation,
        setOperand1(_operand1) {
            this.operand1 = _operand1
        },
        setOperand2(_operand2) {
            this.operand2 = _operand2
        },
        setOperation(_operation) {
            this.operation = _operation
        },
        //Retorna o resultado da operação (se possível)
        getResult() {
            if (this.operation === "+") return this.operand1 + this.operand2;
            if (this.operation === "-") return this.operand1 - this.operand2;
            if (this.operation === "*") return this.operand1 * this.operand2;
            if (this.operation === "/") {
                if (this.operand2 === 0) return "Operação não possível (divisão por zero)"
                return this.operand1 / this.operand2;
            }
        },

        //Retorna os valores padrão para operand1, operand2 e operaton
        clearCalculator() {
            this.setOperand1("")
            this.setOperand2("")
            this.setOperation("")
        }
    }
}

module.exports = {
    Calculadora
}