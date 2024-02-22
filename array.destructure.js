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
