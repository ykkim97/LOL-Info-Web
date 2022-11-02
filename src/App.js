import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./App.module.css";
import Match from './components/Match';
import { FcSearch } from "react-icons/fc";

function App() {
  const [searchText, setSearchText] = useState(''); // 검색문자열
  const [gameList, setGameList] = useState([]); // 매치정보가 들어갈 Array

  const getPlayerGames = (e) => {
    axios.get('http://localhost:4000/past5Games', {params : {searchText : searchText}}) // params 추가(검색기능)
      .then((response) => {
        setGameList(response.data);
      })
      .catch((error) => console.log(error));
  }

  console.log(gameList);

  return (
    <div className={styles["App"]}>
      <div className={styles['search-container']}>
        <h1>LOLY.GG</h1>

        <input 
          type="text" 
          className={styles['app-searchBox']}
          onChange={(e) => {
            setSearchText(encodeURIComponent(e.target.value));
          }} 
        />
        <button onClick={getPlayerGames} className={styles['app-searchButton']} >
          <FcSearch className={styles['app-searchButton-icons']}/>
        </button>
      </div>
      <Match gameList={gameList} searchText={searchText}/>
    </div>
  );
}

export default App;
