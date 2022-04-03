
exports.getActs = async () => {

    const axios = require('axios')


    let res = await axios({
        method: "get",
        url: "https://br.api.riotgames.com/val/content/v1/contents?locale=pt-BR",
        headers: {
            "X-Riot-Token": "RGAPI-9649fa17-41b6-4594-af29-5617784d2a8a"
        }
    })
    console.log(res.data)
    resp = res.data?.acts?.length > 0;
    if (resp) {
        retorno = res.data.acts;
    } else {
        retorno = "Credenciais inválidas";
    }

    console.log(`statusCode: ${res.status}`)
    return retorno
}


exports.getLeaderboard = async (acts) => {

    var express = require('express');
    var router = express.Router();
    const axios = require('axios')

    //console.log("gothere")

    let res = await axios({
        method: "get",
        url: "https://br.api.riotgames.com/val/ranked/v1/leaderboards/by-act/" +  acts ,
        headers: {
            "X-Riot-Token": "RGAPI-9649fa17-41b6-4594-af29-5617784d2a8a"
        }
    })
    console.log(res.data.players)
    resp = res.data?.players?.length > 0;
    if (resp) {
        retorno = res.data.players;
    } else {
        retorno = "Credenciais inválidas";
    }

    console.log(`statusCode: ${res.status}`)

    return retorno;
}