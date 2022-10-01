import { Field, Game, Player, Side } from "../classes.js";

// ^ FetchPlayerInfo


// ^ FetchPlayerDecks


// ^ CreatePlayers
const ash = new Player('ash', [])
const yugi = new Player('yugi', [])


// ^ CreateSides
const alpha = new Side(ash)
const omega = new Side(yugi)


// ^ CreateField
const field = new Field(alpha, omega)


// ^ CreateGameSession
const game = new Game(field)


// ^ CreateChainLinks
const healthValues = [300, 400, 500]
field.createChain(ash, yugi, healthValues)


console.log(game)
// console.log('links:', game.field.chain.open)

export { game }
