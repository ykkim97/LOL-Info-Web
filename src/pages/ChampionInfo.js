import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RotationChampions from "../components/contents/ChampionInfo/RotationChampions";
import styles from "./ChampionInfo.module.css"
import useDidMountEffect from "../useDidMountEffect";

// 챔피언 정보 컴포넌트
const ChampionInfo = (
    championData,
    onErrorImg
) => {
    const [rotationChampion, setRotationChampion] = useState([]); // 로테이션 챔피언정보가 들어갈 Array
    
    const values = Object.values(championData.championData[0])
    const championObjectArray = Object.values(values[3]) // 챔피언정보가 담긴 객체들의 배열

    const navigate = useNavigate();

    // 로테이션챔피언 id를 불러오는 함수
    const getRotationData = () => {
        axios.get('http://localhost:4000/rotation')
            .then((response) => {
                return response.data;
            })
            .then((result) => {
                setRotationChampion(result);
            })
            .catch((error) => console.log(error));
    }

    // useEffect(() => {
    //     getRotationData();
    // }, [])

    useDidMountEffect(() => {
        getRotationData();
    }, [rotationChampion])

    return (
        <>
            <h3 className={styles['championInfo-title']}>챔피언</h3>
            {/* 로테이션 챔피언정보 */}
            <div>
                <RotationChampions 
                    onErrorImg={onErrorImg} 
                    championObjectArray={championObjectArray} 
                    rotationChampion={rotationChampion} 
                />
            </div>
            {/* 챔피언 리스트 */}
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
                                onError={onErrorImg}
                                alt={championObjectArray[index].id}
                            />
                            <div>{championObjectArray[index].name}</div>
                        </div>
                    )})
                }
            </div>
        </>
    )
}

export default ChampionInfo;