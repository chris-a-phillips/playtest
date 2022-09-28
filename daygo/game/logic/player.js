// should only contain the map of the ents
// will hold logic for cards being used on these ents
// will eventually hold logic for taking turns and the deck

export default class Player {
  constructor (playerName) {
    this.playerName = playerName
    this.ents = {
      slotOne: {},
      slotTwo: {},
      slotThree: {},
      slotFour: {}
    }
    this.currentChainDamage = 0
  }

  setEnt (Ent, slot) {
    slot = slot
    this.ents[slot] = Ent
    Ent.owner = this
  }
}
