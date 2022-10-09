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

const exampleFunccion = (arg) => {
    /**
     * * The function does this
     *
     * ^ Attributes:
     *  @param attr: variables created in the function
     * ^ Args:
     *  @param arg: argument passed into the function
     * ^ Returns:
     *  @param ret: the return of the function
     */
}

// have enemies be able to attack, defend, and use effect



// have a field with 2 player sides and combined metadata (chain, weather, etc.)
// each player side has 1 owner (player)
// have a slot for each card that will be on the field



// [ ] ent effects

// [ ] add cards and ents to field

// FLOW WILL GO LIKE THIS (goal is to chain methods if possible)
    // PLAY PHASE:
        // entBattleReset(entArray) -> returns entArray
        // .orderEntsBySpeed(entArray) -> returns entArray
    // BATTLE PHASE:
        // entActionSequence(entArray) -> returns entArray
            // EACH ENT IN THE ARRAY WILL DO THE FOLLOWING (in order depending on speed; will need to check if ent is destroyed or not)
            // entAtkResolve(ent, target) -> returns nothing
                // atkOpenPosEnt(ent, target) -> returns true/false
                // atkDefPosEnt(ent, target) -> returns true/false
                // atkChain(ent, target) -> return owner for following functions
                // .checkLink(owner) -> returns destroyed true/false
                // shiftChain(owner) -> returns true
            // entSkillResove(ent) -> should return ent

