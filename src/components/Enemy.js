import { GOBLIN, HUMAN, DWARF, ORC, ELF } from '../EnemyDefinitions';
//TODO FIX THE HEALTH GEN
class Enemy{
    constructor(level, armor, swift, enemyData){
        this.level = level
        this.enemyData = enemyData
        this.acArray = this.genAC()
        this.health = this.genHealth()
        this.maxHealth = this.health
        this.enrage= false
        this.armor= armor
        this.swift= swift
    }
    toString(){
        return "Health: " + this.health  + "\nHead AC: " + this.acArray.head + ", body AC: " +this.acArray.body + ", appendidge AC: " +this.acArray.appendidge +"\n" 
    }
    genAC(){
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
                finalHealth += ((Math.floor(Math.random()*this.enemyData.hitDie)) +1)
                }
            };
        return finalHealth
    }
    armorToggle(){
        this.armor = !this.armor
    }
    swiftToggle(){
        this.swift = !this.swift
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
            this.health += (4 * this.level)
            }
        }
        console.log(this.health)
    }
  }
  
  export class Goblin extends Enemy{
    constructor(level, armor, swift){
    super(level, armor, swift, GOBLIN)
    }
  }
  
  export class Dwarf extends Enemy{
    constructor(level, armor, swift,){
        super(level, armor, swift, DWARF)
    }
  }
  
  export class Human extends Enemy{
    constructor(level, armor, swift,){
    super(level, armor, swift,HUMAN)
    }
  }
  export class Orc extends Enemy{
    constructor(level, armor, swift,){
    super(level, armor, swift, ORC)
    }
  }
  export class Elf extends Enemy{
    constructor(level, armor, swift,){
    super(level, armor, swift,ELF)
    }
  }
  
//   let bug = new Goblin(1)
//   let ubol = new Dwarf(5)
//   let jesse = new Human(2)
  
  // console.log("    bug:" +"\n" + bug.toString())
  // console.log("    ubold:" +"\n" + ubol.toString())
  // console.log("    Jesse:" +"\n" + jesse.toString())
  
  // console.log(jesse.maxHealth)
  // jesse.damage(19)
  // console.log(jesse.health)
  // jesse.enrage()


  export default Enemy