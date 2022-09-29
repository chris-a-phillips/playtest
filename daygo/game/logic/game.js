// fix it so it only does the game engine stuff and calculations
// should not contain any methods that change ents or chain (attack should be an ent method)

export default class Game {
	constructor (field) {
		this.field = field
		this.turns = []
	}

	takeTurn () {

	}
}
