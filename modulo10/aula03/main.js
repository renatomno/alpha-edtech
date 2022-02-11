$('#fbtn').click(() => {
    const cep = $('#fcep').val()
    const cepString = cep.toString();
    if (cepString.length == 8) {
        //requisição
        $('h5').html("")
        $.ajax({
            url: `https://cep.awesomeapi.com.br/json/${cep}`,
            success: function (data) {
                //Criação dos headers da tabela
                $('#table__head__row').append(
                    $('<th/>').html(`CEP`),
                    $('<th/>').html(`Endereço`),
                    $('<th/>').html(`Bairro`),
                    $('<th/>').html(`Estado`),
                    $('<th/>').html(`DDD`),
                    $('<th/>').html(`Cidade`),
                );

                //Criação da data da tabela
                $('#table__body__row').append(
                    $('<td/>').html(`${data.cep}`),
                    $('<td/>').html(`${data.address}`),
                    $('<td/>').html(`${data.district}`),
                    $('<td/>').html(`${data.state}`),
                    $('<td/>').html(`${data.ddd}`),
                    $('<td/>').html(`${data.city}`),
                );

                //Criação do iframe
                $('section').append(
                    $('<iframe/>').attr({
                        src: `https://www.google.com/maps?api=1&q=${data.lat}%2C${data.lng}&hl=es;z=14&output=embed`,
                        id: 'iframe'
                    }
                    )
                )
            }
        })

    } else {
        $('h5').html("Insira um número válido (não use traços)")
    }
    console.log(typeof (cepString))
})

