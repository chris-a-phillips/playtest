// Properties/Methods	Description	Returns
// add(value)	Appends a new item to a Set	Set Object
// delete(value)	Removes the specified item from a Set	Boolean
// has()	Checks for the presence of an item in a Set	Boolean
// clear()	Removes all items from a Set	N/A
// keys()	Returns all values in a Set (same as values())	SetIterator object
// values()	Returns all values in a Set (same as keys())	SetIterator object
// entries()	Returns all values in a Set as [value, value]	SetIterator object
// forEach()	Iterates through the Set in insertion order	N/A
// size	Returns the number of items in a Set	Number

const set = new Set();

set.add('Beethoven');
set.add('Mozart');
set.add('Chopin');
set.add('Chopin');

const arr = [...set]

console.log(set.values())