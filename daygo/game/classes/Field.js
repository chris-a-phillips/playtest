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

	updateEnts () {

	}
}