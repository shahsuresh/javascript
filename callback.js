//? Higher order function is function returning a function

//? function which accepts function as argument
// let getSum = (x, y, result) => {
//   let sum = x + y;
//   result(sum);
// };
// const result = (value) => {
//   console.log(value);
// };
// getSum(4, 5, result);

//? function returning a function example

let getSum = (x, y) => {
  const calculateSum = () => {
    let sum = x + y;

    return sum;
  };
  return calculateSum;
};
const result = getSum(5, 5)();
console.log(result);
