//? 2.Create a variable named totalAmount and store your number as a string.
// 	Convert it into a number type.
let myNumber = "10";
let totalAmount = Number(myNumber);
console.log(totalAmount, typeof totalAmount);

//? 3.Create a variable named phoneNumber and store it as a number.
// 	Convert  it into string type.

let phoneNumber = 9846262486;
//let phno = String(phoneNumber);
let phno = `${phoneNumber}`;
console.log(phno, typeof phno);

//?4. Convert string “20ebp” to number and print out the result.

let myString = "20ebp";
console.log(`String Converted into Number:${parseInt(myString)}`);

//?5.Convert “nep10” to number and print out the result to console.Explain the result.
let str = "nep10";
//let conNumber = parseInt(str);
let conNumber = +str;
console.log(`-------------------------------`);
console.log(conNumber, typeof conNumber);
// As the string str='nep10' is the combination of string and Number, It cannot be converted into Number using
// parseInt() or Number() type conversion method. but if the srt contains numbered string at the begning including text ,
// the number part only can be converted into Number type using parseInt() method.
