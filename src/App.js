import React, {useState} from 'react';
import './App.css';

//COMPONENTS
import Header from "./components/Header.js"
import CreateCharacter from './components/CreateCharacter';
import Characters from './components/Characters';
import FallenCharacters from './components/FallenCharacters';

//RECOIL
import {atom} from 'recoil';

//background images
import fallenWorrior from "./images/backgrounds/fallenWorrior.jpg"
import gromosh from "./images/backgrounds/gromosh.jpg"

const checkEnrage = () =>{
  const EnrageValue = window.localStorage.getItem("Enrage")
  if(EnrageValue === null){
    window.localStorage.setItem("Enrage", true)
    return true
  }
  else if(EnrageValue === "true"){
    return true
  }
  else if(EnrageValue === "false"){
    return false
  }
}
//RECOIL CREATION OF ATOM
export const EnrageEnable = atom({
  key: 'enrage',
  default: checkEnrage(),
});


function App() {
  //STATE
  const [characters, setCharacters] = useState([])
  const [fallenCharacters, setFallenCharacters] = useState([])
  // const [EnrageMode, setEnrageMode] = useEnrageMode()
  // window.localStorage.setItem("Enrage", true);
  return (
    <div className="App">
      <div id="part1" style={{backgroundImage: `url(${gromosh})`}}>

        <Header/>

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

