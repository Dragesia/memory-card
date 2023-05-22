import { useState } from 'react'
import './App.css'
import characters from './characters/characters.jsx'
import Card from './Components/Card';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [selected, setSelected] = useState([]);

  characters.sort(() => Math.random() - 0.5);

  function handleCardSelect() {
    return null;
  }

  return (
    <>
      <div className="characters">
        {characters.map((char) => <Card character={char} onSelect={handleCardSelect} key={char.name}/>)}
      </div>
    </>
  )
}

export default App
