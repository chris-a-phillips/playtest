// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) => 2
// countUniqueValues([1,2,3,4,4,4,5,5,12,12,13]) => 7
// countUniqueValues([]) => 0
// countUniqueValues([-2,-1,-1,0,1]) => 4

const countUniqueValuesWithSet = (arr) => {
    const set = new Set([...arr])
    return set.size
}

console.log(countUniqueValuesWithSet([1, 2, 3, 4, 4, 4, 5, 5, 12, 12, 13]));


const countUniqueValues = (arr) => {
    if (arr.length === 0) {
        return 0
    }
    // initalize left pointer
    const array = [...arr]
    let i = 0
    // initialize walker to check each element
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            // move i and make it whatever j is
            i++
            array[i] = array[j]
        }
    }
    // return position of i + 1 (because index starts at 0)
    return i + 1
}


console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 12, 12, 13]));