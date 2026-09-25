
let obj = { 
    id: 5, 
    name: "veer"
};
let obj1=obj; // Now both refer to the same object/location.
obj1.name="preeta";
console.log("original object:",obj); 
console.log(obj===obj1); // true