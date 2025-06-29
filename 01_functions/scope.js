
// let a =10
// const b=20
// // var c=30  
// console.log(a);
// console.log(b);
// console.log(c);

{}//this curli brakets shows scope

var c =200

if (true) {
    
let a =10
const b=20
var c=30  
    
}


// console.log(a);  a is not defined
// console.log(b);   is not defined
console.log(c); // yeh c print ho rha ha mtlb var say jo variable initialize ho rha hai wo block scope ma b aghr hoga tou print hoga is leye let and const introduce howa



//further discussion on scope

// if (true) {
//     const value1=100

//     if (value1==100) {

//         const value2=200
//         console.log(`the value1 one is ${value1}`);
//         console.log(`the value2 is ${value2}`);
//     }

//     // console.log(value2);
//     console.log(value1);
    
    

    
// }
function scopeCheck(){


    const value1=200

    
function scope1Check(){

    let value2=300
    console.log("value 1: ", value1);
    console.log("value 2: ", value2);
}


scope1Check() 
console.log("value 1: ",value1);
// console.log("value 2: ", value2); ReferenceError: value2 is not defined

}


scopeCheck()