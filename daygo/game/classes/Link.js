export default class Link {
    constructor(maxHealth) {
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        this.category = 'Link';
        this.owner = '';
        this.threshold = maxHealth / 2;
        this.damage = {};
    }

    assignDamageNames(playerAlpha, playerOmega) {
        /** Sets player names on links for damage tracking
         *
         * Attributes:
         *  damage: copy of property of Link for logging
         * Args:
         *  playerAlpha: player passed in to create name as property on damage
         *  playerOmega: player passed in to create name as property on damage
         * Returns:
         *  damage: copy of property of Link for logging
         */
        const damage = {
            [playerAlpha.name]: 0,
            [playerOmega.name]: 0
        }

        this.damage[playerAlpha.name] = 0
        this.damage[playerOmega.name] = 0

        return damage
    }

}