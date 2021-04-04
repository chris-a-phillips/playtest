const solution = require('./challenge');

// describe('sample test', () => {
// 	// individual test
// 	it('sample test 1', () => {
// 		expect(solution().toBe());
// 	});
// });

describe('sample test', () => {
	it('test 1', function () {
		let recipe = { flour: 500, sugar: 200, eggs: 1 };
		let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
		expect(cakes(recipe, available)).toBe(2);
    });
    it('test 2', function() {
		let recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
		let available = { sugar: 500, flour: 2000, milk: 2000 };
		expect(cakes(recipe, available)).toBe(0);
	});
});
