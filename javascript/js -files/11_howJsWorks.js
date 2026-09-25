//!  How JavaScript Works?

//? 1: Parsing Phase
// Parsing means reading and understanding the JavaScript code before actually running it.

//* i) Lexical Parser
// Lexical Parser is the first step.It is also called a Lexer. The lexer breaks our JS code into small piece called tokens. Tokens are the basic building blocks of JavaScript.
//? Example: let age = 20; // Tokens- let, age , = , 20 ;

//* ii) Syntax Parser
// Syntax Parser takes the tokens created by lexical Parser and checks whether they are written in the correct order.It checks whether our JavaScript code follows the correct syntax.If the syntax is correct, it creates a tree-like structure called a Parse Tree or Abstract Syntax Tree (AST).

//todo AST (Abstract Syntax Tree) - represents the structure of our JavaScript program in a tree-like form. AST is a structured version of our code that helps the JavaScript engine understand the program.

//? 2: Compilation (JIT - Just-In-Time Compilation)
// After parsing, the JavaScript engine compiles the code into a form that can be executed. Modern JavaScript engines such as V8 in Chrome, SpiderMonkey in Firefox, and JavaScriptCore in Safari use different compilation techniques.

//* i) Parse and Compile
// The engine converts the JavaScript code into an intermediate form such as bytecode, and it may also compile it into machine code.

//* ii) Just-In-Time Compilation (JIT)
// JIT stands for Just-In-Time Compilation. The engine can compile and optimize code while the program is running. It uses information collected during runtime to improve performance.

//? 3: Execution
// After the code is prepared for execution, the JS engine starts running it. During execution, the engine creates execution contexts, manages the scope chain, assigns values to variables, and executes functions.
// An Execution Context is the environment in which JavaScript code is executed. It has two main phases: Creation Phase and Execution Phase.

//! i) Creation Phase - JavaScript prepares the execution environment by setting up variables, functions, scope, and the this reference.

//! ii) Execution Phase - JavaScript runs the code, assigns values to variables, executes functions, and performs the program's logic.

//? a) Call Stack
/* The JavaScript engine uses a Call Stack(Data structure) to keep track of execution contexts and function calls. When a function is called, its execution context is added to the Call Stack. When the function finishes, its execution context is removed.
=> LIFO (Last In, First Out) - The last execution context added to the Call Stack is the first one to be removed. */

//* Example: If first() calls second(), then second() is added on top of first(). When second() finishes, it is removed first, and then first() continues.

//? b) Heap Memory
/* Heap Memory is the area where dynamically allocated data is stored. Objects, closures, and other dynamically created data can be stored in Heap Memory.
* Call Stack → Manages execution contexts and function calls.
* Heap Memory → Stores dynamically allocated data.
=> Global Execution Context- When JavaScript starts executing a program, it creates the Global Execution Context. It is the first execution context created and is pushed onto the Call Stack. */

//todo Key activities during the Creation Phase:
//? 1. Creating the Global Object
// The JavaScript engine creates the Global Object. In browsers, it is commonly accessed through window, while in Node.js the global object is global.

//? 2. Setting up the this Reference
// The JavaScript engine sets up the this reference for the execution context. Its value depends on the execution context and how the code is called.

//? 3. Creating the Outer Environment Reference
// The execution context has a reference to its outer environment. For the Global Execution Context, the outer environment reference is null because there is no outer environment above the global scope.

//? 4. Creating the Variable Environment
/* The JavaScript engine creates the Variable Environment and allocates memory for variables and functions.Before executing the code, JavaScript sets up memory for variables and functions.
=> For var variables, memory is reserved and the initial value is set to undefined.
=> For function declarations, memory is reserved and the function itself is available before the code reaches its declaration. This behavior is related to Hoisting. */

//* Example:
/* console.log(a);
var a = 10;
During the Creation Phase: a → undefined
During the Execution Phase: a → 10 */

//? Scope Chain
/* The JavaScript engine also sets up the Scope Chain. The Scope Chain helps JavaScript find variables in the current scope and, if necessary, in outer scopes.
=> Initially, the Global Execution Context starts with the Global Scope. */

//! Execution Phase
/* After the Creation Phase is completed, the Execution Phase begins. JavaScript now executes the code in order.
=> During the Execution Phase, variables are assigned their values, functions are executed when called, calculations are performed, and the program's logic is carried out. */
//* Example:
/* let a = 10;
let b = 20;
let sum = a + b;
console.log(sum); // 30 */


