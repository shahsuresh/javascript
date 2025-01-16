// ?node
// ? single threaded
// ? one thing at one time

// ? though node is single threaded,
// ? it implement event loop to prevent blocking of  code

// ?the code which takes time
// database connection
// image processing
// for loop billion times
// api hoisting

// ? synchronous =>occurring at the same time
// ?asynchronous => which takes time

console.log("Hi");

setTimeout(() => {
  console.log("Time out 1");
}, 5000);

setTimeout(() => {
  console.log("Time out 2");
}, 1000);

console.log("Hello");

// ? Stack
