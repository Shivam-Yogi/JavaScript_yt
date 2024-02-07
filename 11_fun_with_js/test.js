// const myArr = []

// %DebugPrint(myArr)

// continuous, Holey, 

// SMI (small Integer)
// Packed Element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMETNS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS


arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);

console.log(arrTwo.length);

console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)


// holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5]

console.log(arrThree[8])


// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)

// just 3 holes HOLEY_SMI_ELEMENTS





















