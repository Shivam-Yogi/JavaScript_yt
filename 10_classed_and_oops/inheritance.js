class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, subject) {
        super(username)
        this.username = username;
        this.email = email;
        this.subject = subject;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const user1 = new User("John Doe");

const chai = new Teacher("chai", "chai@gmail.com", "123")

user1.logMe(); // USERNAME is John Doe

chai.addCourse()

const masalaChai = new User("masalachai")

console.log(chai instanceof Teacher);

console.log(chai instanceof User);