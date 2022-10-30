import './App.css';
import GetData from './components/GetData';

const API_KEY = 'RGAPI-670c28b3-44fa-4190-9b61-384446f6a273';

function App() {
  return (
    <div className="App">
      <h1>LOL 전적</h1>
      <GetData API_KEY={API_KEY}/>
    </div>
  );
}

export default App;
