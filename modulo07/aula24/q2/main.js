// b. Crie uma função que receba dois vetores e retorne a concatenação dos dois em um
// novo vetor. Utilize o spread operator para realizar a concatenação;

function arrayConcaten(array1, array2) {
    return [...array1, ...array2]
}

//Vetores exemplo
const array1 = [1, 2, 3, 4]
const array2 = [5, 6, 7, 8]

//Vetor resultado
const array3 = arrayConcaten(array1, array2)

//Impressão do resultado
console.log(array3)