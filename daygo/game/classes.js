export class Game {
	constructor (field) {
		this.field = field
		this.turns = []
	}

	takeTurn () {

	}
}

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

export class Ent {
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
