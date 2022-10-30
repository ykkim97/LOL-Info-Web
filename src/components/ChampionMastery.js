import React, { useEffect, useState } from "react";
import axios from "axios";

const ChampionMastery = ({API_KEY, summonerName, summonerId}) => {
    const [masteryData, setMasteryData] = useState([]);

    useEffect(() => {
        const response = axios.get(`https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}/by-champion/61?api_key=${API_KEY}`)
            .then(result => {
                console.log(result.data);
                setMasteryData(result.data)
            })
    }, [])

    return (
        <>
            <div>
                <div>{summonerName}의 오리아나 숙련도 정보</div>
                <div>숙련도레벨 : {masteryData.championLevel}</div>
                <div>숙련도점수 : {masteryData.championPoints}</div>
            </div>
        </>
    )
}

export default ChampionMastery;