import React, { useState } from "react";
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
    onErrorImg,
}) => {
    // searchText를 새로 저장하기 위해 nickname을 만듬
    const [nickname, setNickname] = useState('');


    // 검색버튼 onClick 함수
    const searchClick = () => {
        getPlayerInformation();
        getPlayerGames();
        getPlayerLeague();
        // 검색할 닉네임을 타이핑하고 클릭을 누를 경우 최종 검색할 닉네임을 nickname에 저장하도록 한다.
        // 이후 nickname값을 Match 컴포넌트에 props로 전달한다.
        setNickname(searchText); 
    }

    // Enter키로도 검색할 수 있도록 하기위한 함수
    const onEnterPress = (e) => {
        if (e.key == 'Enter') {
            searchClick();
        }
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
                    onKeyPress={onEnterPress}
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
                    leagueList={leagueList} 
                    onErrorImg={onErrorImg}
                    nickname={nickname}
                />
            </div>
        </>
    )
}

export default Home;