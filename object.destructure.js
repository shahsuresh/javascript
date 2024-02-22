const laptop1 = {
  name: "zenbook",
  brand: "Asus",
  ssd: 512,
  color: { color1: "Silver", color2: "Grey" },
};
//console.log(laptop1);

//object destructure

const {
  name: firstName, // Renamed using : symbol i.e name is Renamed as firstName
  ssd,
  color: { color1, color2 }, // Double Destructure
} = laptop1;
//console.log(firstName, ssd);
//console.log(color1, color2);

//console.log(laptop1);
color1 = "red";
console.log(color1);
