const doneOrNot = (board) => {
	function inputCheck(matrix) {
		let boardTotal = 0;
		matrix.map((section) => {
			const uniqueSection = new Set([...section]);
			let sectionTotal = section.reduce((a, b) => a + b);
			boardTotal += sectionTotal;

			if (uniqueSection.size !== 9) {
				return false;
			}

			if (sectionTotal !== 45) {
				return false;
			}
		});

		if (boardTotal !== 405) {
			return false;
		}
		return true;
	}

	// rows
	inputCheck(board);

	// columns
	let allColumns = [];

	for (i = 0; i < board.length; i++) {
		let columnArray = [];
		for (j = 0; j < 9; j++) {
			columnArray.push(board[j][i]);
		}
		allColumns.push(columnArray);
	}

	inputCheck(allColumns);

	// 3x3 check
	let grid = [];
	for (let i = 0; i < 9; i += 3) {
		for (let j = 0; j < 9; j += 3) {
			let group = [];
			group.push(board[i][j], board[i][j + 1], board[i][j + 2]);
			group.push(
				board[i + 1][j],
				board[i + 1][j + 1],
				board[i + 1][j + 2]
			);
			group.push(
				board[i + 2][j],
				board[i + 2][j + 1],
				board[i + 2][j + 2]
			);
			grid.push(group);
		}
	}
	console.log(board);
	//   console.log(inputCheck(board))
	//   console.log(inputCheck(allColumns))
	//   console.log(inputCheck(grid))

	return inputCheck(board) && inputCheck(allColumns) && inputCheck(grid)
		? 'Finished!'
		: 'Try again!';
};

module.exports = doneOrNot;
