$.ajax({
    url: "https://economia.awesomeapi.com.br/json/all",
    success: function (data) {
        for (let i in data) {
            $('#droplist-currency').append(
                $('<option/>')
                    .text(data[i].code)
            )
        }
    },
    error: function () {
        alert("There was an error.");
    }
});


$('#droplist-currency').change(() => {
    const currency = $('#droplist-currency').val()
    const currencyBRL = `${currency}BRL`
    $.ajax({
        url: `https://economia.awesomeapi.com.br/json/last/${currency}`,
        success: function (data) {
            $('.currency-result').html(
                `
                    Nome da moeda: ${data[currencyBRL].name} <br />
                    Data e hora: ${data[currencyBRL].create_date} <br />
                    Mínimo: ${data[currencyBRL].low} <br />
                    Máximo: ${data[currencyBRL].high} <br />
                    Valor de compra: ${data[currencyBRL].bid} <br />
                    Valor de venda: ${data[currencyBRL].ask} <br />

                `
            )
        }
    })
})


$('#submit-date').click(() => {
    const dateBegin = $('#date-begin').val().replace(/-/g, "")
    const dateEnd = $('#date-end').val().replace(/-/g, "")
    const currency = $('#droplist-currency').val()
    $.ajax({
        url: `https://economia.awesomeapi.com.br/json/daily/${currency}-brl/360?start_date=${dateBegin}&end_date=${dateEnd}`,
        success: function (data) {
            console.log(data)
        }

    })
})