//Crie uma função que receba quatro parâmetros e retorne o produto da multiplicação
// de todos eles. Utilize o spread operator para enviar os itens de um vetor como
// parâmetros da sua função;


function times(num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4
}

//Array exemplo
const array = [2, 3, 4, 5]

//Resultado esperado = 120
console.log(times(...array))