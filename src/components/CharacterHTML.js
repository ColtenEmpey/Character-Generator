//I ORRIGINALLY HAD THIS IN THE characters.js FILE BUT MOVED IT TO DEMONSTRATE NESTED COMPONENTS

import React, {useState} from "react"

//ENEMIES
import Enemy, {Human, Dwarf, Elf, Goblin, Orc} from "./Enemy"
import goblin from "../images/races/Goblin.png"
import dwarf from "../images/races/Dwarf.png"
import elf from "../images/races/Elf.png"
import man from "../images/races/Man.png"
import orc from "../images/races/Orc.png"




const CharacterHTML = (props) =>{
    const [healthEdit, setHealthEdit] = useState({number:"0"})
    const {characters, setCharacters, fallenCharacters, setFallenCharacters}= props

    const onClickArmor = (e) =>{
       characters.filter((char, idx)=>{
           if(idx == e.target.id){
                const cloneArr = [...characters]
                char.armorToggle()
                cloneArr.splice(idx,1, char)
                setCharacters(cloneArr)
                return char
           } 
           
       })
   }
   const onClickSwift = (e) =>{
      characters.filter((char, idx)=>{
          if(idx == e.target.id){
              const cloneArr = [...characters]
              char.swiftToggle()
              cloneArr.splice(idx,1, char)
              setCharacters(cloneArr)
              return char
          } 
      })
  }

   const onChange =(e)=>{
       setHealthEdit({
           number : e.target.value
       })
   }

   const onSubmitHurt = (e)=>{
       e.preventDefault()
       characters.filter(async (char, idx)=>{
           if(idx == e.target.id){
            const number = parseInt(healthEdit.number)
            char.damage(number)
            await char.enrage()
            const cloneArr = [...characters]
            cloneArr.splice(idx,1,char)
            setCharacters(cloneArr)
            return char
           } 
        
       })
   }
   const onSubmitHeal =(e)=>{
       e.preventDefault()
       characters.filter((char, idx)=>{
           if(idx == e.target.id){
               const number = parseInt(healthEdit.number)
               char.heal(number)
               const cloneArr = [...characters]
               cloneArr.splice(idx,1,char)
               setCharacters(cloneArr)
               return char
           } 
       })
   }


   const onClear= () =>{
       setCharacters([])
       setFallenCharacters( fallenCharacters.concat(characters))
   }
   const onDelete=(e)=>{
       let clickedChar
       characters.filter((char, idx)=>{
           if(idx == e.target.id){
               clickedChar = char
               characters.splice(idx,1)
               return char
           } 
           
       })
       setFallenCharacters([...fallenCharacters, clickedChar])
   }


return(
    <div>
        <div className="subHeading">
            <h2>Characters</h2> 
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
                    <div key={idx} className="character" style={char.enraged === true ? {background: "rgba(100, 0, 0, 0.8)"}: null}>
                        <div className="character-top">
                            <div className="image-box" style={{backgroundImage: `url(${background})`}}>
                                <div className="top-row">
                                    <h5>{char.enemyData.race} {idx+1}</h5> 
                                </div>
                                <div className="bottom-row"> 
                                {/* shield */}
                                <i id={idx} name="armor" value={char.armor} className={char.armor === true ? "bi bi-shield-fill" : "bi bi-shield"} onClick={onClickArmor}></i>
                                {/* lightning */}
                                <i id={idx} name="swift" value={char.swift} className={char.swift ? "bi bi-lightning-charge-fill" : "bi bi-lightning-charge"} onClick={onClickSwift}></i>
                                </div>
                            </div>
                        <div className="health">
                        <i className="bi bi-x-circle-fill delete-btn" id={idx} onClick={onDelete}></i>
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
                        <form onSubmit={onSubmitHeal} onReset={onSubmitHurt} onChange={onChange} value={healthEdit} className="input-group-sm damage" id={idx} name="number">
                            <input type='text' className="input-control input-sm col-sm-4 "></input>
                            <div className="buttons">
                                <button type="submit" className="btn btn-success btn-sm heal" id="heal">Heal</button>
                                <button type="reset" className="btn btn-danger btn-sm hurt" id="hurt">Hurt</button>
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

export default CharacterHTML