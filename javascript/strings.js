//!STRINGS(immutable)
//String is a sequence of characters (text) enclosed in single or double quotes

// todo We can store every item in variable so we can use that variable to print instead of direct consoling as strings are immutable (no changes allowed)

//* STRING PROPERTIES:
//? 1.length: (Starts from 1 Its a method not property)
// Property that returns the length of the string (number of characters).
/* const str = "Hello,    World!";
console.log(str.length); //16 (also includes spaces in length) */

//?2.Escape character: 
/* In JavaScript, the backslash \ is used as an escape character.
It allows you to include special characters in a string. 
Just add \ before Special character.

Code	Result	    Description
\'	    '	        Single quote
\"	    "	        Double quote
\\	    \	        Backslash 
single and double quote can be written easily with template literal
\n for next line or we can use multistring with temp literal

Ex- console.log(`my na\\me is 'rajat'`);*/

//? Array.from() returns create an new array from an iterable or array-like value.
//*Example-
/* let text = "rajat-veer";
let strArr= Array.from(text);
console.log(strArr); // ['r', 'a', 'j', 'a','t', '-', 'v', 'e','e', 'r']

let strMap=strArr.map((curElem,index)=>{
        return `${curElem}-${index}`;
});
console.log(strMap) // ['r-0', 'a-1', 'j-2','a-3', 't-4', '--5','v-6', 'e-7', 'e-8','r-9'] */

//* STRING SEARCH METHODS
//?1.indexOf():
/* Finds the first position(occurence) of a value.If not found return -1.
Syntax-indexOf(searchString)
       indexOf(searchString, position) */

//*Examples-
/* let text = "rajat-veer";
console.log(text.indexOf("e"));    //7   finds e at 7th index
console.log(text.indexOf("v",2));  //6  start finding v but from the index 2 then return index 
console.log(text.indexOf("veer")); //6 */


//? 2.lastIndexOf():
//It is used to find the last occurrence of an element in string.(finding from right to left)

//*Examples-
/* let text = "rajat veer ki javascript text veer";
console.log(text.lastIndexOf("veer"));    //30  finds ki at 30th index giving the last occurence
console.log(text.lastIndexOf("veer",8));  //6   Start searching from index 8 and search backwards. */


//? 4.search():
/*It is similar to indexOf(), but search() can also work with Regular expressions(come without ""). 
=>Searches for a pattern and returns its index. Returns -1 if no match is found.
=>Can't take 2nd start means multiple search not possible with commas.*/ 

//*Example-
/* let text = "Hello JavaScript, welcome to our world best JavaScript course";
console.log(text.search(/script/i)); //10 ignore case sensitivity */


//? 4.match():
// Returns an array of the matched values or if no match is found then return null.
// Can take Regular Expressions-  g->global, gi->global,ignore case sensitivity

//*Example-
// let text = "Hello JavaScript, welcome to our world best JavaScript course";

//todo JS will convert normal text into Reg expression without g flag like text.match(/JavaScript/)

//? Both give same output- without global it gives only first occurence JavaScript detailed output 
// console.log(text.match("JavaScript")); //Give detailed output like text,index,input,groups
// console.log(text.match(/JavaScript/)); 

//? global finds all JavaScript return in array
// console.log(text.match(/JavaScript/g));  // [ 'JavaScript', 'JavaScript' ]
// console.log(text.match(/javascript/gi)); // [ 'JavaScript', 'JavaScript' ] 

//? Returns null if no matched item found
// console.log(text.match(/javascript/gi); // null


//? 5.matchall():
/* matchAll() is used to find all matches of a pattern in a string.
Returns an iterator of all matches, providing detailed information about each match. 
If no match is found- returns an empty iterator  */

//*Example-
// let text = "Hello JavaScript, welcome to our world best JavaScript course";

//todo JS will convert normal text into Reg expression with g flag like text.match(/JavaScript/g)

//? Both give same output- with global It gives a iterator 
// console.log(text.matchAll("JavaScript"));  //Object [RegExp String Iterator] {}
// console.log(text.matchAll(/JavaScript/g)); //Object [RegExp String Iterator] {}

//* To find the content either we need loop or Array.from() or spread operator.
//?Using spread operator as it is iterator
// console.log([...text.matchAll(/JavaScript/g)]);
// console.log([...text.matchAll("JavaScript")]);

//?Using Array.from() as it is iterator
// console.log(Array.from(text.matchAll("JavaScript")));

//?Using Loop to iterator
/* let iterator=text.matchAll("JavaScript");
for ( let items of iterator){
    console.log(items[0]);
} */

//? Returns empty iterator if no matched item found
// console.log([...text.matchAll("JScript")]); // []

//? 6.includes():
/* It is a method used to check whether a particular value exists in the string.
It Returns Boolean value in terms of true or false. 
Syntax-includes(searchElement); */

//*Example-
/* let text = "Hello JavaScript, welcome to our world best JavaScript course";
console.log(text.includes("Java")); // true
console.log(text.includes("JS"));  // false */

//? 7.startsWith():
/*Returns true if a sentence/whole string begins with a specified value in string.Otherwise false.
It Returns Boolean value in terms of true or false. We can give starting index as well */

//*Example-
/* let text = "Hello JavaScript, welcome to our world best JavaScript course";
console.log(text.startsWith("H")); // true
console.log(text.startsWith("Hello")); // true
console.log(text.startsWith("J")); // false 
console.log(text.startsWith("J",6)); // true */

//? endsWith():
/*Returns true if a sentence/whole string ends with a specified value in string.Otherwise false.
It Returns Boolean value in terms of true or false. */

