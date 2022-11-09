import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ChampionDetailInfo.module.css";

const ChampionDetailInfo = ({
    championData
}) => {
    const { id } = useParams();
    const championArray = Object.values(championData[0].data)
    // console.log(championArray, "championArray")

    let findChampionObject = championArray.find(item => item.key === id);
    console.log(findChampionObject, "findChampionObject")

    const statsArray = Object.entries(findChampionObject.stats);
    
    return (
        <div className={styles['championDetailInfo-container']}>
            <img 
                src={`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/${findChampionObject.id}.png`} 
                id={styles['championDetailInfo-img']}
            />
            <h1 id={styles['champion-name']}>{findChampionObject.name}</h1>
            <h3 id={styles['champion-title']}>{findChampionObject.title}</h3>
            <div id={styles['champion-blurb']}>{findChampionObject.blurb}</div>

            <div className={styles['championDetailInfo-stats']}>
                {statsArray.map((stat, index) => (
                    <div key={index} className={styles['stats-contents']}>
                        <div>{stat[0]}</div>
                        <div>{stat[1]}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChampionDetailInfo;