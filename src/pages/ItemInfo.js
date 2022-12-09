import React, { useEffect, useState } from "react";
import styles from "./ItemInfo.module.css";
import axios from "axios";

const ItemInfo = ({ 
    onErrorImg 
}) => {
    const [itemArray, setItemArray] = useState([]);

    // 아이템 정보를 가져오는 함수
    const getItemInfomation = () => {
        axios.get('http://localhost:4000/item')
        .then(response => {
            setItemArray(Object.values(response.data.data));
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getItemInfomation();
        console.log(itemArray)
    }, [])

    return (
        <>
            <h3 className={styles['ItemInfo-title']}>아이템</h3>
            <div className={styles['ItemInfo-container']}>
                {itemArray.map(it => (
                    <div className={styles['ItemInfo-item']}>
                        <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${it.image.full}`} 
                            onError={onErrorImg} 
                            alt={it.name} 
                            className={styles['item-img']}
                        />
                        <h4>{it.name}</h4>
                        {/* TODO: 아이템 상세컴포넌트 개발 후 링크 연결하기 */}
                    </div>
                ))}
            </div>
        </>
    )
}

export default ItemInfo;