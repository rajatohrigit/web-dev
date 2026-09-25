//! HTML vs. CSS vs JavaScript (The 3 Stages of a Web Page)
//? 1) Pure HTML : Works like a printed book page. It gives static text and structure, but buttons and forms do nothing when clicked.
//? 2) HTML + CSS : Adds colors, fonts, and layouts to make the page pretty, but it still cannot perform calculations or interactive tasks.
//? 3) HTML + CSS + JavaScript : Adds life and interactivity JavaScript allows buttons to click, calculators to add numbers, dark mode to toggle, and live data to load

//! Why JavaScript Was Invented in 1995
//? Created in 10 days: Brendan Eich created JavaScript at Netscape in 1995.
//? Problem: Internet was slow and computers were weak (around 4 MB RAM). Browsers only understood HTML and CSS.
//? Old method: Form validation had to be sent to the server (running Java or C++), which took time around 15-20 seconds.
//? Solution: JavaScript allowed browsers to perform simple tasks(run a language) locally and instantly, reducing server requests.

//! Bypassing Operating System Store Taxes
//? App Store Cut: Operating systems (like Apple or Google) take up to a 30% commission on virtual purchases made inside downloadable apps.
//? The Strategy: Running applications directly inside the browser allows companies to bypass OS store cuts. Netscape partnered with Sun Microsystems to build this browser ecosystem

//! Why Java wasn't used
//? Java was more complex for simple web tasks.
//? It required a JVM inside browser, which was heavy for computers at that time.
//? JavaScript was designed to be lighter and easier for web developers.
//? It was named JavaScript partly to benefit from Java's popularity, although Java and JavaScript are different languages.

//! Browser Security
//? Low-level languages like C++ can access computer hardware directly, meaning malicious websites could format hard drives or open webcams without asking
//? JavaScript is restricted (sandboxed) so it must explicitly show a popup asking for user permission before opening cameras, microphones, or local files
//? Today, modern browsers can run C++, Rust, or Go safely using WebAssembly.

//! JavaScript Engines : 
/* JavaScript needs an engine to execute it.
Chrome → V8
Firefox → SpiderMonkey
Safari → JavaScriptCore */

//! How JavaScript runs — 
//? 1. JavaScript = Language
// JavaScript is a programming language. You write instructions in JavaScript.

//? 2. V8(chrome) = JavaScript Engine
// V8 is a program that understands and executes JavaScript. Chrome uses V8.

//? 3. V8 is developed in C++
// V8 itself is mainly written in C++. This means the developers used C++ to build the engine.

//? 4. C++ is compiled before Chrome is released
// The C++ used to build V8 is converted into machine code during the development/build process. Chrome contains this already-compiled V8 engine.

//* So when you run JavaScript: JavaScript → V8 → machine-level execution → CPU

//! Running JS Outside the Browser — Node.js
//? Problem: OS/terminal doesn't directly understand JavaScript.
//? Browser: Has a JS engine like V8, so it can run JavaScript.

//? Node.js: A JavaScript runtime environment that uses the V8 engine to run JavaScript outside the browser. It is built mainly using C/C++ and other components.

//? After installing Node.js:
// node -v -> checks Node.js version 
// node filename.js -> runs a JS file 

