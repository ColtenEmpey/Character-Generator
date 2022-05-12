console.log ("\n" + "New Charecters" + "\n")
//rolling dice!
let diceRoll = (diceType, howMany) =>{
    let diceArray= []
    for (let i = 0; i < howMany; i++){
       let roll = Math.floor(Math.random()* diceType) +1
       diceArray.push(roll)
    }
console.log(diceArray)
}



// adding a charecter into the charecter place










const characterCreate = () =>{
    const section = document.querySelector("#characters")
    let character = document.createElement("button")
    character.textContent = "new character"
    character.classList.add("character") 
    section.appendChild(character)
    console.log("hi there")
}


