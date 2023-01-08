import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import { FcSearch } from "react-icons/fc";
import Match from '../components/contents/Home/Match';
import TypeIt from "typeit-react";

// 메인페이지 컴포넌트 (홈 컴포넌트)
const Home = ({ 
    searchText, 
    setSearchText,
    playerInformation, 
    proficiency,
    gameList, 
    leagueList,
    activeGames,
    getPlayerInformation,
    getPlayerGames,
    getPlayerLeague,
    getProficiency,
    onErrorImg,
    getActiveGames,
}) => {
    const searchInputRef = useRef(); // 검색창에 focus를 주기위해 useRef()를 사용하여 searchInputRef에 담기
    const [nickname, setNickname] = useState(''); // searchText를 새로 저장하기 위해 nickname을 만듬

    // 검색버튼 onClick 함수
    const searchClick = () => {
        getPlayerInformation();
        getPlayerGames();
        getPlayerLeague();
        getProficiency();
        getActiveGames();
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

    useEffect(() => {
        searchInputRef.current.focus(); // 첫 렌더링 시에 focus를 주도록 함.
    }, [])

    return (
        <>
            <div className={styles['search-container']}>
                <TypeIt
                    options={{
                        strings: ["LOLY.GG"],
                        speed : 100,
                        cursor : false,
                    }}
                    className={styles['page-title']}
                >LOLY.GG</TypeIt>
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
                    spellCheck="false"
                    ref={searchInputRef}
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
                    proficiency={proficiency}
                    gameList={gameList} 
                    leagueList={leagueList} 
                    onErrorImg={onErrorImg}
                    nickname={nickname}
                    activeGames={activeGames}
                />
            </div>
        </>
    )
}

export default Home;