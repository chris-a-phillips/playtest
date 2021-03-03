const matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
];

function countNeighbors(grid) {
	const rows = grid.length;
	const columns = grid[0].length;
	let neighbors = 0;
	console.log('individual cell:', grid);

	const operations = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			operations.forEach(([x, y]) => {
				const iCoord = i + x;
				const jCoord = j + y;
				// const cell = grid[iCoord][jCoord];
				if (
					iCoord >= 0 &&
					iCoord < rows &&
					jCoord >= 0 &&
					jCoord < columns
				) {
					console.log('============');
					console.log(iCoord, jCoord);
					console.log('============');
					neighbors++;
					console.log(neighbors);
				}
			});
		}
	}

	return neighbors;
}


// console.log(countNeighbors(matrix))