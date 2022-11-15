import React from "react";
import styles from "./Home.module.css";
import { FcSearch } from "react-icons/fc";
import Match from '../components/contents/Match';

const Home = ({ 
    searchText, 
    setSearchText,
    item,
    information, 
    gameList, 
    leagueList,
    getPlayerInformation,
    getPlayerGames,
    getPlayerLeague,
    getItemInfomation
}) => {
    return (
        <>
            <div className={styles['search-container']}>
                <h1>LOLY.GG</h1>
                <input 
                    type="text" 
                    className={styles['app-searchBox']}
                    onChange={(e) => {
                        setSearchText((prev) => {
                        return prev = encodeURIComponent(e.target.value)
                        });
                    }} 
                />
                <button onClick={() => {
                    getPlayerInformation();
                    getPlayerGames();
                    getPlayerLeague();
                }} className={styles['app-searchButton']} >
                <FcSearch className={styles['app-searchButton-icons']}/>
                </button>
            </div>
            <div className={styles['empty-container']}>
                <Match information={information} gameList={gameList} searchText={searchText} leagueList={leagueList} />
            </div>
        </>
    )
}

export default Home;