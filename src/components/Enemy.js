import { GOBLIN, HUMAN, DWARF, ORC, ELF } from '../EnemyDefinitions';
class Enemy{
    constructor(level, armor, swift, canEnrage, enemyData){
        this.level = level
        this.enemyData = enemyData
        this.acArray = this.genAC()
        this.health = this.genHealth()
        this.maxHealth = this.health
        this.canEnrage = canEnrage
        this.enraged= false
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
        if(this.armor === true){
            this.acArray.body= this.acArray.body +2
            this.acArray.appendidge= this.acArray.appendidge +2
        }
        else if(this.armor === false){
            this.acArray.body= this.acArray.body -2
            this.acArray.appendidge= this.acArray.appendidge -2
        }
    }
    swiftToggle(){
        this.swift = !this.swift
        if(this.swift === true){
            this.acArray.head= this.acArray.head +2
            this.acArray.body= this.acArray.body +2
            this.acArray.appendidge= this.acArray.appendidge +2
        }
        else if(this.swift === false){
            this.acArray.head= this.acArray.head -2
            this.acArray.body= this.acArray.body -2
            this.acArray.appendidge= this.acArray.appendidge -2
        }
    }
    damage(damage){
        this.health -= damage
    }
    heal(heal){
        const diff = this.maxHealth - this.health
        const max = this.health + heal
        if(max > this.maxHealth){
            this.health += diff
        }
        else{
            this.health += heal
        }
        
    }
    enrage(){
        return this.canEnrage
        // ORRIGINALLY I WAS STORING ALL DATA NEEDED IN EnemyDefinitions.js. 
        // TO DEMONSTRATE POLYMORPHISM I MOVED THEM INTO THE SUB-CLASSES BELOW

        // if (this.canEnrage === true){
            // if(this.health <= (0.3 * this.maxHealth)){
            //     const enrageNum = Math.floor(Math.random() * this.enemyData.enrageProb)
            //     if(enrageNum === 1){
            //         this.enraged = true
            //         const extraHealth = 3 * this.level
            //         this.health += extraHealth  
            //     }
            // }
            
        // }
    }
  }
  
  export class Goblin extends Enemy{
    constructor(level, armor, swift, canEnrage){
    super(level, armor, swift, canEnrage, GOBLIN)
        this.HEALTH_MULT = 2
        this.ENRAGE_PROB = 3
        this.HEALTH_PERC = 0.3
    }
    
    enrage () {
        if (super.enrage()) {
            // calculate how Goblin's enrage
            if(this.health <= (this.HEALTH_PERC * this.maxHealth)){
                const enrageNum = Math.floor(Math.random() * this.ENRAGE_PROB)
                if(enrageNum === 1){
                    this.enraged = true
                    const extraHealth = this.HEALTH_MULT * this.level
                    this.health += extraHealth  
                }
            }
        }
    }
  }
  
  export class Dwarf extends Enemy{
    constructor(level, armor, swift, canEnrage){
        super(level, armor, swift, canEnrage, DWARF)
            this.HEALTH_MULT = 3
            this.ENRAGE_PROB = 5
            this.HEALTH_PERC = 0.35
    }
    
    enrage () {
        if (super.enrage()) {
            // calculate how Dwarf's enrage
            if(this.health <= (this.HEALTH_PERC * this.maxHealth)){
                const enrageNum = Math.floor(Math.random() * this.ENRAGE_PROB)
                if(enrageNum === 1){
                    this.enraged = true
                    const extraHealth = this.HEALTH_MULT * this.level
                    this.health += extraHealth  
                }
            }
        }
    }
  }
  
  export class Human extends Enemy{
    constructor(level, armor, swift, canEnrage){
    super(level, armor, swift, canEnrage, HUMAN)
    this.HEALTH_MULT = 2
    this.ENRAGE_PROB = 6
    this.HEALTH_PERC = 0.25
    }
    
    enrage () {
        if (super.enrage()) {
            // calculate how Human's enrage
            if(this.health <= (this.HEALTH_PERC * this.maxHealth)){
                const enrageNum = Math.floor(Math.random() * this.ENRAGE_PROB)
                if(enrageNum === 1){
                    this.enraged = true
                    const extraHealth = this.HEALTH_MULT * this.level
                    this.health += extraHealth  
                }
            }
        }
    }
  }
  export class Orc extends Enemy{
    constructor(level, armor, swift, canEnrage){
    super(level, armor, swift, canEnrage, ORC)
    this.HEALTH_MULT = 3
    this.ENRAGE_PROB = 4
    this.HEALTH_PERC = 0.3
    }
    
    enrage () {
        if (super.enrage()) {
            // calculate how Orc's enrage
            if(this.health <= (this.HEALTH_PERC * this.maxHealth)){
                const enrageNum = Math.floor(Math.random() * this.ENRAGE_PROB)
                if(enrageNum === 1){
                    this.enraged = true
                    const extraHealth = this.HEALTH_MULT * this.level
                    this.health += extraHealth  
                }
            }
        }
    }
  }
  export class Elf extends Enemy{
    constructor(level, armor, swift, canEnrage){
    super(level, armor, swift, canEnrage, ELF)
    this.HEALTH_MULT = 10
    this.ENRAGE_PROB = 10
    this.HEALTH_PERC = 0.2
    }
    
    enrage () {
        if (super.enrage()) {
            // calculate how Elf's enrage
            if(this.health <= (this.HEALTH_PERC * this.maxHealth)){
                const enrageNum = Math.floor(Math.random() * this.ENRAGE_PROB)
                if(enrageNum === 1){
                    this.enraged = true
                    const extraHealth = this.HEALTH_MULT * this.level
                    this.health += extraHealth  
                }
            }
        }
    }
  }

  export default Enemy