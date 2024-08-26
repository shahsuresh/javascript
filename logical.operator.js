const a = 2,
  b = -3,
  c = 5,
  d = 10,
  e = 9;
//* a+b<c OR d*a>=c  // result: True
let result1 = a + b < c || d * a > c;
console.log(result1);

//* (a**c===d AND d===e+a-1)  OR d % e!==1  // Result: False
let result2 = (a ** c === d && d === e + a - 1) || d % e !== 1;
console.log(result2);

//2^a+b>d OR c-d>b // False

let result3 = 2 ** a + b > d || c - d > b;
console.log(result3);

//Let isEarthRound= true, run NOT(!) operator on this. Print out: !isEarthRound.

let isEarthRound = true;
console.log("Is Earth Round?", !isEarthRound); // False
