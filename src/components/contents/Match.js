import React, { useState } from "react";
import styles from "./Match.module.css";
import SummonerProfile from "./SummonerProfile";

// 매치기록 컴포넌트
const Match = ({ playerInformation, gameList, searchText, leagueList, profileIconID }) => {
    // 소환사가 속한 팀의 teamId들을 저장할 summonerTeamIdsOfGamelist 배열 생성
    // 소환사가 속한 팀의 전체 킬 수들을 저장할 killsOfGamelist 배열 생성
    // 소환사가 속한 팀의 승리 여부들을 저장할 summonerTeamIsWin 배열 생성
    const summonerTeamIdsOfGamelist = [];
    const killsOfGamelist = [];
    const summonerTeamIsWin = [];

    gameList.map((gameData) => (
        gameData.info.participants.map(participant => {
            // gameData안의 각 participant의 summonrName과 디코딩된 searchText값이 대소문자구분없이 같을 경우 
            if (participant.summonerName.toUpperCase() === (decodeURIComponent(searchText)).toUpperCase()) {
                // 검색된 소환사의 teamId를 summonerTeamIdsOfGamelist 배열에 추가 
                summonerTeamIdsOfGamelist.push(participant.teamId)
            }
        })
    ))

    gameList.map((gameData, index) => (
        gameData.info.teams.map(team => {
            // gameData의 팀들 중에서 검색된 소환사의 teamId를 비교 
            if (team.teamId === summonerTeamIdsOfGamelist[index]) {
                // 해당 팀의 전체 킬 수를 killsOfGamelist 배열에 추가
                // 해당 팀의 승리 여부를 summonerTeamIsWin 배열에 추가
                killsOfGamelist.push(team.objectives.champion.kills)
                summonerTeamIsWin.push(team.win)
            }
        })
    ))

    return (
        <>
            {searchText === '' ?
                <div></div> : 
                (
                    gameList.length !== 0 ? 
                    <>
                        <h3 className={styles["gameData-title"]}>검색결과</h3>
                        <SummonerProfile 
                            playerInformation={playerInformation}
                            gameList={gameList} 
                            searchText={searchText} 
                            leagueList={leagueList} 
                            profileIconID={profileIconID}
                        />
                        {
                            gameList.map((gameData, index) => (
                                // summonerTeamIsWin 배열의 해당 매치 기록의 승패를 확인하여 className을 변경
                                <div key={index} className={styles[`gameData-${summonerTeamIsWin[index] ? 'win' : 'lose'}-container`]}>
                                    <h4 className={styles['gameData-gamemode']}>{gameData.info.gameMode}</h4>
    
                                    <div className={styles['gameData-champion']}>
                                        {gameData.info.participants.map(participant => {
                                            // gameData안의 각 participant의 summonrName과 디코딩된 searchText값이 대소문자구분없이 같을 경우 
                                            if (participant.summonerName.toUpperCase() === (decodeURIComponent(searchText)).toUpperCase()) {
                                                return (
                                                    <div key={index}>
                                                        <img src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${participant.championName}.png`}/>
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

                                                        {/* participant.deaths가 0인 경우 평점이 제대로 나오지 않는 현상 발생, 삼항연산자로 0인 경우에 Perfect가 나오게 수정*/}
                                                        <p>{((participant.deaths === 0 ? "Perfect" : ((participant.kills + participant.assists) / participant.deaths).toFixed(2)))} 평점</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
    
                                    <div className={styles['gameData-individual']}>
                                        {/* 킬관여가 NaN으로 표기되는 현상 발생, map의 인자에 participant, index로 되어있는 것을 index를 제거, gameList의 index를 사용하도록 수정 */}
                                        {gameData.info.participants.map((participant) => {
                                            // gameData안의 각 participant의 summonrName과 디코딩된 searchText값이 대소문자구분없이 같을 경우
                                            if (participant.summonerName.toUpperCase() === (decodeURIComponent(searchText)).toUpperCase()) {
                                                return (
                                                    <div key={index}>
                                                        {/* 소환사의 킬과 어시스트의 합을 소환사가 속한 팀의 전체 킬수로 나누고, 비율을 구함 */}
                                                        <p>킬관여 : {((participant.kills + participant.assists) / killsOfGamelist[index] * 100).toFixed(0)}%</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
    
                                    <div className={styles['gameData-team']}>
                                        <div className={styles['gameData-team1']}>
                                            <p className={styles['gameData-teamtitle']}>Team 1</p>
                                            <ul>
                                                {/* 반복되는 코드가 많아 map을 사용 */}
                                                {gameData.info.participants.map((participant, index) => {
                                                    if (index < 5) {
                                                        return (
                                                            <li>
                                                                <img 
                                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${gameData.info.participants[index].championName}.png`}
                                                                    className={styles['gameData-championMiniFaceImg']}
                                                                />
                                                                <div className={styles['gameData-usersInfoBox']}>
                                                                    {/* 유저 닉네임 */}
                                                                    <div>{gameData.info.participants[index].summonerName}</div>
                                                                    {/* 각 유저들의 KDA */}
                                                                    <div>{gameData.info.participants[index].kills}/{gameData.info.participants[index].deaths}/{gameData.info.participants[index].assists} </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    }
                                                })}
                                            </ul>
                                        </div>
                                        <div className={styles['gameData-team2']}>
                                            <p className={styles['gameData-teamtitle']}>Team 2</p>
                                            <ul>
                                                {/* 반복되는 코드가 많아 map을 사용 */}
                                                {gameData.info.participants.map((participant, index) => {
                                                    if (index >= 5 && index < 10) {
                                                        return (
                                                            <li>
                                                                <img 
                                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${gameData.info.participants[index].championName}.png`}
                                                                    className={styles['gameData-championMiniFaceImg']}
                                                                />
                                                                <div className={styles['gameData-usersInfoBox']}>
                                                                    {/* 유저 닉네임 */}
                                                                    <div>{gameData.info.participants[index].summonerName}</div>
                                                                    {/* 각 유저들의 KDA */}
                                                                    <div>{gameData.info.participants[index].kills}/{gameData.info.participants[index].deaths}/{gameData.info.participants[index].assists} </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    }
                                                })}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                
                            ))
                        }
                    </> : null
                )
            }
            
        </>
    )
}

export default Match;
