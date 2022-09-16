import {
    Game, Ent, Player, Field
} from './logic.js'

const ash = new Player('Ash')
const rival = new Player('Gary')

const pikachu = new Ent('Pikachu', 50, 40, 30)
const charizard = new Ent('Charizard', 90, 50, 40)
const dragonite = new Ent('Dragonite', 70, 50, 60)
const starmie = new Ent('Starmie', 80, 300, 80)
const snorlax = new Ent('Snorlax', 80, 300, 80)


ash.setEnt(pikachu, 'slotOne')
ash.setEnt(pikachu, 'slotTwo')
ash.setEnt(snorlax, 'slotThree')
rival.setEnt(dragonite, 'slotOne')
rival.setEnt(starmie, 'slotTwo')

const battleField = new Field(ash, rival)
battleField.createLink(300)
battleField.createLink(400)
battleField.updateEnts(ash.ents, rival.ents)

const game = new Game(battleField)






game.declareIntention(pikachu, 'attack', dragonite)
game.declareIntention(charizard, 'attack', starmie)
game.declareIntention(dragonite, 'defend', dragonite)
game.declareIntention(starmie, 'attack', pikachu)
game.declareIntention(snorlax, 'attack', battleField.chain[0])

console.log(ash.currentChainDamage)
let allEnts = [pikachu, charizard, dragonite, starmie, snorlax]
battleField.updateEnts(allEnts)
game.takeTurn()
console.log(battleField.chain)

game.declareIntention(pikachu, 'attack', dragonite)
game.declareIntention(charizard, 'attack', starmie)
game.declareIntention(dragonite, 'defend', dragonite)
game.declareIntention(starmie, 'attack', pikachu)
game.declareIntention(snorlax, 'attack', battleField.chain[0])
game.takeTurn()
console.log(battleField.chain)

game.declareIntention(pikachu, 'attack', dragonite)
game.declareIntention(charizard, 'attack', starmie)
game.declareIntention(dragonite, 'defend', dragonite)
game.declareIntention(starmie, 'attack', pikachu)
game.declareIntention(snorlax, 'attack', battleField.chain[0])
game.takeTurn()

console.log(battleField.chain)