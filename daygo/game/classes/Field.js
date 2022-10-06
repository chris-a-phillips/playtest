import Link from "./Link.js"

export default class Field {
	constructor (alphaSide, omegaSide) {
		this.alphaSide = alphaSide
		this.omegaSide = omegaSide
        this.chain = {
            category: 'Chain',
            open : [],
            closed : []
        }
		this.turf = null
	}

	createEntArray = () => {
		/** Creates an array of all ents on the field
		 *
		 * Attributes:
		 *  entArray: empty array to be filled with ents
		 * Returns:
		 *  entArray: array of ents with reset properties
		 */
		const entArray = []
		const alphaSideEnts = this.alphaSide.ents
		const omegaSideEnts = this.omegaSide.ents

		for (const ent in alphaSideEnts) {
			entArray.push(alphaSideEnts[ent])
		}
		for (const ent in omegaSideEnts) {
			entArray.push(omegaSideEnts[ent])
		}
		return entArray
	}

	createChain = (playerAlpha, playerOmega, health) => {
		/** Create all links for chain of the current game
		 *
		 * Attributes:
		 *  openChain = array of links that will never have owners
		 *  closedChain = array of links that will be taken from "openChain" after owner property is set
		 * Args:
		 *  playerAlpha: player passed in to create property for damage dealt
		 *  playerOmega: player passed in to create property for damage dealt
		 *  health: array of health values for links to be created
		 * Returns:
		 *  [openChain, closedChain]: tuple of chains for game logic
		 */
		const openChain = []
		const closedChain = []

		for (const num of health) {
			const link = new Link(num, playerAlpha, playerOmega)
            link.assignDamageNames(playerAlpha, playerOmega)
			openChain.push(link)
		}

		this.chain.open = openChain
		this.chain.closed = closedChain

		return [openChain, closedChain]
	}

	checkLink = (owner, target) => {
		// TODO: (does it happen during or after turn)
		/** Checks if chain needs to be shifted
		 *
		 * Attributes:
		 *  destroyed: result of successful break of link
		 * Args:
		 *  owner: owner of ent that initiated last attack
		 * Returns:
		 *  destroyed: result of check -> if true will invoke shiftChain()
		 */
		let destroyed = false
		let link = target.open[0]

		if(link.damage[owner.name] >= link.threshold) {
			destroyed = true
            this.shiftChain(owner.name)
		}

		return destroyed
	}

	shiftChain = (owner) => {
		/** Removes first link of chain and sets owner
		 *
		 * Attributes:
		 *  link: first link of chain that is being removed
		 * Args:
		 *  owner: attacker to break threshold and become links owner
		 * Returns:
		 *  [openChain, closedChain]: tuple of newly updated chains
		 */
		const link = this.chain.open[0]

		link.owner = owner
		this.chain.open.shift()
		this.chain.closed.push(link)

		return true
	}

	synergy = {
		createSynergyTypeMap: () => {
			const entArray = this.createEntArray()
			const typeMap = {}
			const typeArray = []
			const typeMapArray = []

			for (const ent of entArray) {
				const type = ent.type
				const statTotal = ent.attack + ent.defense + ent.speed
				typeArray.push([type, statTotal])
			}

			for (const ent of typeArray) {
				const type = ent[0]
				const statTotal = ent[1]
				if(!typeMap[type]) {
					typeMap[type] = {
						num: 1,
						statTotal: statTotal
					}
				} else {
					typeMap[type].num ++
					typeMap[type].statTotal += statTotal
				}
			}

			for (const type in typeMap) {
				const entry = {
					type: type,
					num: typeMap[type].num,
					statTotal: typeMap[type].statTotal
				}
				typeMapArray.push(entry)
			}

			typeMapArray.sort((a, b) => (a.num > b.num) ? -1 : (a.num === b.num) ? ((a.statTotal > b.statTotal) ? -1 : 1) : 1 )

			return typeMapArray
		},
		checkForSpecialSynergies: () => {
			const typeMapArray = this.synergy.createSynergyTypeMap()
			console.log(typeMapArray)

			checkForOverwhelmSynergy(typeMapArray)
			checkForLightSynergy(typeMapArray)
			checkForDarkSynergy(typeMapArray)
			checkForBasicSynergy(typeMapArray)

		},
		checkForOverwhelmSynergy: (typeMapArray) => {
			if(typeMapArray[0].num === 4) {
				console.log('overwhelm')
			}
		},
		checkForlightSynergy: (typeMapArray) => {
			if(typeMapArray[0] === 'light' || typeMapArray[1] === 'light') {
				console.log('enhance')
			}
		},
		checkForDarkSynergy: (typeMapArray) => {
			if(typeMapArray[0] === 'dark' || typeMapArray[1] === 'dark') {
				console.log('diminish')
			}
		},
		checkForBasicSynergy: (typeMapArray) => {
			if(typeMapArray[0] === 'basic' || typeMapArray[1] === 'basic') {
				console.log('neutralize')
			}
		}
	}

}

