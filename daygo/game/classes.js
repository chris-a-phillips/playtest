export class Player {
	constructor(name, deck) {
		this.name = name
		this.deck = deck
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

export class Field {
	constructor (alphaSide, omegaSide) {
		this.alphaSide = alphaSide
		this.omegaSide = omegaSide
		this.chain = {
			open: [],
			closed: []
		}
	}

	createChain = (playerOne, playerTwo, health) => {
		/** Create all links for chain of the current game
		 *
		 * Attributes:
		 *  openChain = array of links that will never have owners
		 *  closedChain = array of links that will be taken from "openChain" after owner property is set
		 * Args:
		 *  playerOne: player passed in to create property for damage dealt
		 *  playerTwo: player passed in to create property for damage dealt
		 *  health: array of health values for links to be created
		 * Returns:
		 *  [openChain, closedChain]: tuple of chains for game logic
		 */
		const openChain = []
		const closedChain = []

		for (const num of health) {
			const link = new Link(num, playerOne, playerTwo)
			openChain.push(link)
		}

		this.chain.open = openChain
		this.chain.closed = closedChain

		return [openChain, closedChain]
	}

	shiftChain() {

	}

	updateEnts () {

	}
}

export class Game {
	constructor (field) {
		this.field = field
		this.turns = []
	}

	takeTurn () {

	}
}

export class Link {
    constructor(maxHealth) {
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        this.category = 'Link';
        this.owner = {};
        this.threshold = maxHealth / 2;
        this.damage = {
            playerAlpha: 0,
            playerOmega: 0,
        };
    }

    checkLink() {

    }
}

export class EntCard {
    constructor (name, type, attack, defense, speed) {
        this.name = name
        this.type = type
        this.attack = attack
        this.defense = defense
        this.speed = speed
        this.category = 'Ent'
        this.evo = 0
        this.skill = null
        this.owner = null
        this.item = null
        this.intent = null
        this.target = null
        this.position = null
    }

    activateSkill () {

    }
}


export class ItemCard {
	constructor(name, attack, defense, speed) {
		this.name = name
		this.attack = attack
		this.defense = defense
		this.speed = speed
		this.category = 'Item'
	}
}

export class EffectCard {
	constructor(name, effect) {
		this.name = name
		this.effect = effect
		this.category = 'Effect'
	}
}

export class ArtifactCard {
	constructor(name, effect) {
		this.name = name
		this.effect = effect
		this.category = 'Artifact'
	}
}