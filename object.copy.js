//* spread Copy
const studentDetails = {
  name: "Suresh",
  lastname: "Shah",
  phone: "9846262486",
  address: { tempAd: "Kathmandu", permAd: "Janakpur" },
};

//const students = studentDetails;
//console.log(students);

//* Copy By reference
// students.name = "Dinesh";
// console.log(studentDetails);
// console.log(students);

//* Spread Operator(...)
//copy objects only if the object is not nested object

// const students = { ...studentDetails };

//* StructuredClone():- Deep Copy

const students = structuredClone(studentDetails);
