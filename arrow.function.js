// Arrow Function
const getProduct = (num1, num2) => {
  const product = num1 * num2;

  return product;
};

const result = getProduct(5, 8);
console.log(result);

//===============================
//Write an arrow function that checks if the provided number is odd or even

const oddEven = (num) => {
  if (num % 2 === 0) {
    return "EVEN";
  } else {
    return "Odd";
  }
};

console.log(oddEven(34));