//! Complete Flow

//? JavaScript Code
//?     ↓
//? Parsing: 
//* 1. Lexical Parser: Convert into Tokens. Ex- variable, operators  
//* 2. Syntax Parser : Create a AST tree
//?     ↓
//? Compilation ( With Just in Time Compiler convert the Js code into machine/byte code )
//?     ↓
//? Execution Phase (Hositing and scope chain created here):
//*  In Execution Phase we have Call Stack with Creation Phase and Execution context & Heap memory -> 
//?     ↓
//? Program Runs

//! Synchronous & Asynchronous code

//? Synchronous means: When the js code runs it execute line by line if any async operation comes then block the remaining code until the async operation completes.
//? Asynchronous means: When the js code runs it execute line by line but if a async operation like setTiemout(),setInterval() cames then hold the async operation and execue further line of code.

/* 
*Web API's-> Handles the asynchronous operation for the browser. Handles Async() tasks like setTimeout(), fetch()
*CallBack Queue-> When the timer finishes, its callback is put into the Callback Queue. Stores completed async Tasks
*Event loop-> Moves tasks from queue to call stack when stack is empty */


//* Synchronous
/* const fun2 = () => {
  console.log("fun2 starts and ends");
};

const fun1 = () => {
  console.log("fun1 is start");
  fun2();
  console.log("fun1 ends");
};

fun1() */

//* Asynchronous
/* const fun2 = () => {
  setTimeout(() => {
    console.log("fun2 starts and ends");
  }, 2000);
};

const fun1 = () => {
  console.log("fun1 is start");
  fun2();
  console.log("fun1 ends");
};

fun1(); */

//!-------------------------------------------------------------------------- //
//!                             Behind the scene                              //
//!-------------------------------------------------------------------------- //

/* Everything in JavaScript happens inside an Execution Context, which you can picture as a big box or container.

It has two components:
1. Memory Component (Variable Environment): Stores variables and functions as key-value pairs.
2. Code Component (Thread of Execution): The place where code is executed one line at a time.

JavaScript is a synchronous single-threaded language:
? Single-threaded: It can only execute one command at a time.
? Synchronous: It executes code in a specific order, moving to the next line only after the current line finishes executing.

todo How Code Runs (The Two Phases)
When you run a JavaScript program, a Global Execution Context is created in two phases:

var n = 2; 
function square(num) { 
var ans = num * num; 
    return ans; 
} 
var square2 = square(n);

! Phase 1: Memory Creation Phase
=> JavaScript skims through the program line by line and allocates memory to all variables and functions before executing any code.

=> Arrow functions and function expressions behave just like normal variables here, so they are allocated `undefined` during this phase.

-Variables (n,square2): Variables get initialized with undefined in the memory creation phase.
-Functions (square): The entire function code is copied and stored in memory.

*State of Memory after Phase 1:
n: undefined
square: { ...whole function body... }
square2: undefined

! Phase 2: Code Execution Phase
=> JavaScript runs through the code line by line again to actually execute it.

?1) var n = 2; Replaces undefined with 2 in memory.

?2) square definition: Skipped because there is nothing to execute.

?3) var square2 = square(n); (F'n Invocation): Calling square(n) creates a brand-new Execution Context specifically for this function.

=> Inside this function context, Phase 1 allocates memory for parameter num (undefined) and local variable ans (undefined).
=> In Phase 2, num receives 2 (the value of n), and ans calculates 2 * 2 = 4.
=> When return ans; executes, it returns 4 to square2, hands control back to the global context, and this function's execution context is completely deleted.

?4) When all lines finish, the Global Execution Context is also deleted

*The Call Stack

=> The Call Stack is a stack that manages the creation, deletion, and order of execution of execution contexts.
=> The Global Execution Context sits at the bottom of the stack (shown as anonymous in browser dev tools).
=> When a function is invoked, its execution context is pushed onto the stack.
=> When the function finishes executing, its context is popped off the stack.
=> The Call Stack is also known by other names: Execution Context Stack, Program Stack, Control Stack, Runtime Stack, and Machine Stack.


! Hoisting: 
A phenomenon in JavaScript where you can access variables and functions even before initializing them or declaring them in code, without getting an error. This works because memory is already allocated to them in Phase 1 before code execution begins.
Hoisting does'nt work with arrow functions & f'n-expressions because they are treated like variables in Phase 1, so getName is allocated undefined.

*Example 1: Both let and const declarations are hoisted unlike var (which is attached to  global window object)

getName();            // Output: hi bro
console.log(x);       // Output: undefined
console.log(y);       // Output: Reference error y is not defined
console.log(getName); // Output: ƒ getName() {}

var x = 7;
let y=2;
function getName() {
  console.log("hi bro");
}

*Example 2: Arrow Functions & Function Expressions

getName(); // Throws TypeError: getName is not a function

var getName = ()=>{
  console.log("Hello");
};

! undefined vs not defined:
? undefined: Memory was reserved in Phase 1, but no value has been assigned yet in Phase 2.
var x; 
console.log(x); // undefined

? not defined (ReferenceError): Occurs when trying to access a variable for which memory was never allocated because it was never declared.
console.log(y); // Uncaught ReferenceError: y is not defined

! Shortest JS Program, window, and this

? The shortest JavaScript program is an empty file.

? Even with no code, the JavaScript engine creates:
1. A Global Execution Context
2. A Global Object (called window inside browsers.
3. The this keyword, which binds to window at the global level (this === window returns true)

? Any variable or function created outside of a function lives in the Global Space and attaches directly to the window object.

var x = 10;
function a() {
  var b = 20; // Local space (inside function), NOT in global space
}

* Accessing x from Global Space:
console.log(x);        // Output: 10
console.log(window.x); // Output: 10
console.log(this.x);   // Output: 10
*/

