// Write a function that takes “add”/“subtract”/”multiply”/”divide”
// and two numbers as parameters and perform appropriate operations.
function arithmeticOperation(operation, num1, num2) {
  if (operation === "add") {
    let sum = num1 + num2;
    console.log(`The Sum is:${sum}`);
  } else if (operation === "subtract") {
    let subtract = num1 - num2;
    console.log(`Subtract is: ${subtract}`);
  } else if (operation === "multiply") {
    let multiply = num1 * num2;
    console.log(`Multiply is: ${multiply}`);
  } else if (operation === "divide") {
    let divide = num1 / num2;
    console.log(`Divide is: ${divide}`);
  } else {
    console.log("Invalid Option");
  }
}

arithmeticOperation("multiply", 20, 30);
arithmeticOperation("subtract", 50, 40);
