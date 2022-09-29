// fix so that is does attacking, defending, etc
// it should be in charge of its own logic

export default class Ent {
    constructor (name, type, attack, defense, speed) {
        this.name = name
        this.type = type
        this.attack = attack
        this.defense = defense
        this.speed = speed
        this.category = 'Ent'
        this.evo = 0
        this.skill = null
        this.owner = null
        this.item = null
        this.intent = null
        this.target = null
        this.position = null
    }

    activateSkill () {

    }
}
