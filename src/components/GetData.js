import React, { useEffect, useState } from "react";
import axios from "axios";
import ChampionMastery from "./ChampionMastery";

const GetData = ({API_KEY}) => {
    const [summonerData, setSummonerData] = useState([]);

    useEffect(() => {
        const response = axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%91%90%EB%90%98%EC%A7%80?api_key=${API_KEY}`)
            .then(result => {
                console.log(result.data);
                setSummonerData(result.data)
            })
    }, [])

    return (
        <>
            <div>
                <h2>소환사 정보</h2>
                <h3>{summonerData.name}</h3>
                <div>소환사레벨 : {summonerData.summonerLevel}</div>
                
                <ChampionMastery 
                    API_KEY={API_KEY} 
                    summonerName={summonerData.name}
                    summonerId={summonerData.id} 
                />
            </div>
        </>
    )
}

export default GetData;