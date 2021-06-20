function numKeypadSolutions(wordlist, keypads) {
	console.log('wordlist:', wordlist);
	console.log('keypads:', keypads);

	let res = [];

	// for each element in keypad array
	keypads.forEach((e) => {
		console.log('======================');
		console.log(e);
		// initalize words possible with 0
		let wordsPossible = 0;
		// target variable is element word split into array of letters
		const target = e.split('');
		// for each word of wordlist run this below
		for (const word of wordlist) {
			// split current word into array of words
			const spl = word.split('');

			wordCheck(target, spl);

			function wordCheck(target, possible) {
				if (!word.includes(e[0])) {
					//     console.log(e[0] + ' is not in ' + word + ' and res for ' + e +' will be 0')
					return;
				}

				if (possible.length === 0) {
					console.log('base case reached');
					wordsPossible += 1;
					return true;
				}

				let sliced;

				if (target.includes(possible[0])) {
					sliced = possible.slice(1);
				} else {
					console.log(target + ' does not include ' + possible[0]);
					return false;
				}

				console.log('trying to find ' + sliced + ' in ' + target);
				return wordCheck(target, sliced);
			}
		}

		console.log('wordsPossible:', wordsPossible);
		res.push(wordsPossible);
		console.log('======================');
	});

	console.log('res:', res);
	return res;
}

module.exports = numKeypadSolutions;
