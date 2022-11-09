import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChampionInfo.module.css"

let urlID = 0;

const ChampionInfo = (
    championData
) => {
    const values = Object.values(championData.championData[0])
    console.log(values[3], "values")
    const name = Object.keys(values[3])
    const test = Object.values(values[3])
    console.log(name)
    console.log(test)

    const navigate = useNavigate();

    return (
        <>
            <h3 className={styles['championInfo-title']}>챔피언</h3>
            <div className={styles['championInfo-container']}>
                {name.map((championName, index) => {
                    return (
                        <div 
                            className={styles['championInfo-champContainer']} 
                            key={index}
                            onClick={() => {navigate(`/championInfo/${test[index].key}`)}}
                        >
                            <img 
                                src={`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/${championName}.png`} 
                                className={styles['championInfo-img']}
                            />
                            <div>{championName}</div>
                        </div>
                    )})}
            </div>
            
        </>
    )
}

export default ChampionInfo;