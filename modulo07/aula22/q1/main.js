function createMultiplier(x) {
    return function (y) {
        return x * y
    }
}

let multiplyBy5 = createMultiplier(5)


//resultado esperado: 50
console.log(multiplyBy5(10))