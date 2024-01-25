const name = "Shivam"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Shivam-AVS-CON')

// console.log(gameName[0])

console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toLowerCase())

console.log(gameName.charAt(2))

console.log(gameName.indexOf('v'))

const newString = gameName.substring(0, 6)

console.log(newString)

const anotherString = gameName.slice(0,4)

console.log(anotherString)

const newString1 = "  Shivam          "
console.log(newString1)

const correctedString = newString1.trim()
console.log(correctedString)


const url = "https://shivam.com/shivam%20yogi"

console.log(url.replace('%20','-'))

console.log(url.includes('shivam'))

console.log(gameName.split('-'))