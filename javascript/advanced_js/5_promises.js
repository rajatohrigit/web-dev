//! Promises
// A promise is like a placeholder for the result of an asynchronous operation. A container for the future result or value. A Promise represents a value that will exist later (pending → fulfilled / rejected)

//* A Promise has 3 states:
// 1. Pending   → initial state (not settled yet)
// 2. Fulfilled → operation succeeded (resolve)
// 3. Rejected  → operation failed (reject)

// Promises have built-in methods like then and catch to handle the results of asynchronous operations when they complete or encounter errors, making it easier to write asynchronous code that is more readable and maintainable compared to traditional callback-based approaches.


//? 1) Creating a Promise (constructor)
/* new Promise takes an "executor function" with two parameters:
resolve → call when successful
reject  → call when failed  */

//* Syntax-
const promise=new Promise(function executer(resolve,reject){
    // code
});

//* Example-
/* const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Code completed");
    },1000);
});

pr.then((response)=>{
    console.log(response);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('hi programmer');
}); */

//? 2) Promise Wrapper Function
// A function that returns a Promise — wraps an async task.
function myPromiseFunction() {
  return new Promise((resolve, reject) => {
    // async work here
    // resolve(value) on success
    // reject(error)  on failure
  });
}

//* Example-
/* const enrollStudent = (studentName) => {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const isSuccessful = Math.random() > 0.4;

      if (isSuccessful) {
        resolve(`Enrollment successful for ${studentName}`);
      } else {
        reject(`Enrollment failed for ${studentName}. Please try again.`);
      }
    }, 2000);

  });
};

enrollStudent("veer")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Enrollment process completed.");
  }); */


//? 3) Promise Methods
//* Promise.all         → waits for ALL to succeed. Rejects if ANY fails.
//* Promise.allSettled  → waits for ALL, success or failure. Never rejects.
//* Promise.race        → returns the FIRST settled (success OR failure)

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("First"), 2000)
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Failed"), 100)
);

const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third"), 1000)
);

//* Promise.all -> rejects because promise2 fails
/* Promise.all([promise1, promise3, promise2])
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  }); */


//* Promise.allSettled → returns status of all promises, no matter accept(resolve) or reject(error)
/* Promise.allSettled([promise1, promise2, promise3])
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
 */
//* Promise.race-> which has lesser time will get executed first (promise2)
/* Promise.race([promise1, promise2, promise3])
  .then((resp) =>{
      console.log(resp);
  }) 
  .catch((error) =>{
      console.error(error);
  }) */


