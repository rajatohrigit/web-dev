//! Timing events

//? 1. setTimeout() - setTimeout() runs a function once after a given time

//* Without parameters
/* const delayedFunction = () => {
    console.log("Hello");
};
setTimeout(delayedFunction, 2000); */

//* With parameters
/* const delayedFun= (x) => {
    console.log(`I am coming in ${x} seconds`);
};

setTimeout(() => {
    delayedFun(2);
}, 2000); 

setTimeout(delayedFun, 2000, 2); //Both gave same output */


//? 2. setinterval() - setInterval() runs a function again and again after a fixed time. Works like loop

/* const delayedFun = () => {
    console.log("Hello");
};
setInterval(delayedFun, 2000); */

//? 3. clearTimeout() - If you want to cancel setTimeout(), use clearTimeout().

/* const delayedFunction = () => {
    console.log("Hello");
};
const timeoutID = setTimeout(delayedFunction, 2000);
clearTimeout(timeoutID); // Here the function will not run, because we cancelled the timeout. */

//? 4. clearInterval() - If you want to stop setInterval(), use clearInterval()

/* const repeatedFunction = () => {
    console.log("Hello");
};
const intervalID = setInterval(repeatedFunction, 1000);
clearInterval(intervalID); // Here the function will not run, because we cancelled the timeout. */ 

//* Q: Write a JavaScript program that defines a function called repeatedFunction. This function should log the message "This function repeats every 1000 milliseconds (1 second)" to the console. Then, set up an interval using setInterval() to call repeatedFunction every 1000 milliseconds. Additionally, after 5 seconds have elapsed, use setTimeout() to clear the interval previously set up. Make sure to log the message "Interval cleared after 5 seconds." when the interval is cleared.

/* const repeatedFunction=()=>{
    console.log("This function repeats every 1000 milliseconds (1 second)");
}
repeatedFunction();
const intervalId = setInterval(repeatedFunction,1000);

setTimeout(()=>{
    clearInterval(intervalId);
    console.log("Interval cleared after 5 seconds.");
},5000); */