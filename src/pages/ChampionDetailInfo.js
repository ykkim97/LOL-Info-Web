import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ChampionDetailInfo.module.css";

const ChampionDetailInfo = ({
    championData,
    item
}) => {
    const { id } = useParams();
    const championArray = Object.values(championData[0].data)

    let findChampionObject = championArray.find(item => item.key === id);
    // console.log(findChampionObject, "findChampionObject")

    const statsArray = Object.entries(findChampionObject.stats);
    const championDetailArray = []
    let championDetailEntries = []
    let spellsArray = []
    let passiveArray = []
    let skinArray = []

    const skillKeys = ['Q','W','E','R']; // 스킬 단축키

    const [skills, setSkills] = useState([]) // 챔피언 스킬 정보
    const [passive, setPassive] = useState({}) // 챔피언 패시브 정보
    const [skins, setSkins] = useState([]); // 챔피언 스킨 정보

    // 챔피언세부정보를 요청하는 함수
    const getChampionDetail = async () => {
        const data = await axios.get(`https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/champion/${findChampionObject.id}.json`)
            .then((response) => response.data)
        championDetailArray.push(data)
        championDetailEntries = Object.values(championDetailArray[0].data)
        console.log(championDetailEntries, "championDetailEntries")
        
        spellsArray = championDetailEntries[0].spells;
        passiveArray = championDetailEntries[0].passive;
        skinArray = championDetailEntries[0].skins;

        setSkills([...spellsArray]);
        setPassive(passiveArray);
        setSkins([...skinArray]);
    }

    useEffect(() => {
        getChampionDetail(); // 챔피언세부정보를 요청하는 함수 실행
        console.log(item, "item")
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
                <h2>스킬 정보</h2>
                {/* 패시브 */}
                <div>
                    <h4>{passive.name} (Passive)</h4>
                    {passive.description}
                </div>
                {/* Q, W, E, R 스킬 */}
                {skills.map((skill, index) => (
                    <div key={index}>
                        <h4>{skill.name} ({skillKeys[index]})</h4>
                        {skill.description}
                    </div>
                ))}
            </div>

            <div>
                <h2>추천 아이템</h2>
                <div>
                </div>
            </div>
        </>
        
    )
}

export default ChampionDetailInfo;