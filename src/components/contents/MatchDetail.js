import React from "react";
import styles from "./MatchDetail.module.css";

// 매치 상세기록 컴포넌트
const MatchDetail = ({ gameData }) => {
    return (
        <div>
            {gameData.info.participants.map((participant, index) => {
                // 승리한 팀
                if (participant.win === true) {
                    return  (
                        <div className={styles[`gameData-detail-win-container`]}>
                            <div className={styles[`detail-list`]}>
                                {/* 소환사가 플레이한 챔피언의 이미지 */}
                                <div className={styles[`participant-img`]}>
                                    <img 
                                        src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${participant.championName}.png`}
                                        className={styles['gameData-championMiniFaceImg']}
                                    />
                                </div>
                                {/* 소환사명 */}
                                <div className={styles[`participant-name`]}>{participant.summonerName}</div>
                                {/* KDA */}
                                <div className={styles[`participant-kda`]}>{participant.kills}/{participant.deaths}/{participant.assists}</div>
                                {/* 챔피언에 가한 피해량 */}
                                <div className={styles[`participant-total-damage-champions`]}>챔피언 딜량 : {participant.totalDamageDealtToChampions}</div>
                                {/* CS수 */}
                                <div className={styles[`participant-total-minions-killed`]}>cs : {participant.totalMinionsKilled + participant.neutralMinionsKilled}</div>
                                {/* 와드 설치 */}
                                <div className={styles[`participant-total-wards-placed`]}>와드 설치 : {participant.wardsPlaced}</div>
                                {/* 아이템이미지 */}
                                <div className={styles[`participant-item`]}> 
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item0}.png`} />
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item1}.png`} />
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item2}.png`} />
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item3}.png`} />
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item4}.png`} />
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item5}.png`} />
                                </div>
                            </div>
                        </div>
                    )
                }
                // 패배한 팀
                if (participant.win === false) {           
                    return (
                        <div className={styles[`gameData-detail-lose-container`]}>
                            <div className={styles[`detail-list`]}>
                                {/* 소환사가 플레이한 챔피언의 이미지 */}
                                <div className={styles[`participant-img`]}>
                                    <img 
                                        src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${participant.championName}.png`}
                                        className={styles['gameData-championMiniFaceImg']}
                                    />
                                </div>
                                {/* 소환사명 */}
                                <div className={styles[`participant-name`]}>{participant.summonerName}</div>
                                {/* KDA */}
                                <div className={styles[`participant-kda`]}>{participant.kills}/{participant.deaths}/{participant.assists}</div>
                                {/* 챔피언에 가한 피해량 */}
                                <div className={styles[`participant-total-damage-champions`]}>챔피언 딜량 : {participant.totalDamageDealtToChampions}</div>
                                {/* CS수 */}
                                <div className={styles[`participant-total-minions-killed`]}>cs : {participant.totalMinionsKilled + participant.neutralMinionsKilled}</div>
                                {/* 와드 설치 */}
                                <div className={styles[`participant-total-wards-placed`]}>와드 설치 : {participant.wardsPlaced}</div>
                                {/* 아이템이미지 */}
                                <div className={styles[`participant-item`]}> 
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item0}.png`} />
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item1}.png`} />
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item2}.png`} />
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item3}.png`} />
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item4}.png`} />
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${participant.item5}.png`} />
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default MatchDetail;