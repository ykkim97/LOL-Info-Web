import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./App.module.css";
import Match from './components/contents/Match';
import { FcSearch } from "react-icons/fc";
import championData from "./Data/Champions/ChampionData.js";
import Templete from './components/Templete';

function App() {
  const [searchText, setSearchText] = useState(''); // 검색문자열
  const [information, setInformation] = useState([]); // 소환사 정보가 들어갈 Array
  const [gameList, setGameList] = useState([]); // 매치정보가 들어갈 Array
  const [leagueList, setLeagueList] = useState([]); // 소환사 리그정보(티어정보)가 들어갈 Array

  // 소환사 정보를 가져오는 함수
  const getPlayerInformation = (e) => {
    axios.get('http://localhost:4000/information', {params : {searchText : searchText}})
      .then((response) => {
        setInformation(response.data);
      })
      .catch((error) => console.log(error));
  }

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

  console.log(information, "information"); // 소환사 정보
  console.log(gameList, "gameList"); // 매치 정보
  console.log(leagueList, "leagueList") // 소환사 리그정보(티어정보)
  console.log(championData, "championData"); // 챔피언데이터가 들어있는 Array

  return (
    <Templete>
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
    </Templete>
  );
}

export default App;
