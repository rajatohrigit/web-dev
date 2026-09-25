//! Evolution
// Callback: Used to run a function after an asynchronous task finishes.
// Callback Hell: Too many dependent callbacks → deeply nested, hard-to-read code.
// Promise: Introduced to handle async results in a cleaner way using .then() and .catch().
// Async/Await: Introduced to make Promise-based code easier to read, like normal sequential code.

//? Flow: Callback → Callback Hell → Promise → Async/Await

//! async / await
// It make asynchronous code look and behave more like synchronous code.It doesn't replace Promises — it makes them easier to write and read.

//* async function
// async is used before a function to make it an asynchronous function. 
// async function always returns a Promise, even if you return a normal value.

//? Example-
// async function getData() {
//     return "Hello"; // returns a promise
// }

// const getData= async ()=>{
//     return "hello";
// };

//* await
// await is used inside an async function. It waits for a Promise to finish and gives you its result. 
// If the Promise is rejected, await throws an error. We handle it using try...catch.

//? Example-
// async function getData() {
//     const result = await fetchData();
//     console.log(result);
// }

//! Error Handling
// It is used to handle errors in JavaScript so the program doesn't stop unexpectedly.

//* 1. try → Try the code
// Put the code that might cause an error inside try

//* 2. catch → Handle the error
// If an error occurs inside try, JavaScript jumps to catch.
// error(object) contains information about what went wrong.

//* 3. finally(optional) → Always execute
// finally runs whether there is an error or not.