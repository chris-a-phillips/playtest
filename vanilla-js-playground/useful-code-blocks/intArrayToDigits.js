// Explanation
// 1- String(numToSeparate) will convert the number 12345 into a string, returning '12345'

// 2- The Array.from() method creates a new Array instance from an array-like or iterable object, the string '12345' is an iterable object, so it will create an Array from it.

// 3- But, in the process of automatically creating this new array, the Array.from() method will first pass any iterable element (every character in this case eg: '1', '2') to the function we set to it as a second parameter, which is the Number function in this case

// 4- The Number function will take any string character and will convert it into a number eg: Number('1'); will return 1.

// 5- These numbers will be added one by one to a new array and finally this array of numbers will be returned.

// Summary

// The code line Array.from(String(numToSeparate), Number); will convert the number into a string, take each character of that string, convert it into a number and put in a new array. Finally, this new array of numbers will be returned.


const numToSeparate = 12345;

const arrayOfDigits = Array.from(String(numToSeparate), Number);

console.log(arrayOfDigits);   //[1,2,3,4,5]