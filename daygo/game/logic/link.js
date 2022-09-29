// fix so that it only checks its own health and is created (chain on field should check for things)

export default class Link {
    constructor(maxHealth) {
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        this.category = 'Link';
        this.owner = {};
        this.threshold = maxHealth / 2;
        this.damage = {
            playerAlpha: 0,
            playerOmega: 0,
        };
    }

    checkLink() {

    }
}
