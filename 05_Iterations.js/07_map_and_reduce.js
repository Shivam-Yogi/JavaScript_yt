// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumbers.map( (num) => num + 10)

// // console.log(newNums);

// const newNums = myNumbers.map( (num) => num * 10).map( (num) => num + 1)
// .filter( (num) => num >= 40)

// console.log(newNums);

const arr = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitital = arr.reduce(
//     (accumulator, currentVal) => accumulator + currentVal,
//     initialValue
// );

// console.log(sumWithInitital);

// const myTotal = arr.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0);

// console.log(myTotal);


// const myTotal = arr.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce((acc, item) => acc+item.price, 0)

console.log(priceToPay);