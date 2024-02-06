// let myHeros = ['Thor', 'Spiderman']

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",
    
//     getSpiderPower: function() {
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.shivam = function() {
//     console.log(`Shivam is present in all objects`);
// }

// Array.prototype.heyshivam = function() {
//     console.log(`Shivam says hello`);
// }

// heroPower.shivam()
// myHeros.heyshivam()
// // heroPower.heyshivam()


// // Inheritance
// const User = {
//     name: "Shivam",

// }

// const Teacher = {
//     makeVideo: true
// }


// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__:  TeachingSupport
// }

// Teacher.__proto__ = User
// console.log(Teacher.name);
// console.log(TASupport.isAvailable);


// // modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)

// let anotherUsername = "ChaiAurCode       "


let myName = "Shivam      "

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True Length is: ${this.trim().length}`)
}

myName.trueLength()