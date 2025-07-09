// condition ? expression_if_true : expression_if_false;
// if (condition) {
//   // do something
// } else {
//   // do something else
// }

const { access } = require("fs");


1. //Weekend or Weekday
// Weekend Checker using ternary
// day = "Sunday"
// Use ternary to assign: "Weekend" if day is "Saturday" or "Sunday", otherwise "Weekday"

const day = "Sunday"
let result = (day == "Sunday" || day == "Saturday") ? "Weekend" : "Weekday";
console.log(result, 1)


2.//Voting Eligibility
// Voting eligibility
// age = 16
// Use ternary to print "Eligible" if age >= 18, otherwise "Not Eligible"


const age = 16
let Eligibility_test = (age >= 18) ? "Eligible" : "Not Eligible";
console.log(Eligibility_test, 2)


3.//Login Access
// Login validation
// username = "Mohan", password = "123456"
// Use ternary to assign "Access Granted" if username is not empty AND password length >= 6

const userName = "Mohan"
const password = "123456"
let Access = (userName.length > 0 && password.length >= 6) ? "Access Granted" : "Not Granted"
console.log(Access, 3)


4.//Product Availability
// Product stock status
// stock = 0
// Use ternary to assign "Out of Stock" if stock is 0, otherwise "Available"

const stock = 0
let Check_stock = (stock > 0) ? "Available" : "Out of Stock";
console.log(Check_stock,4)

5.//Grade Classification
// Grading system
// marks = 82
// Use ternary to assign "Distinction" if marks >= 75, otherwise "Regular"

const marks = 82
let check_The_Grade = (marks>=75) ? "Distinction" : "Regular"
console.log(check_The_Grade,5)

6.//Valid Email
// Email format check (basic)
// email = "user@gmail.com"
// Use ternary to assign "Valid" if email contains "@", otherwise "Invalid"

const email = "user@gmail.com"
let check_Email = email.includes("@") ? "Valid" : "Invalid";
console.log(check_Email,6)

7.//Multiples of 3 and 5
// Multiple checker
// num = 15
// Use ternary to assign "FizzBuzz" if divisible by both 3 and 5, "Fizz" if only by 3, "Buzz" if only by 5, otherwise "None"

const num = 15
let result_1 = (num%3==0 && num%5==0) ? "FizzBuzz" : (num%3==0) ? "Fizz" : (num%5==0) ? "Buzz" : "None";
console.log(result_1,7)