import { useEffect, useState } from 'react';
import axios from 'axios';
import championData from "./Data/Champions/ChampionData.js";
import Templete from './components/Templete';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ChampionInfo from './pages/ChampionInfo';
import ChampionDetailInfo from './pages/ChampionDetailInfo.js';

function App() {
  const [searchText, setSearchText] = useState(''); // 검색문자열
  const [information, setInformation] = useState([]); // 소환사 정보가 들어갈 Array
  const [gameList, setGameList] = useState([]); // 매치정보가 들어갈 Array
  const [leagueList, setLeagueList] = useState([]); // 소환사 리그정보(티어정보)가 들어갈 Array
  const [item, setItem] = useState([]); // 아이템 정보

  // 아이템 정보를 가져오는 함수
  const getItemInfomation = () => {
    return axios.get('http://localhost:4000/item')
      .then(response => {
        setItem(response.data);
      })
      .catch(error => console.log(error));
  }

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

  // console.log(information, "information"); // 소환사 정보
  // console.log(gameList, "gameList"); // 매치 정보
  // console.log(leagueList, "leagueList") // 소환사 리그정보(티어정보)
  // console.log(championData, "championData"); // 챔피언데이터가 들어있는 Array
  // console.log(item, "item") // 아이템 정보

  useEffect(() => {
    getItemInfomation();
  }, [])

  return (
    <Templete>
      <Routes>

        {/* Route => / */}
        <Route 
          path='/' 
          element={
            <Home 
              searchText={searchText} 
              setSearchText={setSearchText}
              item={item}
              information={information}
              gameList={gameList}
              leagueList={leagueList}
              getPlayerInformation={getPlayerInformation}
              getPlayerGames={getPlayerGames}
              getPlayerLeague={getPlayerLeague}
              getItemInfomation={getItemInfomation}
            />
          }
        ></Route>

        {/* Route => /championInfo */}
        <Route 
          path='/championInfo' 
          element={
            <ChampionInfo 
              championData={championData}
            />
          }>
        </Route>

        {/* Route => /championInfo/:id */}
        <Route
          path='/championInfo/:id'
          element={
            <ChampionDetailInfo
              championData={championData}
              item={item}
            />
          }
        ></Route>

      </Routes>
    </Templete>
  );
}

export default App;
