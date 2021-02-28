// hashing function
function hashStringToInt(string, tableSize) {
	// good to use prime numbers to spread out where keys are stored
	let hash = 17;
	// hashes each letter
	for (let i = 0; i < string.length; i++) {
		// we need to mod it by the table size because the number would be huge
		hash = (13 * hash * string.charCodeAt(i)) % tableSize;
	}
	// 13 and 17 are just arbitrary numbers for example
	return hash;
}

class HashTable {
	// table is one large array
	table = new Array(2121);

	setItem(key, value) {
		// index of new value is created from our hashing function
		const idx = hashStringToInt(key, this.table.length);
        // this array set up is for chaining
		if (this.table[idx]) {
            // if there is a collision push another array into the array that is there
            this.table[idx].push([key, value]);
		} else {
            // if there is no collision set the value of our "table" at that location to an array with the values passed in
			this.table[idx] = [[key, value]];
		}
	}

	getItem(key) {
		// look up our index by inserting the key into our hashing function
		const idx = hashStringToInt(key, this.table.length);

        if (!this.table[idx]) {
            return null
        }
		// find this location (which is an array) and give us this array
		return this.table[idx].find(x => x[0] === key)[1];
	}
}

const myTable = new HashTable();
myTable.setItem('firstName', 'bob');
myTable.setItem('lastName', 'tim');
myTable.setItem('test', 'boi');
myTable.getItem('firstName', 'bob');

console.log(myTable.table);
