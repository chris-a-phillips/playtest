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

function rotate(matrix) {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]).reverse();
        result.push(row);
    }
    return result;
};

console.log('matrix:', rotate(matrix))
// console.log('matrix reverse:', matrix.reverse())