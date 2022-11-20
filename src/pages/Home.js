import React from "react";
import styles from "./Home.module.css";
import { FcSearch } from "react-icons/fc";
import Match from '../components/contents/Match';

// 메인페이지 컴포넌트 (홈 컴포넌트)
const Home = ({ 
    searchText, 
    setSearchText,
    playerInformation, 
    gameList, 
    leagueList,
    getPlayerInformation,
    getPlayerGames,
    getPlayerLeague,
}) => {

    // 검색버튼 onClick 함수
    const searchClick = () => {
        getPlayerInformation();
        getPlayerGames();
        getPlayerLeague();
    }

    return (
        <>
            <div className={styles['search-container']}>
                <h1>LOLY.GG</h1>
                {/* 소환사 검색창 */}
                <input 
                    type="text" 
                    className={styles['app-searchBox']}
                    onChange={(e) => {
                        setSearchText((prev) => {
                            return prev = encodeURIComponent(e.target.value);
                        });
                    }} 
                />
                {/* 검색버튼 */}
                <button onClick={searchClick} className={styles['app-searchButton']} >
                    <FcSearch className={styles['app-searchButton-icons']}/>
                </button>
            </div>
            
            {/* 매치기록 */}
            <div className={styles['match-record']}>
                <Match 
                    playerInformation={playerInformation} 
                    gameList={gameList} 
                    searchText={searchText} 
                    leagueList={leagueList} 
                />
            </div>
        </>
    )
}

export default Home;