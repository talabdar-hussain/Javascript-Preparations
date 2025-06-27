

// function without perameter
// function myfunc(){

//     console.log("this is talabdar");
    
// }
// console.log(myfunc());



//function with perameters


// function myPerameterFun(number1,number2){

//     console.log(number1+number2);
    
// }

// myPerameterFun(2,5)

// function myFunction(num1,num2){

//     // console.log(num1+num2);

//     console.log(num1+num2);
    
    
// }
function myFunction(num1,num2){

    // console.log(num1+num2);

    //  const result=num1+num2
    return num1+num2
    
}




// console.log(myFunction(2,4));

// console.log(typeof myFunction());


function justLoggedIn(username){

    return `${username} logged in `
}

// console.log(justLoggedIn("talabdar"));  aghar hum argument pass nae krengy tou undefined ae ga 
// console.log(typeof justLoggedIn());

function userName(username){
    if(!username){
        console.log("please give username");
        return
    }

    return  `${username} is logged in`


}

console.log(userName("talabdar"));








