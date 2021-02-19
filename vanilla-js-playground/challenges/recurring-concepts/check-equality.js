const testOne = [1, 2, 3, 'one', 'two', 'three']
const testTwo = [1, 2, 3, 'one', 'two', 'three']
const testThree = [1, 2, 3, 'one', 'two', 'Three']
const testFour = [1, 2, 3, 4]

function checkArryEquality(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}

const testObj = {
    month: 'May',
    day: 16
}

const testObjTwo = {
    month: 'May',
    day: 16
}

function checkObjectEquality(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return true
	} else return false;
}

console.log(checkObjectEquality(testObj, testObjTwo))