
exports.getActs = async () => {

    const axios = require('axios')
    let res
    try {
        res = await axios({
            method: "get",
            url: "https://br.api.riotgames.com/val/content/v1/contents?locale=pt-BR",
            headers: {
                "X-Riot-Token": "RGAPI-bfb3b8d1-e371-4786-a400-aae9c7da667e"
            }
        })
    } catch {
        res = "deu ruim"
    }

    resp = res?.data?.acts?.length > 0;
    if (resp) {
        retorno = res.data.acts;
    } else {
        retorno = "Credenciais inválidas";
    }

    console.log(`statusCode: ${res.status}`)
    return retorno
}


exports.getLeaderboard = async (acts) => {

    const axios = require('axios')
    let res
    //console.log("gothere")
    try {
        res = await axios({
            method: "get",
            url: "https://br.api.riotgames.com/val/ranked/v1/leaderboards/by-act/" + acts,
            headers: {
                "X-Riot-Token": "RGAPI-bfb3b8d1-e371-4786-a400-aae9c7da667e"
            }
        })
    } catch {
        res = "deu ruim"
    }

    resp = res?.data?.players?.length > 0;
    if (resp) {
        retorno = res.data.players;
        console.log(retorno.map(x=>x.puuid))
        retorno = retorno.map(x => ({
            rank: x.leaderboardRank,
            name: x.gameName ?? "ANONIMO",
            points: x.rankedRating,
        }));
    } else {
        retorno = "Credenciais inválidas";
    }

    console.log(`statusCode: ${res.status}`)

    return retorno;
}