// ? StartStandbyPhase
// ? SetFieldTurf
// ? SetEntIntintions
// ? EndStandbyPhase

const pikachu = new EntCard('Pikachu', 'normal', 70, 40, 60)
const charizard = new EntCard('Charizard', 'normal', 90, 50, 95)
const dragonite = new EntCard('Dragonite', 'normal', 70, 50, 105)
const starmie = new EntCard('Starmie', 'normal', 80, 300, 120)
const snorlax = new EntCard('Snorlax', 'normal', 80, 300, 30)
const suicune = new EntCard('Suicune', 'normal', 80, 300, 30)
const jirachi = new EntCard('Jirachi', 'normal', 100, 450, 100)

suicune.owner = yugi
snorlax.owner = yugi
pikachu.owner = ash

game.entActions.setAtkIntent(dragonite, snorlax)
game.entActions.setAtkIntent(starmie, pikachu)
game.entActions.setAtkIntent(jirachi, charizard)
game.entActions.setDefIntent(charizard)
game.entActions.setAtkIntent(suicune, field.chain)
game.entActions.setAtkIntent(snorlax, field.chain)
game.entActions.setAtkIntent(pikachu, field.chain)

const entsArray = [pikachu, charizard, dragonite, starmie, snorlax, suicune, jirachi]

console.log(field.chain)

// game.entSetup.battleReset(entsArray)
