// Age verification
// Create: age = 17.
// Check if age is greater than or equal to 18.

const { PassThrough } = require("stream")

const age = 17
console.log(age>18,1)

// Compare expressions
// Create: a = 10, b = 5, c = 2.
// Evaluate: (a + b) > (b * c)

const a = 10,b = 5,c = 2  //OK 
// const a,b,c = 11,12,13   //Error Missing initializer in const declaration
console.log((a+b)>(b*c),2)



// Password length rule
// Create: password = "abc123".
// Check if length of password is at least 6 characters.

const password = "abc123"
console.log(password.length>=6,3)


// Check if number is within range
// Create: score = 72.
// Check if score is between 60 and 80 (inclusive).


const score = 72
console.log(score >=60 && score <= 80,4)

// Compare decimals
// Create: price1 = 99.99, price2 = 99.95.
// Check if price1 is less than or equal to price2.

const price1 = 99.9 
const price2 = 99.95 
console.log(price1<=price2,5)


// Voting eligibility
// Create: age = 16, nationality = "Indian".
// Check if age >= 18 AND nationality is "Indian".

const age_1 = 16
const nationality = "Indian"
console.log(age_1>=18 && nationality == "Indian",6)


// ✅ What’s Covered
// | Concept               | Operators Used       |
// | --------------------- | -------------------- |
// | Loose/strict equality | `==`, `===`          |
// | Inequality            | `!=`, `!==`          |
// | Relational            | `<`, `>`, `<=`, `>=` |
// | Real-world logic      | range, validation    |


//Here '&&' this experession is belongs to logical operator