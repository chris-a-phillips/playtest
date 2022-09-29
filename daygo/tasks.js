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

// [ ] take turn (actions are taken, side effects happen, intentions are reset)

// [ ] game log to show all events of previous turn


// FULL GAME LOGIC
// - 1: Play phase
//     - Both players energy resets
//     - Both players cards are drawn (up to max hand limit)
//     - Both players take their turns
//          - Players place cards on field
//          - Phase ends for player when energy is gone or hand is empty
//     - Both sides are set for Standby phase
//     - Turf is set 1st time
// - 2: Standby phase
//     - Players choose ent intentions (1 of 3 defined actions)
//         - Attack ent or chain
//         - Defend itself
//         - Use its skill
//         - attacks go in order of speed after defensive positions taken
// - 3: Battle phase
//     - Ent positions are set (either open or defend)
//     - Ent actions are taken (attack or use skill) in order of speed
//         - Game log and field is updated (eventually with animations)
//     - Ents evo counters update after each action
//     - After each attack check for defeated ent
//     - After each attack check chain link status
// - 4: End phase
//     - Game win logic is checked
//     - Lingering effects take place
//     - Turf is set 2nd time
//     - End turn statuses take effect
//     - New chain link is inserted
//     - Players choose cards to retain (if any) for next turn
//     - Remaining cards in hand are discarded


// - Each card has energy cost to be placed on the field
// - Ents get evo counter for each successful action
    // in defend position and successfully repels attack
    // successfully attacks other ent
    // successfully uses skill
// - Ents don’t use energy to attack
// - After all Energy has been spent or player ends play phase, the standby phase begins
// - After player selects all Ent options or ends standby phase, the battle phase begins
// - Any players not “retained” will be discarded

// [ ] START NEW GAME LOGIC
    // [ ] create players
    // [ ] create field
    // [ ] set decks
// [ ] TURN LOGIC
    // [ ] Play phase
    // [ ] Standby phase
    // [ ] Battle phase
    // [ ] End phase
// [ ] END GAME LOGIC
    // [ ] check chain and links
// [ ] CARD LOGIC
    // [ ] ent
    // [ ] item
    // [ ] artifact
    // [ ] effect
// [ ] FIELD LOGIC
    // [ ] set turf
    // [ ] check artifacts
// [ ] MESSAGE LOGGER LOGIC
    // [ ] decide whats important to log to players
    // [ ] create logger for messages
