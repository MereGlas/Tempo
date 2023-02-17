function cliqueinalupa() {
    let cidade = document.querySelector(".input-cidade").value

    buscarcidade(cidade)
}

let chave = "36b8715d42748bc3e9e442f248da8835"

function colocarnatela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".ar").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarcidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave +
        "&lang=pt_br" + "&units=metric").then(resposta => resposta.json())

    colocarnatela(dados)

}