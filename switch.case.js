let day = 3;
switch (day) {
  case 1: {
    console.log("Sunday");
    break;
  }
  case 2: {
    console.log("Monday");
    break;
  }
  case 3: {
    console.log("Tuesday");
    break;
  }
  case 4: {
    console.log("Wednesday");
    break;
  }
  case 5: {
    console.log("Thursday");
    break;
  }
  case 6: {
    console.log("Friday");
    break;
  }
  case 7: {
    console.log("Saturday");
    break;
  }
  default: {
    console.log(`Invalid Option`);
  }
}
//Check if the given number is odd or even using switch

let num = 15;
let rem = num % 2;
switch (rem) {
  case 0: {
    console.log("Given Number is Even");
    break;
  }
  default: {
    console.log("Given Number is Odd");
    break;
  }
}
