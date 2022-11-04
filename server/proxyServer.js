const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { response } = require('express');

const app = express();

app.use(cors());

// API key
const API_KEY = "RGAPI-3c668432-cc17-45f4-a461-3137a00e3433";

// 소환사 정보를 가져오는 함수
const getPlayerInformation = (playerName) => {
    return axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${API_KEY}`)
        .then(response => {
            return response.data;
        })
        .catch((error) => console.log(error));
}

// 소환사의 puuid값을 가져오는 함수
const getPlayerPUUID = (playerName) => {
    return axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${API_KEY}`)
        .then(response => {
            console.log(response.data, " => 소환사정보");
            console.log(playerName)
            return response.data.puuid;
        })
        .catch((error) => console.log(error));
}

// 소환사의 id값을 가져오는 함수 (id는 encryptedSummonerId값)
const getPlayerID = (playerName) => {
    return axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${API_KEY}`)
    .then(response => {
        return response.data.id;
    })
    .catch((error) => console.log(error));
}

// GET information (소환사 정보 가져오기)
// localhost:4000/information
app.get('/information', async (req, res) => {
    const playerName = req.query.searchText;

    // information (소환사 정보 얻어오기)
    const information = await getPlayerInformation(playerName);

    res.json(information); 
})

// GET past5Games (과거 5게임 가져오기)
// localhost:4000/past5Games
app.get('/past5Games', async (req, res) => {
    const playerName = req.query.searchText; // params를 query로 받아옴(검색기능)

    // PUUID (puuid 값 얻어오기)
    const PUUID = await getPlayerPUUID(playerName);
    const API_CALL = `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${PUUID}/ids?start=0&count=20&api_key=${API_KEY}`

    // its going to give us a list of game IDs
    const gameIDs = await axios.get(API_CALL)
        .then(response => response.data)
        .catch((error) => console.log(error));
    console.log(gameIDs, " => gameIDs");

    // loop through game IDs
    // at each loop, get the infomation based off ID
    const matchDataArray = [];
    for (let i = 0; i < gameIDs?.length - 15; i++) {
        const matchID = gameIDs[i];
        const matchData = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${API_KEY}`)
            .then(response => response.data)
            .catch((error) => console.log(error));
        matchDataArray.push(matchData);
    }

    // save infomation above in an array, give array as JSON response to user
    // [Game1Object, Game2Object, Game3Object, ...]
    res.json(matchDataArray); 
})

// GET tier (티어정보 가져오기)
// localhost:4000/tier
app.get('/tier', async (req, res) => {
    const playerName = req.query.searchText;
    const ID = await getPlayerID(playerName);
    const API_CALL = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${ID}?api_key=${API_KEY}`;

    const leagueDataArray = [];
    
    const leagueData = await axios.get(API_CALL)
        .then(response => response.data)
        .catch(error => console.log(error))
    leagueDataArray.push(leagueData);

    res.json(leagueDataArray)
})

// port 4000
app.listen(4000, () => {
    console.log("Server started on port 4000 - 4000포트에서 서버 구동중");
});


