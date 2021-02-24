// Properties/Methods	Description	Returns
// set(key, value)	Appends a key/value pair to a Map	Map Object
// delete(key)	Removes a key/value pair from a Map by key	Boolean
// get(key)	Returns a value by key	value
// has(key)	Checks for the presence of an element in a Map by key	Boolean
// clear()	Removes all items from a Map	N/A
// keys()	Returns all keys in a Map	MapIterator object
// values()	Returns all values in a Map	MapIterator object
// entries()	Returns all keys and values in a Map as [key, value]	MapIterator object
// forEach()	Iterates through the Map in insertion order	N/A
// size	Returns the number of items in a Map	Number

const map = new Map([
	[1970, 'bell bottoms'],
	[1980, 'leg warmers'],
	[1990, 'flannel'],
]);

const num = 2010
const cloth = 'brands'

map.set(2000, 'denim')

map.set(num, cloth)


console.log(map)