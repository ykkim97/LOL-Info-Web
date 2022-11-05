import React, { useEffect, useState } from "react";
import styles from "./SummonerProfile.module.css";
import Emblem_Iron from "./../Data/Emblems/Emblem_Iron.png"
import Emblem_Bronze from "./../Data/Emblems/Emblem_Bronze.png"
import Emblem_Silver from "./../Data/Emblems/Emblem_Silver.png"
import Emblem_Gold from "./../Data/Emblems/Emblem_Gold.png"
import Emblem_Platinum from "./../Data/Emblems/Emblem_Platinum.png"
import Emblem_Diamond from "./../Data/Emblems/Emblem_Diamond.png"
import Emblem_Master from "./../Data/Emblems/Emblem_Master.png"
import Emblem_Grandmaster from "./../Data/Emblems/Emblem_Grandmaster.png"
import Emblem_Challenger from "./../Data/Emblems/Emblem_Challenger.png"

// 소환사 프로필 컴포넌트
const SummonerProfile = ({ information, gameList, searchText, leagueList, profileIconID }) => {
    const emblemImgs = [{key : "IRON", Emblem : Emblem_Iron}, {key : "BRONZE", Emblem : Emblem_Bronze}, 
        {key : "SILVER", Emblem : Emblem_Silver}, {key : "GOLD", Emblem : Emblem_Gold},
        {key : "PLATINUM", Emblem : Emblem_Platinum}, {key : "DIAMOND", Emblem : Emblem_Diamond},
        {key : "MASTER", Emblem : Emblem_Master}, {key : "GRNADMASTER", Emblem : Emblem_Grandmaster}, 
        {key : "CHALLENGER", Emblem : Emblem_Challenger}];
    
    return (
        <>
            <div className={styles['summonerProfile-container']}>
                <div className={styles['summonerProfile-profile']}>
                    <img 
                        src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/profileicon/${profileIconID}.png`} 
                        id={styles["summonerProfileIcon"]}
                    />
                    <div className={styles['summonerProfile-profile-userInfo']}>
                        <h3 id={styles["summonerName"]}>{leagueList[0][0]?.summonerName}</h3>
                        <h4 id={styles["summonerLevel"]}>level {information.summonerLevel}</h4>
                    </div>

                </div>
                <div className={styles['summonerProfile-lankInfo']}>                     
                    <ul className={styles['summonerProfile-soloLank']}>
                        {emblemImgs.map(list => {
                            if(list.key == leagueList[0][0]?.tier) {
                                return (
                                    <li><img src={list.Emblem} className={styles['emblemImg']}/></li>
                                )
                            }
                        })}
                        <li>리그 : 솔로랭크 5X5</li>
                        <li>티어 : {leagueList[0][0]?.tier} {leagueList[0][0]?.rank}</li>
                        <li>리그 포인트 : {leagueList[0][0]?.leaguePoints}</li>
                        <li>{leagueList[0][0]?.wins + leagueList[0][0]?.losses}전 {leagueList[0][0]?.wins}승 {leagueList[0][0]?.losses}패</li>
                    </ul>
                    <ul className={styles['summonerProfile-freeLank']}>
                        {emblemImgs.map(list => {
                            if(list.key == leagueList[0][1]?.tier) {
                                return (
                                    <li><img src={list.Emblem} className={styles['emblemImg']}/></li>
                                )
                            }
                        })}
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