// Types of Variables
// Var,let,const

var name = "Mohan"; 

// Redeclaration Allowed 
var z= 10;

var n= 20; //No error

var y = 10;

// 
let city = "Hyderabad"
const pi = 3.14 
var isActive = true

//Dynamic Typing
let x = 10;
x = "ten";

// Hoisting (Important Concept!)
// JS Moves var declarations to the top of their sccope.But not let and const.

// console.log(a)  Undefinednode 

// Examples
let user = "Mohan";
const role = "Tester";
var loggedin = true

user = "Admin";  //Its good
//role = "dev" //typeeror

// use let for values that may change.
// use const for values that stay constant.
// Avoid var unless you are debugging ancient code.

// Different data types stored in variables

let username = "Mohan";  //String
let score = 99.5;   //Number
let is_Logged_in = true;  //Boolean
let user_Values = {name: "Mohan",age:25};  //Object
let colors = ["red","blue","green"];  //Array
let greet = function(){ console.log("YO");};  //Functioin
let nothing = null;  //Null
let notDefined;  //Undefined

//Template Literals (String + Variables)

let product = "Laptop";
let price  = 45000;
let message = `the ${product} costs ₹${price}`

//using Variables in Functions

function greetUser(name){
    console.log(`Hello, ${name}!`)
}

let username1 = "Mohan";

greetUser(username1); // Output: Hello, Mohan!

//Scope - Based Examples

function testScope(){
    var d = 1;  //function-scoped
    let b = 1;  //block-scoped
    const c = 4;  //block-scoped
}

console.log(d); // Error if outside the function

