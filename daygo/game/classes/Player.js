export default class Player {
	constructor(name, deck) {
		this.name = name
		this.deck = deck
		this.initialEnergy = 10
		this.currentEnergy = 10
	}

	resetEnergy = (residual = 0) => {
		/** Resets player energy to the correct number
		 *
		 * Attributes:
		 *  energy: number used for logging
		 * Args:
		 *  residual: number that might change new energy value from lingering effects
		 * Returns:
		 *  energy: number used for logging
		 */
		let energy = this.initialEnergy
		energy += residual

		this.currentEnergy = energy

		return energy
	}
}