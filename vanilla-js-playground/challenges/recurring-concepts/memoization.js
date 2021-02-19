// Memoization - save the results of your function to improve performance

const myFunc = (function buildFunc() {
    const memo = {};

    const getKey = ([a, b]) => {
        // we are always expecting two values
        let key = `${a} - ${b}`;
        return key;
    }

    return (args) => {
        // this is the function that will be myFunc
    }
    
})()