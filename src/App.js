import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Match from './components/Match';

function App() {
  const [searchText, setSearchText] = useState(''); // 검색문자열
  const [gameList, setGameList] = useState([]); // 매치정보가 들어갈 Array

  const getPlayerGames = (e) => {
    axios.get('http://localhost:4000/past5Games')
      .then((response) => {
        setGameList(response.data);
      })
      .catch((error) => console.log(error));
  }

  console.log(gameList);

  return (
    <div className="App">
      <div className='search-container'>
        <h1>LOL 전적</h1>
        <input type="text" onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={getPlayerGames}>최근 5게임의 정보 검색</button>
      </div>
      <Match gameList={gameList}/>
    </div>
  );
}

export default App;
