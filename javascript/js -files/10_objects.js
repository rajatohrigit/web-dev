// ! Objects
/* An object is used to store related data together. In JavaScript, an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including other objects. 
=> An object can also contain functions. A function inside an object is called a method.
=> It is a versatile variable.While defining keys and values no semicolon is allowed
The value of an object property can be any data type, such as:
1.string    2.number
3.boolean   4.array 
5.object    6.function  */

//? Creating Objects:

let studentData={
    name:"alisha",
    age:22,
    isStudent: false,  
    "is'College": true, 
    
    address: {
        city: "Delhi", // Nested object is also allowed
        country: "India"
    },

    greet:()=>{
        console.log("hi there"); 
    }
};
//? Acessing Object
// console.log(studentData); 

//? Accessing Properties
/* We can access the properties of an object in two main ways:
1. Dot notation
2. Square bracket notation- mostly inside loops and special characters */

// console.log(studentData.name);    // alisha

//* We can acess the value with square brackets but we need to pass as string
// console.log(studentData["isStudent"]); //true 
// console.log(studentData["is'College"]); // Specially for accessing special charcter given with keys 

// studentData.greet(); // hi there (function call)


//? Adding and Modifying Properties:
// studentData.age=12; //Modifying
// studentData.job="unemployed"; //Adding
// console.log(studentData);

//? Methods: 
// A method is simply a function that is stored inside an object.

//* We Can Add Dynamic Keys in an Object-
// Sometimes we don't know the property name directly.Instead, we have the property name stored inside a variable.
// Use case- Dynamic keys can be useful when we want to get a user's name and value in React.

let idType="studentId";
let student = { 
    [idType]: "A123456", // Dynamic Key
    sName: "Veer", 
    sAge: 29, 
    isStudent: true, 
    greet: function () { 
        console.log( `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.` ); 
    }
};
// student.greet();

//? Data Modeling
/* Data modeling means creating a structure for representing data and showing how different pieces of data are related to each other.In simple words: We decide how we want to store and organize our data.
Objects are very useful for this because they can represent  real-world entities.
*For example: a car, a user, a product, a student

*We can create an object for a car:
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  start: function () {
    console.log("Engine started!");
  },
}; */

//* Q:Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.
/* Primitive data types such as numbers and strings are passed by value.
Objects are passed by reference.*/

//? Passing by Value- When something is passed by value, a copy of the value is created. 
/* let a = 10;
const modifyValue = (x) => {
    return x = 20;
}
console.log(modifyValue(a)); // copy of 10 is sent to function
console.log(a); //  Changing that copy does not change the original a  */

//? Passing by Reference- Objects behave differently
// When we assign an object to another variable, both variables refer to the same object.

/* let obj = { 
    id: 5, 
    name: "veer"
};
let obj1=obj; // Now both refer to the same object/location.
obj1.name="preeta";
console.log("original object:",obj); 
console.log(obj===obj1); // Adresses get compared not values result is true */

//? How to Avoid This Reference Behavior
// If we don't want two variables to point to the same object, we can create a copy of the object. Two ways mentioned here are: Object.assign(), Spread operator ...

//* Object.assign() - source obj se nikalonga target me copy bharonga
// Syntax: Object.assign(target, source); source can be multiple

let obj1 = { 
    id: 5, 
    name: "veer"
};
let obj2={age:30};

//if we pass a empty string as target it wont overwrite properties/keys
let newObj=Object.assign({},obj1, obj2); // Properties of obj1 & obj2 (copied) to newObj

newObj.name="harsh";
// console.log("original",obj1,obj2); // let call the org obj checking output changed or not

//Output- original { id: 5, name: 'veer' } { age: 30 } 

//? Two objects are equal only if they refer to the same object. 
//? Independent objects (even if they look alike) are not equal:
const objA = { name: "vinod" };
const objB = { name: "vinod" };
const objC = objA;
// console.log(objA === objB ? true : false); //false
// console.log(objA === objC ? true : false); //true

//! JSON (JavaScript Object Notation)
// JSON is a common format used to exchange data.JavaScript objects can be converted into JSON, and JSON can be converted back into JavaScript objects.There are two important methods:

//? 1)JSON.stringify(): Object → JSON String
let objI = { 
    id: 5, 
    name: "veer"
};
let jsonString=JSON.stringify(objI);
// console.log(jsonString); // {"id":5,"name":"veer"} 

//? 2)JSON.parse(): JSON string → Object
let parsedObject = JSON.parse(jsonString);
// console.log(parsedObject);

//todo  Difference: String values require quotes, whereas object property keys usually do not require quotes (but quotes are allowed).Quotes are required when the key contains spaces or special characters.


