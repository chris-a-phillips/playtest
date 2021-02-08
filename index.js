let testArray = [3, 5, 18, 30, -50, 61, 89, -94, 100, -104, 162];

function linearSearch(array, target) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return i;
		}
	}
	return -1;
}

function binarySearch(array, target) {
	let min = 0;
	let max = array.length - 1;
	let possible;
	while (min <= max) {
		possible = Math.ceil((min + max) / 2);
		if (array[possible] === target) {
			return possible;
		} else if (array[possible] < target) {
			min = possible + 1;
		} else if (array[possible] > target) {
			max = possible - 1;
		} else return possible;
	}
	return 'not in array';
}

console.log(binarySearch(testArray, -50));

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
