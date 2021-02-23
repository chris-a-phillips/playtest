// What is a permutation
    // a collection of things where order matters
    // given a set of n things, there are n! permutation

const permutations = (elements) => {
    if(elements.length === 0) return [ [] ]

    const firstElem = elements[0]
    const rest = elements.slice(1)

    const allPermutations = []

    const permsWithoutFirst = permutations(rest)
    permsWithoutFirst.forEach( perm => {
        for (let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i), firstElem, ...perm.slice(i)]
            allPermutations.push(permWithFirst)
        }
    })

    return allPermutations
}


// Time: O(n!)
// Space: O(n^2)

const testArray = ['a', 'b', 'c']

// [
//     [ c, b, a ],
//     [ b, c, a ],
//     [ b, a, c ],
//     [ c, a, b ],
//     [ a, c, b ],
//     [ a, b, c ]
// ]

console.log(permutations(testArray))