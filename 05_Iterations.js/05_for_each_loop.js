const coding = ["js", "rb", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log("I can code in " + item);
// } )


// coding.forEach( (item) => {
//     console.log(`This is ${item}`);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})