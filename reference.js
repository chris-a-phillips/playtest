function binarySearch(arr, target) {
	let min = 0;
	let max = arr.length - 1;
	let guess;
	while (max > min) {
		console.log('i:', i);
		guess = Math.floor((max + min) / 2);
		if (arr[guess] === target) {
			return `Target ${target} is at position ${guess}`;
		} else if (arr[guess] < target) {
			min = guess + 1;
		} else if (arr[guess] > target) {
			max = guess - 1;
		}
	}
	return -1;
}
