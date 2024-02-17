console.log("Shivam")

const accountId = 144553 // Its to remain same throughout the code
var accountEmail = "Shivam@gmail.com" // cant handle scopes properly
let accountPassword = "123456" // better to do
accountCity = "Delhi" // bad practise

// accountId = 2 not allowed

/*
Prefer not to use
var because the block scope issues
*/
accountEmail = "hack@gmail.com"
accountPassword = "789456"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity])