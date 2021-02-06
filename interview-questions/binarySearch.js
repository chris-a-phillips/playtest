const primes = [
	2,
	3,
	5,
	7,
	11,
	13,
	17,
	19,
	23,
	29,
	31,
	37,
	41,
	43,
	47,
	53,
	59,
	61,
	67,
	71,
	73,
	79,
	83,
	89,
	97,
];

// arr ARRAY OF INPUTS
// n NUMBER OF ELEMENTS IN THE ARRAY
// target THE NUMBER BEING SEARCHED FOR

// PSEUDOCODE
// 1. let min = 0 and max = n - 1
// 2. If max < min, stop because target is not present in array, Return -1
// 3. Create guess as the average of max and min (round down it is an integer)
// 4. If arr[guess] equals target, stop and Return guess
// 5. If the guess was too low (array[guess] < target), set min = guess + 1
// 6. If the guess was too high set max = guess - 1
// 7. Go back to step 2

// we are looking for the position not the actual number (becuase thats the input)
// 1. set our minimum to be 0 (start of the array)
// 2. set our maximum to be the end of the array (array.length - 1)
// 3. create guess variable
// 4. create a while loop and each time we run the loop do the following
// 5. set the guess to be the middle of the array (average of min and max rounded down(so that we know its an integer))
// 6. if we hit the target with our guess return the guess
// 7. if the guess is too low raise the minimum (set minimum to guess)
// 8. if the guess is too high lower the maximum (set maximum to guess)
// 9. after minimum or maximum are raised start loop again
// 10. if our mimumum and maximum connect (min > max) return -1 and stop

const simpleNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, target) {
	let min = 0;
	let max = arr.length - 1;
	let guess;
	let i = 0;
	while (max > min) {
		i++;
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

console.log(binarySearch(primes, 53));

// console.log(linearSearch(primes, 47));
