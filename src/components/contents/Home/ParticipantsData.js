import React from "react";
import styles from "./ParticipantsData.module.css";

const ParticipantsData = ({
    participant,
    index,
    onErrorImg
}) => {
    return (
        <>
            <li key={index}>
                <img 
                    src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${participant.championName}.png`}
                    className={styles['gameData-championMiniFaceImg']}
                    onError={onErrorImg}
                    alt={participant.championName}
                />
                <div className={styles['gameData-usersInfoBox']}>
                    {/* 유저 닉네임 */}
                    <div>{participant.summonerName}</div>
                    {/* 각 유저들의 KDA */}
                    <div>{participant.kills}/{participant.deaths}/{participant.assists} </div>
                </div>
            </li>
        </>
    )
}

export default ParticipantsData;