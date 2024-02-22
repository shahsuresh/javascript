// Prime Number
let num = 13;

let isPrime = true;

for (let i = 2; i < num; i++) {
  let remainder = num % i;

  if (remainder === 0) {
    isPrime = false;
    break;
  }
}

console.log(`${num} is prime => ${isPrime}`);
