// 2.Create an object named myHouseDetails and add following properties
// numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

const myHouseDetails = {
  numberOfRooms: 10,
  numberOfMembers: 5,
  colorOfHouse: "Yellow",
  builtYear: 2015,
  numberOfStorey: 2,
};
// A.Delete numberOfMembers property
//delete myHouseDetails.numberOfMembers;

// B.Update numberOfRooms by new value
myHouseDetails.numberOfRooms = 7;

//C.Add a  new property called estimatedPriceOfHouse

//myHouseDetails.estimatedPriceOfHouse = "5 Million";
console.log(myHouseDetails);

// D.Print out all properties on the console like “I have a green coloured
//house with 9 rooms where 10 people are  living.
//The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”

let myHouse = `I have ${myHouseDetails.colorOfHouse} colored House with ${myHouseDetails.numberOfRooms} rooms
 where ${myHouseDetails.numberOfMembers} peoples are living.The House is built in ${myHouseDetails.builtYear}`;
console.log(myHouse);
