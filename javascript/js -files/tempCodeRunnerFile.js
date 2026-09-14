const date=new Date("2024-09-17");
const addToDate=(date,extraDay)=>{
    let updatedDate= date.setDate(date.getDate() + extraDay); // Return milliseconds
    updatedDate=new Date(updatedDate); // Return date according to milliseconds
    return updatedDate; 
    return new Date(updatedDate); equivalent to upper 2 lines 
    
};
console.log(addToDate(date,7).toLocaleDateString()); // 24/9/2024