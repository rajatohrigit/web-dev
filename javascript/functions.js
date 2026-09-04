// !Functions
/* Function is a block of reusable code that performs a specific task or set of tasks. 
Functions are used to organize code into modular and manageable pieces, promote code reuse, 
and make programs more readable. 

?Function declaration-
let a,b;
function fname(a,b){ // Parameters
    return a+b;     //A function can calculate something and return the result.
}

?Function calling(invocation-
console.log(fname(3,4)); // Arguments
*/

//? Parameters-
/* Parameters allow you to pass values into a function.
The variable written inside the function definition. It receives a value. */

//? Argument-
/* The actual value you pass when calling the function. */

//*Function Expressions-
/* A function expression means creating a function and storing it inside a variable.
It is a way to define function as part of epressions.
It can be either named or anonymous. If its named,it becomes a named function expression 
Ex-let result=function f'name(parameters){
    code 
}; 
f'name(); */

//*Anonymous Function-
/* An anonymous function is a function that does not have a name. */
//?function expression without name
/* let sum=function(a,b){
    return a-b;
};
console.log(sum(45,23)); */

//*Immediately Invoked Function Expression.(IIFE)
/* It is a function that is created and executed immediately
(function() {
    console.log("Hello");
})(); */

//? sum of 2 numbers
/* let sum=(function(a,b){
    return a*b;
})(4,3);
console.log(sum); */

//!ECMAScript(2015)
// ECMAScript (ES) is the standard/specification that defines how JavaScript should work.

//*let Keyword: ECMAScript 6 (ES6) 
/* The let keyword is used to declare variables with block scope. 
Variables declared with let are mutable(changes allowed), meaning their values can be reassigned. */

//*const Keyword: ECMAScript 6 (ES6)
/* The const keyword is used to declare variables with block scope, but once a value is assigned to 
a const variable, it cannot be reassigned. const variables are immutable (no changes allowed). */

//? var allows redeclaration of same variable while let,const doesn't
/* var myName="veer";
var myName = "Raj";
console.log(myName); */

//? var is function-scoped while let, const is block scoped
/* if(1){
    var myName="veer";
}
console.log(myName); // veer */

/* if(1){
    let myName="veer"; // it has block scope this variable cant access outside
}
console.log(myName); //throws error  */

//*Template literals-ECMAScript 6 (ES6)
/* Template literals are a way to create strings using backticks ` instead of single ' ' 
or double " " quotes. We can write like `${variable}`*/

//?1) Supports String Interpolation-

/* let message = `I am ${age} years old.`;
console.log(message); */

//?2)Supports Multi-line String

/* let address=`
veer ji 
education
hub`;
console.log(address); */

//*Default Parameters- ECMAScript 6 (ES6)
//works from left to right
/* function sum(a = 20, b = 10) { //default values
  return a + b;
}
console.log(sum()); */

//*Fat Arrow function- ECMAScript 6 (ES6)
//A fat arrow function (usually called an arrow function) is a shorter way to write a function.

/* const sum=(a,b)=>{
    let result=`sum is ${a} and ${b} is ${a+b}`;
    console.log(result);
};
sum(34,20); */

//? In single statement 
/* const sum=(a,b)=> console.log(`sum is ${a} and ${b} is ${a+b}`);
sum(34,20); */

//?does'nt need return keyword in single statement
/* const sum=(a,b)=> `sum is ${a} and ${b} is ${a+b}`;
console.log(sum(34,20);*/

//! Questions-

//* Q: Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

/* let calculator=(a,b,operator)=>{
    switch(operator){
        case "+":
            return a+b;
            break;

        case "-":
            return a-b;
            break;

        case "*":
            return a*b;
            break;

        case "/":
            if(b===0){
                return `0 is not allowed as 2nd number`;
            }else{
                return a/b;
                break;
            }

        default:
            return `no operator found`;
    }
};
console.log(calculator(21,7,"/")); */

//* Q:Write a function to reverse a given string without using built-in reverse methods.
//console.log() prints the value and then moves the cursor to the next line. 

/* const reverseString=(str)=>{
    let reverse="";
    for(let char=str.length-1; char>=0; char--){
        reverse=reverse + str[char];
    }
    return reverse;
};
console.log(reverseString("aryaman singh")); */

//* Q:Create a function to determine if a given string is a palindrome (reads the same backward as forward).

/* const isPalindrome=(str)=>{
    let reverse="";
    for(let char=str.length-1; char>=0; char--){
        reverse=reverse + str[char];
    }
    console.log(`Reversed string -> ${reverse}`);
    
    if(str===reverse){
        return `${reverse} is a palindrome`;
    }else{
        return `${reverse} is not a palindrome`;
    }     
};
console.log(isPalindrome("level")); */




