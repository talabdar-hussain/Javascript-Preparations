
const strOne= new String("talabdar-mangi-hussain")
// console.log(strOne);
// console.log(strOne[0]);
// console.log(strOne.toUpperCase());


console.log(`mt name is ${strOne} `);

console.log(strOne);
console.log(typeof strOne);




const strTwo= ["hello","apple"]

console.log(strTwo[0][0]);

// ++++++++++++++++++++++++++++++++++++++++++ Method of strings ++++++++++++++++++++++++++++++++++++++++++++++++

//substring()

const gameName= new String("talbdar")

const gameName1= gameName.substring(0,3)
console.log(gameName1);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// slice()

// const anOtherstr= gameName.slice(2, 4)
// console.log(anOtherstr);

// console.log(gameName.length);

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// trim() remove whitespaces

// const newStr="    talabdar   "
// console.log(newStr.trim());

// +++++++++++++++++++++++++++++++++++++++++++++++++

// replace()

// const url = "https://talabdar.com/talabdar%20.com"

// console.log(url.replace("%20","-"));

// +++++++++++++++++++++++++++++++++++++

// //split()
// const myStr= strOne.split("-") //without limt
// const myStr1= strOne.split("-",2) //with separator and limit 


// console.log(myStr1);



// ++++++++++++++++++++++++++++++++++++++++++++++++++ Math Object

const min=10
console.log(Math.round(Math.random()*10)+ min);

// console.log(Math);



// const min=10
// const max=20

// console.log(Math.floor(Math.random()*(max-min+1))+min);



// +++++++++++++++++++++++++++++++++++++++

// Number  specify the number 

const balance= new Number(10)
console.log(balance);

