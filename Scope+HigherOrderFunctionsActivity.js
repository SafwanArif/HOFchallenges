// Activity 1:
// Write a simple function that logs ‘Hello Codenation" to the console.
// Then write a higher-order function which will run the simple function five times, even though you only call it once.
// Hint: Pass the simple function as a parameter, which will involve a For loop.

// for (let i = 1; i <= 5; i++) {
//     console.log("Hello CodeNation")
// }

const log = () => {
    console.log("Hello CodeNation")
}

const repeat = (log, rpt) => {
    for (i = 1; i <= rpt; i++){
        log()
    }
}

repeat(log, 5)

// ----------------------------------------------------------------------------------------------------------------------

// Activity 2:
// The array method .map is an example of a higher-order function.

// Declare a variable with five numbers
// then use .map to iterate through the array and multiply each array item by 3.

const fiveNum = [1, 2, 3, 4, 5]

const map = fiveNum.map(number => number*3)

console.log(map)

// ----------------------------------------------------------------------------------------------------------------------

// Activity 3: 
// Test this function to ensure it works by passing a number to the doMaths function.
// Then passing a number and one of the four maths functions to the returned function. 

const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    };
};

console.log(doMaths(49)(7, divide))
console.log(doMaths(4)(2, multiply))
console.log(doMaths(12)(6, subtract))
console.log(doMaths(-1)(1, add))

