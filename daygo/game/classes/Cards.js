export class EntCard {
    constructor (name, type, attack, defense, speed) {
        this.name = name
        this.type = type
        this.attack = attack
        this.defense = defense
        this.speed = speed
        this.category = 'Ent'
        this.evo = {
            attack: 0,
            defense: 0,
            skill: 0,
            total: 0
        }
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


// export class 