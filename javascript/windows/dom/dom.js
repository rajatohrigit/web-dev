//! DOM in JavaScript

//todo What is DOM?
/*
?1. When the browser loads an HTML file:
*HTML-> Browser parses(read & analyze) HTML-> DOM Tree is created-> JavaScript can access the DOM
    
?2.The DOM (Document Object Model) represents the HTML page as a tree of nodes.
*Example:  <html>
*          <body>
*             <h1>Hello</h1>
*             <p>Welcome</p>
*          </body>
*          </html> 
?DOM tree-
*  Document
*    │
*   html
*    │
*   body
*   ├── h1
*   │    └── "Hello"
*   │
*   └── p
*        └── "Welcome"
*/

//?3. JavaScript can use the DOM to read, change, add, or remove HTML elements.

//! DOM is an API
/* 
?DOM = Application Programming Interface (API) provided by the browser.
?The DOM API gives JavaScript many properties and methods to work with the HTML tree.

*      HTML
*       ↓
* Browser parses HTML
*       ↓
* DOM Tree is created
*       ↓
* DOM API provides properties & methods
*       ↓
* JavaScript uses those properties & methods
*       ↓
* DOM changes
*       ↓
* Browser updates the webpage */


//! Types of DOM Nodes
//? 1.Element node: An HTML element/tag. Ex-h1,p,div

//? 2.Text node: The actual text inside an element.Spaces, new lines, and tabs can also become text nodes.

//? 3.Attribute node: Information attached to an element.Ex-id,class

//? 4.Comment node: HTML comments. Ex-<!-- This is a comment -->

//? 5.Document node:  A document node. Ex-document

//? 6.Document type node: A document type node, such as <! DOCTYPE html>.


//!DOM Navigation
/* Navigation means moving from one node/element to another.

? 1)document- Represents the entire document.
Ex-document.body , document.head

? 2)document.documentElement- Returns the root <html> element.
Ex-document.documentElement // html

? 3)element.parentNode / element.parentElement

? 4)element.childNodes / element.children

*Important difference:
childNodes → includes text + comments + elements(return nodeList)
children   → only elements(return html collection)

? 5)FirstChild / firstElementChild 
element.firstChild //First node,which can be text/comment/element
element.firstElementChild //First element only.

? 6)LastChild / lastElementChild
element.lastChild //Last node
element.lastElementChild //Last element

? 7)NextSibling / nextElementSibling
element.nextSibling //Next node
element.nextElementSibling //Next element

? 8)PreviousSibling / previousElementSibling
element.previousSibling //Previous node
element.previousElementSibling //Previous element

? 9)closest(selector)- Finds the nearest parent/ancestor matching a CSS selector. If nothing matches-null 
element.closest(".container");
*/


//! DOM Searching
/* Used to find HTML elements.

? 1)getElementById(id)- Find one element by ID. Returns One element(no loop required)
Example- document.getElementById("title");

? 2)getElementsByClassName(className)- Find elements by class. Returns HTMLCollection(loop required)
Example- document.getElementsByClassName("box");

? 3)getElementsByTagName(tagName)- Find elements by tag. Returns HTMLCollection(loop required)
Example- document.getElementsByTagName("p");

? 4)querySelector(selector)- Finds the first matching element. Returns First matching element(no loop required)
Example-document.querySelector(".box");
document.querySelector("#title");
document.querySelector("p");

? 5)querySelectorAll(selector)- Finds all matching elements. Returns NodeList of all matches(loop required)
Example- document.querySelectorAll(".box"); */


//!DOM CRUD  
/* Create,Read,Update,Delete
? 1)Create- Creates a new element
Example- document.createElement("p");

? 2)Read- Finds/reads an element
Example- document.querySelector("p");

? 3)Update- 
*Changes its text
Example- element.textContent = "Hello";
*Changes its HTML.
Example- element.innerHTML = "<b>Hello</b>";

? 4)Delete- Removes a child element. 
Example- parent.removeChild(child); */


//!Attributes
/* 
? 1)setAttribute(name,value)- Set an attribute:
Example- element.setAttribute("class", "box");

? 2)getAttribute(name)- Get an attribute:
Example- element.getAttribute("class"); */


//!Events
/* 
? 1)addEventListener(event,function)- Run code when an event happens.
Event-> key up,key down. 
*Example- 
button.addEventListener("click", function () {
  console.log("Clicked");
});

? 2)removeEventListener()- Remove an event listener.
*Example- 
button.removeEventListener("click", functionName); */


//!Dom Iteration
// foreach(Array.from)


//!DOM Changes Are Temporary
/* 
?When JavaScript changes the DOM.
document.getElementById("title").textContent = "Welcome";

?The browser shows-
Welcome

?DOM is the live representation of document.any changes made it to it reflect in browser but these changes is temporary and exist only in the current session when we refresh it then original html doxument load from the server and shown to you.And  the original HTML file is not changed.

HTML file
   ↓
Browser creates DOM
   ↓
JS changes DOM
   ↓
Page changes

?When you refresh, the HTML is loaded again and the DOM is recreated.
Refresh → Original HTML → New DOM → Changes gone

?DOM change = temporary browser change, not a change to the HTML file. */