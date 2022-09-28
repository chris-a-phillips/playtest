// fix it so it only does the game engine stuff and calculations
// should not contain any methods that change ents or chain (attack should be an ent method)

export default class Game {
  constructor (field) {
    this.field = field
    this.turns = []
  }

  declareIntention (ent, intent, target) {
    ent.intent = intent
    if (intent === 'defend') {
      ent.position = 'defend'
    } else if (intent === 'attack') {
      ent.position = 'open'
      ent.target = target
    }
    const message = `${ent.name} ${intent} ${target.name}`
    // console.log(message)
  }

  sortEntActionsBySpeed (entArray) {
    entArray = entArray.sort((a, b) => (a.speed > b.speed) ? 1 : -1)
  }

  takeActions (entArray) {
    for (const ent of entArray) {
      if (ent.intent === 'attack') {
        ent.attack(ent.target)
      } else if (ent.intent === 'defend') {
        ent.position = 'defend'
      }
    }
  }

  resetEnts (entArray) {
    for (const ent of entArray) {
      ent.target = null
      ent.intent = null
      ent.position = null
    }
  }

  shiftChain (attacker, link) {
    link.victor = attacker.owner
    this.field.chain.shift()
    this.field.teamOne.currentChainDamage = 0
    this.field.teamOne.currentChainDamage = 0
  }

  takeTurn () {
    const entsOnField = this.field.ents
    this.sortEntActionsBySpeed(entsOnField)
    this.takeActions(entsOnField)
    this.resetEnts(entsOnField)
    // this.turns.push(entsOnField)
  }
}
