//? Comparision Operators ==,===,<,>,<=,>=,!=,!==

let x = 1234;
let y = `1234`;
//let isEqual = x == y; // true, doesnot check data type, only checks value
let isEqual = x === y; // False: strict comparison, checks for value and type
console.log(isEqual);

//? !==

let a = 5;
let b = 5;
console.log(a !== b);
