


const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


const allDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`All numbers divisible by 5: ${allDivisibleBy5}`);

const firstLargerThanLast = n1 > n4;
console.log(`First number larger than the last: ${firstLargerThanLast}`);

let result1 = n2 - n1; // Subtract the first number from the second number
console.log(`Subtraction result (n2 - n1): ${result1}`);


let result2 = result1 * n3; // Multiply the result by the third number
console.log(`Multiplication result (result * n3): ${result2}`);

let result3 = result2 % n4; // Find the remainder of dividing the result by the fourth number
console.log(`Remainder result (result % n4): ${result3}`);

