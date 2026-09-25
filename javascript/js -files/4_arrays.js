//! Arrays(Mutable)- Each value is element
//An array is a data structure represents used to store multiple values in a single variable.
//Ex- let students = ["Raj", "Aman", "Rohit"]; 

//? .at()
/* .at() is a method used to get an element from an array or string by its index.
It allows negative indexes. */

//?Iterable - object where you can use the for-of loop

//*CREATING ARRAYS
/* Arrays [] in JavaScript can be created using the Array constructor or with array literals. 
Using Array constructor
let fruits = new Array('apple', 'orange', 'banana');

?Using array literal
let fruits = ["apple", "orange", "banana"];
console.log(fruits);

?we can also create an empty array
let arr = [];
console.log(typeof arr); */

//! ARRAY TRAVERSAL / ITERATING OVER ARRAYS

//? 1: for of loop , also known as iterable
/* The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or 
other iterable objects. */

/* let fruits = ["apple", "orange", "banana"];
for (let item of fruits) {
    console.log(item);
} */

//* for loop
/* let fruits = ["apple", "orange", "banana"];
for (let item = 0; item < fruits.length; item++) { 
  console.log(fruits[item]);
}  */

//? 2: for in loop
/* The for...in loop is used to iterate over the properties(including indices) of an object.
It gives/return the indexes */

/* let names=["beer","mohan","vamika"];
for (let items in names){
  console.log(names[items]);  
} */

// A callback is a function that you give to another function, and that other function calls it.

//! Array Transformation

//? 1: forEach Method/function-"just do something, don't give me anything back"
/* forEach() is used when you want to perform an action on every element of an array.
   forEach() does not create/return a new array.

=>forEach() and map() automatically call the callback function you give them.
  They are array methods that accept a callback function.
  The call is: arr.forEach(.callback..),arr.map(.callback..) 

=>forEach runs immediately even if it store in variable because we wrote 
  arr.forEach(...) with parentheses — that is the call. Once forEach starts running, 
  it automatically calls our callback function once for every element in the array.
  It doesn't return anything so need to store in a variable
  
=> curElem,index,arr-> optional parameters

?The callback can modify the array if you write code that modifies it.*/ 
/* let numbers = [1, 2, 3];
numbers.forEach((curElem,index) => {
    numbers[index]=curElem*2;
});
console.log(numbers); */

//! If we calls it gives undefined does'nt return anything 
/* let names=["beer","mohan","vamika"];
const forEach= names.forEach((curElem,index,arr)=>{
      return `Current element ${curElem}`;
});
console.log(forEach); */

//* IF we want to perform action on each element 
/* let numbers=[10,34,23];
numbers.forEach((curElem,index,arr)=>{ 
      console.log(`${curElem} with ${index} no`); //performing action
});
console.log(numbers); */
 
//*forEach cannot directly combined with other array methods.No Method chaining done like applying filters becuase it can't return anything.


//? 2: map function- Returns new array ("change each item, give me a new array of the changed items")
/* map() is used when you want to modify/transform every element and create a new array. 
map() does not change the original array. */

//* Creates a new array with transformed elements use map
/* let names=["beer","mohan","vamika"];
const map= names.map((curElem,index,arr)=>{
      return ` ${curElem} with ${index}  ${arr} `;  
});
console.log(map); //variable calling is there not method because it returns something*/

//*map can be combined with other array methods( Method chaining is possible) like this
/* let result = numbers
    .map(num => num * 2)
    .filter(num => num > 5); */


// *Q:Write a program to Multiply each element with 2
// let arr=[2,4,5,6,3];

//* Using foreach method
//? we just performing the action here not modifiying the current array
/* arr.forEach((curElem,index,arr)=>{
    console.log(`${curElem}*2 = ${curElem*2}`); 
}) */

//? we can store in variable as well if its returning something but returns undefined no need to call it call it than.
/* const multiply=arr.forEach((curElem,index,arr)=>{
    console.log(`${curElem}*2 = ${curElem*2}`);
}); */

//* Using map method
/* const multiply=arr.map((curElem,index,arr)=>{
        return curElem*2;
});
console.log(multiply); */

//*CRUD OPERATION IN ARRAY Methods(Insert, Add, Replace and Delete Elements)

//? 1. at() -> Reading
/* Used for read the element cant change the array. In a case of positive indexing, .at() will work the same as the square brackets. Negative numbers allow you to access elements from the end. */

// const array = [1, 2, 4, 5, 6, 7];

// console.log(array[0]); // 1
// console.log(array.at(0)); //1
// console.log(array[array.length - 1]); // 7 returns array[5]
// console.log(array.at(-1)); // 7

//* works for string also
// const MyName = "Rajat";
// console.log(MyName.at(0));  // R


//? 2. push() -> Create 
// Method/function that adds one or more elements to the end of an array.

//*Example-
/* let fruits = ["apple", "orange", "mango", "grapes", "banana"];
console.log(fruits.push("guava")); // 6(Returns the new length)
fruits.push("guava");
console.log(fruits); */

