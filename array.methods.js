//? Some Methods of Array
//const studentList = ["Ram"];

//? push() method=> adds items in array from End
//studentList.push("Shyam", "Hari");
//console.log(studentList);

//? pop() => removes last item from Array

// studentList.pop();
// console.log(studentList);

//? unshift() => Add item in array from start index

// studentList.unshift("Suresh", "Ramesh");
// console.log(studentList);

//? shift() => Remove item from start of array

// studentList.shift();
// console.log(studentList);

//? map() => is used to change,update items in array
// original array and returned array has same length

// const scores = [50, 85, 45, 90, 35];
// scores.map((item, index, self) => {
//   console.log(`Items:${item} Index ${index}`);
// });

// const newScores = scores.map((item, index, self) => {
//   //   let newScore = item + 10;
//   //   return newScore;
//   return item + 10;
// });
// console.log(newScores);

// const updatedMark = scores.map((item) => item - 10);
// console.log(updatedMark);

// const nameList = ["suresh", "dinesh", "ram", "shyam"];

// const updatedNameList = nameList.map((item) => {
//   if (item === "ram" || item === "suresh") {
//     return item;
//   }
//   return item.toUpperCase();
// });
// console.log(updatedNameList);

//filter,find,slice,

//? filter: filter out values from array
//Original array and returned array has max chance of having different size
//Filter out values based on some condition
// Filter wont change the array elements

// const num = [1, 45, 5, 8, -5, 1, -12, -10];
// const res = num.filter((item, index) => {
//   return item < 0;
// });
// console.log(res);

// Q1. get an array with even scores
// const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];

// let evenScores = scoreList.filter((item) => {
//   if (item % 2 === 0) {
//     return item;
//   }
// });
// console.log(evenScores);

//? Q2.  due to sudden rise in tax, add 10% to the price of each laptop

let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];
console.log(typeof laptopList);
// const newLaptopList = laptopList.map((item) => {
//   //console.log(item.price);
//   let newPrice = (item.price += item.price * 0.1);
//   //console.log((item.price += item.price * 0.1));
//   let newItem = { ...item, price: newPrice };
//   return newItem;
// });
// console.log(newLaptopList);

// ? decrease price of each laptop by 20 percent

// const discountPrice = laptopList.map((item) => {
//   let newPrice = (item.price -= item.price * 0.2);
//   let newItem = { ...item, price: newPrice };

//   return newItem;
// });
// console.log(discountPrice);

// ? remove laptops whose price is greater than 1000

// const overPriced = discountPrice.filter((item) => {
//   if (item.price > 1000) {
//     return false;
//   } else return true;
// });
// console.log(overPriced);

// ? remove laptops whose brand is apple

// const appleLaptop = discountPrice.filter((item) => {
//   if (item.brand !== "apple") {
//     return true;
//   }
// });
// console.log(appleLaptop);

// ? increase price of asus laptop by 5%

// const asusLaptop = discountPrice.map((item) => {
//   let newItem;
//   if (item.brand === "asus") {
//     item.price += item.price * 0.05;
//   }
//   newItem = { ...item };

//   return newItem;
// });
// console.log(asusLaptop);
