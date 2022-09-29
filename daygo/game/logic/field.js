// fix it so that it contains all of the ent and chain info

import Link from './link.js'

export class Field {
	constructor (alphaSide, omegaSide, chain) {
		this.alphaSide = alphaSide
		this.omegaSide = omegaSide
		this.chain = {
			open: [],
			closed: []
		}
	}

	createChain() {

	}

	shiftChain() {

	}

	updateEnts () {

	}
}

export class Side {
	constructor(player) {
		this.player = player
		this.ents = {
			slotOne: {},
			slotTwo: {},
			slotThree: {},
			slotFour: {}
		}
		this.hand = []
		this.deck = []
		this.discardPile = []
		this.exhaustPile = []
		this.artifact = {}
	}
}