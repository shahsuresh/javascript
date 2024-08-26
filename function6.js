// Write a function that takes 10 numbers and calculates
//  the average of the provided numbers.
// function calculateAverage(n1, n2, n3) {
//   let summation = n1 + n2 + n3;
//   let average = summation / 3;
//   console.log("Average is:", average.toFixed(3));
// }
// calculateAverage(5, 6, 9);
// calculateAverage(9, 6, 3);

//=================================================================//
//* WAF that converts dollars into cents.
//  function dollarsToCent(dollars) {
//   let cent = dollars * 100;
//   return cent;
// }

// const result = dollarsToCent(3);
// console.log(` ${result} Cents`);

//==================================================================//
//WAF that converts temperature in Celsius into Fahrenheit.

function temperatureConverter(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(`${celsius} celsius= ${fahrenheit.toFixed(1)} fahrenheit`);
}
temperatureConverter(-40);
