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

class Enemy{
    constructor(level, enemyData){
        this.level = level
        this.enemyData = enemyData
        this.acArray = this.genAC() // initilize AC Array.
        this.health = this.genHealth()
        this.maxHealth = this.health
    }
    toString(){
        return "Health: " + this.health  + "\nHead AC: " + this.acArray.head + ", body AC: " +this.acArray.body + ", appendidge AC: " +this.acArray.appendidge +"\n" 
    }
    genAC (){
        let AcArray = {head:0,body:0 ,appendidge:0}
        AcArray.head = Math.floor(Math.random()* this.enemyData.randHeadAC) + this.enemyData.headAC
        AcArray.body = Math.floor(Math.random()* this.enemyData.randBodyAC) + this.enemyData.bodyAC
        AcArray.appendidge = Math.floor(Math.random()* this.enemyData.randAppendidgeAC) + this.enemyData.appendidgeAC
        return AcArray
    }
    genHealth(){
        let finalHealth = this.enemyData.minHealth + (Math.floor(Math.random()*this.enemyData.randHealth)) +1
            if (this.level >= 2){
                for (let i = 0; i < this.level;i++){
                finalHealth += (this.level * (Math.floor(Math.random()*this.enemyData.hitDie)) +1)
                }
            };
        return finalHealth
    }
    damage(damage){
        this.health -= damage
    }
    heal(heal){
        this.health += heal
    }
    enrage(){
        for(let i= 0; i < 2; i++){
            if(this.health <= (0.1 * this.maxHealth)){
            this.health += (5 * this.level)
            }
        }
        console.log(this.health)
    }
}
const GOBLIN = {
    hitDie: 4,
    minHealth: 2,
    randHealth: 5,
    headAC: 12,
    randHeadAC: 4,
    bodyAC: 9,
    randBodyAC: 3,
    appendidgeAC: 11,
    randAppendidgeAC: 4,
  };
class Goblin extends Enemy{
    constructor(level){
    super(level, GOBLIN)
    }
}
const DWARF = {
    hitDie: 8,
    minHealth: 5,
    randHealth: 7,
    headAC: 14,
    randHeadAC: 6,
    bodyAC: 11,
    randBodyAC: 4,
    appendidgeAC: 12,
    randAppendidgeAC: 4,
  };
class Dwarf extends Enemy{
    constructor(level){
        super(level, DWARF)
    }
}
const HUMAN ={
    hitDie: 6,
    minHealth: 4,
    randHealth: 5,
    headAC: 13,
    randHeadAC: 5,
    bodyAC: 10,
    randBodyAC: 5,
    appendidgeAC: 13,
    randAppendidgeAC: 6,
}
class Human extends Enemy{
    constructor(level){
    super(level,HUMAN)
    }
}

let bug = new Goblin(1)
let ubol = new Dwarf(5)
let jesse = new Human(2)

// console.log("    bug:" +"\n" + bug.toString())
// console.log("    ubold:" +"\n" + ubol.toString())
// console.log("    Jesse:" +"\n" + jesse.toString())

// console.log(jesse.maxHealth)
// jesse.damage(19)
// console.log(jesse.health)
// jesse.enrage()



// adding a charecter into the charecter place










const characterCreate = () =>{
    const section = document.querySelector("#characters")
    let character = document.createElement("button")
    character.textContent = "new character"
    character.classList.add("character") 
    section.appendChild(character)
    console.log("hi there")
}


