// Write a JS code to calculate the sum of digits in a number
//num=1234 than sum of digits=1+2+3+4=10
let num = 1234;
let sum = 0;
let digit = 0;
while (num > 0) {
  digit = num % 10;
  sum = sum + digit;
  num = num / 10;
}
console.log(sum);
