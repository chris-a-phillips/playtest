function order(words) {
	const sentence = words.split(' ');
	const wordsObj = {};

	for (const word of sentence) {
		for (const letter of word) {
			if (parseInt(letter) == letter) {
				wordsObj[letter] = word;
			}
		}
	}

	let res = '';

	for (const word in wordsObj) {
		res = res + wordsObj[word] + ' ';
	}

	return res.trim();
}

module.exports = order;
