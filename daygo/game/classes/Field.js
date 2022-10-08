import Link from "./Link.js"
import { Synergies } from "../data/Synergies.js"

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
		setFieldTurf: (synergy) => {
			const typeMapArray = this.synergy.createSynergyTypeMap()

			this.turf = Synergies[synergy]
			console.log(this.turf)
			console.log(this.synergy.checkForLightDarkBasicSynergy(typeMapArray))
			return synergy
		},
		// FIXME: FIGURE OUT SWITCH STATEMENT ALTERNATIVE (probably object literals)
		synergyControlFlow: () => {
		/** Uses helper functions that check for appropriate synergy and applies it to the field
		 *
		 * Attributes:
		 *  typeMapArray: array of objects containing the names of types on the field, the number of ents with that type, and the statTotal (tiebreker) of the matching ents
		 *  synergy: variable for logging purposes
		 * Returns:
		 *  synergy: new synergy for upcoming phase of turn
		 */
			const typeMapArray = this.synergy.createSynergyTypeMap()

			if (this.synergy.checkForOverwhelmSynergy(typeMapArray)) {
				return
			}
			if (this.synergy.checkForChaosSynergy(typeMapArray)) {
				return
			}
			if (this.synergy.checkForLightDarkBasicSynergy(typeMapArray)) {
				return
			}
			if (this.synergy.checkForNormalSynergy(typeMapArray)) {
				return
			}


			console.log('synergy function is hella broke')
			return
		},
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
			console.log(typeMapArray)

			return typeMapArray
		},
		checkForOverwhelmSynergy: (typeMapArray) => {
			let synergy
			const strengthOfFirstType = typeMapArray[0].num
			if(strengthOfFirstType >= 4) {
				synergy = 'overwhelm'
			}
			return synergy
		},
		checkForLightDarkBasicSynergy: (typeMapArray) => {
			let synergy
			const firstType = typeMapArray[0].type
			const secondType = typeMapArray[1].type

			const synergyMap = {
				'basic': 'neutralize',
				'light': 'enhance',
				'dark': 'diminish',
				'default': false
			}

			if(synergyMap[firstType] && synergyMap[secondType]) {
				synergy = breakTie()
			} else(
				synergy = synergyMap[firstType] || synergyMap[secondType] || synergyMap['default']
			)

			function breakTie() {
				const tiebreakArray = [typeMapArray[0], typeMapArray[1]]
				const strongestType = tiebreakArray.sort((a, b) => a.statTotal > b.statTotal ? 1 : -1)[0].type
				return strongestType
			}

			return synergy
		},
		checkForChaosSynergy: (typeMapArray) => {
			let synergy
			let light = false
			let dark = false
			let basic = false
			for(const type of typeMapArray) {
				if(type.type === 'light') {
					light = true
				} else if(type.type === 'dark') {
					dark = true
				} else if(type.type === 'basic') {
					basic = true
				}
			}
			if(light && dark && basic) {
				synergy = 'chaos'
			}
			return synergy
		},
		checkForNormalSynergy: () => {
			const typeMapArray = this.synergy.createSynergyTypeMap()
			let synergy
			const firstType = typeMapArray[0].type
			const secondType = typeMapArray[1].type

			for (const type in Synergies) {
				if(Synergies[type].elements.includes(firstType) && Synergies[type].elements.includes(secondType)){
					synergy = Synergies[type].name
					return
				}
			}

			return synergy
		}
	}

}

