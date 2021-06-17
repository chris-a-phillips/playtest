// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the same array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) => true
// same([1,2,3], [1,9]) => false
// same([1,2,1], [4,4,1]) => false

const same = (arr1, arr2) => {
    // first error check for unequal length arrays
    if (arr1.length !== arr2.length) {
        return false
    }
    // define empty objects
    const frequencyCounterOne = {}
    const frequencyCounterTwo = {}
    // fill those objects with the elements in the arrays
    for (const val of arr1) {
        // frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1
    }
    for (const val of arr2) {
        frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1
    }
    for (const key in frequencyCounterOne) {
        if (!(key ** 2 in frequencyCounterTwo)) {
            return false
        }
        if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key]) {
            return false
        }
    }
    return true
}

console.log(same([1, 2, 3], [4, 1, 9]));
