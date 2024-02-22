//Nested Object
const studentDetails = {
  fName: "Suresh",
  lName: "Shah",
  age: 24,
  address: { temporary: "Kathmandu", permanent: "Janakpur" },
};

console.log(studentDetails.address.permanent);

studentDetails.address.temporary = "Bhaktapur";
console.log(studentDetails.address);
studentDetails.college = "Broadway Infosys";
console.log(studentDetails);
// delete studentDetails.address;
// console.log(studentDetails);
