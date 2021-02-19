

function countDown(num) {
    if (num === 0) {
        return
    }

    console.log(num)
    num -= 1

    return countDown(num)
}

// console.log(countDown(10))