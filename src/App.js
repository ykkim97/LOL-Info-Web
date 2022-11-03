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

  const getPlayerGames = (e) => {
    axios.get('http://localhost:4000/past5Games', {params : {searchText : searchText}}) // params 추가(검색기능)
      .then((response) => {
        setGameList(response.data);
      })
      .catch((error) => console.log(error));
  }

  console.log(gameList); // 매치 정보

  const getPlayerLeague = (e) => {
    axios.get('http://localhost:4000/tier', {params : {searchText : searchText}})
      .then((response) => {
        setLeagueList(response.data);
      })
      .catch((error) => console.log(error));
  }

  console.log(leagueList) // 소환사 리그정보(티어정보)
  console.log(championData[0]); // 챔피언데이터가 들어있는 Array

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
        }} className={styles['app-searchButton']} >
          <FcSearch className={styles['app-searchButton-icons']}/>
        </button>
      </div>
      
      <Match gameList={gameList} searchText={searchText} leagueList={leagueList}/>
    </div>
  );
}

export default App;
