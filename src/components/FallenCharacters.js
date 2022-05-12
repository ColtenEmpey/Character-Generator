import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-icons/font/bootstrap-icons.css"
import Enemy, {Human, Dwarf, Elf, Goblin, Orc} from "./Enemy"
import goblin from "../images/races/Goblin.png"
import dwarf from "../images/races/Dwarf.png"
import elf from "../images/races/Elf.png"
import man from "../images/races/Man.png"
import orc from "../images/races/Orc.png"


const FallenCharacters = (props) =>{
    const {characters, clearCharacters, setCharacters, fallenCharacters, setFallenCharacters}= props

    const onSubmit =()=>{
        console.log("hurt them")
    }
    const onClick =()=>{
        console.log("shield up")
    }
    const onClear =()=>{
        setFallenCharacters([])
    }
    
    return(
        <div>
            <div className="subHeading">
                <h2>Fallen-Characters</h2>
                <button type="button" className="btn btn-dark btn-sm" onClick={()=>onClear()}>Clear</button>
            </div>
            <div className="all-characters">
                {fallenCharacters.length === 0 ? 
                <div>
                    <p>No fallen characters yet...</p>
                </div>
                
                :
                fallenCharacters.map((char, idx)=>{
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


                    console.log(char)
                    return(
                        <div key={idx} className="character">
                            <div className="character-top">
                                <div className="image-box" style={{backgroundImage: `url(${background})`}}>
                                    <div className="top-row">
                                        <h5>{char.enemyData.race} {idx +1}</h5> 
                                    </div>
                                    <div className="bottom-row"> 
                                    {/* shield */}
                                    <i id={idx} className={char.armor ? "bi bi-shield-fill" : "bi bi-shield"} onClick={onClick}></i>
                                    {/* lightning */}
                                    <i id={idx} className={char.swift ? "bi bi-lightning-charge-fill" : "bi bi-lightning-charge"} onClick={onClick}></i>
                                    </div>
                                </div>
                            <div className="health">
                            <i className="bi bi-x-circle-fill" id="delete-btn"></i>
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

export default FallenCharacters

