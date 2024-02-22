// Strings whose length is greater than 6
// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const newWords = words.filter((item) => {
//   return item.length > 6;
// });
// console.log(newWords);

//? slice,splice,reverse methods in array

//? reduce() =>

// const scores = [45, 55, 62, 24];
// const totalScore = scores.reduce((sum, item, index, self) => {
//   sum = sum + item;
//   return sum;
// }, 0);
// console.log(totalScore);

//? Q. calculate total value by multiplying each other

let values = [10, 25, 35, 5];
const totalProduct = values.reduce((product, item) => {
  product = product * item;
  return product;
}, 1);
console.log(totalProduct);
