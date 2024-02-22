let fact = (num) => {
  let productOfNumbers = 1;

  for (let i = 1; i <= num; i++) {
    productOfNumbers *= i;
  }

  return productOfNumbers;
};

const res = fact(6);
console.log(res);

//
