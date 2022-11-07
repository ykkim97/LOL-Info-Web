import React from "react";
import styles from "./ChampionInfo.module.css"

const ChampionInfo = (
    championData
) => {
    const values = Object.values(championData.championData[0])
    // console.log(values[3], "values")
    const name = Object.keys(values[3])
    // console.log(name)
    return (
        <>
            <h3 className={styles['championInfo-title']}>챔피언</h3>
            <div className={styles['championInfo-container']}>
                {name.map(championName => (
                    <div className={styles['championInfo-champContainer']}>
                        <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/${championName}.png`} 
                            className={styles['championInfo-img']}
                        />
                        <div>{championName}</div>
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default ChampionInfo;