// 6.Find grades for student marks.
// If the mark is greater than or equal to 90, the grade is “A plus”.
// If the mark is greater than or equal to 80,the grade is “A”.
//  Grade “B”  from marks greater than equal to 70.
// “C” for marks greater than equal to 60.
// “F” for marks  less than 60.
// const mark = 65;
// if (mark >= 90) {
//   console.log(`Your Grade is A plus`);
// } else if (mark >= 80 && mark <= 89) {
//   console.log(`Your Grade is A`);
// } else if (mark >= 70 && mark <= 79) {
//   console.log(`Your Grade is B`);
// } else if (mark >= 60 && mark <= 69) {
//   console.log(`Your Grade is C`);
// } else {
//   console.log(`Better Try next Time, Your grade is F`);
// }

const mark = 55;
if (mark >= 90) {
  console.log(`Your Grade is A plus`);
} else if (mark >= 80) {
  console.log(`Your Grade is A`);
} else if (mark >= 70) {
  console.log(`Your Grade is B`);
} else if (mark >= 60) {
  console.log(`Your Grade is C`);
} else {
  console.log(`Better Try next Time, Your grade is F`);
}
