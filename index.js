const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const team = [{
	coach: ['head', 'assistant', 'trainer'],
	player: ['offense', 'defense', 'special teams'],
	franchise: ['name', 'city', 'conference']
}]

// function rotate(matrix) {
//     let result = [];
//     for(let i = 0; i < matrix[0].length; i++) {
// 		console.log(matrix)
// 		let row = matrix.map(e => e[i]).reverse();
// 		console.log(row)
//         result.push(row);
//     }
//     return result;
// };

function rotate(matrix) {
	// since it is a 2D array (an array nested in an array) we need two loops (or a loop and a map)
	
}

console.log('matrix:', rotate(matrix))
// console.log('matrix reverse:', matrix.reverse())


