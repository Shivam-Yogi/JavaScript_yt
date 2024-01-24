// Datatypes

// 1 => Primitive

// 7 types : String, Numbers, Boolean, Null, undefined, Symbol, BigInt



//2) Reference (Non primitive)

// Array, Objects, Functions


// JavaScript is Dynamically typed language

// const id = Symbol("123")
// const anotherId = Symbol("123")

// console.log(id === anotherId)


// const bigNumber = 32333334646464646464646464646n;

// console.log(typeof(bigNumber))

const heros = ["batman", "spiderman", "superman"]

let myobj = {
    name: "Shivam",
    age: 22
}

console.log(heros[0])

myobj["job"]="Developer"

console.log(myobj.name + " is a " + myobj.job)

const myFunction = function() {
    console.log("Hell World")
}

console.log(typeof(myFunction))

console.log(typeof(myobj))

console.log(typeof(heros))