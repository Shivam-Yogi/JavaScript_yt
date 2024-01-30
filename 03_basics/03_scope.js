// Global Scope

var c = 300 // -> cant comprehend the scopes --> dont user var
let a = 100

if (true) {
    // local Scope
    let a = 10
    console.log("Inner", a);
    const b = 20
    var c = 30
}

console.log("Outer", a);
// console.log(b);
console.log(c);


