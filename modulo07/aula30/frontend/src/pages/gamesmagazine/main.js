$('#fbtn').click(() => {
    const id = $('#fid').val()
    const name = $('#fgame').val()
    const year = $('#fyear').val()
    const genre = $('#fgenre').val()
    let multiplayer = $('input[name="multiplayerRadio"]:checked').val()
    let offline = $('input[name="offlineRadio"]:checked').val()
    let crossplatform = $('input[name="crossplatformRadio"]:checked').val()

    multiplayer == "yesMultiplayer" ? multiplayer = true : multiplayer = false
    offline == "yesOffline" ? offline = true : offline = false
    crossplatform == "yesPlatform" ? crossplatform = true : multiplayer = false

    const gameObj = {
        id,
        name,
        year,
        genre,
        multiplayer,
        offline,
        crossplatform
    }

    //requisição
    async function postHTTP(data) {
        await fetch("http://localhost:3030/games", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    postHTTP(gameObj)
    getGames()
})

async function getGames() {
    $.ajax({
        url: 'http://localhost:3030/gameslist',
        success: function renderGames(data) {
            $('tbody').html('')

            data.gamesdatabase.forEach(item => {
                if (item.multiplayer == true) {
                    item.multiplayer = 'Sim'
                } else {
                    item.multiplayer = 'Não'
                }

                if (item.offline == true) {
                    item.offline = 'Sim'
                } else {
                    item.offline = 'Não'
                }

                if (item.crossplatform == true) {
                    item.crossplatform = 'Sim'
                } else {
                    item.crossplatform = 'Não'
                }

                $('tbody').append(`
                    <tr>
                    <td> ${item.id} </td>
                    <td> ${item.name} </td>
                    <td> ${item.year} </td>
                    <td> ${item.genre} </td>
                    <td> ${item.multiplayer} </td>
                    <td> ${item.offline} </td>
                    <td> ${item.crossplatform} </td>
                    </tr>
                `)
            })
        }
    })
}

getGames()