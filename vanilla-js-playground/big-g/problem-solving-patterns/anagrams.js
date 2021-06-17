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

const validAnagram2 = (first, second) => {
    if(first.length !== second.length) {
        return false
    }

    const lookup = {}

    for (let i = 0; i < first.length; i++) {
        const letter = first[i]
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for (let i = 0; i < second.length; i++) {
        const letter = second[i]
        // if we can't find a letter or letter is zero then return false
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
        console.log(lookup)
    }

    return true
}


console.log(validAnagram2('hiiii', 'hiiii'));