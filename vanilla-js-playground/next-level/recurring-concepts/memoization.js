// Memoization - save the results of your function to improve performance

const prevValues = []

function square(n) {
    if (prevValues[n] != null) {
        return prevValues[n]
    }

    let result = 0

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            result += 1
        }
    }

    prevValues[n] = result
    return result
}

