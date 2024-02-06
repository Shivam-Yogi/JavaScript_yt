class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const shivam = new User("Shivam")

console.log(shivam.createId());

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@gmail.com")

console.log(iphone.createId());






