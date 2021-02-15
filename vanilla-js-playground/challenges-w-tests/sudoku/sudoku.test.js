const solution = require('./sudoku');

describe('codewars', () => {
	it('A completed problem solved to perfection should return finished.', () => {
		expect(
			solution([
				[5, 3, 4, 6, 7, 8, 9, 1, 2],
				[6, 7, 2, 1, 9, 5, 3, 4, 8],
				[1, 9, 8, 3, 4, 2, 5, 6, 7],
				[8, 5, 9, 7, 6, 1, 4, 2, 3],
				[4, 2, 6, 8, 5, 3, 7, 9, 1],
				[7, 1, 3, 9, 2, 4, 8, 5, 6],
				[9, 6, 1, 5, 3, 7, 2, 8, 4],
				[2, 8, 7, 4, 1, 9, 6, 3, 5],
				[3, 4, 5, 2, 8, 6, 1, 7, 9],
			])
		).toBe('Finished!');
	});
	it('Row has a duplicate', () => {
		expect(
			solution([
				[5, 3, 4, 6, 1, 8, 9, 1, 2],
				[6, 7, 2, 1, 9, 5, 3, 4, 8],
				[1, 9, 8, 3, 4, 2, 5, 6, 7],
				[8, 5, 9, 7, 6, 1, 4, 2, 3],
				[4, 2, 6, 8, 5, 3, 7, 9, 1],
				[7, 1, 3, 9, 2, 4, 8, 5, 6],
				[9, 6, 1, 5, 3, 7, 2, 8, 4],
				[2, 8, 7, 4, 1, 9, 6, 3, 5],
				[3, 4, 5, 2, 8, 6, 1, 7, 9],
			])
		).toBe('Try again!');
	});
	it('Column has a duplicate', () => {
		expect(
			solution([
				[5, 3, 4, 6, 7, 8, 9, 1, 2],
				[6, 7, 2, 1, 9, 5, 3, 4, 8],
				[1, 9, 8, 3, 4, 2, 5, 6, 7],
				[8, 5, 9, 7, 6, 1, 4, 2, 3],
				[4, 2, 6, 8, 5, 3, 7, 9, 1],
				[7, 1, 3, 9, 2, 4, 8, 5, 6],
				[1, 6, 1, 5, 3, 7, 2, 8, 4],
				[2, 8, 7, 4, 1, 9, 6, 3, 5],
				[3, 4, 5, 2, 8, 6, 1, 7, 9],
			])
		).toBe('Try again!');
	});
	it('3x3 grid has a duplicate', () => {
		expect(
			solution([
				[5, 3, 4, 6, 7, 8, 9, 1, 3],
				[6, 7, 2, 1, 9, 5, 3, 4, 8],
				[1, 9, 8, 3, 4, 2, 5, 6, 7],
				[8, 5, 9, 7, 6, 1, 4, 2, 3],
				[4, 2, 6, 8, 5, 3, 7, 9, 1],
				[7, 1, 3, 9, 2, 4, 8, 5, 6],
				[9, 6, 1, 5, 3, 7, 2, 8, 4],
				[2, 8, 7, 4, 1, 9, 6, 3, 5],
				[3, 4, 5, 2, 8, 6, 1, 7, 9],
			])
		).toBe('Try again!');
	});
});