import { allEnts } from "./ents.js";
import { allItems } from "./items.js";
import { allEffects } from "./effectcards.js";
import { allArtifacts } from "./artifacts.js";


class Side {
	constructor() {
        this.deck = []
		this.hand = []
		this.discardPile = []
		this.exhaustPile = []
		this.artifact = {}
	}

	createDeck = () => {
        for (const card in allEnts) {
            this.deck.push(allEnts[card])
        }
        for (const card in allItems) {
            this.deck.push(allItems[card])
        }
        for (const card in allEffects) {
            this.deck.push(allEffects[card])
        }
        for (const card in allArtifacts) {
            this.deck.push(allArtifacts[card])
        }
    }

    emptyHand = () => {
        if (!this.hand.length) return
        for (const card of this.hand) {
            this.discardPile.push(card)
        }
        this.hand = []
        return
    }

    drawHand = (count = 5) => {
        const diff = count - this.hand.length
        for (let i = 0; i < diff; i++) {
            const element = this.deck.shift()
            this.hand.push(element)
        }
    }

    exhaustCard = (card) => {
        this.hand = this.hand.filter(item => item !== card)
        this.deck = this.deck.filter(item => item !== card)
        this.discardPile = this.discardPile.filter(item => item !== card)
    }

    resetDeck = () => {
        this.deck = this.discardPile
        this.discardPile = []
        this.shuffleDeck()
    }

    shuffleDeck = () => {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}


const test = new Side
test.createDeck()
test.drawHand()
console.log(test.hand.length)
test.exhaustCard()
console.log(test.hand.length)
