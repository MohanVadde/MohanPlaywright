//1.Question

// let a = 1;
// let b = '1';
// let c = "1";
// let d = true;
// Explanation:
// In JavaScript, all the options provided (a = 1;, b = '1';, c = "1";, d = true;) are syntactically correct:

// let a = 1; initializes variable a with the number 1.
// let b = '1'; initializes variable b with the string '1'.
// let c = "1"; initializes variable c with the string "1".
// let d = true; initializes variable d with the boolean value true.

// 2.Question

// What is the output of the following code?

let x = "55.56";
let y = 88;
let z = (x + y);
// console.log(z)
// Explanation:
// In JavaScript, the + operator performs string concatenation when one of the operands is a string.
//  Here, x is a string and y is a number. Therefore, x + y results in the string "55.5688".

// 3.Question

// What will be the output of the following?

let x = "64";
let y = 8;
console.log(x/y);
console.log(x*y);
console.log(x-y);

// Explanation:
// x / y: JavaScript converts x from a string to a number for the division operation, resulting in 64 / 8 which is 8.

// x * y: JavaScript converts x from a string to a number for the multiplication operation, 
// resulting in 64 * 8 which is 512.

// x - y: JavaScript converts x from a string to a number for the subtraction operation, 
// resulting in 64 - 8 which is 56.

// 4.Question

// What is the output of following code ?

let x = 1; 
let y = 2.6;  
let z = "2 + 3i";

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
// Note : typeof operator returns the datatype of that variable.

// Explanation:
// let x = 1; assigns the value 1 to x, which is a number.

// let y = 2.6; assigns the value 2.6 to y, which is also a number.

// let z = "2 + 3i"; assigns the string "2 + 3i" to z.
// Submit

// 5.Question

let x = 10 == 9;
console.log(x);

// Explanation:
// In JavaScript, boolean expressions evaluate to either true or false. The 
// expression 10 == 9 evaluates to false because 10 is not equal to 9.

// 6.Question
let x = 214.7487;
let y = 21257448;
console.log(typeof x);
console.log(typeof y);

// Correct Answer:

// number
// number
// Explanation:
// In JavaScript, there is no strict differentiation between integer and numeric types like in some
//  other programming languages. All numbers, whether integers or floating-point, are of type number

// 7.Question

Consider the following code snippets:

let x = Boolean("true");
let x = Boolean("False");
let x = Boolean(300);
let x = true;

// Correct Answer:

// // For all cases, x is true.
// // Explanation:
// // This option is correct because the Boolean function in JavaScript converts any non-empty string 
// // or non-zero number to true. Since "true", "False", and 300 are all truthy values, Boolean will return true
// // for these, and the direct assignment let x = true; makes x true in the fourth snippet.

// 8.Question

