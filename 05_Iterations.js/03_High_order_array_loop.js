//  for of

const myArray = [1, 2, 3, 4, 5]

for (const num of myArray) {
    console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United Stated of America")
map.set('Fr', "France")

console.log(map);

for (const [key,Value] of map) {
    console.log(key, ':-', Value);
}


// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key, Value] of myObject) {
//     console.log(key, ':-', Value);
// }