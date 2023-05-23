import { useState, useEffect } from 'react'
import './App.css'
import characters from './characters/characters.jsx'
import Card from './components/Card.jsx';

const initialHighscore = localStorage.getItem('highscore') !== null ? localStorage.getItem('highscore') : 0;

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(initialHighscore);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    localStorage.setItem('highscore', highscore);
  }, [highscore])

  characters.sort(() => Math.random() - 0.5);

  function handleCardSelect(e) {
    if (selected.includes(e.target.alt)) {
      setScore(0);
      setSelected([]);
    } else {
      setScore(s => s+1);
      if (score + 1 > highscore) setHighscore(score + 1);
      setSelected([...selected, e.target.alt]);
    }
  }

  return (
    <>
      <div className="logo">
        <img src="https://i.ibb.co/G5fRrtj/logo.png" alt="logo" />
      </div>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Highscore: {highscore}</p>
      </div>
      <div className="characters">
        {characters.map((char) => <Card character={char} onSelect={handleCardSelect} key={char.name}/>)}
      </div>
    </>
  )
}

export default App
