// Strict not equal
// Create: x = "15", y = 15.
// Check if x !== y and print result.

const x = "15"
let y = 15
// ➡️ !== checks both value and type.
// So "15" (string) is not strictly equal to 15 (number).
console.log(x!==y,x==y,1)

// Loose not equal
// Create: x = "15", y = 15.
// Check if x !=== y and print result.


//SyntaxError: Unexpected token '='
//x!=== it wont perform like that
console.log(x!==y,x===y,2)
