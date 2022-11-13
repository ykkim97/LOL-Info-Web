import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ChampionDetailInfo.module.css";

const ChampionDetailInfo = ({
    championData
}) => {
    const { id } = useParams();
    const championArray = Object.values(championData[0].data)

    let findChampionObject = championArray.find(item => item.key === id);
    // console.log(findChampionObject, "findChampionObject")

    const statsArray = Object.entries(findChampionObject.stats);
    const championDetailArray = []
    let championDetailEntries = []
    let spellsArray = []

    const getChampionDetail = async () => {
        const data = await axios.get(`https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/champion/${findChampionObject.id}.json`)
            .then((response) => response.data)
        championDetailArray.push(data)
        // console.log(championDetailArray)
        championDetailEntries = Object.values(championDetailArray[0].data)
        // console.log(championDetailEntries[0].spells, "championDetailEntries")
        spellsArray = championDetailEntries[0].spells;
        console.log(spellsArray)
    }

    useEffect(() => {
        getChampionDetail();
    }, [])

    return (
        <>
            <div className={styles['championDetailInfo-profileContainer']}>
                <div className={styles['championDetailInfo-profile']}>
                    <img 
                        src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${findChampionObject.id}.png`} 
                        id={styles['championDetailInfo-img']}
                    />
                    <h1 id={styles['champion-name']}>{findChampionObject.name}</h1>
                    <h3 id={styles['champion-title']}>{findChampionObject.title}</h3>
                    <div id={styles['champion-blurb']}>{findChampionObject.blurb}</div>
                </div>
            
                <div className={styles['championDetailInfo-stats']}>
                    {statsArray.map((stat, index) => (
                        <div key={index} className={styles['stats-contents']}>
                            <div>{stat[0]}</div>
                            <div>{stat[1]}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles['championDetailInfo-skillsContainer']}>
                <h3>스킬정보</h3>
                
            </div>
        </>
        
    )
}

export default ChampionDetailInfo;