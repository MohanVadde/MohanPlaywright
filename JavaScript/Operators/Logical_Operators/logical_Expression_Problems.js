
1.//Weekend Checker
// Weekend or not
// day = "Sunday"
// Check if day is "Saturday" OR "Sunday" using ||

let day = "Sunday"
console.log(day == "Saturday" || day == "Sunday", 1)

2.//Age and Citizenship Check
// Eligibility check
// age = 20, citizenship = "Indian".
// Use && to check if age ≥ 18 and citizenship === "Indian"

const age = 20
const citizenship = "Indian"
console.log(age >= 18 && citizenship === "Indian", 2)

3.// Check Login Validy
// Check login
// Create: username = "Mohan", password = "12345".
// Check if both username is not empty AND password length ≥ 5 using &&

const username = "Mohan"
const password = "12345"
console.log(username.length != 0 && password.length >= 5, 3)

4.//User Role Access
// Role access control
// role = "admin"
// Check if role is either "admin" OR "manager" for dashboard access.

const role = "admin"
console.log(role === "admin" || role === "manager", 4)


5.//Multiple Discounts
// Discount logic
// discountCode = "FREESHIP", cartTotal = 1500
// Check if discountCode is valid OR cartTotal ≥ 1000

const discountCode = "FREESHIP"
const cartTotal = 1500
console.log(discountCode === "FREESHIP" || cartTotal >= 1000, 5)


6.// Invalid Input Check Using NOT
// Validate input
// input = ""
// Use ! to check if input is empty or falsy

let input = ""
console.log(!input, 6)


7.//Result Evaluation
// Pass criteria
// marks = 65, attendance = 88
// Pass if marks ≥ 50 AND attendance ≥ 75

const marks = 65
const attendance = 88
console.log(marks >= 50 && attendance >= 75, 7)

8.// Voter Eligibility with NOT
// Ineligible voter
// age = 16
// Use ! to check if user is NOT eligible to vote (age < 18)


const age_2 = 16
console.log(age_2 < 18, 8)

9.//Combine Boolean Flags
// Access permission
// isVerified = true, isBanned = false
// Grant access if isVerified AND NOT isBanned

let isVerified = true
let isBanned = false
console.log(isVerified && !isBanned,9);


10.//Complex Condition Mix
// Festival sale logic
// isMember = true, purchaseAmount = 2000, promo = "SALE20"
// Apply offer if (isMember AND purchaseAmount ≥ 1500) OR promo is "SALE20"

let isMember = true
let purchaseAmount = 2000
let promo = "SALE20"
console.log((isMember && purchaseAmount >= 1500) || promo === "SALE20",10);