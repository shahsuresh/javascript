// Write a function that takes day of week as parameter and returns 1,2,3,4,5,6.
// Example.. Provided sunday should return 1,monday returns 2
//let dayNumber = 0;
function dayNumber(day) {
  if (day === "sunday") {
    console.log(`Day Number of ${day} is 1`);
  } else if (day === "monday") {
    console.log(`Day Number of ${day} is 2`);
  } else if (day === "tuesday") {
    console.log(`Day Number of ${day} is 3`);
  } else if (day === "wednesday") {
    console.log(`Day Number of ${day} is 4`);
  } else if (day === "thursday") {
    console.log(`Day Number of ${day} is 5`);
  } else if (day === "friday") {
    console.log(`Day Number of ${day} is 6`);
  } else if (day === "saturday") {
    console.log(`Day Number of ${day} is 7`);
  }
}
dayNumber("friday");
dayNumber("tuesday");
