//! Local Storage
/* Local Storage is used to store data in the browser.
The localStorage object allows you to save key/value pairs in the browser.
The localStorage object stores data with no expiration date.
The data is not deleted when the browser is closed and are available for future sessions.

* How to add / store data in localStorage.
? localStorage.setItem("key", "value"); //Gives you undefined as it doesn't return anything gives you undefined

* How to get / retrieve data from localstorage.
? localStorage.getItem("key");

* How to remove data from localStorage. 
? localStorage.removeItem("key");

* What happen if we create a object and sent to local storage
? const db = { name: "Veer", age: 30, city: "pune" };
? localStorage.setItem("college",db);	// It is not able to acess the object shows like [object Object]

todo- Local Storage can only store strings, so when you want to store a complex data structure like an array or an object, you need to convert it to a string using JSON.stringify:

* JSON.stringify(value): Converts a JavaScript object into a JSON string.
Useful when you want to send data to a server or store it in a text file, as JSON is a common data interchange format.
!Example-
const data = { name: "Veer", age: 30, city: "pune" };
const jsonString = JSON.stringify(data);
console.log(jsonString);
?Output: '{"name":"Veer","age":30,"city":"pune"}' -> "" string never shows on console


* JSON.parse(string): Converts a JSON string into a JavaScript object.
Useful when you receive JSON data from a server or read it from a file, and you want to work with it as a JavaScript object.
!Example-
const jsonString = '{"name":"Vinod","age":30,"city":"pune"}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData);
?Output: { name: 'Vinod', age: 30, city: 'pune' }


!All operations perform in console
?We can't write like this localStorage.setItem("key",value) again and again
*const myData = { name: "Veer", age: 30, city: "pune" }; // We simply create a js object

?Then we will store this as value and store it in local server and pass data as object as all the data that is sent to localstorage it is store in string format we convert this object into Json string format
localStorage.setItem("myDb",JSON.stringify(myData)) 

? What happen if we want to read the key
console.log(typeof localStorage.getItem("myDb"))//gives you string but if we want in original format as Object

?To Get/Read the data in the original format in the object form we simply reverse the operation using JSON.parse()
const orgData=JSON.parse(localStorage.getItem("myDb"));//as it is string so we have to add ""
console.log(orgData) //showing in object form in console

?we can get individual items also 
console.log(orgData.name);
console.log(orgData.age);
*/

