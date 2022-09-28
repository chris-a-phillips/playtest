// fix so that is does attacking, defending, etc
// it should be in charge of its own logic

export default class Ent {
  constructor (name, attack, defense, speed) {
    this.name = name
    this.type = 'Ent'
    this.attack = attack
    this.defense = defense
    this.speed = speed
    this.owner = null
    this.evo = 0
    this.target = null
    this.intent = null
    this.position = null
  }

  attack (target) {
    if (target.type === 'Ent') {
      if (target.position === 'defend') {
        if (this.attack >= target.defense) {
          this.evo++
          target.evo--
        } else if (this.attack < target.defense) {
          this.evo--
          target.evo++
        }
      } else if (target.position === 'open') {
        if (this.attack > target.attack) {
          this.evo++
          target.evo--
        } else if (this.attack <= target.attack) {
          this.evo--
          target.evo++
        }
      }
    } else if (target.type === 'Link') {
      // target.checkForLinkOwner(attacker, this.shiftChain)
    }
  }

  activateEffect () {

  }
}
