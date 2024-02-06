const user = {
    username: "Shivam",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails);

function newUser(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const UserOne = newUser("Shivam", 10, false);
const UserTwo = newUser("Mohit", 15, false);

console.log(UserOne);
console.log(UserOne.constructor);