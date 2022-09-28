const exampleFunction = (arg) => {
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


// CHAIN AND LINKS

// [X] shift chain after threshold has been reached
const shiftChain = (owner) => {
    /** Removes first link of chain and sets owner
     *
     * Attributes:
     *  link: first link of chain that is being removed
     * Args:
     *  owner: attacker to break threshold and become links owner
     * Returns:
     *  chain: array of Links
     */
    const link = chain[0]

    link.owner = owner
    chain.shift()

    return chain
}

// [X] create links for game
const createLinks = (playerOne, playerTwo, ...health) => {
    /** Create all links for chain of the current game
     *
     * Attributes:
     *  chain = array of links to be created
     * Args:
     *  playerOne: player passed in to create property for damage dealt
     *  playerTwo: player passed in to create property for damage dealt
     *  health: array of health values for links to be created
     * Returns:
     *  chain: array of Links
     */
    const chain = []

    for (const num of health) {
        const link = new Link(num, playerOne, playerTwo)
        chain.push(link)
    }

    return chain
}

// ENTS SETUP

// [X] put ents in order by speed
const orderEntsBySpeed = (...entArray) => {
    /** Set all ents in order by speed least to greatest
     *
     * Attributes:
     *  entsInOrder: copy of incoming array of ents
     * Args:
     *  entArray: array of ents with property of speed of type num
     * Returns:
     *  chain: array of ents in order of speed
     */
    const entsInOrder = entArray

    entsInOrder = entsInOrder.sort((a, b) => (a.speed > b.speed) ? 1 : -1)

    return entsInOrder
}


// ENT ATTACKS

// [X] ent attack (with helper functions for different targets and intentions)
const entAtkResolve = (ent, target) => {
    /** Resolve ent attack to select helper function
     *
     * Attributes:
     *  success: result of attack
     * Args:
     *  ent: ent initiating attack
     *  target: target of ent that is initiating attack
     * Returns:
     *  success: True to make sure funcitons resolved
     */
    if (target.type === 'Ent') {
        if(target.position === 'open') {
            atkOpenPosEnt(ent, target)
        } else if(target.position === 'defend') {
            atkDefPosEnt(ent, target)
        } else if(target.position === 'effect') {
            atkEffPosEnt(ent, target)
        }
    } else if(target.type === 'Link') {
        atkChain(ent, target)
    }

    return
}

// [X] ent attacking ent in 'open' position
const atkOpenPosEnt = (ent, target) => {
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
}

// [X] ent attacking ent in 'defend' position
const atkDefPosEnt = (ent, target) => {
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
}

// [X] ent attacking chain link
const atkChain = (ent, chain) => {
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
    const link = chain[0]
    const damage = ent.attack

    link.currenthealth -= damage
    link.damage[ent.owner] += damage
    if(link.damage[ent.owner] > threshold) {
        shiftChain(ent.owner)
    }

    return success
}