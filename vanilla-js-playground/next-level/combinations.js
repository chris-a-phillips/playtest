// Combinatorics is the field of math concerned with counting things

// COMMON QUESTIONS
    // Given N things, in how many ways can we arrange them?
    // In how many ways can we do X?
    // What is the shortest way to do Y?

// What is a combination?
    // a collection of things where the order does not matter


// GENERAL RULES
    // Given a set of n things, there are 2^n possible combinations
    // each recurse is doubling in size because it is doing two things every time

const combinations = (elements) => {
    if (elements.length === 0) return [ [] ]

    // this is the one we make the decision for
    const firstElem = elements[0]
    const rest = elements.slice(1)

    // make a recursive call on the array without the first element
    const combosWithoutFirst = combinations(rest)
    const combosWithFirst = []

    combosWithoutFirst.forEach(combo => {
        // create a copy of the combination and add on the first element
        const combosWithFirst = [...combo, firstElem]
        combosWithFirst.push(combosWithFirst)
    })

    return [ ...combosWithoutFirst, ...combosWithFirst ]
}

// Time: O(2^n)
// Space: O(n^2)


const testArray = ['a', 'b', 'c'];

// [
//  [],
//  [ a ],
//  [ b ],
//  [ c ],
//  [ a, b ],
//  [ b, c ],
//  [ a, a ],
//  [ a, b, c ]
// ]

console.log(combinations(testArray));









// PYTHON
// def combinations_str(string):
//     if len(string) == 0: return [string]
//     first = string[0]
//     combos = combinations_str(string[1:])
//     result = []
//     for combo in combos:
//         result.append(combo + first)
//     return combos + result

// print(combinations_str('abc'))
// ['', 'c', 'b', 'cb', 'a', 'ca', 'ba', 'cba']