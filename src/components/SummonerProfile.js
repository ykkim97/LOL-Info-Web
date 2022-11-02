import React, { useEffect, useState } from "react";
import styles from "./SummonerProfile.module.css";

const SummonerProfile = ({ gameList, searchText }) => {
    const [participants, setParticipants] = useState(gameList[0].info.participants);
    console.log(participants, 'profile에서 gameList')

    return (
        <>
            <div className={styles['summonerProfile-container']}>
                <div className={styles['summonerProfile-profile']}>
                    <h3>소환사명 </h3>
                    <h4>level </h4>
                </div>
                <div className={styles['summonerProfile-lankInfo']}>
                    <ul className={styles['summonerProfile-soloLank']}>
                        <li>랭킹 : </li>
                        <li>리그 : 솔로랭크 5X5</li>
                        <li>티어 : </li>
                        <li>리그 포인트 : </li>
                        <li>0전 0승 0패</li>
                    </ul>
                    <ul className={styles['summonerProfile-freeLank']}>
                        <li>랭킹 : </li>
                        <li>리그 : 자유랭크 5X5</li>
                        <li>티어 : </li>
                        <li>리그 포인트 : </li>
                        <li>0전 0승 0패</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SummonerProfile;