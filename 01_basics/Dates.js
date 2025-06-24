let today = new Date();
// // console.log(today.toString()); //current date

// today.setDate(15) // set date 
// console.log(today.toString());//Sun Jun 15 2025 21:13:17 GMT+0500 (Pakistan Standard Time)

// console.log(today.toDateString()); //Sun Jun 15 2025
// console.log(today.toISOString()); //2025-06-15T16:13:17.303Z
// console.log(today.toLocaleDateString()); // 6/15/2025
// console.log(today.toLocaleString()); // this will output 6/15/2025 and also provide time 6/15/2025, 9:13:17 PM


//gettime() provide milisecond value 

// const myTimestamp =  new Date()

// console.log(myTimestamp.getTime());

//data.now() current time in milliseconds

// const myDate= Date.now()


const myDate= new Date()
console.log(myDate.getDate());

console.log(`{the date is ${myDate.toLocaleString()}}`
);
