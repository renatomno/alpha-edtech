function factorial(number) {
    if (number - 1 === 0) {
        return 1
    }
    return number * factorial(number - 1)
}


//resposta esperada 120
console.log(factorial(5))