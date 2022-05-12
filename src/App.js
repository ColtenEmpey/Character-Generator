import React, {useState} from 'react';
import './App.css';

//COMPONENTS
import Header from "./components/Header.js"
import CreateCharacter from './components/CreateCharacter';
import Characters from './components/Characters';
import FallenCharacters from './components/FallenCharacters';

//background images
import fallenWorrior from "./images/backgrounds/fallenWorrior.jpg"
import gromosh from "./images/backgrounds/gromosh.jpg"

function App() {
  //STATE
  const [characters, setCharacters] = useState([])
  const [fallenCharacters, setFallenCharacters] = useState([])


  return (
    <div className="App">
      <div id="part1" style={{backgroundImage: `url(${gromosh})`}}>

        <CreateCharacter characters={characters}
          fallenCharacters={fallenCharacters} 
          setCharacters={setCharacters} 
          setFallenCharacters={setFallenCharacters}/>

        <Characters characters={characters}
          fallenCharacters={fallenCharacters} 
          setCharacters={setCharacters} 
          setFallenCharacters={setFallenCharacters}/>
      </div>
      <div id="part2" className="fallen-characters" style={{backgroundImage: `url(${fallenWorrior})`}}>
      <FallenCharacters characters={characters}
        fallenCharacters={fallenCharacters} 
        setCharacters={setCharacters} 
        setFallenCharacters={setFallenCharacters}/>
      </div>
    </div>
  );
}

export default App;
