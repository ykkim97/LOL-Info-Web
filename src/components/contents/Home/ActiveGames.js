import React, { useEffect } from "react";
import styles from "./ActiveGames.module.css";
import ChampionData from "../../../Data/Champions/ChampionData";

const ActiveGames = ({
    activeGames,
    onErrorImg,
}) => {
    useEffect(() => {
        console.log(activeGames, "activeGames")
    }, [])

    const championDataArray = Object.values(ChampionData[0].data); // 모든챔피언데이터 Object를 Array로 변환
    const bannedChampionArray = []; // 밴된 챔피언 이미지경로값을 담을 Array
    const playingChampionArray = []; // 플레이중인 챔피언을 담을 Array

    return (
        <div>
            {typeof activeGames !== 'object' 
                ? <div className={styles['activeGames-Container']}>현재 게임중이 아닙니다.</div> 
                : <div className={styles['activeGames-Container']}>
                    {/* 게임 모드 */}
                    <h3 id={styles['gameMode']}>
                        {activeGames.gameMode}
                    </h3>
                    {/* 밴픽 */}
                    <div className={styles['banned-Container']}>
                        {activeGames.bannedChampions?.map((champion, index) => {
                            championDataArray.forEach((obj) => {
                                if (obj.key == champion.championId) {
                                    bannedChampionArray.push(obj.image.full);
                                }
                            })
                            return (
                                <img 
                                    src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${bannedChampionArray[index]}`}
                                    onError={onErrorImg}
                                    className={styles['banned-Champions']}
                                />
                            )
                        })}
                    </div>
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
                                {/* TODO: 참가자 랭크정보를 얻을 수 있는 방법 찾기 */}
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default ActiveGames;