// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') => true
// validAnagram('aaz', 'zza') => false
// validAnagram('anagram', 'nagaram') => true
// validAnagram('rat', 'car') => false
// validAnagram('awesome', 'awesom') => false
// validAnagram('qwerty', 'qeywrt') => true
// validAnagram('testtwisttime', 'timetwisttext') => true

const validAnagram = (strOne, strTwo) => {
    // error check for same size array
    if(strOne.length !== strTwo.length) {
        return false
    }
    // create objects
    const storageOne = {}
    const storageTwo = {}
    // fill those objects with the number of letters in each word
    for(const letter of strOne) {
        storageOne[letter] = (storageOne[letter] || 0) + 1
    }
    for(const letter of strTwo) {
        storageTwo[letter] = (storageTwo[letter] || 0) + 1
    }
    // loop over and check to see if both objects are "equal"
    for(const key in storageOne) {
        if(!(key in storageTwo)) {
            return false
        }
        if(storageTwo[key] !== storageOne[key]) {
            return false
        }
    }
    return true
}

console.log(validAnagram('snow', 'wont'))