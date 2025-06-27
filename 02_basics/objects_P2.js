
// const obj1=new Object() // Singleton
// console.log(obj1);






const myObj1={
    fullname:{
        userfullname:{
            firstname:"talabdar",
            lastname:"hussain",
        }
    
    },
    email:"some@gmail.com",
    "password":"123@111",
}
 


// console.log(myObj1.fullname.userfullname.firstname);


//merging of two objects

const obj1= { 1:"a",2:"b"}
const obj2= { 3:"a",4:"b"}

const obj3= {obj1,obj2} //same array wala issue ae ga , object k andar object

// console.log(obj3);



// const obj4=  Object.assign({},obj1,obj2)


const obj4={...obj1,...obj2} // using spreed 

// console.log(obj4);


//backend say data array of objects ma ata hai

const users=[
{
    id:12,
    email:"hello@gmail.com"
},
{
    id:21,
    email:"some@gmail.com"
}
]


//methods()

// const obbj1key=Object.keys(myObj1)
// const obbj1values=Object.values(myObj1)
// console.log(obbj1key);
// console.log(obbj1values);

// const objentries=Object.entries(myObj1)
// console.log(objentries);

//acessing value from array of object

// console.log(users[0].email);
 


// const obbj2=users.at(1)
// console.log(obbj2);

// const anOtherObj= {obbj1,obbj2}
// console.log(anOtherObj);

// const spreedObj={user1:obbj1,user2:obbj2}
// console.log(spreedObj.user1);




// console.log(users.at(0)); // acessing value form array of objects





// const merged = {};  // 

// users.forEach((user, index) => {
//   for (let key in user) {
//     merged[key + (index + 1)] = user[key];
//   }
// });

// console.log(merged);




//object destructuring 


const destructurinObj={
    CourseName:"javasscript",
    fees:"free",
    instructor:"Talabdar"
}


const {instructor:me,CourseName:course}=destructurinObj

console.log(`the instructor is ${me} and the course is ${course}`);

console.log("hello");
