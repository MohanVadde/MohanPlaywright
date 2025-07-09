// Calculate per person cost
// Create: totalBill = 1280, tipPercent = 10, numPeople = 4.
// Add tip to total, then divide by numPeople to get perPersonCost.

let totalBill = 1280
let tipPercent = 10
let numPeople = 4 

let total_tip_percent = totalBill / tipPercent
let total_num_people_share = Math.floor(total_tip_percent / numPeople)

console.log(total_num_people_share)