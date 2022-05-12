import React, {useState} from "react"

import Enemy, {Goblin, Dwarf, Human, Orc, Elf} from "./Enemy";

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const CreateCharacter = (props) =>{
    const {characters, setCharacters, fallenCharacters, setFallenCharacters}= props

    const [characterRequest, setCharacterRequest] = useState({
        race: '',
        level: 0,
        armor: false,
        swift: false,
        amount: 1
    })

    const onChange = (e) =>{
        setCharacterRequest({
            ...characterRequest,
            [e.target.name] : e.target.value
        })
        
    }
    const onSelect = (race) =>{
        setCharacterRequest({
            ...characterRequest,
            race: race
        })
    }
    const toggleBox = (e) =>{
        if(e.target.checked === true)
        setCharacterRequest({
            ...characterRequest,
            [e.target.name] : true
        })
        else{
            setCharacterRequest({
                ...characterRequest,
                [e.target.name] : false
            })
        }
        console.log(characterRequest)
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        const newCharacters = []
        const {level, armor, swift} = characterRequest
        for (let i = 0; i < characterRequest.amount; i++) {
            if(characterRequest.race === "Human"){
                let human1 = new Human(level, armor, swift)
                newCharacters.push(human1)
            }
            else if(characterRequest.race === "Dwarf"){
                let dwarf1 = new Dwarf(level, armor, swift)
                newCharacters.push(dwarf1)
            }
            else if(characterRequest.race === "Elf"){
                let elf1 = new Elf(level, armor, swift)
                newCharacters.push(elf1)
                console.log(newCharacters)
            }
            else if(characterRequest.race === "Goblin"){
                let goblin1 = new Goblin(level, armor, swift)
                newCharacters.push(goblin1)
                console.log(newCharacters)
            }
            else if(characterRequest.race === "Orc"){
                let ork1 = new Orc(level, armor, swift)
                newCharacters.push(ork1)
                console.log(newCharacters)
            }
            
            
          }
         setCharacters(characters.concat(newCharacters))
    }

    return(
        <div className="create-char">
            <div className="subHeading">
            <h2>Create Character</h2>
            </div>
            
            <form className="create-character-form" onSubmit={onSubmit}>
                <div>
                    {/* <!-- dropbox --> */}
                    <DropdownButton 
                        onSelect={onSelect}
                        className="dropdown"
                        title={ characterRequest.race ? characterRequest.race : "Character Race"}
                        id="dropdown-menu-align-right"
                        style={{marginRight:"250px"}}
                        >
                            <Dropdown.Item eventKey="Human">Human</Dropdown.Item>
                            <Dropdown.Item eventKey="Dwarf">Dwarf</Dropdown.Item>
                            <Dropdown.Item eventKey="Elf">Elf</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="Goblin">Goblin</Dropdown.Item>
                            <Dropdown.Item eventKey="Orc">Orc</Dropdown.Item>
                    </DropdownButton>
                    
                    <div className="form-inputs">
                        <div className="text-inputs">
                            {/* character level */}
                            <label>Level</label>
                            <input name="level" placeholder="type level here" onChange={onChange}></input>
                            {/* amount to make */}
                            
                            <label>Amount</label>
                            {characterRequest.race === "" ?
                            <input name="amount" value={characterRequest.amount} onChange={onChange} placeholder="amount"></input>
                            :
                            <input name="amount" value={characterRequest.amount} onChange={onChange}  placeholder={`${characterRequest.race.toLocaleLowerCase()}s`}></input>
                            }
                        </div>
                        <div className="check-boxes">
                                <div className="form-check">
                                    <input onChange={toggleBox} checked={characterRequest.armor} type="checkbox" className="form-check-input" id="check1" name="armor"></input>
                                    <label className="form-check-label" for="check1">Armor</label>
                                </div>
                                <div className="form-check">
                                    <input onChange={toggleBox} checked={characterRequest.swift}  type="checkbox" className="form-check-input" id="check1" name="swift" ></input>
                                    <label className="form-check-label" for="check1">Swift</label>
                                </div> 
                            </div>
                        </div>
                    </div>
                <div className="button-div">
                    {/* create button */}
                    <button type="submit" className="btn btn-dark">Create</button>
                    
                    {/* advanced button */}
                </div>
            </form>
        </div>
    )
}

export default CreateCharacter