//! Scoping
/* Scope means the area where a variable can be accessed (used).
There are 3 main types:
1) Global Scope
2) Function Scope
3) Block Scope 

? Lexical Scoping: 
Lexical scoping is like a set of rules that decides the scope of a variable by looking at where the variable is written in the code.Every time JavaScript runs a function, it creates a lexical environment.

? Scope Chaining:
Scope chaining is the process by which JavaScript, when looking for the value of a variable
=>It first checks the current scope.
=>If it doesn't find the variable, it goes to the outer scope.
=>If it still doesn't find it, it goes further outside.

Global Variable: A variable declared in the global scope is referred to as a global variable. It has global visibility and can be accessed from anywhere in the code.

* Global Variable: 
A variable declared in the global scope is referred to as a global variable. It has global visibility and can be accessed from anywhere in the code.
* Local Variable: (Function scope + block scope)
A variable declared within a function (function scope) or a block (block scope) is often referred to as a local variable. It has local visibility, limited to the function or block where it's declared.*/

const globalVariable = "I'm a global variable";
function myFunction() {

    // Function scope
    const functionVariable = "I'm a function variable";

    if (true) {
        // Block scope
        const blockVariable = "I'm a block variable";
        console.log(blockVariable); // Output: I'm a block variable
        console.log(functionVariable); // Output: I'm a function variable
        console.log(globalVariable); // Output: I'm a global variable
    }
}
// console.log(blockVariable); // Error: blockVariable is not defined
// myFunction();
// console.log(globalVariable); // Output: I'm a global variable


//! Closure (Function + required data/lexical scope/surronding state)
/* A closure is a function which  bundled with the required data/lexical scope it take the reference of the required data. 
=> When an outer function finishes running, its execution context is deleted. But if that outer function returned an inner function, that inner function remembers and keeps access to the outer function's variables by storing a reference (closure) of it. 
=> Remembers References, Not Copies: Closures hold a direct reference to the memory location of variables, not just static copies of their old values 
=> Callstack- The call stack keeps track of which functions are currently running.
=> Garbage Collection- JavaScript automatically removes data that is no longer needed/reachable. */

function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
const result = outer();
// result(); // 10

//* Use-case: Used for module design patterns, function currying, data hiding (private variables), and functions that run only once, nested functions,function Currying.

//? Private Varibles- counters, tracking values, maintaining state
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const increment = counter();
// increment(); // 1
// increment(); // 2

//? Data Hiding- it hides the variable
function user() {
  let password = "12345";
  return function () {
    console.log(password);
  };
}

//! Data currying
/* Currying is a technique where a function takes one argument at a time and returns another function until all arguments are received.
Currying means taking a function that needs multiple values and giving those values one by one. */
 
function add (a){
    return function (b) {
        return a + b;
    }
}
// console.log(add(2)(3)); // 5