import React from "react";
import styles from "./Match.module.css";
import SummonerProfile from "./SummonerProfile";

const Match = ({ gameList, searchText }) => {
    return (
        <>
            {searchText === '' ?
                <div></div> : 
                (
                    gameList.length !== 0 ? 
                    <>
                        <h3 className={styles["gameData-title"]}>매치 검색결과</h3>
                        <SummonerProfile gameList={gameList} searchText={searchText} />
                        {
                            gameList.map((gameData, index) => (
    
                                <div key={index} className={styles['gameData-container']}>
                                    <h4 className={styles['gameData-gamemode']}>{gameData.info.gameMode}</h4>
    
                                    <div className={styles['gameData-champion']}>
                                        {gameData.info.participants.map(participant => {
                                            // gameData안의 각 participant의 summonrName과 디코딩된 searchText값이 대소문자구분없이 같을 경우 
                                            if (participant.summonerName.toUpperCase() === (decodeURIComponent(searchText)).toUpperCase()) {
                                                return (
                                                    <div key={index}>
                                                        <h3>{participant.championName}</h3>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
    
                                    <div className={styles['gameData-kda']}>
                                        {gameData.info.participants.map(participant => {
                                            // gameData안의 각 participant의 summonrName과 디코딩된 searchText값이 대소문자구분없이 같을 경우
                                            if (participant.summonerName.toUpperCase() === (decodeURIComponent(searchText)).toUpperCase()) {
                                                return (
                                                    <div key={index}>
                                                        {/* KDA */}
                                                        <h3>{participant.kills}/{participant.deaths}/{participant.assists}</h3>
                                                        {/* 평점 */}
                                                        <p>{((participant.kills + participant.assists)/participant.deaths).toFixed(2)} 평점</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
    
                                    <div className={styles['gameData-individual']}>
                                        <p>킬관여</p>
                                    </div>
    
                                    <div className={styles['gameData-team']}>
                                        <div className={styles['gameData-team1']}>
                                            <p>Team 1</p>
                                            <ul>
                                                <li>{gameData.info.participants[0].summonerName}</li>
                                                <li>{gameData.info.participants[1].summonerName}</li>
                                                <li>{gameData.info.participants[2].summonerName}</li>
                                                <li>{gameData.info.participants[3].summonerName}</li>
                                                <li>{gameData.info.participants[4].summonerName}</li>
                                            </ul>
                                        </div>
                                        <div className={styles['gameData-team2']}>
                                            <p>Team 2</p>
                                            <ul>
                                                <li>{gameData.info.participants[5].summonerName}</li>
                                                <li>{gameData.info.participants[6].summonerName}</li>
                                                <li>{gameData.info.participants[7].summonerName}</li>
                                                <li>{gameData.info.participants[8].summonerName}</li>
                                                <li>{gameData.info.participants[9].summonerName}</li>
                                            </ul>
                                        </div>
                                    </div>
    
                                </div>
                            ))
                        }
                    </> :
                    <>
                        <h3 className={styles["gameData-title"]}>검색결과없음{(searchText)}</h3>
                    </>
                )
            }
            
        </>
    )
}

export default Match;
