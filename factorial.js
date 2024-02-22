// WAF that calculates the factorial of a number.
function factorial(num) {
  let fact = 1;
  if (num > 0) {
    for (let i = num; i >= 1; i--) {
      fact = fact * i;
    }
    console.log(fact);
  } else {
    console.log(`Factorial is 1`);
  }
}
factorial(5);
factorial(0);