//!"this" Object
/* The this keyword is used to refer to an object.But the exact object that this refers to depends on how and where this is used.The value of this depends on how the function is called. Some important cases are:

?1. Inside an object method
this refers to the object.
*EX- const obj = {
  name: "Kodyfier",
  greet: function () {
    console.log(this);
  },
};
obj.greet(); // on console shows actual obj data

?2. Alone
this refers to the global object (Window). 
*Ex- this
 
?3. Inside a normal function
this refers to the global object (Window).
*EX- function callme() {
  console.log(this); 
}
callme(); //on console returns Window object

?4. Inside a strict-mode function
this is undefined.
*Example- 
("use strict");
x = 5;
console.log(x); // if not-strict gives error

?5. Inside an event
this refers to the element that received the event.

?6. Using call(), apply(), and bind()
These methods can be used to control which object this refers to. */

//*Note- this is not a variable. It is a keyword. You cannot change the value of this.

//! Method Shorthand
// JavaScript provides a shorter way to write methods.
/* const obj = { 
    name: "Kodyfier", 
    greet() { 
        console.log(this); 
    }, 
};
obj.greet(); //gave object

? With fat arrow-it cant acess this keyword
greet: () => {
        console.log(this);
   },
console.log(obj);  //gave global object window */

//! Objects Useful Methods

//? 1. Object.keys() : returns an array containing the keys/property names of the object.
//* Example- 
// const product = { id: 1,name: "Laptop" };
// let keys = Object.keys(product); // returns array of keys
// console.log(keys); // ['id','name'......]


//? 2. Object.values() : returns an array containing the values of the object.
//* Example-
// const product = { id: 1,name: "Laptop" };
// let values = Object.values(product);
// console.log(values); // [ 1, 'Laptop' ]

//? 3. Object.entries() : returns an array containing the key-value pairs. Object.fromEnteries() converts those entries back into an object.
//* Example-
// const product = { id: 1,name: "Laptop" };
// let entries = Object.entries(product);
// console.log(entries); // [ [ 'id', 1 ], [ 'name', 'Laptop' ] ]

//? 4. hasOwnProperty() : checks whether a particular property exists directly inside the object. Use hasOwn() beacuse it wont be working with Object.create(null).[mentioned in ecmascript file line no 308]
//* Example- 
// const product = { id: 1,name: "Laptop" };
// console.log(product.hasOwnProperty("name")); // true

//? 5. Object.assign() : used to copy properties from one or more objects into another object. It can also be used to merge objects.Doesnt directly give memory location like we gave in object to object assignment for copying solve the problem
//* Example-
// const target = { a: 1, b: 5 };
// const source = { b: 3, c: 4 };
// const mergedObject = Object.assign(target, source); // it overwrite the value of b modified it to b:3
// console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

//? 6. Object.freeze() : 
/* Object.freeze() makes an object unchangeable.
It prevents:
=> adding new properties
=> modifying existing properties
=> deleting properties */

//* Example-
// const product = { id: 1,name: "Laptop" };
// Object.freeze(product);
// product.id = "5656";
// console.log(product); // { id: 1, name: 'Laptop' }


//* Q: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?
let studentdb = { 
    name: "Bob", 
    age: 20, 
    grades: { 
        math: 90, 
        science: 85, 
        history: 88, 
    } 
};
const addGrade=(obj,subject,marks)=>{
    if(obj.hasOwnProperty("grades")){ // Also write as if (student.grades) returns true
        obj.grades[subject]=marks; // Access a property inside that object dynamically square bracket used
    }else{
        obj={};
    }
};
// addGrade(studentdb,"geography",82);
// console.log(studentdb);

//* Q:Write a function that compares two objects to determine if they have the same properties and values.

let data1 = { name: "Alice", age: 26, city: "New York" };
let data2 = { name: "Alice", city: "New York", age: 26, };
let data3 = { name: "Bob", age: 30, city: "San Francisco" };

//Object dont have length property and cant iterate with for of loop
const areObjectsEqual=(objA,objB)=>{
    let obj1=Object.keys(objA); // Won't work individually as it return array so we need to store array in variable
    let obj2=Object.keys(objB);

    if(obj1.length !== obj2.length){
        return false;
    }
    for(let key of obj1){ // loop needs bracket notation because key is a variable whose value changes.
        if (objA[key] !== objB[key]){
            return false;
        }
    } 
    return true;  
};
// console.log(areObjectsEqual(data1,data2)); // true
// console.log(areObjectsEqual(data1,data3)); // false

//* Q: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.
//? Output should be-
//? {
//?   '1': { id: 1, name: 'Alice' },
//?   '2': { id: 2, name: 'Bob' },
//?   '3': { id: 3, name: 'Charlie' }
//? }

let array = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const arayToObj=(arr)=>{
    let obj={};
    for(let key of arr){
        obj[key.id]=key;
    }
    return obj;
};
// console.log(arayToObj(array));

