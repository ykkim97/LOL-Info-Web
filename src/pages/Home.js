import React from "react";
import styles from "./Home.module.css";
import { FcSearch } from "react-icons/fc";
import Match from '../components/contents/Match';

const Home = ({ 
    searchText, 
    setSearchText,
    information, 
    gameList, 
    leagueList,
    getPlayerInformation,
    getPlayerGames,
    getPlayerLeague
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
            <Match information={information} gameList={gameList} searchText={searchText} leagueList={leagueList} />
        </>
    )
}

export default Home;