//function that multiplies any three numbers

function multiplyNumbers(num1, num2, num3) {
  let product = num1 * num2 * num3;
  console.log(`Product is:${product}`);
}
multiplyNumbers(2, 4, 2);
//WAF to check if the provided number is odd or even

function checkOddEven(num) {
  let reminder = num % 2;
  if (reminder === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is odd`);
  }
}
checkOddEven(22);
checkOddEven(768779876);
