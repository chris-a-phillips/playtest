// Write a function `fib(n)` that takes in a number as an argument
// The function should return the n-th number of the Fibonacci sequence

// The 1st and 2nd number of the sequence is 1
// To generate the next number of the sequence, we sum the previous two numbers

// Memoization is when we store values from a prior operation, so that newer iterations don't need to compute the same data

function fib(n) {
	if (n <= 2) {
		return 1
	} else {
		return fib(n - 1) + fib(n - 2)
	}
}

const fibMem = (n, memo = {}) => {
	if (n in memo) return memo[n];
	if (n <= 2) return 1;

	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
	return memo[n];
};
