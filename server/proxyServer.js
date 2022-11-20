const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

// API key
<<<<<<< HEAD
const API_KEY = "RGAPI-6908b5e3-6f18-41f8-ae75-ea35f9fc7158";
=======
const API_KEY = "RGAPI-fecec39e-5611-4fab-9456-a538969bf5a5";
>>>>>>> 32ef4788e6f1a17f724ba4b48948d0a4154b4ca6

// 아이템 정보를 가져오는 함수
const getItemInfomation = () => {
    return axios.get(`https://ddragon.leagueoflegends.com/cdn/10.24.1/data/ko_KR/item.json`)
        .then(response => {
            return response.data;
        })
        .catch(error => console.log(error))
}

// 소환사 정보를 가져오는 함수
const getPlayerInformation = (playerName) => {
    return axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${API_KEY}`)
        .then(response => {
            return response.data;
        })
        .catch(error => console.log(error));
}

// 소환사의 puuid값을 가져오는 함수
const getPlayerPUUID = (playerName) => {
    return axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${API_KEY}`)
        .then(response => {
            console.log(playerName)
            return response.data.puuid;
        })
        .catch(error => console.log(error));
}

// 소환사의 id값을 가져오는 함수 (id는 encryptedSummonerId값)
const getPlayerID = (playerName) => {
    return axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${API_KEY}`)
        .then(response => {
            return response.data.id;
        })
        .catch(error => console.log(error));
}

// GET item (아이템 정보 가져오기)
// localhost:4000/item
app.get('/item', async (req, res) => {
    const infomation = await getItemInfomation();
    res.json(infomation);
})

// GET playerInformation (소환사 정보 가져오기)
// localhost:4000/playerInformation
app.get('/playerInformation', async (req, res) => {
    const playerName = req.query.searchText;

    // information (소환사 정보 얻어오기)
    const information = await getPlayerInformation(playerName);
    res.json(information); 
})

// GET past10Games (과거 10게임 가져오기)
// localhost:4000/past10Games
app.get('/past10Games', async (req, res) => {
    const playerName = req.query.searchText; // params를 query로 받아옴(검색기능)

    // PUUID (puuid 값 얻어오기)
    const PUUID = await getPlayerPUUID(playerName);
    const API_CALL = `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${PUUID}/ids?start=0&count=20&api_key=${API_KEY}`

    // its going to give us a list of game IDs
    const gameIDs = await axios.get(API_CALL)
        .then(response => response.data)
        .catch(error => console.log(error));
    console.log(gameIDs, " => gameIDs");

    // loop through game IDs
    // at each loop, get the infomation based off ID
    const matchDataArray = [];
    for (let i = 0; i < gameIDs?.length - 10; i++) {
        const matchID = gameIDs[i];
        const matchData = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${API_KEY}`)
            .then(response => response.data)
            .catch(error => console.log(error));
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


