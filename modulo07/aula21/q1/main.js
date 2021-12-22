function callback(mensagem) {
    console.log(mensagem())
}

function mensagem() {
    const msg = "Ola mundo!"
    return msg
}

callback(mensagem)