export default class Side {
	constructor(player) {
		this.player = player
		this.ents = {
			slotOne: {},
			slotTwo: {},
			slotThree: {},
			slotFour: {}
		}
		this.hand = []
		this.deck = player.deck
		this.discardPile = []
		this.exhaustPile = []
		this.artifact = {}
	}

	addToSide(slot, ent) {
		ent.owner = this.player
		this.ents[slot] = ent
	}
}