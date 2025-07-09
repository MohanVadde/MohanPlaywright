// Days to weeks
// totalDays = 46
// Output: 6 weeks and 4 days

let totalDays = 46
let days = Math.floor(totalDays/7)
let remaining_days = totalDays % 7
console.log(days + " weeks "+ "and " + remaining_days + " days")