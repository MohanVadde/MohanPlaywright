// Compare equality
// Create a = "5" and b = 5.
// Compare them using == and === and print both results.

let a = "5"
let b = 5
// Strict Equality
// Compares value and type
// Returns true only if both are exactly the same

console.log(a==b,1) 
console.log(5=="5","5"=="5",5==5,2)
console.log(true == 1,1 == false,3)

// Loose Equality
// Compares value only, after type conversion
// JavaScript tries to convert types to match
let c;
console.log(a===b,4)
console.log(5===5,"5"===5,true === 1,false===0,null === undefined,5)
console.log(undefined===c,c===null,c===false,c=0,6)