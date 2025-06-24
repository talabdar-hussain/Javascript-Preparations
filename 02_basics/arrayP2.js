const my_heros=["superman","spiderman","bahubali","ferozkhan"]
const my_anotherheros=["superman","hitman","shahrukh","imranAbbas"]


//array methods

//push()

// my_heros.push(my_anotherheros) 
 /* .push() in JavaScript:
Adds one or more elements to the end of an array and returns the new length. If you push an array, it's added as a single element (nested array). */

// console.log(my_heros);


//concat 

// const all_heros=my_heros.concat(my_anotherheros)  concat() is used to merge two or more arrays into a new array.
// console.log(all_heros);


//spread
const all_new_heros=[...my_heros , ...my_anotherheros] // this spread is also work as same like concat but this is very usefull 

// console.log(all_new_heros);


my_heros.flat() //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.


//very important 
const my_name= "talabdar"

console.log(Array.from(my_name));  //An iterable object to convert to an array.  Creates an array from an iterable object.


// Array.of() 

const score1=200
const score2=300
const score3=499
console.log(Array.of(score1,score2,score3) //  A set of elements to include in the new array object.  Returns a new array from a set of elements.

);
 
Array.of()