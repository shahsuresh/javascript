//Non-primitive Data Type
// let student = {
//   firstName: "Suresh",
//   lastName: "Shah",
//   college: "Broadway",
//   perAddress: "Kathmandu",
//   tempAddress: "Bhaktapur",
//   age: 24,
//   isMarried: false,
//   isGraduated: null,
//   height: undefined,
// };
// console.log(student.firstName, student.lastName);
// console.log(student.age);

//delete operation
// delete student.age;
// console.log(student);

//update and insert operation//upsert=> Update or Insert

const countryDetails = {
  name: "Nepal",
  capital: "Kathmandu",
  language: "Nepali",
};
console.log(countryDetails);
countryDetails.district = "77"; // Add operation
countryDetails["states"] = "7"; //Add operation
console.log(countryDetails);

//Update Operation
countryDetails.language = "Nepali,English";
console.log(countryDetails);
