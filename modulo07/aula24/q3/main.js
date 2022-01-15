// c. Crie uma função que sorteie 10 números inteiros aleatórios entre 1 e 100 e
// armazene-os em um vetor. Em seguida retorne o maior valor sorteado entre os 10.
// Utilize o spread operator combinado com a biblioteca “Math” para escrever seu
// código.

function returnMax() {
    const arrayRandom = [];
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 100 + 1)
        arrayRandom.push(randomNumber)
    }

    return Math.max(...arrayRandom)
}

//Imprime o maior número entre os 10 sorteados
console.log(returnMax())