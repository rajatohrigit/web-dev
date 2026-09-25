// todo ECMA scripts

//! Default Parameters
// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed. Default values sets from right hand side.

//* Q: Write a function to find sum of two numbers? What if during function call user only passed one argument?
/* function sum(a = 20, b = 10) { 
    return a + b;
}
console.log(sum()); //30
console.log(sum(10)); //20 */

//! Object Property Shorthand
// const name = "vinod";
// const age = 30;

//? Traditional:
/* const person = {
    name: name,
    age: age
}; */

//? ES6 shorthand- So if the property name and variable name are the same, you can write it only once.
/* const person = { name, age };
console.log(person); */

//! Destructuring
// Destructuring is a convenient way to extract values from arrays or properties from objects into variables. It doesn't change anything in either array or object it

//* Destructuring Arrays:
// const numbers = [10, 20, 30];

//? Traditional Way
// const first = numbers[0]; 

//? New Way
// const [a, b, c] = numbers;
// console.log(a); // 10

// Ignoring array values-
// const [,,c]=numbers; 
// console.log(c); // 30

//* Q:Write a program to swap two variables without using 3rd variable?
// let a=10,b=20;
// [b,a]=[a,b];
// console.log(a,b);

//* Destructuring Objects:
// const user = { myName: "Vinod", age: 30 };

//? Traditional:
// const myName = user.name;

//? New Way:
// const { myName,age } = user;
// const { myName: username, age: userAge } = user; // We can rename it as well
// console.log(myName); // Vinod
// console.log(userAge); // 30 

//! Spread Operator
// The syntax is three dots(...) followed by the array (or iterable).

//* 1. Copying an array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// let newFruits = [...fruits];
// console.log(newFruits); // [ 'Apple', 'Orange', 'mango', 'banana' ]

//* 2: Concatenating arrays / Combining arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = [4, 5, 6];
// const combinedArray = [...arr1, ...arr2];
// console.log(combinedArray);

//* 3: Adding Elements to existing array
// let fruits2 = ["Apple", "Orange", "mango", "banana"];
// fruits2.push("guava", "grapes"); //? Traditional way
// fruits2.push(...["guava", "grapes"]); //? New way
// console.log(fruits2);

//* 4. Spread with String
// const country = "INDIA";
// console.log(country.split("")); //? Tradional Way
// console.log([...country]); //? New Way
// Output:  [ 'I', 'N', 'D', 'I', 'A' ]

//! Rest parameters: Rest → Collects
// Rest arguments allow a function to accept infinite  number of arguments and collect them into an array.
// Rest parameter should be at the end of function parameter. A single rest parameter is allowed.

//? Traditional Way
// const sum = (a, b, c, d) => {
//   return a + b + c + d;
// }

//? New Way
// reduce() is an array method used to process all elements of an array and produce one final value.
// const sum = (a, b, ...numbers) => {
//     return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0); 
// };
// console.log(sum(1, 2, 3, 4,33,2,22,23,32,2,2,1,22,)); // comma is also allowed at end


//* 1. Rest parameters with destructuring
// const numbers = [1, 2, 3, 4, 5];
// [a , b, ...others] = numbers;
// console.log(others); // [ 3, 4, 5 ]

//* 2. Rest with Objects Destructuring
// const student = {
//   age: 10,
//   name: "vinod",
//   isStudent: true,
// };
// const { age, ...others } = student;
// console.log(others); // { name: 'vinod', isStudent: true }

//* 3. Spread with array (Spread → Expands)
/* const numbers = [1, 2, 3, 4, 5];
const add = (a, b, c, d, e) => a + b + c + d + e
console.log(add(...numbers)); // spreads/unpacks the array into values */

//* 4. Spread with Objects
// const obj1 = { a: 10, b: 20, c: 50 };
// const obj2 = { c: 30, d: 40 };
// const newObj = { ...obj2, ...obj1 };
// console.log(newObj);


//! Exponentiation Operator **
// Used to calculate a power
//? Tradional Way
// console.log(Math.pow(2, 3));
//? New way
// console.log(2**3); // 8 


//! Array.includes()
//? array.includes() is used to check whether an array contains a particular value. Returns boolean expression.
// let fruits = ["apple", "mango", "banana"];
// fruits.includes("mango"); // true


//! String padding
// Adding extra characters to a string until it reaches a specific length.

//? 1.padStart(): padStart() adds characters at the beginning of a string.
// const companyName = "Kodyfier";
// const paddedName = companyName.padStart(15);
// console.log(paddedName);

//? 2.padEnd(): padEnd() adds characters at the end.
// const companyName = "Kodyfier";
// const paddedName = companyName.padEnd(15,"*");
// console.log(paddedName);

//! Array.flat()
// flat() is used to remove nested arrays and make the array more flat.
// Creates a 1D array from multidimensional array . Returns new flattened array not modify array

