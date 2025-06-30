
// function myfunc(){
//     const username="talabdar"
//     console.log(this.username);
    
// }
// myfunc()

// const myfunc= function myfunc(){
//     const username="talabdar"
//     console.log(this.username);
    
// }
// myfunc()

// console.log(this);


const myObj={
    "username":"talabdar",
    "age":10,

    welcome: function(){
        console.log(`welcome ${this.username}`);
        console.log(this);
        
        
    }

}

// console.log(myObj["username"]);

// myObj.welcome()


//arrow function learning

// const arrowfun=()=>{

//     const username="talabdar"
//     console.log(this.username);
//     console.log(this);
    
    
// }

// arrowfun()


//arrow function with perameter 

// const arrowfunc=(num1,num2)=>{

//     return num1+num2
// }

// arrowfunc(2,4)

// //implicit return
// const arrowfunc=(num1,num2)=>   num1+num2
// console.log(arrowfunc(2,4))

// const arrowfunc=(num1,num2)=>   (num1+num2) 

//pasing object

const arrowfunc=(num1,num2)=>  ({
    username:"talabdar"
}) 

console.log(arrowfunc(1,3));


const myObject={
    myuserOne:"talabdar",
    age:10
}




//in curly brakets { the return is necessary } and in square brakets (no needed return needed)