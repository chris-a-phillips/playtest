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

// ^ ALL YAML TASKS
// ? StartTurn
    // ? Start Play Phase
        // ? ResetPlayerEnergy
        // ? DrawPlayerHand
        // ? SetPlayerCards
        // ? SetFieldCards
        // ? EndPlayPhase
    // ? StartStandbyPhase
        // ? SetFieldTurf
        // ? SetEntIntintions
        // ? EndStandbyPhase
    // ? StartBattlePhase
        // ? SetEntPositions
        // ? InitiateEntActions
        // ? CheckEntStatus
        // ? CheckEntStatus
        // ? CheckChainStatus
        // ? EndBattlePhase
    // ? StartEndPhase
        // ? CheckWinConditions
        // ? CheckLingeringEffects
        // ? InsertChainLink
        // ? PlayerHandRetain
        // ? PlayerHandDiscard
        // ? EndEndPhase
// ? EndTurn


// ^ FULL GAME LOGIC
// ? StartTurn
// - 1: Play phase // ? Start Play Phase
//     - Both players energy resets // ? ResetPlayerEnergy
//     - Both players cards are drawn (up to max hand limit) // ? DrawPlayerHand
//     - Both players take their turns // ? SetPlayerCards
//          - Players place cards on field
//          - Phase ends for player when energy is gone or hand is empty
//     - Both sides are set for Standby phase // ? SetFieldCards
//     ? EndPlayPhase
// - 2: Standby phase // ? StartStandbyPhase
//     - Turf is set // ? SetFieldTurf
//     - Players choose ent intentions (1 of 3 defined actions) // ? SetEntIntintions
//         - Attack ent or chain
//         - Defend itself
//         - Use its skill
//         - attacks go in order of speed after defensive positions taken
//     ? EndStandbyPhase
// - 3: Battle phase // ? StartBattlePhase
//     - Ent positions are set (either open or defend) // ? SetEntPositions
//     - Ent actions are taken (attack or use skill) in order of speed // ? InitiateEntActions
//         - Game log and field is updated (eventually with animations)
//     - Ents evo counters update after each action // ? CheckEntStatus
//     - After each attack check for defeated ent // ? CheckEntStatus
//     - After each attack check chain link status // ? CheckChainStatus
//     ? EndBattlePhase
// - 4: End phase // ? StartEndPhase
//     - Game win logic is checked // ? CheckWinConditions
//     - Lingering/end turn effects take place // ? CheckLingeringEffects
//     - New chain link is inserted // ? InsertChainLink
//     - Players choose cards to retain (if any) for next turn // ? PlayerHandRetain
//     - Remaining cards in hand are discarded // ? PlayerHandDiscard
//     ? EndEndPhase
// ? EndTurn

// ^ SMALL STIPULATIONS TO ADD
// side effects and returns will be used for events downstream
// - Each card has energy cost to be placed on the field
// - Ents get evo counter for each successful action
    // in defend position and successfully repels attack
    // successfully attacks other ent
    // successfully uses skill
// - Ents don’t use energy to attack
// - Ents evolve at end phase of turn after evo counter criteria is met
    // if evolve criteria is +3 evo and ent is hit mid turn and ent loses 1 evo it will still evolve
// - Ents die/discard as soon as they are defeated (mid turn) and hit negative evo criteria
// - After all Energy has been spent or player ends play phase, the standby phase begins
// - After player selects all Ent options or ends standby phase, the battle phase begins
// - Any players not “retained” will be discarded

// ^ LOGIC TO BE FIGURED OUT
// [ ] START NEW GAME LOGIC
    // [ ] create players
    // [ ] create field
    // [ ] set decks
// [ ] TURN LOGIC
    // [ ] Play phase
    // [ ] Standby phase
    // [ ] Battle phase
    // [ ] End phase
// [ ] WIN CONDITION LOGIC
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
