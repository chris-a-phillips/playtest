let testMatrix = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25],
];

//dev.to/alisabaj/rotating-a-matrix-90-degrees-4a49

// PSEUDOCODE
// 1. create transpose and rotate functions
// 2. both will need a nested for loop (first loop will go through each row and secod loop will go through each column)
// 3. inside the loops we want to swap the two elements
// create a temp value and store the value at one point befor echanging the point's value

// PREPARE FOR EDGE CASES
// if the matrix is empty, there is nothing to rotate so we can return null
// if the matrix has a length of 1, then it only has one element, so we can just return that element

function transpose(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = i; j < matrix[0].length; j++) {
			const temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}
	return matrix;
}

function reverse(row, start, end) {
	while (start < end) {
		const temp = row[start];
		row[start] = row[end];
		row[end] = temp;
		start++;
		end--;
	}
	return row;
}

function rotate(matrix) {
	if (!matrix.length) return null;
	if (matrix.length === 1) return matrix;
	transpose(matrix);
	matrix.forEach((row) => {
		reverse(row, 0, row.length - 1);
	});
	return matrix
}

console.table(testMatrix);
console.table(rotate(testMatrix));
