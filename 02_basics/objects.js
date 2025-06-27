//singleton using constructor 

//using literals 


const myObj={
    name:"talabdar",
    age:18,
    religion:"islam",
    isLongedin:"false",
    "hobbies":["book reading", "playing games", "sports"],
    "today":"monday"
}


//acessing methods for obj

// console.log(myObj.age); // acessing the obj values
// console.log(myObj["hobbies"][0]); // acessing the obj values using square barakets


//use symbols as key in the objects but it treated as string 

// const mySym=Symbol("key1")


// const myObj2={
//     name:"sobdar",
//     mySym:"key1",
//     age:13,
//     religion:"islam",
//     isLongedin:"ture",
// }

// console.log(typeof myObj2.mySym);


//use symbols as key in the objects but it treated as pure symbol 

const mySym=Symbol("key1")


const myObj2={
    name:"sobdar",
    [mySym]:"key1", // this is syntax for use the symbol as key
    age:13,
    religion:"islam",
    isLongedin:"ture",
    greeting:function(){
        console.log(`hello JS users ${this.name}`);
        
    }
}

myObj2.caste="mangi"

myObj2.greetingTwo=function(){
    console.log(`Hi khizar abbas, your age is  ${ this.age}`);
    
}

// console.log(myObj2[mySym]);
console.log(myObj2);

console.log(myObj2.greetingTwo());




