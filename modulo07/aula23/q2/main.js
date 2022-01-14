//Matrix de teste
const matrix =
    [[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]]

//Variáveis para iteração de linha e coluna
let matrixRow = 0;
let matrixColumn = 0;

function logMatrix(matrix) {
    //Condição para passar para a próxima linha ou encerrar o algoritmo
    if (matrixColumn === matrix[matrixRow].length) {
        matrixRow++
        matrixColumn = 0
        if (matrixRow + 1 == matrix[matrixRow - 1].length) {
            matrixRow = 0
            return
        }
        logMatrix(matrix)
    } else { //Impressão de cada valor e acréscimo da variável coluna
        console.log(matrix[matrixRow][matrixColumn])
        matrixColumn++
        logMatrix(matrix)
    }
}

//Chamada da função
logMatrix(matrix)