var moveZeros = function (arr) {
	for (let i = arr.length; i >= 0; i--) {
		if (arr[i] === 0) {
			const zero = Number(arr.splice(i, 1));
			arr.push(zero);
		}
	}

	return arr;
};

module.exports = moveZeros;