//? 3. pop() ->  Delete
// Method that removes the last element from an array.

//*Example-
/* let fruits = ["apple", "orange", "mango", "grapes", "banana"];
console.log(fruits.pop()); //banana
console.log(fruits); */

//? 4. unshift() -> Create
// Method that adds one or more elements to the beginning of an array.

//*Example-
/* let fruits = ["apple", "orange", "mango", "grapes", "banana"];
console.log(fruits.unshift("guava")); //6 (Returns the new length)
console.log(fruits); */

//? 5. shift() -> Delete
// Method that removes the first element from an array.

//*Example-
/* let fruits = ["apple", "orange", "mango", "grapes", "banana"];
console.log(fruits.shift()); //apple
console.log(fruits); */

/* push-> end element add
pop-> end element delete
unshift-> starting element add
shift-> starting element delete */

//? 6. splice() -> Create + Update + Delete
// Array method used to add, remove, or replace elements at any position in an array. 
// It returns empty array. splice() changes the original array.

//*Syntax- array.splice(start, deleteCount, item1, item2, ...);
/*start → index where you want to start
deleteCount → number of elements to remove
item1, item2, ... → elements if you want to add (optional) */

//* Examples-
// let fruits = ["apple", "orange", "banana", "mango"];

//* start at index 1 does NOT mean "remove everything before index 1"
/* fruits.splice(1); // Start deleting from index 1 and remove everything from there to the end.
console.log(fruits); // [ 'apple' ] */

/* fruits.splice(1, 1, "grapes"); // Start at index 1 and remove 1, add "grapes".
console.log(fruits); // [ 'apple', 'grapes', 'banana', 'mango' ] */

/* fruits.splice(1, 0, "grapes"); // Start at index 1 and remove 0, add "grapes"
console.log(fruits); // [ 'apple', 'grapes', 'orange', 'banana', 'mango' ] */
 
/* fruits.splice(fruits.length, 0, "grapes"); // Adding element in last
console.log(fruits);//'apple', 'orange', 'banana', 'grapes', 'mango' ] */

//? 7. toSpliced() -> Create + Update + Delete 
// toSpliced() does the same type of operation, but it does NOT modify the original array.

//* Examples-
// const arr = [10, 20, 30, 40, 50];
// const newArr = arr.toSpliced(2, 2); // start from 2nd index and delete 2 elements
// console.log(newArr); // [10, 20, 50]

//? 8. with(index, value) -> Update
// It is used when you want to replace one value at a particular index without changing the original array. 
// replace() works with String and with() works with Array.
	
//* Examples-
// const arr = ["apple", "banana", "mango"];
// const newArr = arr.with(1, "orange");
// console.log(newArr); // ["apple", "orange", "mango"]


//! SEARCHING IN ARRAY

//? 1) indexOf() Method: 
/* It is a method used to find the index (position) of an element in an array.
Returns first occurence. If not founds return -1. 
Syntax- indexOf(searchElem);
        indexOf(searchElem, fromIndex); */ 

//*Examples-
/*const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
console.log(numbers.indexOf(6));    //3   finds 6 at 3rd index
console.log(numbers.indexOf(6,5)); // 6   start finding 6 but from the index 5 then return index */

//? 2) lastIndexOf() →
// It is used to find the last occurrence of an element in an array.(finding from right to left)

//*Examples-
/* const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
console.log(numbers.lastIndexOf(6));   //6    finds 6 at 6th index
console.log(numbers.lastIndexOf(6,5)); //3    Start searching from index 5 and go backward. */

//? 3) includes() ->
/* It is a method used to check whether a particular value exists in the array.
It Returns Boolean value in terms of true or false. 
Syntax-includes(searchElement); */

//*Example-
/*const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
console.log(numbers.includes(2)); //true
console.log(numbers.includes(0)); //false */


//*Q: Add Dec at the end of an array?
/* const months = ["Jan", "march", "April", "June", "July"];
months.push("December"); // adding december in last with push
months.splice(months.length,0,"December"); // starts from end deleted nothireverseng add december
console.log(months); // ["Jan", "march", "April", "June", "July","December"] */

//*Q: Update march to March (update)?
/* const months = ["Jan", "march", "April", "June", "July"];
months.splice(months.indexOf("march"),1,"March"); // months.splice(1,1,"March");
console.log(months); // [ 'Jan', 'March', 'April', 'June', 'July' ]  */

//*Q: Delete June from an array?
/* const months = ["Jan", "march", "April", "June", "July"];
months.splice(months.indexOf("June"),1); // months.splice(3,1);
console.log(months); // [ 'Jan', 'march', 'April', 'July' ] */


//! SEARCHING + FILTERS IN ARRAY

//? 1) find() Method:
/* Used to find the first element in an array that satisfies a condition.
If not found return undefined */

//*Example-
/* let number=[2,3,2,8,10];
const findMethod=number.find((curElem)=>{
      return curElem>8; //10 
});
console.log(findMethod); */

