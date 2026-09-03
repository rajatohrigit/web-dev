//!Control statements
/* Control statements determine the flow of program execution.
They allow you to make decisions, repeat actions, and transfer control.*/

//*1. Conditional Statements
//?1)if- Executes a block of code if a condition is true.

//?2)if...else- Executes one block if the condition is true, otherwise another block.

//?3)else if- Checks multiple conditions.
/* let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
} */

//? Requirement-
//* If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//* If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//* If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//* If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
//* Extended voting eligibility checker with additional conditions

/* let age=20;
let isCitizen=true;
let isRegistered=true;
if (age < 18) {
    console.log("You are not eligible to vote");
} else if (!isCitizen) {
    console.log("You are not eligible due to citizenship status");
} else if (!isRegistered) {
    console.log("You are not eligible due to registration status");
} else {
    console.log("You are eligible to vote");
} */

//* Q: Write a program to check if a number is even or odd.
/* let num=10;
if(num%2===0){
    console.log("num is even");
}else{
    console.log("num is odd");
} */

//?4)switch- Selects one block of code from multiple options.
/* let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
} */

// break is used to immediately stop a loop or switch statement.

//*Q:Write a JavaScript switch statement that takes a variable areaOfShapes representing different
//* shapes, and based on its value, calculates and logs the area of the corresponding shape.
//* Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables
//* a and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use
//* variable a as the side length. If the provided shape is not recognized, log a message saying,
//* 'Sorry the shape is not available.' Test your switch statement with areaOfShapes set to 'Square' 
//* and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) 
//* is logged to the console.

/* let areaOfShapes="circle";
let a=5;
let b=10;
let r=2;
switch(areaOfShapes){
    case "square":
        console.log(a**2);
        break;
    case "circle":
        console.log(3.14*(r**2));
        break;
    case "rectangle":
        console.log(a*b);
        break;
    default:
        console.log("No shape selected");
} */

//*2. Looping Statements

//?1)while- Repeats as long as the condition is true.

/* let a=5;
while(a<10){
    console.log(a);
    a++;
} */

//* Table of any number with template literal (backticks `)
/* let num=5;
let i=1;
while(i<=10){
    console.log(`${num}*${i}= ${num*i}`);
    i++;  
}*/


//?2)do...while- Executes the block at least once, then checks the condition.It get always executed one time.
//? When the number of iterations is not known beforehand, and you want to validate the condition after the first iteration.

//*Q:Validating User Input with a Do...While Loop(user need to write a valid number) 🧑‍💻
//?Browser Window prompt not runs in cs code terminal use browser console
/* let userInput;
let positiveNumber;
do{
    userInput=prompt('Enter positive number'); 
    positiveNumber=parseFloat(userInput);
}while(isNaN(positiveNumber) || positiveNumber<=0)
console.log("Valid input");//it will execute after the loop ends if loop doesnt end statement not gonna prints
*/

//?3)for- Repeats code a specified number of times.

/* for(;;){
    Infinite Loop is used to run indefinitely untill a break statement appears.
    Used for game development to update and render(showing in display) fps-frame rate per second
    Equivalent to while(1){}
    It will 
} */

//* Q:Write a program to check if a number is prime no( have only 2 factors 1 and themselves)

//?1st Method- Not a good method in terms of complexity
/* let num=7;
let countPrime=0;
for(let i=1;i<=num;i++){
    if(num%i===0){
        countPrime++;
    }
}
if(countPrime==2){
    console.log(`${num} is prime`); 
}else{
    console.log(`${num} is  not prime`); 
} */

//? 2nd Method- Use this
/* let num=23;
let isPrime=true;
for(let i=2;i<num;i++){
    if(num%i===0){
        isPrime=false; //it says if the factor comes between 2 to 22 then updated to isPrime ->false
        break; //it will stop when the factor found
    }
}
if(isPrime){
    console.log("Number is prime");
}else{
    console.log("Number is not a prime"); 
} */

//* Q:Program To check if a year is a leap year🧑‍💻
// A year is a leap year if:
// It is divisible by 400 → leap year ✅
// OR it is divisible by 4 but not divisible by 100 → leap year ✅

/* let year=2016;
if((year%4===0)&& (year%100!==0) || year%400===0){
    console.log("Leap year");  
}else{
    console.log("Not a Leap year");
} */

//* Q: Drawing Patterns with Asterisks: 🧑‍💻
//*       i\j  1    2    3    4    5
//*       ----------------------------
//*       1    *    -    -    -    -
//*       2    *    *    -    -    -
//*       3    *    *    *    -    -
//*       4    *    *    *    *    -
//*       5    *    *    *    *    *

// i- row j-column
/* for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern= pattern + " *";
    }
    console.log(pattern);//console.log() prints the value and then moves the cursor to the next line. 
} */




    