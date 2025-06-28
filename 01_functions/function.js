

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

//   
    
    
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


//function with rest operator 

function calculateCart(...num1){  //this rest operator return a array  and use when we pass multiple arguments to function
    return num1  
}

const result=calculateCart(300,320,3200) 

console.log(result);


//pasing an object to function

const user={
    username:"talabdar",
    price:300
}


function handleObjects(anyobject){

    return `${anyobject.username} and the price is ${anyobject.price}`
}

// console.log(handleObjects(user))


//passing drect object
console.log(handleObjects({
    username:"sam",
    price:200

}));


//pasing a array to function

const myarray1=[200,230,300,100]

handleObjects(myarray1)


function getArray(anyArray){
    return  `${anyArray[0]}`
    

}

// console.log(getArray(myarray1))
// console.log(getArray([200,300,4000]))





