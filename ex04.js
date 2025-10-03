// Instructions: Use lodash's chain function to filter the even numbers from the array 
// and then get their sum.

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumOfEvens = _.chain(numbers)
.filter((num) => num % 2 === 0)
.reduce((acc, cur) => acc + cur)
.value()

console.log(sumOfEvens); // Expected output: 20
