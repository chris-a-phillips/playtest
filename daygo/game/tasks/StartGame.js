import { Player, Side, Field, Game } from "../engine.js";

// ^ FetchPlayerInfo


// ^ FetchPlayerDecks


// ^ CreatePlayers
const ash = new Player('ash', [])
const yugi = new Player('yugi', [])


// ^ CreateSides
const alphaSide = new Side(ash)
const omegaSide = new Side(yugi)


// ^ CreateField
const field = new Field(alphaSide, omegaSide)


// ^ CreateGameSession
const game = new Game(field)


// ^ CreateChainLinks
const healthValues = [300, 400, 500]
field.createChain(ash, yugi, healthValues)

export { ash, yugi, alphaSide, omegaSide, field, game }
