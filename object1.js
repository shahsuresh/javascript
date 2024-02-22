const laptopDetails = {
  name: "GF75",
  brand: "MSI",
  ram: 16,
  ssd: 512,
  display: "15.3",
  graphics: "NVIDIA GeForce RTX 3060",
  battery: "51 Whr",
  processor: "i7 10750H",
};

// ? display laptop name with battery capacity: GF75 has 51whr battery
//console.log(`${laptopDetails.name} has ${laptopDetails.battery} battery`);

// ?change ram size to 18 gigs

laptopDetails.ram = "18 gigs";
//console.log(laptopDetails);

// ?add another property called  memoryFrequency with 3200MHz value

laptopDetails.memoryFrequency = "3200MHZ";
//console.log(laptopDetails);

// ? add another property called weight whose value is 3kg

laptopDetails.weight = "3kg";

// ? update ssd size by 300 GB

laptopDetails.ssd = laptopDetails.ssd + 300;
console.log(laptopDetails);

//delete processor property

delete laptopDetails.processor;
console.log(laptopDetails);
