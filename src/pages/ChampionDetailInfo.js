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
    let recommendedArray = []
    let recoSRItemArray = []

    const skillKeys = ['Q','W','E','R']; // 스킬 단축키

    const [skills, setSkills] = useState([]) // 챔피언 스킬 정보
    const [passive, setPassive] = useState({}) // 챔피언 패시브 정보
    const [skins, setSkins] = useState([]); // 챔피언 스킨 정보
    const [recoItem, setRecoItem] = useState([]); // 추천 아이템 정보

    // 챔피언세부정보를 요청하는 함수
    const getChampionDetail = async () => {
        const data = await axios.get(`https://ddragon.leagueoflegends.com/cdn/10.24.1/data/ko_KR/champion/${findChampionObject.id}.json`)
            .then((response) => response.data)
        championDetailArray.push(data)
        championDetailEntries = Object.values(championDetailArray[0].data)
        // console.log(championDetailEntries, "championDetailEntries")
        
        spellsArray = championDetailEntries[0].spells;
        passiveArray = championDetailEntries[0].passive;
        skinArray = championDetailEntries[0].skins;
        recommendedArray = championDetailEntries[0].recommended;

        recoSRItemArray = recommendedArray.find(reco => reco.mode === 'CLASSIC')
        // console.log(recoSRItemArray, "recoSRItemArray")

        setSkills([...spellsArray]);
        setPassive(passiveArray);
        setSkins([...skinArray]);
        setRecoItem(recoSRItemArray.blocks);
    }

    useEffect(() => {
        getChampionDetail(); // 챔피언세부정보를 요청하는 함수 실행
        // console.log(item, "item")
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
                <h2 className={styles['skillsContainer-title']}>스킬 정보</h2>
                {/* 패시브 */}
                <div className={styles['skillsContainer-descriptionBox']}>
                    <h4>{passive.name} (Passive)</h4>
                    {passive.description}
                </div>
                {/* Q, W, E, R 스킬 */}
                {skills.map((skill, index) => (
                    <div key={index} className={styles['skillsContainer-descriptionBox']}>
                        <h4>{skill.name} ({skillKeys[index]})</h4>
                        {skill.description}
                    </div>
                ))}
            </div>

            <div>
                <h2 className={styles['recommendedItem-title']}>추천 아이템</h2>
                <div>
                    {recoItem.map((block, index) => {
                        return (
                            // 추천아이템정보가 담겨있는 recoItem을 map으로 반복
                            <div key={index} className={styles['recommendedItem-container']}>
                                <h3 id={styles['item-type']}>{block.type}</h3>
                                {block.items.map(reco => {
                                    // 모든아이템 정보가 담겨있는 item에서 item.data의 key값은 각 아이템의 id값을 나타내고 있음.
                                    let itemName = '';
                                    for (let key in item.data) {
                                        // 추천아이템의 id값인 reco.id와 item.data의 key값을 비교해서 서로 같으면 그 아이템의 이름을 itemName에 저장함.
                                        if (key === reco.id) itemName = item.data[key].name
                                    }

                                    return (
                                        <div className={styles['item-container']}>
                                            {/* 추천아이템 이미지 */}
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${reco.id}.png`} />
                                            {/* 추천아이템 이름 */}
                                            <h5>{itemName}</h5>
                                        </div>
                                    )
                                })}
                            </div>
                            
                        )
                    })}
                </div>
            </div>
        </>
        
    )
}

export default ChampionDetailInfo;