import React, { useEffect, useState } from "react";
import styles from "./ActiveGamesDetail.module.css";
import axios from 'axios';
import ChampionData from "../../../Data/Champions/ChampionData";

const ActiveGamesDetail = ({
    activeGames,
    onErrorImg,
}) => {
    const championDataArray = Object.values(ChampionData[0].data); // 모든챔피언데이터 Object를 Array로 변환
    const playingSummonerId = []; // 플레이중인 소환사의 ID를 담을 Array
    const playingChampionArray = []; // 플레이중인 챔피언을 담을 Array
    const [activePlayersTier, setActivePlayersTier] = useState(); // 현재 게임 정보
    
    activeGames.participants?.forEach((participant, index) => {
        playingSummonerId?.push(participant.summonerId);
    })
    
    // 인게임 플레이어들의 티어를 가져오는 함수
    const getActivePlayersLeague = () => {
        axios.get('http://localhost:4000/activePlayersTier', {params : {playingSummonerId : playingSummonerId}})
        .then((response) => {
            return response.data;
        })
        .then(result => {
            setActivePlayersTier(result);
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        getActivePlayersLeague()
        // console.log(playingSummonerName, "playingSummonerName")
        console.log(activePlayersTier, "activePlayersTier")
        // console.log(activeGames, "activeGames")
    }, [])

    return (
        <div>
            {/* 참가자 정보 */}
            {activeGames.participants?.map((participant, index) => {
                
                championDataArray.forEach((obj) => {
                    if (obj.key == participant.championId) {
                        playingChampionArray.push(obj.image.full);
                    }
                })
                return (
                    <div className={styles['participant-Container']}>
                        <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${playingChampionArray[index]}`}
                            onError={onErrorImg}
                            className={styles['playing-Champions']}
                        />
                        <div className={styles[`participant-name`]}>{participant.summonerName}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ActiveGamesDetail;