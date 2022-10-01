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


// ^ CHAIN AND LINKS
// [X] create links and chains for game // ! moved
const createChain = (playerOne, playerTwo, ...health) => {
    /** Create all links for chain of the current game
     *
     * Attributes:
     *  openChain = array of links that will never have owners
     *  closedChain = array of links that will be taken from "openChain" after owner property is set
     * Args:
     *  playerOne: player passed in to create property for damage dealt
     *  playerTwo: player passed in to create property for damage dealt
     *  health: array of health values for links to be created
     * Returns:
     *  [openChain, closedChain]: tuple of chains for game logic
     */
    const openChain = []
    const closedChain = []

    for (const num of health) {
        const link = new Link(num, playerOne, playerTwo)
        openChain.push(link)
    }

    return [openChain, closedChain]
}

// [X] check if link needs to be removed after attack TODO: (does it happen during or after turn)
const checkLink = (owner) => {
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
    if(link.damage[owner] >= link.threshold) {
        shiftChain(owner)
        destroyed = true
    }

    return destroyed
}

// [X] shift chain after threshold has been reached and set new owner
const shiftChain = (owner) => {
    /** Removes first link of chain and sets owner
     *
     * Attributes:
     *  link: first link of chain that is being removed
     * Args:
     *  owner: attacker to break threshold and become links owner
     * Returns:
     *  [openChain, closedChain]: newly updated chains
     */
    const link = chain.open[0]

    link.owner = owner
    chain.open.shift()
    chain.closed.push(link)

    return [openChain, closedChain]
}


// ^ ENTS SETUP

// [X] reset ents (position, target, intent)
const entBattleReset = (...entArray) => {
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
}

// [X] put ents in order by speed
const orderEntsBySpeed = (...entArray) => {
    /** Set all ents in order by speed least to greatest
     *
     * Attributes:
     *  entsInOrder: copy of incoming array of ents
     * Args:
     *  entArray: array of ents with property of speed of type num
     * Returns:
     *  entsInOrder: array of ents in order of speed
     */
    const entsInOrder = entArray

    entsInOrder = entsInOrder.sort((a, b) => (a.speed > b.speed) ? 1 : -1)

    return entsInOrder
}


// ^ ENT ACTIONS
// [X] all ents in array either attack or use skill
const entActionSequence = (...entArray) => {
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
            entAtkResolve(ent, ent.target)
        } else if(ent.intent === 'skill') {
            entSkillResolve(ent)
        }
    }

    return entArray
}

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
     *  success: True to make sure function resolved
     */
    if (target.category === 'Ent') {
        if(target.position === 'open') {
            atkOpenPosEnt(ent, target)
        } else if(target.position === 'defend') {
            atkDefPosEnt(ent, target)
        }
    } else if(target.category === 'Link') {
        atkChain(ent, target)
    }

    return
}

// [X] ent attacking ent in 'open' position
const entAtkOpenPosEnt = (ent, target) => {
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
const entAtkDefPosEnt = (ent, target) => {
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
const entAtkChain = (ent, chain) => {
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
    checkLink(ent.owner)

    return success
}

// [X] ent changing into defense itself
const entSetAtkIntent = (ent, target) => {
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
}

// [X] ent changing into defense itself
const entSetDefIntent = (ent) => {
    /** Change intent of ent to defend
     *
     * Args:
     *  ent: declared to go into defense position
     * Returns:
     *  ent: now in defense position
     */
    ent.intent = 'defend'

    return ent
}

// [X] change ents into defend position
const entSetPositions = (...entArray) => {
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

// ^ PLAYERS
// [X] create players (maybe both at once)
const createPlayers = (nameOne, nameTwo) => {
    /** Creates two new instances of the player class
     *
     * Args:
     *  nameOne: name of playerOne
     *  nameTwo: name of playerTwo
     * Returns:
     *  [playerOne, playerTwo]: two new player instances
     */
    const playerOne = new Player(nameOne)
    const playerTwo = new Player(nameTwo)

    return [playerOne, playerTwo]
}