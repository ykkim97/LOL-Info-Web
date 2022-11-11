import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChampionInfo.module.css"

const ChampionInfo = (
    championData
) => {
    
    const values = Object.values(championData.championData[0])
    const championNameArray = Object.keys(values[3]) // 챔피언명만 담긴 배열
    const championObjectArray = Object.values(values[3]) // 챔피언정보가 담긴 객체들의 배열

    const navigate = useNavigate();

    return (
        <>
            <h3 className={styles['championInfo-title']}>챔피언</h3>
            <div className={styles['championInfo-container']}>
                {championObjectArray.map((championName, index) => {
                    return (
                        <div 
                            className={styles['championInfo-champContainer']} 
                            key={index}
                            onClick={() => {navigate(`/championInfo/${championObjectArray[index].key}`)}}
                        >
                            <img 
                                src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${championObjectArray[index].id}.png`} 
                                className={styles['championInfo-img']}
                            />
                            <div>{championObjectArray[index].name}</div>
                        </div>
                    )})}
            </div>
            
        </>
    )
}

export default ChampionInfo;