import React from "react";
import ChampionListComponent from "../components/contents/ChampionInfo/ChampionListComponent";
import RotationChampions from "../components/contents/ChampionInfo/RotationChampions";
import styles from "./ChampionInfo.module.css";

// 챔피언 정보 컴포넌트
const ChampionInfo = (
    championData,
    onErrorImg,
) => {
    const values = Object.values(championData.championData[0]); // 데이터 가공을 위해 value값만 뽑아냄
    const championObjectArray = Object.values(values[3]); // 챔피언정보가 담긴 객체들의 배열

    return (
        <>
            <h3 className={styles['championInfo-title']}>챔피언</h3>
            {/* 로테이션 챔피언정보 */}
            <div>
                <RotationChampions 
                    onErrorImg={onErrorImg} 
                    championObjectArray={championObjectArray} 
                />
            </div>
            {/* 챔피언 리스트 */}
            <div className={styles['championInfo-container']}>
                <ChampionListComponent 
                    onErrorImg={onErrorImg} 
                    championObjectArray={championObjectArray}
                />
            </div>
        </>
    )
}

export default ChampionInfo;