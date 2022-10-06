// ? StartStandbyPhase
// ? SetFieldTurf
// ? SetEntIntintions
// ? EndStandbyPhase

import { ash, yugi, alphaSide, omegaSide, field, game } from "../tasks/StartGame.js"
import { EntCard } from "../engine.js"

const pikachu = new EntCard('Pikachu', 'fire', 70, 40, 60)
alphaSide.addToSide('slotOne', pikachu)
const charizard = new EntCard('Charizard', 'light', 90, 50, 95)
alphaSide.addToSide('slotTwo', charizard)
const dragonite = new EntCard('Dragonite', 'air', 70, 50, 105)
alphaSide.addToSide('slotThree', dragonite)
const starmie = new EntCard('Starmie', 'water', 80, 300, 120)
alphaSide.addToSide('slotFour', starmie)


const snorlax = new EntCard('Snorlax', 'water', 80, 300, 30)
omegaSide.addToSide('slotOne', snorlax)
const suicune = new EntCard('Suicune', 'fire', 80, 300, 30)
omegaSide.addToSide('slotTwo', suicune)
const jirachi = new EntCard('Jirachi', 'stone', 100, 450, 100)
omegaSide.addToSide('slotThree', jirachi)
const castform = new EntCard('Castform', 'fire', 100, 450, 100)
omegaSide.addToSide('slotFour', castform)


// game.entActions.setAtkIntent(dragonite, snorlax)
// game.entActions.setAtkIntent(starmie, pikachu)
// game.entActions.setAtkIntent(jirachi, charizard)
// game.entActions.setDefIntent(charizard)
// game.entActions.setAtkIntent(suicune, field.chain)
// game.entActions.setAtkIntent(snorlax, field.chain)
// game.entActions.setAtkIntent(pikachu, field.chain)

field.synergy.checkForSpecialSynergies()


export { ash, yugi, alphaSide, omegaSide, field, game }