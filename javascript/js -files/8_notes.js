//! ARRAY vs SET

//* 1. DUPLICATES

//? Array → duplicates are allowed
let arr = [10, 20, 20, 30];
console.log(arr); // [10, 20, 20, 30]

//? Set → duplicates are not allowed
let set = new Set([10, 20, 20, 30]);
console.log(set); // Set(3) {10, 20, 30}


//* 2. INDEX

//? Array → has index
console.log(arr[0]); // 10
console.log(arr[2]); // 20

//? Set → does NOT have index
console.log(set[0]); // undefined


//* 3. METHODS

//? Array → has methods like push(), pop(), splice()
arr.push(40);
arr.pop();

//? Set → has methods like add(), delete(), has()
set.add(40);
set.delete(20);
set.has(10);


//* 4. USE CASE

//? Array → when duplicates or index are needed
let students = ["Raj", "Aman", "Raj"];

//? Set → when only unique values are needed
let numbers = new Set([1, 2, 2, 3, 3]);
console.log(numbers); // Set(3) {1, 2, 3}


//* 5. ITERATION

//? Array → can use for...of
for (let value of arr) {
    console.log(value);
}

//? Set → can use for...of
for (let value of set) {
    console.log(value);
}

//* EASY TO REMEMBER

//? Array → duplicates allowed + index
//? Set → unique values + no index