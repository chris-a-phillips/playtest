// fix it so that it contains all of the ent and chain info

import Link from './link.js'

export default class Field {
  constructor (teamOne, teamTwo) {
    this.teamOne = teamOne
    this.teamTwo = teamTwo
    this.chain = []
    this.ents = []
  }

  addToChain (health) {
    const link = new Link(health)
    this.chain.push(link)
    console.log(this.chain)
    console.log(this.chain.length)
  }

  updateEnts (entsArray) {
    this.ents = entsArray
  }
}
