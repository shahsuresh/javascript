//WAF that converts temperature in Celsius into Fahrenheit.

let temperatureConverter = (celsius) => {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(`${celsius} celsius= ${fahrenheit.toFixed(1)} fahrenheit`);
};
temperatureConverter(-40);

// Write a function that takes 10 numbers and calculates
//  the average of the provided numbers.
const calculateAverage = (n1, n2, n3) => {
  let summation = n1 + n2 + n3;
  let average = summation / 3;
  console.log("Average is:", average.toFixed(3));
};
calculateAverage(5, 6, 9);
calculateAverage(9, 6, 3);

// Write a function that takes a number as a parameter and returns a
// sum from 0 to that number. E.g if number is 5 then function should return 0+1+2+3+4+5=15
const sumOfNumbers = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumOfNumbers(5));
