// Write a JavaScript for loop that iterates from 30 to 100. For each iteration, it checks if the current number is odd or even and displays a message on the screen.
// Sample Output :

// "1 is odd"
// "2 is even"

for (let i = 30; i <= 100; i++) {
  //console.log(i);
  if (i % 2 === 0) {
    console.log(`${i} is Even`);
  } else {
    console.log(`${i} is Odd`);
  }
}
