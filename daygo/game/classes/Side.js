export default class Side {
	constructor(player) {
		this.player = player
		this.ents = {
			slotOne: {},
			slotTwo: {},
			slotThree: {},
			slotFour: {}
		}
		this.hand = player.deck
		this.deck = []
		this.discardPile = []
		this.exhaustPile = []
		this.artifact = {}
	}
}