// Section-divider-> Alt + D

//! First-Class Functions 
/* First-Class Function means functions are treated like values. 
=> So a function can be:
1) You can store a function in a variable
2) Passed as an argument to another function
3) Returned from another function 
Multiple can happen at the same time*/

//? 1) Store a function in a variable
/* function sayHello(name) {
    return `Hello ${name}`;
}
const greeting= sayHello; // - No need for () we are not calling we are storing it
console.log(greeting("Mr")); // Both sayHello and greeting refer to the same function */

//todo sayHello is a First-Class Function because it is treated as value.

//* NORMAL FUNCTION
/* const greet = () => {
  console.log("Hello");
};
greet(); */

//? 2) Pass a function as an argument
/* const greet = () => {
  console.log("Hello");
};
const execute = (greet) => {
  greet();
};
execute(greet); */ 

//todo greet is a First-Class Function because we are using the function as value and execute is a Higher-Order Function because it takes another function as an argument.

//* NORMAL FUNCTION
/* function greet() {
  console.log("Hello");
}
function execute(greet) {
  greet();
}
execute(greet); */


//?  3) Return a function from another function
/* const outer = () => {
    return () => {    
        console.log("Hello"); 
    };
};
const result = outer();
result(); */

//todo The returned inner function is a First-Class Function because it's being used as a value (returned from another function) and outer is a Higher-Order Function because it returns another function

//* NORMAL FUNCTION
/* function outer() {
  return function () {
    console.log("Hello");
  };
}
const result = outer();
result(); */


//? 4) All Three present here- 
/* const greet = () => {
  console.log("Hello");
};
const execute = (greet) => {
  return greet; //greet function is passed as value
};
const result = execute(greet); //greet function is passed as argument
result(); */

//todo greet is first class function and execute is a function which takes function as argument & returns another function

//* Working
// First, execute() is called. Then the greet function is passed as an argument to execute(), but greet is not executed. The greet function is returned without being called. After that, result() is called. Since result = greet, result() calls the greet() function, which then executes and prints "Hello".


//! Higher-Order Function
/*  A Higher-Order Function is a function that:
1) Takes one or more function as an argument, OR
2) Returns another function.
Both can happen at the same time */

//* Example-
/* const greet = () => {
    console.log("Hello");
};
const execute = (greet) => { // Takes (callback) function as parameter 
    return () => {
        greet();
    };
};
const result = execute(greet); // It returns another function 
result();  */

//todo execute is a Higher-Order Function because it takes function as argument & returns another function.


//! CallBack functions(call me back)
// A callback function is simply a function that we pass as an argument to another function, and the receiving function calls it.

//* Example-
/* const processUserInput = (name, greetUser) => {
    console.log("Received input: " + name);
    greetUser(name);
};
const greetUser = (name) => {
    console.log(`Hello! ${name}`);
};
processUserInput("Vinod", greetUser); */

//? The function being passed(greetUser) → Callback
//? processUserInput is that function which  takes function as argument → Higher-Order Function

//todo Callbacks can be synchronous (e.g., map, filter, forEach) or asynchronous (e.g., setTimeout, addEventListener).


//! Closure
// A closure happens when an inner function can remember and use variables from its outer function even after the outer function has finished.It is basically take the refernce(closure) of outer  function variables even after the outer() fn's execution context is removed from the call stack, the inner function can still access those variables.

//* Example1-
/* const outer = () => {
    let name = "Rajat";

    const inner = () => {
        console.log(name);
    };
    return inner;
};
const result = outer();
result(); */

//* Example2-
/* const calculation=(num)=>{
    return (num2) =>{
        return num*num2;
    };
};
const multiplier=calculation(2); 
console.log(multiplier(4));  */

//? calculation(2) sets num = 2 and returns the inner function, which is stored in multiplier; then multiplier(4) sets num2 = 4, uses the remembered num = 2, calculates 2 × 4, and returns 8.

//! QUESTIONS-

//* Q: Write a program to perform mathematical operations using callback functions and two variables in JavaScript.
//? Define a higher-order function called mathOperation that takes three arguments: x, y, and operation.
//? Implement two callback functions:
//? add: Takes two numbers x and y and returns their sum.
//? sub: Takes two numbers x and y and returns the result of subtracting x from y.
//? Use the mathOperation function to perform addition and subtraction operations on two variables a and b.
//? Display the results of the operations.

const mathOperation=(x,y,operation)=>{
    return operation(x,y);
};
const add=(x,y)=>{
    return x+y;
};
const sub=(x,y)=>{
    return y-x;
};
// console.log(mathOperation(100,200,add));
// console.log(mathOperation(100,200,sub));

//?add,sub -> callback & first class function while mathOperation ->higher Order function 

//! Callback hell
// Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

const getStudentData = () => {
  setTimeout(() => {
    console.log("Hi, My name is vinod");
    setTimeout(() => {
      console.log("Hi, My middleName is Bahadur");
      setTimeout(() => {
        console.log("Hi, My lastName is Thapa");
        setTimeout(() => {
          console.log("Hi, I like to code ");
          setTimeout(() => {
            console.log("Hi, I live in pune");
            setTimeout(() => {
              console.log("Hi, I was born in Pokhara, Nepal");
              setTimeout(() => {
                console.log("Hi, I love to play football");
                setTimeout(() => {
                  console.log("Hi,I was a national Player in athletics ");
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

// getStudentData();