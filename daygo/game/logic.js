// create a simple field with 2 enemies per side and 1 chain link
// have enemies be able to attack, defend, and use effect


export class Card {
    constructor(name) {
        this.name = name;
    }
}

export class Ent extends Card {
    constructor(name, attack, defense, speed) {
        super(name);
        this.type = Ent
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.owner = null;
        this.evo = 0;
        this.target = null;
        this.intent = null;
        this.position = null;
    }

    activateEffect() {

    }
}


export class Player {
    constructor(playerName) {
        this.playerName = playerName;
        this.ents = {
            slotOne: Ent,
            slotTwo: Ent,
            slotThree: Ent,
            slotFour: Ent
        };
        this.currentChainDamage = 0;
    }

    setEnt(Ent, slot) {
        slot = slot
        this.ents[slot] = Ent
        Ent.owner = this
    }
}


export class Link {
    constructor(maxHealth) {
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        this.type = Link;
        this.victor = null;
        this.threshold = maxHealth / 2;
    }

    checkForLinkOwner(Link) {

    }
}


export class Field {
    constructor(teamOne, teamTwo) {
        this.teamOne = teamOne;
        this.teamTwo = teamTwo;
        this.chain = [];
        this.ents = [];
    }

    updateEnts(entsArray) {
        this.ents = entsArray
        return
    }

    createLink(health) {
        const link = new Link(health)
        this.chain.push(link)
        console.log(this.chain)
        console.log(this.chain.length)
        return
    }

}

export class Game {
    constructor(field) {
        this.field = field;
        this.turns = [];
    }

    declareIntention(ent, intent, target) {
        ent.intent = intent
        if(intent === 'defend') {
            ent.position = 'defend'
        } else if (intent === 'attack') {
            ent.position = 'open'
            ent.target = target
        }
        const message = `${ent.name} ${intent} ${target.name}`
        // console.log(message)
    }

    sortEntActionsBySpeed(entArray) {
        entArray = entArray.sort((a, b) => (a.speed > b.speed) ? 1 : -1)
    }


    takeActions(entArray) {
        for(const ent of entArray) {
            if(ent.intent === 'attack') {
                this.attack(ent, ent.target)
            } else if(ent.intent === 'defend') {
                ent.position = 'defend'
            }
        }
    }


    attack(attacker, target) {
        if(target.type === Ent) {
            if (target.position === 'defend') {
                if(attacker.attack >= target.defense) {
                    attacker.evo ++
                    target.evo --
                } else if(attacker.attack < target.defense) {
                    attacker.evo --
                    target.evo++
                }
            } else if(target.position === 'open') {
                if(attacker.attack > target.attack) {
                    attacker.evo ++
                    target.evo --
                } else if(attacker.attack <= target.attack) {
                    attacker.evo --
                    target.evo ++
                }
            }
        } else if(target.type === Link) {
            const damage = attacker.attack
            target.currentHealth -= damage
            attacker.owner.currentChainDamage += damage
            if(attacker.owner.currentChainDamage >= target.threshold) {
                target.victor = attacker.owner
                this.field.chain.shift()
                this.field.teamOne.currentChainDamage = 0
                this.field.teamOne.currentChainDamage = 0
            }
        }
    }

    resetEnts(entArray) {
        for (const ent of entArray) {
            ent.target = null;
            ent.intent = null;
            ent.position = null;
        }
    }

    takeTurn() {
        const entsOnField = this.field.ents
        this.sortEntActionsBySpeed(entsOnField)
        this.takeActions(entsOnField)
        this.resetEnts(entsOnField)
        this.turns.push(entsOnField)

        return
    }
}
