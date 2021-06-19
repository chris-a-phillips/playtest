// Given a sorted array of integers, write a function called binarySearch, that accepts a value and returns the index where the value passed to the function is located. if the value is not found return -1

// binarySearch([1,2,3,4,5,6], 4) => 3
// binarySearch([1,2,3,4,5,6], 6) => 5
// binarySearch([1,2,3,4,5,6], 11) => -1


const binarySearch = (arr, target) => {
	let min = 0;
	let max = arr.length - 1;
	let middle;
	let i = 0;
	while (max >= min) {
		i++;
		console.log('i:', i);
		middle = Math.floor((max + min) / 2);
		if (arr[middle] === target) {
			return `Target ${target} is at position ${middle}`;
		} else if (arr[middle] < target) {
			min = middle + 1;
		} else if (arr[middle] > target) {
			max = middle - 1;
		}
	}
	return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));