// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer a

// Guaranteed constraints:
// 1 ≤ a.length ≤ 100,
// a[i].length = a.length,
// 1 ≤ a[i][j] ≤ 104.

// [output] array.array.integer

function rotateImage(matrix) {
	matrix = matrix.reverse();

	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < i; j++) {
			var temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}
	return matrix;
}