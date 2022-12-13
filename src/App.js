import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import championData from "./Data/Champions/ChampionData.js";
import Templete from './components/Templete';
import Home from './pages/Home';
import ChampionInfo from './pages/ChampionInfo';
import ChampionDetailInfo from './pages/ChampionDetailInfo.js';
import NoImage from "./Data/Etc/NoImage.jpg";
import ItemInfo from './pages/ItemInfo.js';
import ItemDetailInfo from './pages/ItemDetailInfo.js';

// App
function App() {
  const [searchText, setSearchText] = useState(''); // 검색문자열
  const [playerInformation, setPlayerInformation] = useState([]); // 소환사 정보가 들어갈 Array
  const [gameList, setGameList] = useState([]); // 매치정보가 들어갈 Array
  const [leagueList, setLeagueList] = useState([]); // 소환사 리그정보(티어정보)가 들어갈 Array
  const [item, setItem] = useState([]); // 아이템 정보

    // 아이템 정보를 가져오는 함수
    const getItemInfomation = () => {
        axios.get('http://localhost:4000/item')
        .then(response => {
            setItem(response.data);
        })
        .catch(error => console.log(error));
    }

    // 소환사 정보를 가져오는 함수
    const getPlayerInformation = () => {
        axios.get('http://localhost:4000/playerInformation', {params : {searchText : searchText}})
        .then((response) => {
            setPlayerInformation(response.data);
        })
        .catch((error) => console.log(error));
    }

    // 매치정보를 가져오는 함수
    const getPlayerGames = () => {
        axios.get('http://localhost:4000/past10Games', {params : {searchText : searchText}}) // params 추가(검색기능)
        .then((response) => {
            setGameList(response.data);
        })
        .catch((error) => console.log(error));
    }

  // 소환사 리그정보를 가져오는 함수
    const getPlayerLeague = () => {
        axios.get('http://localhost:4000/tier', {params : {searchText : searchText}})
        .then((response) => {
            setLeagueList(response.data);
        })
        .catch((error) => console.log(error));
    }

    // 이미지 에러 시 처리를 위한 함수
    const onErrorImg = (e) => {
        e.target.src = NoImage;
    }

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
                            playerInformation={playerInformation}
                            gameList={gameList}
                            leagueList={leagueList}
                            getPlayerInformation={getPlayerInformation}
                            getPlayerGames={getPlayerGames}
                            getPlayerLeague={getPlayerLeague}
                            getItemInfomation={getItemInfomation}
                            onErrorImg={onErrorImg}
                        />
                    }
                ></Route>

                {/* Route => /championInfo */}
                <Route 
                    path='/championInfo' 
                    element={
                        <ChampionInfo 
                            championData={championData}
                            onErrorImg={onErrorImg}
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
                            onErrorImg={onErrorImg}
                        />
                    }
                ></Route>

                {/* Route => /item */}
                <Route
                    path='/item'
                    element={
                        <ItemInfo 
                            onErrorImg={onErrorImg}
                        />
                    }
                ></Route>

                {/* Route => /item/:id */}
                <Route
                    path='/item/:id'
                    element={
                        <ItemDetailInfo 
                            item={item}
                            onErrorImg={onErrorImg}
                        />
                    }
                ></Route>
            </Routes>
        </Templete>
    );
}

export default App;
