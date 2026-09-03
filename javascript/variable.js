/* JavaScript (JS) is a programming language used to make websites interactive and dynamic.
SHIFT + Alt + A-> For Multiline Comment
CTRL + Alt + N-> Terminal shortcut
CTRL + L-> Terminal Clear


!Types of JS /How to add Js file into html
? 1. Inline JavaScript
You can write JavaScript directly inside an HTML element using an event attribute.
* Ex- <button onclick="alert('Hello!')">Click Me</button> 

? 2. Internal JavaScript
You can put JavaScript inside a <script> tag in your HTML.Just end before closing the body tag.
* Ex- <script> console.log("veerji Smash"); </script>

? 3. External JavaScript - For a real website, normally you create a separate .js file.
* Ex- <script src="script.js"> </script>

!Variables
-A variable is a named container used to store a value so you can use or change that value later.
Rules- 
-> cannot start with number
-> start with underscore/dollar
-> cant be reserve keyword
-> writen in camelCase
-> No special characters

?Types of variables

? 1.let- Use let when the value can change:
* Ex- let age = 25; 
     age = 26;

? 2.const - Use const when the variable should not be reassigned:
* Ex- const name = "Raj";

? 3.var - used to create variable older way.var is function-scoped, while let and const are block-scoped.
* Ex- var age = 25; 
     age = 26;

! Data Types
A data type tells JavaScript what kind of value a variable contains
1) Primitive datatypes(7): String,Number,BigInt,Boolean,Undefined,Null,Symbol
2) Non-primitive/Object datatypes: object,array,date

?Primitive datatypes
*1. String- Text is written inside quotes.
Ex- var myName = "veerji"; 
     console.log(type of myName);

*2. Number- Integers and decimal numbers.
Ex- var myNumber = 8; 
     console.log(type of myNumber);

*3. Boolean- Only two possible values.
Ex- var value = true; 
     console.log(type of value); 

*4. Undefined- A variable exists but hasn't been assigned a value.
Ex- var myName; 
     console.log(type of myName); 

*5. Null- null means you intentionally have no value. null is primitive, but typeof null returns "object".
Ex- var myAge=null; 
     console.log(type of myAge); => Shows object by a bug

*6. BigInt- Used for extremely large integers.End with n.
Ex- var myToys=123456789012345678901234567890n; 
     console.log(type of myToys);

*7. Symbol- Creates a unique value. S is capital
Ex- var mySymbol=Symbol("decription"); 
     console.log(type of mySymbol);

*String to number conversion-
With adding + sign before string makes number
Ex- var myNumber = "8"; 
console.log(typeof +myNumber);

*Number to String conversion-
Adding "" after string with brackets makes string
Ex- var myNumber = 8; 
console.log(typeof (myNumber+""));


?Non-Primitive / Reference Type
*1)Object-An object stores data as key-value pairs.
Ex-let person = {
    name: "Raj",
    age: 25
};
console.log(person.name);
console.log(person.age);
console.log(typeof person);

*2)Array-An array stores multiple values in an ordered collection.
Ex-let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]);
console.log(typeof fruits);

*3)Date-Date is also an object used for dates and times.
Ex-let today = new Date();
console.log(today);
console.log(typeof today);

?Primitive vs Reference
Primitive- The variable directly contains the value.Changing b doesn't affect a.
Object/Reference- Variables refer to an object.

!Concatenation-
Used to concatenate strings with + sign.only when one string is passes
Ex-console.log("veer"+"ji");//Result-> veerji
console.log(" " + " "); //Result-> 2 spaces 

!Type Coercion- 
Automatic conversion of values from one data type to another .Types of Coercion are:

?i)Implicit coercion: It happens automatically
Ex- console.log(10 + "20"); // Implicit coercion 10 converted to string. Result-1020
console.log(9 - "5"); // Implicit coercion 5 converted to number with arithmetic operator both perform calculation. Result-> 4
console.log(" " + 0);//Implicit conversion 0 converted to string Result-> 0

Implicit coercion boolean convert to number while arithmetic operator calculates
console.log(true + true); //  1+1 Result-> 2
console.log(true + false); // 1+0 Result-> 1
console.log(false + true); // 0+1 Result-> 1
console.log(false - true); // 0-1 Result-> -1

?ii)Explicit coercion: It is done manually by the programmer.Inbuilt fun() js provides dont need to install anything
*1)Number() -Inbuilt function converts any value to number if it is not able return NaN (N-capital)
Ex- var myNumber = "8"; 
console.log(typeof Number(myNumber));
console.log(Number(true));   // 1(convert boolean to number)
console.log(Number(null));   // 0
console.log(Number(""));   // 0

*2)String() -Inbuilt function that converts any value to string (S-capital)
Ex- var myNumber = 8; 
console.log(typeof String(myNumber));
console.log(String(true));   // true(converts boolean to string)
console.log(String(false));  // false

?parseInt & parseFloat functions(both always give number data type)
*3)parseInt()-
Inbuilt function that converts a string into an integer (whole number).Ignores everything after decimal part even if it exists. 
Ex- var myNumber = "8"; 
console.log(parseInt(myNumber)); //shows 8
console.log(typeof parseInt(myNumber)); //number(datatype) 

var myNumber = "8.32";
console.log(parseInt(myNumber)); //shows 8
console.log(typeof parseInt(myNumber)); //number 

*4)parseFloat()-
parseFloat() converts a string into a decimal number.just show the decimal part after number if exists
Ex- var myNumber = "8.23";
console.log(parseFloat(myNumber)); //shows 8.23 
console.log(typeof parseFloat(myNumber));// number

var myNumber = "8";
console.log(parseFloat(myNumber)); //shows 8
console.log(typeof parseFloat(myNumber));// number

*Here are more examples
console.log(parseInt("123")); //123
console.log(parseInt("123", 10)); //123(default base 10)
console.log(parseInt("   123 ")); //123
console.log(parseInt("077")); //77
+console.log(parseFloat("1.9")); //1(adding + sign before string)
console.log(parseInt("-123")); //-123

*5)Boolean()-It explicitly converts a value into true or false.
Truthy and Falsy concept follows
Ex-console.log(Boolean(1));    // true
console.log(Boolean(10));      // true
console.log(Boolean(-5));      // true
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true

!Truthy and Falsy Values
Values are either considered truthy or falsy When calculated in Boolean context
🟢 Truthy values
Everything that is not falsy is truthy.
-> true
-> any non-empty string Ex-"hello"
-> any non-zero number Ex- 42,-10   
-> array and objects even if its empty Ex-[],{},"false"
🔴 Falsy values
These values become false when converted to Boolean.
-> false
->  0
-> -0
-> 0n
-> ""(empty string)   
-> null
-> undefined
-> NaN(not a number)

?Q: What is the difference between null and undefined in JavaScript❓
null-If you have an empty lunchbox (null), it means you decided not to put any food in it. 
undefined-If you have a closed lunchbox (undefined), it means you haven't checked or filled it yet.

null-imagine a empty box
undefined-imagine a box that was'nt opened yet

?Q: What is the purpose of the NaN value in JavaScript❓
It is a special value that JavaScript uses when a mathematical or numeric operation fails to produce a valid number.

*is(NaN) function check whether the value is a number or not..It first tries to convert the value to a number.

console.log(isNaN("5"));   //false(converts string into number first then check whether number or not)
console.log(parseInt("xyz"));  //NaN
console.log(parseInt("@#$"));  //NaN
console.log(parseInt("xyz"));  //NaN
console.log(parseInt("&123")); //NaN
console.log("veer" - "ji");    //NaN

?Q: NaN === NaN, Why is it false ❓
if (NaN == NaN) {
     console.log("both are equal ");
} else {
     console.log("not equal");// not equal comes
}

!Operators in JavaScript
An operator is a symbol or keyword that tells JavaScript to perform an operation on values.

Expression is combination of operand and operator
2+3 where 2,3 are operands and + is operator

1. Arithmetic       + - * / % ** ++ --
2. Assignment       = += -= *= /=
3. Comparison       > < >= <= == === != !==
4. Logical          && || !        
5. Ternary          ? :
6. typeof

*1)Arithmetic Operators: Used for mathematical calculations.
console.log(10 + 5);  // 15 (addition operator)
console.log(10 - 5);  // 5  (Subtraction operator)
console.log(10 * 5);  // 50 (Multiplication operator)
console.log(10 / 5);  // 2  (Division operator)
console.log(10 % 3);  // 1  (Modulus operator)
console.log(2 ** 3);  // 8  (Exponentiation operator)

?Increment/decrement operator
i) Post-increment- use the value first, then increase
let a = 5;
console.log(a++); // 5
console.log(a);   // 6

ii). Pre-increment -increase first, then use the value
let a = 5;
console.log(++a); // 6
console.log(a);   // 6


*2)Assignment Operators: Used to assign or update a value in a variable.
let x = 10;
console.log(x += 5); // 15(x=10+5) [Addition assignment]
console.log(x *= 2); // 30(x=15*2) output updated to 15 [Multiplication assignment]
console.log(x -= 10); // 20(x=30-10) output updated to 20 [Subtraction assignment]

*3)Comparison operators: Used to compare two values.
?1) == Equal to - Checks if values are equal, ignoring data type.
console.log(10 == 10);    // true
console.log(10 == "10");  // true
console.log(10 == 20);    // false

?2) === Strict equal to - Checks value + data type.We use them because they dont do Type Coercion
console.log(10 === 10);    // true
console.log(10 === "10");  // false
console.log("hello" === "hello"); // true

?3) != Not equal to- Checks if values are different, ignoring data type.
console.log(10 != 10);    // false
console.log(10 != "10");  // false

?4) !== Strict not equal to - Checks if value OR data type is different.
console.log(10 !== 20);    // true
console.log(10 !== 10);    // false
console.log(10 !== "10");  // true

?5) > Greater than 
?6) < Less than
?7. >= Greater than or equal to
?8. <= Less than or equal to

*4) Logical Operators- used to combine or check multiple conditions.The result is generally true or false.
?1) && — Logical AND
Both conditions must be true.
console.log(10 > 5 && 20 > 10); // true

?2) || — Logical OR
At least one condition must be true.
console.log(10 > 5 || 20 < 10); // true

?3) ! — Logical NOT
It reverses the boolean value.
console.log(!true); // false

*5)Conditional/Ternary Operator- The ternary operator is a short way to write an if...else statement.
condition ? valueIfTrue : valueIfFalse;

?Write a program to check if the candidates isEligibleForDrive or not? Age must be equal to or greater then 18.
let age=16;
let result=(age>=18)?"Eligible for drive":"Not Eligible";
console.log("result");

?Let say you have a variable score representing a student's exam score. If the score is greater than or equal to 60, 
?the student passes; otherwise, they fail. Use the conditional (ternary) operator to determine the result and store it 
?in a variable called result. Log the result to the console❓
let score=71;
let result=(score>=60)?"You are passed":" You are Failed";
console.log(result);

!Questions

*Q:console.log("hello"/2); //NaN

-Evaluates from left to right
*Q:console.log("5" - 3); //2
*Q:console.log(2 < 12 < 5);// true(1<5)
*Q:console.log("20" + 10 + 10);// 201010

*Q:console.log(0.1+0.2); //0.30000000000000004 
-Because JavaScript stores numbers using 64-bit floating-point (IEEE 754) format. Computers work in binary (0 and 1), not decimal.

To fix this-> 
Use toFixed(no of digits after decimal)
Ex-console.log((0.1+0.2).toFixed(2)); //0.30

*Q:What is the difference between == and === operators in JavaScript❓
The equality == operator is a comparison operator that compares two values and returns true if they are equal.
The strict equality === operator is also a comparison operator, but it compares two values and returns true only if they are equal and of the same type.
Ex- if (10 ==="10"){
     console.log("equal");
} else {   
     console.log("not equal"); 
}

*Q: Write a program that determines if a person is eligible to drive based on their age being greater than or equal 
*to 18 and having a valid driver's license❓ 
let havingLicense=false;
let myAge=19;

if((myAge>=18) && (havingLicense)){
     console.log("Eligible To drive");    
}else{
     console.log("Not Eligible.Sorry");    
}

*/

let score=71;
let result=(score>=60)?"You are passed":" You are Failed";
console.log(result);





