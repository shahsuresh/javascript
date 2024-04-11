//? 1. Create an array called friendsList and add your friends name.
//? Print out your friend's name one by one.

// const friendsList = ["Harish", "Mohan", "Laxman", "Raghu"];
// friendsList.map((item) => {
//   console.log(item);
// });

//? 2. Create an array called myFavourite actors and print out
//  who is your best actor among all actors.

// const myFavouriteActors = ["Vijay", "Mahesh Babu", "salman", "Sahid", "Hritik"];
// const actor = myFavouriteActors.map((item, index) => {
//   if (item === "Sahid") {
//     return console.log(`${item} is your favorite Hero`);
//   }else return console.log(`${item} is not your favorite Hero`);
// });

//? 3. Make an array of numbers that double the items.

// const numbers = [5, 8, 4, 9, 3];
// const doubledNumbers = numbers.map((item, index, self) => {
//   return item * 2;
// });
// console.log(doubledNumbers);

//? 5. Make an array of numbers and print whether the numbers are odd or even.

// const numbers = [24, 4, 67, 55, 34, 23];
// const oddEven = numbers.map((item, index) => {
//   if (item % 2 === 0) {
//     return console.log(`${item} is Even`);
//   } else return console.log(`${item} is Odd`);
// });

const checkOddOrEven = (num) => {
  let remainder = num % 2;

  let result;

  if (remainder === 0) {
    result = "even";
  } else {
    result = "odd";
  }

  return result;
};

const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach((item, index, self) => {
  const result = checkOddOrEven(item);

  console.log(`${item} is ${result}`);
});
