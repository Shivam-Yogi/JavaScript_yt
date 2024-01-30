// console.log("H")
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("S")
// console.log("H")


function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}  


sayMyName()

// function addTwoNumbers(number1, number2)  {
//     console.log(number1 + number2);
// }

// // addTwoNumbers(3, 4);

// addTwoNumbers(3, null);

// // addTwoNumbers(3, "4");

// const result = addTwoNumbers(5, 3)

// console.log("Result:", result)



// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2;
//     console.log("Shivam")
//     return result
// }

// const result = addTwoNumbers(6, 7);

// console.log("Result is:", result);




function loginUserMessage(username  /* = "sam" */) {
    if(username === undefined)
    {
        return "Please enter a username...";
    }
    return `${username} just logged in`
}


let result = loginUserMessage("Shivam");

console.log(result);

console.log(loginUserMessage());

