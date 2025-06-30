
(function myfunc(){
    // console.log(`hello talabdar`);
    
})();

// (()=>{
//     console.log(`hello talabdar`);
    
// })()

// const obj={
//     "name":"talabdar-hussain",
//     password:"123@110",
//     welcome: function(){
//         return  `the password is ${this.password}`
        
        
//     }
        
//     };

// const obj={
//     "name":"talabdar-hussain",
//     password:"123@110",
//     welcome: ()=>{ // if we use arrow function, Then this would refer to the outer lexical scope, not myObj, and you'd get:
//         return  `the password is ${this.password}`}
        
        
//     };
((anyobject)=>{
  
    
    console.log(`hello username is ${anyobject["name"]} and the password is ${anyobject.welcome()}`);
    
})(obj)


// console.log(obj.welcome());



// ()() global scope ma jo varaibles hen unky pollution jo hatany k leye iife ka use karty hen  

