export default class Game {
	constructor (field) {
		this.field = field
		this.turns = []
        this.test = 'test'
	}

	takeTurn () {
        const entArray = this.entSetup.createEntArray()
	}

    entSetup = {
        battleReset: function(entArray) {
            /** Takes in all ents and resets their properties of target, intent, and postion
             *
             * Args:
             *  entArray: array of ents after battle properties are set
             * Returns:
             *  entArray: array of ents with reset properties
             */
            for (const ent of entArray) {
                ent.target = null
                ent.intent = null
                ent.position = null
            }

            return entArray
        },
        orderEntsBySpeed: function(entArray) {
            /** Set all ents in order by speed greatest to least
             *
             * Attributes:
             *  entsInOrder: copy of incoming array of ents
             * Args:
             *  entArray: array of ents with property of speed of type num
             * Returns:
             *  entsInOrder: array of ents in order of speed
             */
            let entsInOrder = entArray

            entsInOrder = entsInOrder.sort((a, b) => (a.speed > b.speed) ? -1 : 1)

            return entsInOrder
        }
    }

    entActions = {
        setAtkIntent: function (ent, target) {
            /** Set intent and target of ent
             *
             * Args:
             *  ent: ent whose properties are being changed
             *  target: ent that will be the target of the attack
             * Returns:
             *  ent: updated properties for battle phase
             */
            ent.intent = 'attack'
            ent.target = target

            return ent
        },
        setDefIntent: function (ent) {
            /** Change intent of ent to defend
             *
             * Args:
             *  ent: declared to go into defense position
             * Returns:
             *  ent: now in defense position
             */
            ent.intent = 'defend'

            return ent
        },
        atkOpenPosEnt: function (ent, target) {
            /** Resolve ent attacking target ent in open position
             *
             * Attributes:
             *  success: result of attack
             * Args:
             *  ent: ent initiating attack
             *  target: target of ent that is initiating attack
             * Returns:
             *  success: result of attack
             */
            let success

            if(ent.attack >= target.attack) {
                ent.evo ++
                target.evo --
                success = true
            } else if (ent.attack < target.attack) {
                ent.evo --
                target.evo ++
                success = false
            }

            return success
        },
        atkDefPosEnt: function (ent, target) {
            /** Resolve ent attacking target ent in defend position
             *
             * Attributes:
             *  success: result of attack
             * Args:
             *  ent: ent initiating attack
             *  target: target of ent that is initiating attack
             * Returns:
             *  success: result of attack
             */
            let success

            if(ent.attack >= target.defense) {
                ent.evo ++
                target.evo --
                success = true
            } else if (ent.attack < target.defense) {
                ent.evo --
                target.evo ++
                success = false
            }

            return success
        },
        atkChain: function (ent, target) {
            /** Resolve ent attacking chain
             *
             * Attributes:
             *  success: result of attack
             *  link: current link of chain being attacked
             * Args:
             *  ent: ent initiating attack
             *  chain: chain of game
             * Returns:
             *  success: result of attack
             */
            let success = true
            let link = target.open[0]
            const damage = ent.attack

            link.currentHealth -= damage
            link.damage[ent.owner.name] += damage

            return success
        }
    }

	// ^ ENT ACTIONS
    setPositions = (entArray) => {
        /** Change ents into defend position
         *
         * Args:
         *  entArray: array of ents with intents set
         * Returns:
         *  entArray: array of ents updated to correct position depending on intent
         */
        for (const ent of entArray) {
            if (ent.intent === 'defend') {
                ent.position = 'defend'
            } else {
                ent.position = 'open'
            }
        }

        return entArray
    }

	inititiateActionSequence = (entArray) => {
        /** Loop through array of ents and determine correct action helper function
		 *
         * Attributes:
         *  entArray: array of ents of all intentions
         * Args:
         *  entArray: array of ents of all intentions
         * Returns:
         *  entArray: array of all ents which have attacked or used skill
		 */
        for (const ent of entArray) {
            if(ent.intent === 'attack') {
                this.resolveAttack(ent, ent.target)
			} else if(ent.intent === 'skill') {
                entSkillResolve(ent)// TODO: CREATE THIS FUNCTION
			}
		}

		return entArray
	}

	resolveAttack = (ent, target) => {
		/** Resolve ent attack to select helper function
		 *
		 * Attributes:
		 *  success: result of attack
		 * Args:
		 *  ent: ent initiating attack
		 *  target: target of ent that is initiating attack
		 * Returns:
		 *  success: True to make sure function resolved
		 */
		if (target.category === 'Ent') {
			if(target.position === 'open') {
				this.entActions.atkOpenPosEnt(ent, target)
			} else if(target.position === 'defend') {
				this.entActions.atkDefPosEnt(ent, target)
			}
		} else if(target.category === 'Chain') {
			this.entActions.atkChain(ent, target)
            this.field.checkLink(ent.owner, target)
		}

		return
	}


}