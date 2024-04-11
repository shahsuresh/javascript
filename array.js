//?array: Collection of any data type
//?array=> Object Data type
//? Js supports array of mixed data types

// const cities = ["Kathmandu", "Lalitpur", "Janakpur", "Pokhara"];
// console.log(cities);

// const mixedArray = [1, "abcd", true, null];
// console.log(mixedArray);

//const ScoreList = [58, 78, 85, 99, 45];
//?We can access values in array using index. Index always start from zero(0)
//console.log(ScoreList[1]);

//?length => length property gives total number of items in array

//console.log(ScoreList.length);

const carBrands = ["Audi", "Toyota", "BMW", "Hyundai", "Tesla"];
const arrayLen = carBrands.length;
for (let i = 0; i <= arrayLen - 1; i++) {
  console.log(carBrands[i]);
}
