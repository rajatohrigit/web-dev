//!Math Object in JavaScript
// Math is a built-in JavaScript object used for mathematical calculations.It doesn't work with BigInt.

//* Constants:
//? Math.PI: Represents the mathematical constant Pi (π)
// console.log(Math.PI); //3.141592653589793

//*Basic Operations:

//? 1.Math.abs():Returns positive value
// console.log(Math.abs(-10)); //10

//?2.Math.round(x): Rounds to nearest integer.
// console.log(Math.round(4.5)); //5
// console.log(Math.round(4.1)); //4

//?3.Math.ceil(x): Rounds up to nearest integer.(removal decimal and increase value)
// console.log(Math.ceil(4.9));  //5
// console.log(Math.ceil(4.2));  //5
// console.log(Math.ceil(-4.9)); //-4

//?3. Math.floor(x): Rounds down to nearest integer. (removal decimal floor)
// console.log(Math.floor(4.9));  //4
// console.log(Math.floor(4.2));  //4
// console.log(Math.floor(-4.2)); //-5

//?Math.trunc(x): Returns the integer part of x.No matter its negative or positive 
// console.log(Math.trunc(-3.7)); //-3
// console.log(Math.floor(-3.1)); //-4

//*Exponential and Logarithmic Functions:

//?1.Math.pow(x, y): Returns the value of x to the power of y.
// console.log(Math.pow(2, 5)); // console.log(2 ** 5);

//?2.Math.sqrt(): Math.sqrt(x) returns the square root of x.
// console.log(Math.sqrt(25));//5

//?3.Math.log(x) returns the natural logarithm of x.
// console.log(Math.log(1));
// console.log(Math.log(2));

//?4.Math.log2(x) returns the base 2 logarithm of x.
// console.log(Math.log2(8));

//?5.Math.random():returns a random number.Number ranges from 0 to less than 1
// console.log((Math.random()* 100).toFixed(3)); //generates only 3 digit after decimal
