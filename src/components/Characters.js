import React from "react"
import CharacterHTML from "./CharacterHTML"


const Characters = (props) =>{
    const {characters, setCharacters, fallenCharacters, setFallenCharacters}= props    
            return(
            <CharacterHTML characters={characters}
            fallenCharacters={fallenCharacters} 
            setCharacters={setCharacters} 
            setFallenCharacters={setFallenCharacters}/>
            )
}

export default Characters