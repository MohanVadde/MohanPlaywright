// The cricket World Cup has started in Chefland. There are many teams participating in the group stage matches. Any team that scores 
// 12
// 12 or more points in the group stage matches qualifies for the next stage.

// You know the score that a particular team has scored in the group stage matches. Determine if the team has qualified for the next stage or not.

// Input Format
// The first and only line of input consists of an integer 
// X
// X denoting the total points scored by the given team in the group stage matches.

// Output Format
// Output Yes, if the team has qualified for the next stage, and No otherwise.

// You may print each character of the string in uppercase or lowercase (for example, the strings YES, yEs, yes, and yeS will all be treated as identical).

// Constraints
// 1
// ≤
// X
// ≤
// 20
// 1≤X≤20
// Sample 1:
// Input
// Output
// 3
// No
// Explanation:
// The team has not scored 
// ≥
// 12
// ≥12 points. Hence it does not qualify.

// Sample 2:
// Input
// Output
// 17
// Yes
// Explanation:
// The team has scored 
// ≥
// 12
// ≥12 points. Hence it does qualify.


//Code
const readline = require("readline"); // Import the built-in 'readline' module to handle user input

// Step 1: Create readline interface to read input from keyboard and write output to screen
const rl = readline.createInterface({
  input: process.stdin,   // Set input source to keyboard
  output: process.stdout  // Set output to display on console
});

// Step 2: Ask user for input using a question prompt
rl.question("Enter a Number", function(input) {
  const x = parseInt(input); // Step 3: Convert the input string to an integer

  if (x >= 12) {
    console.log("Yes"); 
  } else {
    console.log("No");  
  }

  rl.close(); // Step 5: Close the readline interface after input is processed
});
