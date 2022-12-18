import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./RotationChampion.module.css";

const RotationChampions = ({
    onErrorImg,
    championObjectArray,
}) => {
    const [rotationChampion, setRotationChampion] = useState([]); // 로테이션 챔피언정보가 들어갈 Array
    let findResult = []; // 로테이션 챔피언의 영문명을 담을 Array

    // 로테이션챔피언 id를 불러오는 함수
    const getRotationData = () => {
        axios.get('http://localhost:4000/rotation')
            .then((response) => response.data)
            .then(result => setRotationChampion(result))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getRotationData();
    }, [])

    return (
        <>
            <h3 className={styles['rotation-title']}>이번 주 로테이션챔피언</h3>
            <div div className={styles['rotation-Container']}>
                {rotationChampion.freeChampionIds?.map((id, index) => {
                    championObjectArray?.forEach(obj => {
                        if (obj.key == id) findResult.push(obj.id)
                    })
                    return <div>
                        <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${findResult[index]}.png`} 
                            onError={onErrorImg}
                            className={styles[`rotation-championImg`]}
                            alt={findResult[index]}
                        />
                    </div>
                })}
            </div>
        </>
    )
}

export default RotationChampions;