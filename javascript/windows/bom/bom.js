//!Difference b/w Window and Document(executed in browser consle)
//*WINDOWS
/* 1)Window is the main/global object of the browser.It represents the entire browser window.
2)Window has many properties, methods, and objects.
?Examples:
setTimeout() → method
setInterval() → method
document → object
screen → object
3)Since window is the global object, we usually don't need to write window. */

//*DOCUMENT
/* 1)Document is an object inside the Window. Ex-window.document
2)Document represents the HTML page/DOM.
3)We use document to access and modify HTML elements.
?Example:
document.getElementById()
document.querySelector() */


/*                   
                *WINDOW(global object)
                      |
        +-------------+-------------+
        |             |             |
        ↓             ↓             ↓
     ?document      BOM Objects    JavaScript
        |             |             |
      <html>       navigator       Object
        |          screen          Array
    +---+---+      location       Function
    |       |      frames            ...
  <head>  <body>   history
              |     XMLHttpRequest
          +---+---+
          |       |
         <a>     <p></p>  
*/

//!Window Object:
/* window represents the browser window.
=> DOM and BOM are part of the window object. */

//!BOM (Browser Object Model):
/* 
?BOM is used to interact with the browser, not directly with the webpage's HTML.
?Common BOM objects: We can call it without window beause its child
window.navigator   // browser information
window.location    // URL information/manipulation
window.alert("hi") // shows alert */

//!DOM (Document Object Model):
/* 
?1.DOM represents an HTML page as a tree of objects.
?2.Each object represents a part of the webpage, such as:
Elements → <p>, <div>, <h1>
Attributes → id, class, src
Text → content inside elements
?3.DOM allows JavaScript to access and change HTML elements.
?4.DOM is a tree-like structure of an HTML document.
?5.It allows JavaScript to access and interact with HTML.
?6.DOM provides properties and methods to change HTML dynamically. */

//?DOM vs BOM:
/* DOM → focuses on the webpage/content.
BOM → focuses on the browser/environment.
Window → is the global object that contains both DOM and BOM. */

//todo BOM Properties:

//! 1. Window Object:
//? Represents the global window containing the BOM.
// Example: window.location, window.innerWidth, window.innerHeight.

//* Window Properties-
//?1) window.innerWidth / window.innerHeight-
// Width and height of the browser's content area (excluding toolbars and scrollbars)

//?2) window.outerWidth / window.outerHeight-
// Width and height of the entire browser window (including toolbars and borders)

//?3) window.scrollX / window.scrollY-
// Represents the number of pixels that the document is currently scrolled horizontally and vertically

//?4) window.localStorage -
//Stores data that remains after closing the browser.

//?5) window.sessionStorage-
//Stores data for the current browser session/tab.

//todo Functions alert/confirm/prompt are also a part of BOM - They are directly not related to the document, but represent pure browser methods of communicating with the user
//* Examples-
// alert("Hello");  //for showing alert
// confirm("Are you sure?");  //for confirm
// prompt("Enter your name"); //for asking input


//! 2.Navigator Object:
//? Provides information about the browser.
// Example: navigator.userAgent, navigator.language.

//* Navigator Properties-
//?1) navigator.userAgent-
// Returns the user agent string of the browser.
// Example: navigator.userAgent

//?2) navigator.language-
// Returns the Browser language.
// Example: navigator.language

//?3) navigator.cookieEnabled-
// Indicates whether cookies are enabled in the browser.
// Example: navigator.cookieEnabled

//?4) navigator.platform-
// Returns the platform on which the browser is running.
// Example: navigator.platform

//?5) navigator.onLine-
// Indicates whether the browser is online.
// Example: navigator.onLine


//! 3.Location Object
// Represents the current URL of the browser.
// Example: location.href, location.hostname

//* Location Properties-
//?1) location.href-
// Returns complete URL of the current page.
// Example: location.href

//?2) location.hostname-
// Returns the website domain name .
// Example: location.hostname //www.example.com

//?3) location.assign()-
// Navigate to another URL.The current page remains in browser history
// Example: location.assign("https://www.example.com")

//?4) location.replace()-
// Opens the new URL.
// The current page is removed from browser history.
// Example: location.replace("https://example.com")

//?5) location.reload()-
// Reloads the current page.
// Example: location.reload()

//?6) location.protocol-
// Return protocol like https/http


//?7) location.search-
// Returns the query string part of the URL.
// Example: location.search // https://example.com/?name=John&age=25
//                                                      ↑
//                                                 query string


//! 4.History Object
// Used to navigate through browser history.
// Example: history.back(), history.forward()

//* History Properties-
//?1) history.back()-
// Goes to the previous page
// Example: history.back()

//?2) history.forward()-
// Goes to the next page.
// history.forward();

//?3) history.go()-
//Goes for page forward.
// history.go(1); //Goes 1 page forward.


//! 5.Screen Object:
// Represents information about the user's screen.
// Example: screen.width, screen.height

//* Screen Properties-
//?1) screen.width and screen.height-
// Represent the width and height of the user's screen.
// Example: screen.width,screen.height

//?2) screen.availWidth and screen.availHeight-
// Represent the available width and height of the user's screen (excluding taskbars).
// Example: screen.availWidth

//?3) screen.colorDepth-
// Returns the number of bits used to represent the color of each pixel.
// Example: screen.colorDepth

//?4) screen.orientation-
// Returns the current orientation of the user's screen.
// Example: screen.orientation

//?5) screen.pixelDepth-
// Returns the number of bits used to represent each pixel.
// Example: screen.pixelDepth