// 1. Average of two numbers
const averageOfNum = (num1, num2) => {
    let average = (num1 + num2) / 2
    return average
}
console.log(averageOfNum(4, 6))

//2. Average of three numbers

const avegOfThreeNum = (num1, num2, num3) => {
    let average = (num1 + num2 + num3) / 3
    return average
}
console.log(avegOfThreeNum(1, 3, 5))

//3. Average of Array

const averageArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}
console.log(averageArr([1, 2, 3, 4, 5, 10, 10]))

//4. Remove even numbers

const removeEvenNum = (arr) => {
    return arr.filter((el) => {
        return el % 2 === 0;
    })
}
console.log(removeEvenNum([1, 2, 3, 4, 5, 6]))

/* 
##
5. Make sure each number is positive
Write a function that checks to see whether every number in an array is positive.
``
`
Input: [-4,3,-2,4]
Output: false
`
``
BONUS: If you didn't, rewrite this using an array method with a callback. */

const checkForPositiveNum = (arr) => {
    return arr.every((el) => {
        return el >= 0;
    })
}
console.log(checkForPositiveNum([-4, 3, -2, 4]))

// /* ##
// 6. Lowercase all strings

// Write a function that lowercases all strings in an array of strings.
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
// `
// ``
// BONUS:
// -A.If you didn't, rewrite this using an array method with a callback
// -B.Make it work even
// if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]`
// would give output = `['hello']`*/

const lowerCaseStr = (arr) => {
    return arr.map((el) => {
        return el.toLowerCase();
    })
}
console.log(lowerCaseStr(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]))