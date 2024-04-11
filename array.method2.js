//? filter() :=> creates a new array with array elements that pass a test.
// Strings whose length is greater than 6
// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const newWords = words.filter((item) => {
//   return item.length > 6;
// });
// console.log(newWords);

//? slice,splice,reverse methods in array

//? reduce() => runs a function on each array element to produce (reduce it to) a single value.
// this method works from left-to-right in the array
// The reduce() method does not reduce the original array.

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
});
console.log(totalProduct);
