//? Array Destructure
// const nums = [10, 20, 30];

// const [n1, n2, n3] = [10, 20, 30];
// console.log(n1, n2, n3);

//? Array Copy

const scores = [45, 87, 45, 96];

// using spread operator
// let newScores = [...scores];
// console.log(newScores);

//structuredClone()=> when array has objects or array inside it

const studentData = [{ name: "A" }, { name: "B" }];

const newStudentData = structuredClone(studentData);
console.log(newStudentData);

//? reverse()=>

let arr = ["S", "A", "T", "H"];
arr.sort(); // sort array in ascending order
console.log(arr);

//sort in descending order

console.log(arr.sort().reverse());

//?==sorting array with numbers=========
let numArray = [1, 4, 2, 3];

//ascending order
console.log(numArray.sort());

//descending order
console.log(numArray.sort().reverse());

//? sorting array with numbers in ascending order
let numArray2 = [1, 4, 62, 3, 32, -1];

console.log(numArray2.sort((a, b) => a - b));

//? sorting array with numbers in descending order
console.log(numArray2.sort((a, b) => b - a));
