export class BattleAction {
    constructor(attacker, target, success, base, synergy, bonus) {

    }
}


export const calc = (attacker, target, success, base = 2, synergy = 1, bonus = 1) => {
    const attackerValue = attacker.type
    const defenderValue = attacker.type[target.type]
    const res = base * attackerValue * defenderValue * bonus
    if(success) {
        attacker.evo += res
        defender.evo -= res
    } else if (!success) {
        defender.evo += res
        attacker.evo -= res
    }
}

// 2 * 1 * 1.5 = 3
// base * attacker * target


const calc = (attacker, target, success, base = 2, synergy = 1,bonus = 1) => {
    /** Master function to calculate damage and results of attacks
     *
     * Attributes:
     *  attr: variables created in the function
     * Args:
     *  attacker: ent that is initiating attack
     *  target: ent that is being attacked
     *  success: result of attack
     *  base: base evo (2 with no flags enabled)
     *  synergy: value of current turf effect
     *  bonus: bonus value from any skills or items
     * Returns:
     *  res: final output value ofattack
     */
    const matchValue = calcTypeMatchValue(attacker, target) // TODO: MAKE FUNCTION TO CALCULATE TYPE MATCHUP EFFECTIVENESS
    const res = base * matchValue
}

const calcTypeMatchValue = (arg) => {
    /** The function does this
     *
     * Attributes:
     *  attr: variables created in the function
     * Args:
     *  arg: argument passed into the function
     * Returns:
     *  the return of the function
     */
}

const calcCounterValue = (typeMatchValue, base = 2) => {
    /** The function does this
     *
     * Attributes:
     *  attr: variables created in the function
     * Args:
     *  arg: argument passed into the function
     * Returns:
     *  the return of the function
     */
}

const determineSynergyEffect = (arg) => {
    /** The function does this
     *
     * Attributes:
     *  attr: variables created in the function
     * Args:
     *  arg: argument passed into the function
     * Returns:
     *  the return of the function
     */
}

const calcSynergyValue = (arg) => {
    /** The function does this
     *
     * Attributes:
     *  attr: variables created in the function
     * Args:
     *  arg: argument passed into the function
     * Returns:
     *  the return of the function
     */
}

const calcBonusValue = (arg) => {
    /** The function does this
     *
     * Attributes:
     *  attr: variables created in the function
     * Args:
     *  arg: argument passed into the function
     * Returns:
     *  the return of the function
     */
}

const assignEvo = (arg) => {
    /** Determines which ents get which evo depending on the attacks done
     *
     * Attributes:
     *  attr: variables created in the function
     * Args:
     *  arg: argument passed into the function
     * Returns:
     *  the return of the function
     */
}




// ALL POSSIBLE ACTIONS
    // ENT ATTACK ENT IN OPEN POSITION
        // success: attacker attack >= target attack (ATTACKER+/TARGET-)
        // fail: attacker attack < target attack (ATTACKER-/TARGET+)
    // ENT ATTACK ENT IN DEFEND POSITION (ATTACKER+/TARGET-)
        // success: attacker attack >= target defense (ATTACKER+/TARGET-)
        // fail: attacker attack < target defense (ATTACKER-/TARGET+)
    // ENT USES SKILL
        // success: ent effect resolves success (ENT+)
        // fail: ent effect resolves fail (ENT-)

// no evo situations
// attacker attacks and there is no target (ent died before attack/other effect)
// ent defends self from attack and it is not targeted by attack
