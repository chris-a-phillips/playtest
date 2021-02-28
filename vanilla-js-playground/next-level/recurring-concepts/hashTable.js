// hashing function
function hashStringToInt(s, tableSize) {
    // good to use prime numbers to spread out where keys are stored
    let hash = 17;
    // hashes each letter
    for (let i = 0; i < s.length; i++) {
        // we need to mod it by the table size because the number would be huge
        hash = ( 13 * hash * s.charCodeAt(i)) % tableSize
    }
    // 13 and 17 are just arbitrary numbers for example
	return hash;
}

class HashTable {
	// table is one large array
	table = new Array(100);

	setItem(key, value) {
		// index of new value is created from our hashing function
		const idx = hashStringToInt(key, this.table.length);
		// set the value of our "table" at [idx] location to the value passed in
		this.table[idx] = value;
	}

	getItem(key) {
		// look up our index by inserting the key into our hashing function
		const idx = hashStringToInt(key, this.table.length);
		// return the value at this location in our "table"
		return this.table[idx];
	}
}

const myTable = new HashTable();
myTable.setItem('firstName', 'bob');
myTable.getItem('firstName', 'bob');

console.log(myTable);
