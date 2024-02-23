//? promise => something that happens in future

//state =>pending
//either success or error

// callback
// .then.catch(promise)
//async await

//callback
// const getSum = (x, y, callback) => {
//   setTimeout(() => {
//     let error = false;

//     if (error) {
//       callback("error aayo", null);
//     } else {
//       let sum = x + y;
//       callback(null, sum);
//     }
//   }, 5000);
// };

//?  to resolve promise => callback function
// getSum(3, 7, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// ?promise
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let x = 5;
//     let y = 6;

//     let error = true;

//     if (error) {
//       reject("Error happened");
//     } else {
//       let sum = x + y;
//       resolve(sum);
//     }
//   }, 2000);
// });

// to resolve promise, use .then and.catch

// promise
//   .then((data) => {
//     console.log(`Your total VAT in dollar is ${data}`);
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("Cannot calculate VAT at this time.");
//   });

// ?async await

// const calculateSum = async () => {
//   try {
//     const sum = await promise1;

//     console.log(sum);
//   } catch (error) {
//     console.log(error);
//   }
// };

// calculateSum();

// console.log("hey mom");

// const loadPosts = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// loadPosts();

const fetchProducts = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

fetchProducts();
