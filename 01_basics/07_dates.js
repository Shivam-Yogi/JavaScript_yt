//  Dates

let myDate = new Date()

console.log(myDate);

console.log(myDate.toString());
// console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)

// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)

// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2024")

console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(Math.round(myTimeStamp/1000))

let newDate = new Date()

console.log(newDate.getDate())

console.log(newDate.getSeconds())

console.log(newDate.getDay())

console.log(newDate.getMonth())

console.log(newDate.getMinutes())


console.log(newDate.toLocaleString('default', {
    weekday: 'long',
}))