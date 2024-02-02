// Nested Scopes

function one() {
    const username = "Shivam"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if(true) {
    const username = "Shivam"
    if(username === "Shivam") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}


// console.log(username);





// ************************************* interesting *****************************************************
let ans = addone(5);
console.log("The answer is: ", ans);

function addone(num) {
    return num + 1;
} 



// let ans2 = addTwo(5); //error

const addTwo = function(num) {
    return num + 2;
}


let ans2 = addTwo(5);
console.log("The answer is: ", ans2);



