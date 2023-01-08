import React, { useEffect } from "react";
import styles from "./ActiveGames.module.css";
import { useSelector } from "react-redux";

const ActiveGames = ({
    activeGames,
    onErrorImg,
}) => {
    useEffect(() => {
        console.log(activeGames, "activeGames")
    }, [])

    return (
        <div>
            {typeof activeGames !== 'object' 
                ? <div className={styles['activeGames-Container']}>현재 게임중이 아닙니다.</div> 
                : <div className={styles['activeGames-Container']}>
                    <h3>{activeGames.gameMode}</h3>
                    {activeGames.participants?.map(participant => (
                        <>
                            <div className={styles[`participant-name`]}>{participant.summonerName}</div>
                        </>
                    ))}
                </div>
            }
        </div>
    )
}

export default ActiveGames;