//? 2) findLast():
// Used to find the first element in an array that satisfies a condition but searches from last → first.

//*Example-
/* const array = [1, 2, 3, 4, 5, 6, 4];
console.log(array.findLast((elem) => elem > 4)); */

//? 3) findIndex() Method:
// Gives the first matching INDEX. If not found return -1 

//*Example-
/* let number=[2,3,2,8,10];
const findInilterMethod=number.findIndex((curElem)=>{
      return curElem>8; // 4 
});
console.log(findInilterMethod); */

//? 4) findLastIndex():
// Gives the first matching INDEX but searches from last position. If not found return -1 

//*Example-
/* const array = [1, 2, 3, 4, 5, 6, 4];
console.log(array.findLastIndex((elem) => elem)); */

//? 5) toReversed()
// reverse() changes the original array but it creates a new reversed array and keeps the original array unchanged.

//*Example-
/* const myNames = ["vinod", "bahadur", "thapa", "kodyfier"];
const reversed = myNames.toReversed();
console.log(reversed); // [ 'kodyfier', 'thapa', 'bahadur', 'vinod' ] */

//? 6) filter() Method:
// filter() is an array method used to select elements(gives ALL matching VALUES) that satisfy a condition.
/* array.filter(callback);
map() → changes every element
filter() → selects elements that pass a condition */

//*Example-
/* let number=[2,3,2,8,10];
const filterMethod=number.filter((curElem)=>{
      return curElem<8; // [ 2, 3, 2 ]
});
console.log(filterMethod); */

//? UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
/* let value = 6;
const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8,9];
let updatedCart=numbers.filter((curElem)=>{
      return curElem!==value;
});
console.log(updatedCart); */

//*Q: Given an array of products where each product has a name and a price, write a function that uses the filter method to return an array containing only the products with a price less than or equal to 500.
/* const products=[
{ name: "Laptop", price: 1200 },
{ name: "Phone", price: 800 },
{ name: "Tablet", price: 300 },
{ name: "Smartwatch", price: 150 }
];
const filterProducts=products.filter((curElem)=>{
      return curElem.price<=500;
});
console.log(filterProducts); */

//*Q: Filter unique values
/* const values = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
const unique=values.filter((curElem,index,arr)=>{
    return arr.indexOf(curElem)=== index;
});
console.log(unique); */

/* const values = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
console.log([...new Set(values)]); */

//! Reduce():
// array method that used when you want to take many array elements & produce 1 final value.
//? Syntax- array.reduce(function callback(accumulator, currentValue, index, array){}, initialValue);

// acc = accumulator → stores the result so far 
// initial value-where accum starts 

//*Q:Write a JavaScript function that calculates the total price of items in a shopping cart.The function should take an array of item prices as input and return the total price.
/* const productPrice = [100, 200, 300, 400, 500];
const totalprice=productPrice.reduce((accum,curElem)=>{
      return accum+curElem;
},0);
console.log(totalprice); */

//*Q:Using the map method.WAF that takes an array of strings and returns a new array where each string is capitalized. 
/* const words=["apple", "banana", "cherry", "date"];
const result= words.map((curElem) =>{
  return curElem.toUpperCase();// convert everything in uppercase
});
console.log(result);//[ 'APPLE', 'BANANA', 'CHERRY', 'DATE' ] */

//*Q:Using the map method, WAF that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.
/* const numbers = [1, 2, 3, 4, 5];
const result=numbers.map((curElem)=>{
  if(curElem % 2===0){
    return curElem**2;
  }
}).filter((curElem)=>curElem!==undefined);
console.log(result); */

//*Q: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr."
/* const names = ["ram", "vinod", "laxman"];
const result=names.map((curElem)=>{
      return `MR.${curElem}`;
});
console.log(result); */


//! SORTING ARRAY

//? 1) sort(): is an array method used to arrange elements in order.

//*Examples-
/* const fruits = ["Banana", "Apple", "Orange", "Mango"];//ascending order
fruits.sort();
console.log(fruits); */

/* negative → order change
positive → keep the order
zero     → no change/preference */

//*Ascending order
/* const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];
const sorted=numbers.sort((a,b)=>{
  return a-b;
});
console.log(sorted); */

//*Descending order
/* const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9]; //works right to left a is 2 b is 1
const sorted=numbers.sort((a,b)=>{
  return b-a;
});
console.log(sorted); */

//* without sort using bubble sort
/* let numbers = [5, 2, 8, 1, 3];
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length- 1-i; j++) {

        if (numbers[j] > numbers[j + 1]){
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log(numbers); */

//? 2) toSorted()
// array.sort() changes original array but toSorted() gives you a new sorted array.

//*Example-
//* With array of strings
// const names= ["vinod", "bahadur", "thapa", "kodyfier"];
// const sorted= names.toSorted();
// console.log(sorted);

//* With array of numbers
// const array=[23,12,32,1,4,5];
// const sorted = array.toSorted((a, b) => a - b);
// console.log(sorted); // [ 1, 4, 5, 12, 23, 32 ]





