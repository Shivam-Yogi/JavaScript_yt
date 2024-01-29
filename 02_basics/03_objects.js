// singleton
// Object.create


// objects literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Shivam",
    "Full name": "Shivam Kishorilal Yogi",
    age: 21,
    [mySym]: "Key1",
    gender: "male",
    location: "Maharashtra",
    email: "Shivamyogi99@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)

console.log(JsUser["name"])

console.log(JsUser["Full name"])

console.log(JsUser[mySym])

// JsUser.email = "Shivam@gmail.com"

// Object.freeze(JsUser) // it wont take any changes after this

JsUser.greeting = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);

console.log(JsUser.greeting());

























