import Link from "./Link.js"
import { Synergies } from "../refs/Synergies.js"

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
		 *  alphaSideEnts: ents on the alpha side of the field
		 *  omegaSideEnts: ents on the omega side of the field
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
		setFieldTurf: () => {
			/** Control flow to use helper functions to apply appropriate synergy to the field
			 *
			 * Attributes:
			 *  typeMapArray: array of objects containing { type: 'name', num: count, statTotal: count } for each type
			 */
			const typeMapArray = this.synergy.createSynergyTypeMap()

			if (this.synergy.checkForOverwhelmSynergy(typeMapArray)) return
			if (this.synergy.checkForChaosSynergy(typeMapArray)) return
			if (this.synergy.checkForLightDarkBasicSynergy(typeMapArray)) return
			if (this.synergy.checkForNormalSynergy(typeMapArray)) return

			// TODO: ADD THIS IN WITH OTHER ERRORS
			// throw new Error ('Synergy function is hella broke')
			return
		},
		createSynergyTypeMap: () => {
			/** Creates an array of types from all of the ents on the field
			 *
			 * Attributes:
			 *  entArray: array of all ents on field
			 *  typeMap: object of all ents that includes the type name, count on field, and stat total of all matching ents with no duplicates
			 *  typeArray: array of all types on the field with duplicate types
			 *  typeMapArray: array of typeMap object
			 * Returns:
			 *  typeMapArray: sorted array of typeMap object in order of count, then statTotal from greatest to least
			 */
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
			/** Checks to see if there are at least 4 of the same type to apply special 'overwhelm' synergy
			 *
			 * Attributes:
			 *  synergy: variable created for logging purposes
			 * 	numOfFirstType: the number of ents of the first occurence in typeMapArray
			 * Args:
			 *  typeMapArray: sorted array of objects of ents in order of count, then statTotal from greatest to least
			 * Returns:
			 *  synergy: new synergy being applied to the field
			 */
			let synergy
			const numOfFirstType = typeMapArray[0].num
			if(numOfFirstType >= 4) {
				synergy = Synergies.overwhelm
			}
			this.turf = synergy
			return synergy
		},
		checkForChaosSynergy: (typeMapArray) => {
			/** Checks to see if there are at least one of each 'light', 'dark', and 'basic' types to apply special 'chaos' synergy
			 *
			 * Attributes:
			 *  synergy: variable created for logging purposes
			 * 	check: object used to keep track of criteria for 'chaos' synergy
			 * Args:
			 *  typeMapArray: sorted array of objects of ents in order of count, then statTotal from greatest to least
			 * Returns:
			 *  synergy: new synergy being applied to the field
			 */
			let synergy
			const check = {
				light : false,
				dark : false,
				basic : false
			}

			for(const type of typeMapArray) {
				if(type.type === 'light') {
					check.light = true
				} else if(type.type === 'dark') {
					check.dark = true
				} else if(type.type === 'basic') {
					check.basic = true
				}
			}
			if(check.light && check.dark && check.basic) {
				synergy = Synergies.chaos
			}

			this.turf = synergy
			return synergy
		},
		checkForLightDarkBasicSynergy: (typeMapArray) => {
			/** Checks to see if any of the special types are one of the two most frequent types and applies the appropriate synergy
			 *
			 * Attributes:
			 *  synergy: variable created for logging purposes
			 *  firstType: string literal type of most frequent type on field
			 *  secondType: string literal type of second most frequent type on field
			 * Args:
			 *  typeMapArray: sorted array of objects of ents in order of count, then statTotal from greatest to least
			 * Returns:
			 *  synergy: new synergy being applied to the field
			 */
			let synergy
			const firstType = typeMapArray[0].type
			const secondType = typeMapArray[1].type

			const synergyMap = {
				'basic': Synergies.neutralize,
				'light': Synergies.enhance,
				'dark': Synergies.diminish,
				'default': false
			}

			synergy = synergyMap[firstType] || synergyMap[secondType] || synergyMap['default']

			this.turf = synergy
			return synergy
		},
		checkForNormalSynergy: (typeMapArray) => {
			/** Checks for the two most prominent types and assigns the appropriate synergy
			 *
			 * Attributes:
			 *  synergy: variable created for logging purposes
			 *  firstType: string literal type of most frequent type on field
			 *  secondType: string literal type of second most frequent type on field
			 * Args:
			 *  typeMapArray: sorted array of objects of ents in order of count, then statTotal from greatest to least
			 * Returns:
			 *  synergy: new synergy being applied to the field
			 */
			let synergy
			const firstType = typeMapArray[0].type
			const secondType = typeMapArray[1].type

			for (const type in Synergies) {
				if(Synergies[type].elements.includes(firstType) && Synergies[type].elements.includes(secondType)){
					synergy = Synergies[type]
					break;
				}
			}

			this.turf = synergy
			return synergy
		}
	}

}

