import React, {useEffect} from "react"

//ENEMIES
import Enemy, {Human, Dwarf, Elf, Goblin, Orc} from "./Enemy"
import goblin from "../images/races/Goblin.png"
import dwarf from "../images/races/Dwarf.png"
import elf from "../images/races/Elf.png"
import man from "../images/races/Man.png"
import orc from "../images/races/Orc.png"


const Characters = (props) =>{
    const {characters, setCharacters, fallenCharacters, setFallenCharacters}= props
    console.log(characters)
    // const CharactersGenerated = []

     const onClick = (e) =>{
         console.log(e.target)
        const currentAtt = e.target.name
        const clickedChar = characters.filter((char, idx)=>{
            if(idx == e.target.id){
                console.log(char)
                return char
            } 
        })
        console.log(currentAtt)
        console.log(clickedChar.currentAtt)
            // console.log(currentAtt)
            // console.log(clickedChar.currentAtt)
            // clickedChar = [...clickedChar, ]



            //TODO TOGGLE THE AURMOR STATE
        
        // setCharacters({
        //     ...Characters,
        //     clickedChar
        // })
    }

    const onSubmit =(e)=>{
    e.preventDefault()
    }
    const onClear= () =>{
        setCharacters([])
        setFallenCharacters( fallenCharacters.concat(characters))
    }
    const onDelete=(e)=>{
        console.log(e.target)
    }
    return(
        
        <div>
            <div className="subHeading">
                <h2>Characters</h2> 
                {/* TODO ask Jesse what he would do in this situation */}
                <button type="button" className="btn btn-dark btn-sm" onClick={()=>onClear()}>Clear</button>
            </div>
            <div className="all-characters"> 
                {characters.length === 0 ? 
                <p>No characters yet...</p>
                :
                characters.map((char, idx)=>{
                    let background
                    if(char instanceof Human){
                        background = man
                    }
                    else if(char instanceof Dwarf){
                        background = dwarf
                    }
                    else if(char instanceof Elf){
                        background = elf
                    }
                    else if(char instanceof Goblin){
                        background = goblin
                    }
                    else if(char instanceof Orc){
                        background = orc
                    }

                    
                    return(
                        <div key={idx} className="character">
                            <div className="character-top">
                                <div className="image-box" style={{backgroundImage: `url(${background})`}}>
                                    <div className="top-row">
                                        <h5>{char.enemyData.race} {idx +1}</h5> 
                                    </div>
                                    <div className="bottom-row"> 
                                    {/* shield */}
                                    <i id={idx} name="armor" className={char.armor === true ? "bi bi-shield-fill" : "bi bi-shield"} onClick={onClick}></i>
                                    {/* lightning */}
                                    <i id={idx} name="swift" className={char.swift ? "bi bi-lightning-charge-fill" : "bi bi-lightning-charge"} onClick={onClick}></i>
                                    </div>
                                </div>
                            <div className="health">
                            <i className="bi bi-x-circle-fill" id="delete-btn" onClick={onDelete}></i>
                                <div className="health-info">
                                    <h5 className="health-title">Health</h5>
                                    <h5>{char.health}</h5>
                                </div>
                                
                            </div>
                        </div>
                        <div className="character-bottom">
                            <div className="health-AC-titles">
                                <h6 className="title1">Damage/Heal</h6>
                                <div>
                                    <h6 className="AC">AC</h6>
                                </div> 
                            </div>
                        <div className="health-AC-info">
                            <form onSubmit={()=>onSubmit()} className="input-group-sm" id="damage">
                                <input type='text' className="input-control input-sm col-sm-4 "></input>
                                <div className="buttons">
                                    <button type="submit" className="btn btn-success btn-sm">Heal</button>
                                    <button type="submit" className="btn btn-danger btn-sm">Hurt</button>
                                </div>
                            </form>
                            <ul className="AC-list">
                                <li>Head: {char.acArray.head}</li>
                                <li>Body: {char.acArray.body}</li>
                                <li>Arm/Leg: {char.acArray.appendidge} </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>)
                })
                
                }
            </div>
        </div>
    )
}

export default Characters