import React, { useEffect, useState } from "react";
import styles from "./SummonerProfile.module.css";

// 소환사 프로필 컴포넌트
const SummonerProfile = ({ gameList, searchText, leagueList }) => {
    
    return (
        <>
            <div className={styles['summonerProfile-container']}>
                <div className={styles['summonerProfile-profile']}>
                    <h3 id={styles["summonerName"]}>{leagueList[0][0]?.summonerName}</h3>
                    <h4 id={styles["summonerLevel"]}>level </h4>
                </div>
                <div className={styles['summonerProfile-lankInfo']}>
                    <ul className={styles['summonerProfile-soloLank']}>
                        <li>리그 : 솔로랭크 5X5</li>
                        <li>티어 : {leagueList[0][0]?.tier} {leagueList[0][0]?.rank}</li>
                        <li>리그 포인트 : {leagueList[0][0]?.leaguePoints}</li>
                        <li>{leagueList[0][0]?.wins + leagueList[0][0]?.losses}전 {leagueList[0][0]?.wins}승 {leagueList[0][0]?.losses}패</li>
                    </ul>
                    <ul className={styles['summonerProfile-freeLank']}>
                        <li>리그 : 자유랭크 5X5</li>
                        <li>티어 : {leagueList[0][1]?.tier} {leagueList[0][1]?.rank}</li>
                        <li>리그 포인트 : {leagueList[0][1]?.leaguePoints}</li>
                        <li>{leagueList[0][1]?.wins + leagueList[0][1]?.losses}전 {leagueList[0][1]?.wins}승 {leagueList[0][1]?.losses}패</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SummonerProfile;