// 5.Perform arithmetic operation based on the option provided.
// Set two variables with numbers. Create another variable called “option”
// which can be add/subtract/multiply/divide/power.
// Based upon the value of the option. Perform appropriate operation.
// e.g. if option is “add”, perform num1+num2
const num1 = 2;
const num2 = 3;
let result = 0;
let option = "subtract";
if (option === "add") {
  result = num1 + num2;
  console.log(`Addition: ${result}`);
} else if (option === "subtract") {
  result = num1 - num2;
  console.log(`Subtraction:${result}`);
} else if (option === "multiply") {
  result = num1 * num2;
  console.log(`Multiplication:${result}`);
} else if (option === "divide") {
  result = num1 / num2;
  console.log(`Division:${result}`);
} else if (option === "power") {
  result = num1 ** num2;
  console.log(`Power:${result}`);
} else {
  console.log("Invalid Option");
}
