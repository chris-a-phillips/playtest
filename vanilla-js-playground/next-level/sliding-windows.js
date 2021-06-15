// initialize with an infinity so that we can start with whatever bounds we want
// we will use addition and subtraction so that we don't have to recalculate with numbers we've already done

const maxSubArraySum = (nums, size) => {
    if(size < 0 || size > arrOne.length) return null

	let currentSum = 0;
	let maxSumSeen = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i];

		if (i >= size - 1) {
			maxSumSeen = Math.max(currentSum, maxSumSeen);
			currentSum -= nums[i - (size - 1)];
		}
	}

	return maxSumSeen;
};

const arrOne = [1, 2, 3, 5, 4, 8, 6, 2];

console.log(maxSubArraySum(arrOne, 3));