//*Example-
/* let text = "Hello JavaScript, welcome to our world best JavaScript course"; 
console.log(text.endsWith("course")); // true 
console.log(text.endsWith("best"));  // false  */


//*EXTRACTING STRING PARTS
/* Extracting string parts means taking a specific portion of a string from the original string.
=> Starts position from  0 (zero)  and excludes  last index/index end */

//? 1.slice(): Also works with Array
/* slice() extracts a part of a string using start index and end index.
Also works with negative index.
Syntax- slice(start, end); */

//*Example-
/* let text = "Welcome to  JavaScript world";
console.log(text.slice(1)); // If we not give last index it will go till end
console.log(text.slice(1,5)); // elco (If we not give last index it will go till end)
console.log(text.slice(1,5).length);// It is a property not method */

//? 2.substring(): Not follows camel case because it is single word
/* Everything is same as slice() does.It is similar to slice() method
It is just,it does'nt support negative indexes if we forced it then 
it is equal to 0 than whole string printed */

//* EXTRACTING STRING CHARACTERS

//? 1. charAT(): starts from 0
/* charAt() returns the character at a particular index.
If particular index not found return empty string */

//*Example-
/* let text = "Welcome to  JavaScript world";
console.log(text.charAt(3)); //c */

//? 2. charCodeAT():
// Returns the UTF-16 code of the character at a particular index.

//*Example-
/* let text = "Alpha Male";
console.log(text.charCodeAt(0)); // A-65  */

//? 3. fromCharCode():
// Method  that converts a Unicode/character code number into its corresponding character.

//*Example-
// console.log(String.fromCharCode(65)); // A  

//? 4. at(): Use this
/* at() returns the character at a particular index.
Similar to charAt() but it support negative indexes as well */

//*Example-
/* let text = "Alpha Male";
console.log(text.at(3));  //h
console.log(text.at(-3)); //a */


//*REPLACING STRING CONTENT
// JavaScript provides methods to replace part of a string with another value.

//? 1.replace()
// replace() replaces a matching value with a new value.We can use Reg expn as well

//*Example-
/* let text = "Alpha Male Alpha";
console.log(text.replace("Alpha","Beta"));  //Beta Male
console.log(text.replace(/Alpha/g,"Beta"));  //Beta Male Beta
console.log(text.replace(/alpha/gi,"Beta")); //Beta Male Beta */

//? 2.replaceAll()
// replaceAll() replaces all matching value with a new value.We can use Reg expn(regex) as well

//*Example-
/* let text = "Alpha Male Alpha";
console.log(text.replaceAll("Alpha","Beta"));  //Beta Male Beta
console.log(text.replaceAll(/alpha/gi,"Beta")); //Beta Male Beta */
//if we remove g it will throw error because it is by default


//*Other Useful Methods:
//?1) toLowerCase: Converts the string to uppercase or lowercase
//?2) toUpperCase: Converts the string to lowercase or uppercase

//*Example-
/* const str = "JavaScript";
console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
console.log(str.toLowerCase()); // Outputs: javascript */

//?3) trim: Removes whitespace from both ends of the string.

//*Example-
/* const str = "   Hello, World!   ";
console.log(str.trim()); //Hello, World! */

//?4) split: 
// split() is used to break a string into an array based on a specified separator/delimiter.

//*Example-
// const str = "apple,orange,banana";
// console.log(str.split(",")); // [ 'apple', 'orange', 'banana' ]
// console.log(str.split(",").reverse()); // [ 'banana', 'orange', 'apple' ]
// console.log(str.split(",").reverse().join()); // banana,orange,apple


//! QUESTIONS

//* Q: Write a JavaScript function that prints the letters 'a' through 'z' in the console.You should use a loop to iterate through the letters and print each one on a new line.
//? Charcodes- a-97,z-122, A-65,Z-90

// console.log("a".charCodeAt()); // 97 by default index is 0

/* for (let char=97;char<=122;char++){
    console.log(String.fromCharCode(char)); 
} */

//* Q: Write a function to count the number of vowels in a string?

/* let vowels="aeiou";
let count=0;
for(let items of vowels){
    if(vowels.includes(items)){
        count++;
    }   
}
console.log(count); //5 */

//?wrapping in function
/* let vowels="aeiou";
let vowelsCount=0;
const countVowels=((str)=>{
    for(let items of vowels){
        if(vowels.includes(items)){
            vowelsCount++;
        }   
    }
    return vowelsCount;
});
console.log(countVowels("aeiou")); //5 */

//* Q: Write a function to check if all the vowels presents in a string or not?

/* let vowels="aeiou";
const countVowels=((str)=>{
    for(let items of vowels){
        if(!str.includes(items)){
            return false;
        }   
    }
    return true;
});
console.log(countVowels("aeous"));     //false
console.log(countVowels("aeoui sjs")); //true */


//* Q: Write a JavaScript function to check if the given string is Pangram or not?
//A pangram is a string/sentence that contains all 26 letters of the English alphabet at least once.

//? Logic- convert all character into lower caseRemove anything that is not a letter from a to z replacing it with empty string and removes duplicate letters with new Set(letters) output is like  {a,b} and checking size.

/*const pangramChecker = (str) => {
  const letters = str.toLowerCase().replace(/[^a-z]/g,"");
  return new Set(letters).size === 26;
};

console.log(pangramChecker("The quick @ brown fox jumps over the lazy dog")); //true
console.log(pangramChecker("The quick @ frown fox jumps over the lazy dog")); //false */