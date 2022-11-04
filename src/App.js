import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./App.module.css";
import Match from './components/Match';
import { FcSearch } from "react-icons/fc";
import championData from "./Data/Champions/ChampionData.js";

function App() {
  const [searchText, setSearchText] = useState(''); // 검색문자열
  const [gameList, setGameList] = useState([]); // 매치정보가 들어갈 Array
  const [leagueList, setLeagueList] = useState([]); // 소환사 리그정보(티어정보)가 들어갈 Array
  const [profileIconID, setProfileIconID] = useState(); // 소환사 프로필아이콘 ID값

  // 매치정보를 가져오는 함수
  const getPlayerGames = (e) => {
    axios.get('http://localhost:4000/past5Games', {params : {searchText : searchText}}) // params 추가(검색기능)
      .then((response) => {
        setGameList(response.data);
      })
      .catch((error) => console.log(error));
  }

  // 소환사 리그정보를 가져오는 함수
  const getPlayerLeague = (e) => {
    axios.get('http://localhost:4000/tier', {params : {searchText : searchText}})
      .then((response) => {
        setLeagueList(response.data);
      })
      .catch((error) => console.log(error));
  }

  // 소환사 프로필아이콘ID를 가져오는 함수
  const getPlayerprofileID = (e) => {
    axios.get('http://localhost:4000/profileIcon', {params : {searchText : searchText}})
      .then((response) => {
        setProfileIconID(response.data);
      })
      .catch(error => console.log(error));
  }

  console.log(gameList, "gameList"); // 매치 정보
  console.log(leagueList, "leagueList") // 소환사 리그정보(티어정보)
  console.log(championData, "championData"); // 챔피언데이터가 들어있는 Array

  return (
    <div className={styles["App"]}>
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
          getPlayerGames();
          getPlayerLeague();
          getPlayerprofileID();
        }} className={styles['app-searchButton']} >
          <FcSearch className={styles['app-searchButton-icons']}/>
        </button>
      </div>
      <Match gameList={gameList} searchText={searchText} leagueList={leagueList} profileIconID={profileIconID}/>
    </div>
  );
}

export default App;
