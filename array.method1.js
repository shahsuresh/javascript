//? find() => returns first matching item based on condition
const ages = [3, 10, 17, 20, 22];
const voter = ages.find((age) => {
  return age > 17;
});

console.log(` voters:${voter}`); // Output: Voters: 20

//? push() :=> adds element in the last of array
// const nations = ["Nepal", "India", "China", "Bhutan"];
// nations.push("Japan");
// console.log(nations);

//pop() :=> removes element from the last index of array
// nations.pop();
// console.log(nations);

//?map(): changes array content

// const prices = [100, 450, 210, 150, 44];

// const newPrices = prices.map((item) => {
//   let newItem = item - 20;
//   return newItem;
// });
// console.log(newPrices);

// const newPrices = prices.map((item) => {
//   if (item === 150) {
//     let newItem = item + 100;

//     return newItem;
//   } else {
//     return item;
//   }
// });
// console.log(newPrices);

//? give 5 marks as gross Mark to each student
const studentData = [
  {
    name: "A",
    score: 85,
  },
  {
    name: "B",
    score: 91,
  },
  {
    name: "C",
    score: 75,
  },
];

// const newData = studentData.map((item) => {
//   let newScore = item.score + 5;

//   let newItem = { ...item, score: newScore };
//   return newItem;
// });
// console.log(newData);

//? filter() :=> array size can be modified based on some condition

// const newStudentData = studentData.filter((item) => {
//   if (item.score > 80) {
//     return item;
//   }
// });
// console.log(newStudentData);

//? sort() method =>  sort elements in dictionary order
//

// const nameList = [
//   "Nepal",
//   "India",
//   "China",
//   "Bhutan",
//   "America",
//   "Zimbabwe",
//   "Australia",
//   "Argentina",
// ];
// console.log(nameList.sort());

// sorting numeric data

//? Ascending order
// const nums = [1, 25, 200, 100, 22, 226, 1000];
// nums.sort((a, b) => {
//   return a - b;
// });
// console.log(nums);

// ? //? descending order

// nums.sort((a, b) => {
//   return b - a;
// });
// console.log(`Sorted in descending order: ${nums}`);

//? slice,splice,reverse,split,length,join,concat, toString methods in array

const myArr = [12, 24, 64, 68];
console.log(typeof myArr.toString());
