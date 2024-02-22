// Calculate expression:
// a.3x-2y+2xy
// b.(x+y)2-1
// c.(x^3+y^2)/3
// d.x mod y
// Such that x =3 and y=2

const x = 3;
const y = 2;
let expA, expB, expC, expD;
expA = 3 * x - 2 * y + 2 * x * y;
expB = (x + y) * 2 - 1;
//expC = (x * x * x + y * y) / 3;
//expC = (Math.pow(x, 3) + Math.pow(y, 2)) / 3;
expC = (x ** 3 + y ** 2) / 3;
expD = x % y;
console.log(`The Value of 3x-2y+2xy is: ${expA} `);
console.log(`The Value of (x+y)2-1 is: ${expB} `);
console.log(`The Value of (x^3+y^2)/3 is: ${expC.toFixed(2)}`);
console.log(`The Value of x mod y is: ${expD}`);
