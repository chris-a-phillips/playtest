// Backtracking is a method to solve problems by making a series of choices that we can return or backtrack to

// In solving problems like this there are usually three main functions
//     1. Driver function that calls our helper function where appropriate
//     2. Helper function that checks {{{{if things are valid}}}}
//     3. Main logic function that does the heavy lifting at each instance

// 3 KEYS of our main logic function
//     1. Our Choice 
//         What choice do we make at each call of the function?
//         RECURSION EXPRESSES DECISION
//     2. Our Constraints
//         When do we stop following a certain path?
//         When do we not waste time and attempt a certain option
//     3. Our goal
//         What's our target?
//         What are we trying to find?
//         BASE CASE COMES FROM OUR GOAL


// the call stack "remembers" our choices and "knows" what to choose next

// choose -> explore -> unchoose