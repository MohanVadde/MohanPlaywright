// Time breakdown
// Create a variable named totalMinutes = 135.
// Calculate and print how many hours and minutes it contains.
// Example: 135 minutes = 2 hours and 15 minutes


let totalMinutes = 135;
let minutes = 60
let hours = Math.floor(totalMinutes / minutes)
let break_minutes = totalMinutes % minutes

console.log(hours +" hours and " + break_minutes + " minutes")