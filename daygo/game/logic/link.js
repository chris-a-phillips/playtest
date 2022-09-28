// fix so that it only checks its own health and is created (chain on field should check for things)

export default class Link {
  constructor(maxHealth) {
    this.maxHealth = maxHealth;
    this.currentHealth = maxHealth;
    this.type = "Link";
    this.victor = null;
    this.threshold = maxHealth / 2;
    this.damage = {
      playerOne: 0,
      playerTwo: 0,
    };
  }

  checkForLinkOwner(attacker, shiftChain) {
    const damage = attacker.attack;
    this.currentHealth -= damage;
    attacker.owner.currentChainDamage += damage;
    if (attacker.owner.currentChainDamage >= this.threshold) {
      // shiftChain(attacker, this)
    }
  }
}
