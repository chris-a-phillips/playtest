const solution = require('./escape-room-keypads');

// describe('sample test', () => {
// 	// individual test
// 	it('sample test 1', () => {
// 		expect(solution().toBe());
// 	});
// });

describe('sample test', () => {
	it('CORRECT ANSWER', function () {
		let wordlist = ['APPLE', 'PLEAS', 'PLEASE'];
		let keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'];
		expect(solution(wordlist, keypads)).toEqual([0, 1, 3, 2, 0]);
    });
});
