// const user = {
//     username: "Shivam",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);
//         // this => refers to current context
//         // console.log(this);
//     }
// }

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "Shivam"
//     // console.log(this);
//     // console.log(this.username);
// }

// chai();


// const chai2 = function() {
//     let username = "Shivam"
//     console.log(this.username)
// }

// chai2()


// const chai = () => {
//     let username = "Shivam"
//     console.log(this.username);
// }

// chai()

// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(8, 8));

// Implicit Return
const addThree = (num1, num2, num3) => num1 + num2 + num3

console.log(addThree(5, 6, 7));

const addTwo = (num1, num2) => ({username: "Shivam"})

console.log(addTwo(5, 5));

const myArray = [2, 5, 3, 8, 7]

