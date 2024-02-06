const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("chai nai bani");
    }
}

// chai.name = "masalachai"
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false,
// })

// Object.defineProperty(chai, 'price', {
//     writable: false,
//     enumerable: false,
// })

// Object.defineProperty(chai, 'isAvailable', {
//     writable: false,
//     enumerable: false,
// })
// chai.name = "masalachai"
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    {
        console.log(`$ ${key}: ${value}`);
    }
}

