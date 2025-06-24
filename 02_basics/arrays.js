
//shallow copies: copy of an object whose properties shares same reference 
//deep copy : copy of an object whose properties does not share same reference 

//array initialization

const myArr= [0,1,2,3,4,5]
const myHeros=["superman","spiderman","ironman"]
const newArr= new Array(0,1,2,3,4,5)


// console.log(myHeros);


//Arrays Methods

// myArr.push(89)
// myArr.pop() // remove last value from array

// myArr.unshift(9) // add 9 at first index 

// myArr.shift() // remove first element from array 

// console.log(myArr);



//important operation

// const anOtherArr= myArr.join() // ye join() array ko bind krta hai aur string ma convert krta hai. 

// console.log(anOtherArr);
// console.log(typeof anOtherArr);



//most important 


// slice and splice 

console.log("A  ", myArr);

console.log("slice", myArr.slice(1,3)); // slice does not manipulate the origin array
console.log("original array" , myArr);

console.log("B  ", myArr);

console.log("splice", myArr.splice(1,3)); // splice range pori tho khren mtlb 1 khan wathi 3 tain element khrndo pr original array ma uhy value cut kre chdndo 
console.log("original array" , myArr);




