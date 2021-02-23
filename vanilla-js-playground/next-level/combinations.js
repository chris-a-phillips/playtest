// Combinatorics is the field of math concerned with counting things

// COMMON QUESTIONS
    // Given N things, in how many ways can we arrange them?
    // In how many ways can we do X?
    // What is the shortest way to do Y?

// What is a combination?
    // a collection of things where the order does not matter


// GENERAL RULES
    // Given a set of n things, there are 2^n possible combinations












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