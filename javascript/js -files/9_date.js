//! Date and Time- Run on browser console for better readability
// Date() constructor: The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.

//?1. Create a Date
// const date = new Date();
// console.log(date); // 2026-09-12T03:51:58.319Z

// todo In the terminal ,ISO 8601 is a standard way of writing dates and times.The T separates the date and time, and Z means the time is in UTC.In the browser, the same date is usually shown in a more human-readable  local time format (IST).The full form of UTC is Coordinated Universal Time.

//?2. 9 Different ways to create Date for printing it we had to console it

//*1. Creates a Date object representing the current date and time 
// console.log(new Date());  

//*2. new Date(date string)           
// console.log(new Date("2026-12-03")); //year-month-date
// console.log(new Date("January 5 2024")); // Month Day, Year 
// If the dateString is in a recognizable format, the Date object will be created accordingly and in the string month is starting from 1

//*3. new Date(year,month)
// console.log(new Date(2024, 1)); 

//*4. new Date(year,month,day)
// console.log(new Date(2024, 1, 19)); 

//*5. new Date(year,month,day,hours)
// console.log(new Date(2024, 1, 19, 10)); 

//*6. new Date(year,month,day,hours,minutes)
// console.log(new Date(2024, 1, 19, 10, 44)); 

//*7. new Date(year,month,day,hours,minutes,seconds)
// console.log(new Date(2024, 1, 19, 10, 44, 9)); 

//*8. new Date(year,month,day,hours,minutes,seconds,ms)
// console.log(new Date(2024, 1, 19, 10, 44, 9, 274)); 

//*9. new Date(milliseconds)
// console.log(new Date(1700000000000)); 
//? Return miliseconds(gives milliseconds from January 1, 1970)
// console.log(new Date().getTime()); // Same as console.log(Date.now());

//todo Note:JavaScript counts months from 0 to 11: January = 0, December = 11 , Sunday = 0 , Saturday = 6 But in date string everything is normal


//? 3. Get Date Information
// const date = new Date();
// console.log(date.getFullYear()); // year
// console.log(date.getMonth());    // month (0-11)
// console.log(date.getDate());     // date
// console.log(date.getDay());      // day (0-6)

//? 4. Get Time Information
// const date = new Date();
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime()); // Gives milliseconds from January 1, 1970.

//?5. Change Date
// const date = new Date();
// date.setFullYear(2025);
// date.setMonth(5);
// date.setDate(15);
// console.log(date); // Sun Jun 15 2025 12:43:01 GMT+0530 (India Standard Time)

//?6. Change Time
// const date = new Date();
// date.setHours(10);
// date.setMinutes(30);
// date.setSeconds(45);
// date.setMilliseconds(500); 
// console.log(date); // Sat Sep 12 2026 10:30:45 GMT+0530 (India Standard Time)


//? 7. Useful Methods
//*1) toLocaleString() : Date + Time
// console.log(new Date().toLocaleString()); // 12/9/2026(M-D-Y), 12:37:12 pm

//*2) toLocaleDateString() : Only Date
// console.log(new Date().toLocaleDateString()); // 12/9/2026

//*3) toLocaleTimeString() : Only Time
// console.log(new Date().toLocaleTimeString()); // 12:37:12 pm


//! Questions

//* Q:Write a function to add a specified number of days to a given date.

const date=new Date("2024-09-17");
const addToDate=(date,extraDay)=>{
    let updatedDate= date.setDate(date.getDate() + extraDay); // Return milliseconds
    updatedDate=new Date(updatedDate); // Return date according to milliseconds
    return updatedDate; 
    // return new Date(updatedDate); equivalent to upper 2 lines 
    
};
// console.log(addToDate(date,7).toLocaleDateString()); // 24/9/2024


//?  1 second = 1000 milliseconds
//?  1 minute = 1000 × 60
//?  1 hour   = 1000 × 60 × 60
//?  1 day    = 1000 × 60 × 60 × 24

//? | Convert      | Formula                    |
//? | ------------ | -------------------------- |
//? | ms → seconds | ms / 1000                  |
//? | ms → minutes | ms / (1000 × 60)           |
//? | ms → hours   | ms / (1000 × 60 × 60)      |
//? | ms → days    | ms / (1000 × 60 × 60 × 24) |
//? | seconds → ms | seconds × 1000             |
//? | minutes → ms | minutes × 60 × 1000        |
//? | hours → ms   | hours × 60 × 60 × 1000     |
//? | days → ms    | days × 24 × 60 × 60 × 1000 |

//* Q:Write a function to calculate the difference in days between two given dates.
const date_1=new Date("2024-09-12");
const date_2=new Date("2024-10-12");

const differenceInDays=(d1,d2)=>{
    let totalDays= Math.abs((d2-d1) / (1000 * 60 * 60 * 24)); // Math.abs return always positive value
    return totalDays; // first Find Difference then convert ms → days
};
// console.log(differenceInDays(date_1,date_2)); //30
