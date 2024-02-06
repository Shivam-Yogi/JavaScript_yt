// ES6

// class user {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai", "chai@gmail.com", "123");

// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


//behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}_encrypted`;
}

User.prototype.changeUsername = function () {
    return `${this.username}`.toUpperCase();
}

const chai = new User("chai", "chai@gmail.com", "12345")
const Tea = new User("tea", "chai@gmail.com", "12345")

console.log(chai);

console.log(chai.encryptPassword());

console.log(chai.changeUsername());


















