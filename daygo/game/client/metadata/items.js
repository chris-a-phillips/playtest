class ItemCard {
	constructor(name, attack, defense, speed) {
		this.name = name
		this.attack = attack
		this.defense = defense
		this.speed = speed
		this.affinity = affinity
		this.category = 'Item'
	}
}

export const allItems = {
    one: {
        name: 'one',
        attack: 5,
        defense: 0,
        speed: 0,
        affinity: 0
    },
    two: {
        name: 'two',
        attack: 0,
        defense: 5,
        speed: 0,
        affinity: 0
    },
    thr: {
        name: 'thr',
        attack: 0,
        defense: 0,
        speed: 5,
        affinity: 0
    },
    fou: {
        name: 'fou',
        attack: 0,
        defense: 0,
        speed: 0,
        affinity: 5
    },
    fiv: {
        name: 'fiv',
        attack: 2,
        defense: 2,
        speed: 0,
        affinity: 0
    },
    six: {
        name: 'six',
        attack: 0,
        defense: 0,
        speed: 2,
        affinity: 2
    },
    sev: {
        name: 'sev',
        attack: 2,
        defense: 0,
        speed: 2,
        affinity: 0
    },
    eig: {
        name: 'eig',
        attack: 0,
        defense: 2,
        speed: 0,
        affinity: 2
    },
    nin: {
        name: 'nin',
        attack: 5,
        defense: 5,
        speed: 5,
        affinity: 5
    },
    ten: {
        name: 'ten',
        attack: 3,
        defense: 3,
        speed: 3,
        affinity: 3
    },
    evn: {
        name: 'evn',
        attack: 2,
        defense: 4,
        speed: 1,
        affinity: 3
    }
}