// const nestedArray = [1, 2, [3, 4], 5];
// const nestedArray2 = [1, [2, [3, [4]]], 5];
// const flatArray = nestedArray.flat();
// const flatArray2 = nestedArray2.flat(3);
// console.log(flatArray); // [ 1, 2, 3, 4, 5 ]
// console.log(flatArray2); // [ 1, 2, 3, 4, 5 ]

//! Array.flatMap() - combines flat() with map().

// const arr = ["My name", "is vinod", "thapa"];
// const newArr = arr.flatMap((curVal) => curVal.split(" "));
// console.log(newArr); // ["My", "name", "is", "vinod", "thapa"]

//! Object.fromEntries()
//? Object.entries() converts the object into an array of key-value pairs.
// const person = { name: "vinod", age: 30 };
// const entries = Object.entries(person);
// console.log(entries);

//? Object.fromEntries() converts those entries back into an object.
// const newPerson = Object.fromEntries(entries);
// console.log(newPerson);

//* Even though both objects contain the same data but both had different memory reference
// console.log(person == newPerson); // false 

//! trimStart() : Return a new string with removed white space from the start of the original string
// console.log("           Testing".trimStart()); // Testing

//! trimEnd(): Return a new string with removed white space from the end of the original string
// console.log("Testing    ".trimEnd());

//! Symbol :A Symbol is a JavaScript primitive data type.
// const mySymbol = Symbol("This is my symbol");
// console.log(mySymbol.description); // This is my symbol
// console.log(typeof mySymbol); //symbol

//! Optional catch binding
/* try {  
     code
} catch (e) {
    handle error
} */

//* Now its optional parameter
/* try {
  console.log(10 + 5);
} catch {
  console.log("there is an error");
} */

//! BigInt
/* Normally JavaScript uses the Number type for numbers.But very large integers can go beyond the safe limit of normal numbers. BigInt is used for such large integers. Creating BigInt using n */

// const largeNo = BigInt("123456789012345678901234567890");
// console.log(largeNo); //123456789012345678901234567890n
// console.log(typeof largeNo); // bigint

//! Nullish Coalescing Operator: Used for error handling ??
/* The Nullish Coalescing Operator is used to provide a default value when a value is specifically:null,undefined.
=> It is only consider 2 falsy values that is undefined & null.
=> If value is null or undefined → defaultValue is used. 
=> Otherwise → value is used. */

// let favNum = 0;
// userFavNum = favNum||10; //? it will set the value to 10 it assume that value is not present as 0 is falsy value
// console.log(userFavNum); // 10

// userFavNum = favNum ?? 10; //? it will not set the value as it only consider 2 falsy value null & undefined
// console.log(userFavNum); // 0

//! Optional Chaining ?.
// It is used to safely access a property or method when something might be null or undefined.

const person = {
  name: "John",

  address: {
    city: "delhi",
    zipCode: 12345,

    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    }
  }
};

//? Accessing nested properties without optional chaining
// const city= person.address ? person.address.city : "city is not present";
// console.log(city);

//? With optional chaining
// const city= person.address ?.city ?? "city is not present";
// const latitude= person.address ?.coordinates?.latitude ?? "latitude not there";
// console.log(city);
// console.log(latitude);

//! Logical OR Assignment (||=)
// Assign the right-hand value if the left-hand value is falsy. (false,0,"",null,undefined,NaN)

// let x = false;
// x ||= true; // equivalent to: x = x || true;
// console.log(x); // Output: true

// let y = 10;
// y ||= 20; // equivalent to: y = y || 20;
// console.log(y); // Output: 10 (unchanged)

//! Logical AND-Assignment (&&=)
// Assign the right-hand value if the left-hand value is truthy 

// let x = true;
// x &&= false; // equivalent to: x = x && false;
// console.log(x); // Output: false

// let y = 0;
// y &&= 20; // equivalent to: y = y && 20;
// console.log(y); // Output: 20

//! Nullish Assignment (??=)
// Assign the right-hand value if the left-hand value is null or undefined.

// let x = null;
// x ??= 10;
// console.log(x); // 10

//! Numeric Separators
// It is only there to make the number easier to read.

// const bigNumber = 1_000_000;
// console.log(bigNumber); // 1000000


//! Object.hasOwn(object,property)
//  works the same way like hasOwnProperty() but it doesn't work for objects created using Object.create(null)
const book = {
  name: "World Best JS Course",
  author: "Thapa Technical",
};

//? works good with this
// console.log(book.hasOwnProperty("name")); // old method
// console.log(Object.hasOwn(book, "name")); // new way

//? hasOwnProperty did not work with that like Object.hasOwn() do
// const student = Object.create(null);
// console.log(typeof student); // object
// student.name = "vinod";
// console.log(Object.hasOwn(student, "name"));
