import React, { useState } from "react";
import styles from "./Proficiency.module.css";
import championData from "../../../Data/Champions/ChampionData";

// 챔피언 숙련도 컴포넌트
const Proficiency = ({ 
    proficiency,
    onErrorImg
}) => {
    const findChampion = []; // 찾은 챔피언 id(챔피언 영문명)이 들어갈 Array
    const findChampionName = []; // 찾은 챔피언명(챔피언 한글명)이 들어갈 Array
    const championDataArray = Object.values(championData[0].data);
    return (
        <>
            <h3 className={styles['proficiency-title']}>챔피언 숙련도 TOP 3</h3>
            <section className={styles['proficiency-Container']}>
                {proficiency?.map(((champion, index) => {
                    if (index < 3) {
                        championDataArray.forEach(obj => {
                            if (champion.championId == obj.key) {
                                findChampion.push(obj.id);
                                findChampionName.push(obj.name);
                            }
                        })
                        return (
                            <article className={styles['proficiency-championData']}>
                                <h2 className={styles['proficiency-rank']}>TOP {index + 1}</h2>
                                <div className={styles['proficiency-infoContainer']}>
                                    <img 
                                        src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${findChampion[index]}.png`}
                                        onError={onErrorImg}
                                        className={styles['proficiency-image']}
                                        alt={findChampion[index]}
                                    />
                                    <div className={styles['proficiency-info']}>
                                        <h2>{findChampionName[index]}</h2>
                                        <h3>숙련도 {champion.championLevel} 레벨</h3>
                                        <h3>{champion.championPoints} 포인트</h3>
                                    </div>
                                </div>
                            </article>
                        )
                    }
                }))}
            </section>
        </>
    )
}

export default Proficiency;